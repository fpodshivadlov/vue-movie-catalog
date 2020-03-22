interface Configuration {
  VUE_APP_BACKEND_BASE_URL: string;
}

export default {
  VUE_APP_BACKEND_BASE_URL: '/api/',
  ...process.env,
} as Configuration;
