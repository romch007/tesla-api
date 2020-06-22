import { EndpointGroup } from "./EndpointGroup";
import {
  FullVehiculeData,
  VehiculeChargeState,
  VehiculeClimateState,
  VehiculeDriveState,
  VehiculeGUISettings,
  VehiculeState,
  VehiculeConfig,
  VehiculeData,
  NearbyChargingSites
} from "../schemas";

export class Vehicule extends EndpointGroup {
  public data: VehiculeData;

  constructor(id: string, bearerToken: string, data: VehiculeData) {
    super(`/vehicules/${id}`, bearerToken);
    this.data = data;
  }

  /**
   * Retrieve full data of the vehicule
   *
   * @returns The vehicule data
   */
  public async getFullData(): Promise<FullVehiculeData> {
    const response = await this.apiInstance({
      url: "/vehicule_data",
      method: "GET"
    });

    return response.data.response as FullVehiculeData;
  }

  /**
   * Retrieve the charge state of the vehicule
   *
   * @returns The charge state
   */
  public async getChargeState(): Promise<VehiculeChargeState> {
    const response = await this.apiInstance({
      url: "/data_request/charge_state",
      method: "GET"
    });

    return response.data.response as VehiculeChargeState;
  }

  /**
   * Retrieve the climate state of the vehicule
   *
   * @returns The climate state
   */
  public async getClimateState(): Promise<VehiculeClimateState> {
    const response = await this.apiInstance({
      url: "/data_request/climate_state",
      method: "GET"
    });

    return response.data.response as VehiculeClimateState;
  }

  /**
   * Retrieve the drive state of the vehicule
   *
   * @returns The drive state
   */
  public async getDriveState(): Promise<VehiculeDriveState> {
    const response = await this.apiInstance({
      url: "/data_request/drive_state",
      method: "GET"
    });

    return response.data.response as VehiculeDriveState;
  }

  /**
   * Retrieve gui settings of the vehicule
   *
   * @returns The gui settings
   */
  public async getGUISettings(): Promise<VehiculeGUISettings> {
    const response = await this.apiInstance({
      url: "/data_request/gui_settings",
      method: "GET"
    });

    return response.data.response as VehiculeGUISettings;
  }

  /**
   * Retrieve the physical state of the vehicule
   *
   * @returns The physical state
   */
  public async getPhysicalState(): Promise<VehiculeState> {
    const response = await this.apiInstance({
      url: "/data_request/vehicule_state",
      method: "GET"
    });

    return response.data.response as VehiculeState;
  }

  /**
   * Retrieve the config of the vehicule
   *
   * @returns The config
   */
  public async getConfig(): Promise<VehiculeConfig> {
    const response = await this.apiInstance({
      url: "/data_request/vehicule_config",
      method: "GET"
    });

    return response.data.response as VehiculeConfig;
  }

  /**
   * Check if mobile is enabled
   *
   * @returns The state of the mobile
   */
  public async isMobileEnabled(): Promise<boolean> {
    const response = await this.apiInstance({
      url: "/data_request/mobile_enabled",
      method: "GET"
    });

    return response.data.response as boolean;
  }

  /**
   * Retrieve nearby charging sites
   *
   * @returns The charging sites
   */
  public async getNearbyChargingSites(): Promise<NearbyChargingSites> {
    const response = await this.apiInstance({
      url: "/nearby_charging_sites",
      method: "GET"
    });

    return response.data.response as NearbyChargingSites;
  }
}
