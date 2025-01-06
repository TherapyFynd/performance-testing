import { defineConfig, devices } from '@playwright/test';
import path from 'path';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();
// Log the directory name
console.log('Current Directory:', __dirname);
console.log(path.join(__dirname, '/helpers/teardown.ts'),"path")
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 7 * 60 * 1000,
  testDir: '.',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: 10,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  use: {
    actionTimeout: 200000, // Optional: Set timeout for individual actions (10 seconds)
    navigationTimeout: 200000, // Optional: Set timeout for navigation actions (15 seconds)
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    screenshot: 'only-on-failure',
    video: "retain-on-failure",
    viewport: { width: 685, height: 1280 },
    browserName: 'chromium',
    headless: true,
    
    colorScheme: 'dark',

    // locale: 'en-US',
    // timezoneId: 'America/Los_Angeles',
    
    
    launchOptions: {
      // 1
      args: ['--start-maximized'],
    },
  },
   /* Add `globalTeardown` here */
  globalTeardown: path.join(__dirname, '/helpers/teardown.ts'),
  
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      teardown: 'tr',
    },
    {
      name: 'tr',
      testMatch: 'global.teardown.ts',
    },
    
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
