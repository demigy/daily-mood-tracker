// utils/API.js
const API = {
  async get(url) {
    return {
      status: 200,
      data: { message: "GET request successful", url },
    };
  },

  async post(url, body = {}) {
    return {
      status: 200,
      data: { message: "POST request successful", url, body },
    };
  },

  async put(url, body = {}) {
    return {
      status: 200,
      data: { message: "PUT request successful", url, body },
    };
  },
};

export default API;
