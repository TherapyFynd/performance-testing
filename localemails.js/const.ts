// if true redirect to localhost , when it false it redirect to stage or dev. , prod.
//
export const isRunningOnLocal: boolean = false;
export const localPort: string = '3000';
export const localBaseUrl = `http:/localhost:${localPort}`;

const TYPE_OF_URLS_BACKEND = {
  PROD: 'https://ehr-api.joinleafs.com',
  STAGE: 'https://leafs-ehr-nest-stage-nmvorvf7ga-as.a.run.app',
  DEV: 'https://leafs-ehr-nest-dev-nmvorvf7ga-uc.a.run.app',
};

const TYPE_OF_URLS_FRONTEND = {
  PROD: 'https://ehr.getomnipractice.com',
  STAGE: 'https://leafs-ehr-web-stage-nmvorvf7ga-as.a.run.app',
  DEV: 'https://leafs-ehr-web-dev-nmvorvf7ga-uc.a.run.app',
};

export const BASE_BACKEND_URL = TYPE_OF_URLS_BACKEND.STAGE;
export const BASE_FRONTEND_URL = TYPE_OF_URLS_FRONTEND.STAGE;

export const TAG_NAMESPACE = `tag`;
export const BASE_EMAIL_NAMESPACE = `z7knk.${TAG_NAMESPACE}@inbox.testmail.app`;

 // Utility function to measure and validate action time
async function measureActionTime(
actionCallback: () => Promise<void>, actionName: string, thresholdInMilliseconds = 1500) {
  const startTime = performance.now();
  await actionCallback();
  const endTime = performance.now();

  const loadTimeInMilliseconds = endTime - startTime; // Calculate load time in milliseconds
  const loadTimeInSeconds = loadTimeInMilliseconds / 1000; // Convert to seconds

  // Always display the time first
  console.log(`Time for '${actionName}': ${loadTimeInSeconds.toFixed(2)} seconds`);

  // Display the warning afterward if the time exceeds the threshold
  if (loadTimeInMilliseconds > thresholdInMilliseconds) {
    console.warn(
      `WARNING: '${actionName}' took longer than ${thresholdInMilliseconds / 1000} seconds (${loadTimeInSeconds.toFixed(2)} seconds)`
    );
  }
}

