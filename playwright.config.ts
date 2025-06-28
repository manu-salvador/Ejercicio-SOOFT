import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    { name: 'chrome', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } }
  ],
  reporter: [
    ['html', { outputFolder: 'reports', open: 'never' }]
  ]
});