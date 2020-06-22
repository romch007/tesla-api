import axios, { AxiosInstance } from "axios";

const rootPath = "https://owner-api.teslamotors.com";

/**
 * Create a new axios instance
 *
 * @param path - Root path
 * @param bearerToken - Bearer token for authorization
 *
 * @returns The axios instance
 */
export const createInstance = (
  path: string,
  bearerToken = ""
): AxiosInstance => {
  const version: string = "/" + process.env.npm_package_version;

  const apiInstance: AxiosInstance = axios.create({
    baseURL: `${rootPath}${path}`,
    headers: {
      ...(bearerToken !== "" && { Authorization: `Bearer ${bearerToken}` }),
      ...{
        "User-Agent": `TeslaApi${version}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }
  });
  return apiInstance;
};
