import { authKey } from "@/constants/storageKey";
import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();

//now by using this instance we will set some default values
instance.defaults.headers.post["Content-Type"] = "application/json"; // we will send json data always at post method
instance.defaults.headers["Accept"] = "application/json"; //we will receive only json data at the time of response
instance.defaults.timeout = 60000; //incase of any server crash/error we will wait for 60 seconds and then will show the error

//! now we will use axios interceptors
// axios interceptors basically helps us to modify request and response

//! Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey);

    if (accessToken) {
      config.headers.Authorization = accessToken; // this is where we are setting accessToken to authorize any route!!!
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

//! Add a response interceptor
// @ts-ignore
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    // here we are setting response type based on out backend
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };

    return responseObject;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const responseObject: IGenericErrorResponse = {
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong",
      errorMessages: error?.response?.data?.message,
    };

    return responseObject;
    // return Promise.reject(error);
  }
);

export { instance };
