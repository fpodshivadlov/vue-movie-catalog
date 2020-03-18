declare const VUE_APP_BACKEND_BASE_URL: string;
declare const BACKEND_BASE_URL: string;

interface Configuration {
  VUE_APP_BACKEND_BASE_URL: string;
}

export default process.env as unknown as Configuration;
