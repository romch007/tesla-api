import { createInstance } from "../rest/api";
import { AxiosInstance } from "axios";

export abstract class EndpointGroup {
  protected apiInstance: AxiosInstance;

  constructor(path: string, bearerToken = "") {
    this.apiInstance = createInstance(path, bearerToken);
  }
}
