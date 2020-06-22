import { EndpointGroup } from "./EndpointGroup";
import {
  OAuthPasswordRequest,
  OAuthResponse,
  OAuthRefreshRequest
} from "../schemas/auth";
import { Vehicule } from "./Vehicule";
import { VehiculeData } from "../schemas/vehicule";

export class Client extends EndpointGroup {
  public accessToken: string;
  public refreshToken: string;

  constructor(accessToken = "") {
    super("/");
    this.accessToken = accessToken;
    this.refreshToken = "";
  }

  /**
   * Retrieve new credentials with user and password
   * @param options - Login options (user and password)
   */
  public async passwordLogin(options: OAuthPasswordRequest): Promise<void> {
    const response = await this.apiInstance({
      url: "/oauth/token",
      method: "POST",
      data: options
    });
    const credentials: OAuthResponse = response.data as OAuthResponse;
    this.accessToken = credentials.access_token;
    this.refreshToken = credentials.refresh_token;
  }

  /**
   * Retrieve new credentials with a refresh token
   * @param options - Login options (refresh_token)
   */
  public async refreshTokenLogin(options: OAuthRefreshRequest): Promise<void> {
    const response = await this.apiInstance({
      url: "/oauth/token",
      method: "POST",
      data: options
    });

    const credentials: OAuthResponse = response.data as OAuthResponse;
    this.accessToken = credentials.access_token;
    this.refreshToken = credentials.refresh_token;
  }

  /**
   * Retrieve all vehicules
   * @returns A list of vehicules, mapped by their id
   */
  public async retrieveVehicules(): Promise<Map<string, Vehicule>> {
    const response = await this.apiInstance({
      url: "/vehicules",
      method: "GET"
    });

    const vehiculesMap = new Map<string, Vehicule>();

    response.data.response.forEach((raw: VehiculeData) => {
      const stringId = String(raw.id);
      const vehicule = new Vehicule(stringId, this.accessToken, raw);
      vehiculesMap.set(stringId, vehicule);
    });

    return vehiculesMap;
  }
}

