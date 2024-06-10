import axios from "axios";

let customAxios = axios.create({ 
  baseURL : 'http://localhost:4000/v1/' 
});

// customAxios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = "Bearer " + token;
//     }
//     // config.headers['Content-Type'] = 'application/json';
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );
// customAxios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   function (error) {
//     const originalRequest = error.config; 
//       if (error.response.status === 401) { 
//         localStorage.clear();
//         window.location.href = window.location.origin + "/";
//       }
    

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getRefreshToken();
//       return axios
//         .post("/auth/token", {
//           refresh_token: refreshToken,
//         })
//         .then((res) => {
//           if (res.status === 201) {
//             localStorage.setToken(res.data);
//             axios.defaults.headers.common["Authorization"] =
//               "Bearer " + localStorage.getAccessToken();
//             return axios(originalRequest);
//           }
//         });
//     }
//     return Promise.reject(error);
//   }
// );

export async function getApi(path, data) {
  return await customAxios.get(`/${path}`);
}
export async function postApi(path, data) {
  return await customAxios.post(`/${path}`, data);
}
export async function putApi(path, data) {
  // try {
  return await customAxios.put(`/${path}`, data);
  // } catch (error) {
  //     return error
  // }
}
export async function deletetApi(path, data) {
  // try {
  // console.log(data)
  return await customAxios.delete(`/${path}`, { data: data });
  // } catch (error) {
  //     return error
  // }
}

export async function patchApi(path, data) {
  // try {
  return await customAxios.patch(`/${path}`, data);
  // } catch (error) {
  //     return error
  // }
}
