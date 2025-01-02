// performanceUtils.ts
import { Page } from '@playwright/test';

export async function logPerformanceMetrics(page: Page, actionName: string) {
  const performanceTiming = await page.evaluate(() => JSON.stringify(window.performance.timing));
  const metrics = JSON.parse(performanceTiming);

  const loadTime = metrics.loadEventEnd - metrics.navigationStart;
  const domContentLoadedTime = metrics.domContentLoadedEventEnd - metrics.navigationStart;
  const firstPaintTime = metrics.responseStart - metrics.navigationStart;

  console.log(`Performance Metrics (${actionName}):`);
  console.log(`- Page Load Time: ${loadTime}ms`);
  console.log(`- DOM Content Loaded Time: ${domContentLoadedTime}ms`);
  console.log(`- First Paint Time: ${firstPaintTime}ms`);
}
