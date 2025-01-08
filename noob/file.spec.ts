import { test, expect, Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// Path to the output logs directory
const logsDir = path.resolve(__dirname, 'performance_logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// Define the logEntry type for the expected log structure
type LogEntry = {
    action: string;
    role: string;
    timeTakenMs: number;
    timestamp: string;
};

// Helper function to calculate page load times
async function measureActionTime(action: () => Promise<void>, actionName: string, roleName: string, logFilePath: string): Promise<void> {
    const startTime = Date.now();
    await action();
    const endTime = Date.now();

    const timeTaken = endTime - startTime;
    console.log(`[${roleName}] Action: "${actionName}" took ${timeTaken}ms`);

    // Log entry structure
    const logEntry: LogEntry = {
        action: actionName,
        role: roleName,
        timeTakenMs: timeTaken,
        timestamp: new Date().toISOString(),
    };

    let existingLogs: LogEntry[] = [];  // Typing the existingLogs array as an array of LogEntry objects
    if (fs.existsSync(logFilePath)) {
        existingLogs = JSON.parse(fs.readFileSync(logFilePath, 'utf-8'));
    }
    existingLogs.push(logEntry);

    // Write back to the log file
    fs.writeFileSync(logFilePath, JSON.stringify(existingLogs, null, 2));
}

// Test suite for performance tracking
test.describe('Performance Test Suite', () => {
    test('Owner Role Test', async ({ browser }) => {
        const page = await browser.newPage();
        const logFilePath = path.join(logsDir, 'owner_performance.json');

        await measureActionTime(async () => {
            await page.goto('https://playwright.dev/');
            await page.waitForLoadState('load');
        }, 'Owner Page Load', 'Owner Role', logFilePath);

        // Add more actions for the owner role...
        await page.close();
    });

    test('Therapist 1 Test', async ({ browser }) => {
        const page = await browser.newPage();
        const logFilePath = path.join(logsDir, 'therapist1_performance.json');

        await measureActionTime(async () => {
            await page.goto('https://playwright.dev/');
            await page.waitForLoadState('load');
        }, 'Therapist 1 Page Load', 'Therapist Role 1', logFilePath);

        // Add more actions for Therapist 1...
        await page.close();
    });

    test('Therapist 2 Test', async ({ browser }) => {
        const page = await browser.newPage();
        const logFilePath = path.join(logsDir, 'therapist2_performance.json');

        await measureActionTime(async () => {
            await page.goto('https://playwright.dev/');
            await page.waitForLoadState('load');
        }, 'Therapist 2 Page Load', 'Therapist Role 2', logFilePath);

        // Add more actions for Therapist 2...
        await page.close();
    });
});

test.afterAll(async () => {
    // Generate consolidated report for all roles
    const summaryFilePath = path.join(logsDir, 'summary_report.json');
    const summaryReport: LogEntry[] = [];  // Explicitly typing the array as LogEntry[]

    // Collect all log files
    const logFiles = fs.readdirSync(logsDir).filter((file) => file.endsWith('_performance.json'));

    for (const logFile of logFiles) {
        const logs: LogEntry[] = JSON.parse(fs.readFileSync(path.join(logsDir, logFile), 'utf-8'));
        summaryReport.push(...logs);
    }

    // Write consolidated report
    fs.writeFileSync(summaryFilePath, JSON.stringify(summaryReport, null, 2));
    console.log(`Performance Summary Report generated at: ${summaryFilePath}`);
});
