// @ts-ignore
export const SandboxServer = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/gifts",
  timeout: 3000,
});

// @ts-ignore
export const GifServer = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs/search",
  timeout: 3000,
  params: {
    api_key: "wcdb2hcM8nyzLIRSzw6gr9I8Nh3cnhiB",
    limit: 4,
  },
});
