// @ts-check
import { defineConfig, devices } from '@playwright/test';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout:40*1000,                //for all tests 
  expect:{timeout:50*1000},       //for assertions
  use: {
    headless: false,         // helps to run the code without headed command
    screenshot: 'only-on-failure',  //screenshot will be taken only when test fails
    trace: 'on',          //trace will be taken only when test fails
    retries: 1,                          //retry will be done only when test fails
    video: 'on',          //video will be taken only when test fails

  },
  /* Configure projects for major browsers */
});

