import { Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';

let metricsLog: string[] = [];

// Function to log performance metrics
export async function logPerformanceMetrics(page: Page, actionName: string): Promise<void> {
  const performanceTiming = await page.evaluate(() => JSON.stringify(window.performance.timing));
  const metrics = JSON.parse(performanceTiming);

  const loadTime = metrics.loadEventEnd - metrics.navigationStart;
  const domContentLoadedTime = metrics.domContentLoadedEventEnd - metrics.navigationStart;
  const firstPaintTime = metrics.responseStart - metrics.navigationStart;

  const metricEntry = `
    Action: ${actionName}
    - Page Load Time: ${loadTime}ms
    - DOM Content Loaded Time: ${domContentLoadedTime}ms
    - First Paint Time: ${firstPaintTime}ms
  `;

  console.log(metricEntry); // Log to the console
  metricsLog.push(metricEntry); // Add to metrics log
}

// Save the logged metrics to a file
export function saveMetricsReport(reportFilePath: string): void {
  const logData = metricsLog.join('\n\n');
  fs.writeFileSync(reportFilePath, logData, 'utf-8');
  console.log(`Performance metrics report saved at ${reportFilePath}`);
}
