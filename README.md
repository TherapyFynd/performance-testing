                                           ** How to Set Playwright Automation Locally**

**Requirements for before Install Playwright in VS code(System)**

Node.js( npm,npx) latest Version.
Vs code
Playwright plugin

**Installation Process in Vs Code**

Add  Folders in VS code
Terminal Enter Command:    npm init playwright@latest

Things will Install While Entering the Command Step by step

Choose between TypeScript or JavaScript (default is TypeScript) ( Choose typescript)
Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
Add a GitHub Actions workflow to easily run tests on CI
Install Playwright browsers (default is true)


**You tube Link Playwright setup**

https://www.youtube.com/watch?v=EiWBt65ZZvE&list=PLrdJJVHfLoxWpAE-mNjh9_CuPCtpv2SD4


**To run any test case need define the test folder then test case name.**

Command:
npx playwright (folder test case name) (single test case name with extension spec.ts)

Example :   npx playwright test teamowner.spec.ts --headed





