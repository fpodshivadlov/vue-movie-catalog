export const normalizePort = (value: string | undefined, defaultPort: number) => {
  var port = value && parseInt(value);

  if (port && !isNaN(port)) {
    return port;
  }

  return defaultPort;
}
