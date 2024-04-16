// if true redirect to localhost , when it false it redirect to stage or dev. , prod.
export const isRunningOnLocal: boolean = false;
export const localPort: string = '3000';
export const localBaseUrl = `http:/localhost:${localPort}`;

const TYPE_OF_URLS_BACKEND = {
  PROD: 'https://ehr-api.joinleafs.com',
  STAGE: 'https://leafs-ehr-nest-stage-nmvorvf7ga-as.a.run.app',
  DEV: 'https://leafs-ehr-nest-dev-nmvorvf7ga-uc.a.run.app',
};

const TYPE_OF_URLS_FRONTEND = {
  PROD: 'https://ehr.omnipractice.co',
  STAGE: 'https://leafs-ehr-web-stage-nmvorvf7ga-as.a.run.app',
  DEV: 'https://leafs-ehr-web-dev-nmvorvf7ga-uc.a.run.app',
};

export const BASE_BACKEND_URL = TYPE_OF_URLS_BACKEND.STAGE;

export const BASE_FRONTEND_URL = TYPE_OF_URLS_FRONTEND.STAGE;

export const MAILSURP_API_KEY =
'cb93d5b651eb262ee00ca4031eb6b943fe69513666ba5f147acaa6acf24ddc9a';
