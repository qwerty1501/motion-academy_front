import Axios from "axios";

export const URL = "https://margulan.herokuapp.com";

export const http = Axios.create({
  baseURL: URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

function logout() {
  localStorage.clear();
}

http.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    //extracting response and config objects
    const { response, config } = error;
    //checking if error is Aunothorized error
    if (response.status === 401) {
      let refreshToken = localStorage.getItem("refresh_token");
      if (refreshToken) {
        //if refresh token exists in local storage proceed
        try {
          //try refreshing token
          const data = await http.post("/refresh/", {
            refresh: refreshToken,
          });
          let accessToken = data.data.access;
          if (accessToken) {
            //if request is successful and token exists in response
            //store it in local storage
            localStorage.setItem("access_token", accessToken);
            //with new token retry original request
            config.headers["Authorization"] = `Bearer ${accessToken}`;
            return http(config);
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
    logout();
    return error;
  }
);

const getData = async (url) => {
  try {
    const response = await http.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const postData = async (url, data) => {
  const response = await http.post(url, data);
  return response.data;
};

const putData = async (url, data) => {
  const response = await http.patch(url, data);
  return response.data;
};

const deleteData = async (url) => {
  const response = await http.delete(url);
  return response.data;
};

export { logout, getData, postData, putData, deleteData };
