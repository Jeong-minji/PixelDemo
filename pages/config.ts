const IP = "http://dev.pixel.sc:1338/v1";
const API = {
  login: `${IP}/auth/local`,
  user: `${IP}/me`,
  contents: `${IP}/contents`,
};

let TOKEN: string | null = "";

if (typeof window !== "undefined") {
  TOKEN = localStorage.getItem("token");
}

export { TOKEN };

export default API;
