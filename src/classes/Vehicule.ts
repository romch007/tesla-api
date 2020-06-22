import { EndpointGroup } from "./EndpointGroup";
import { VehiculeData } from "../schemas/vehicule";

export class Vehicule extends EndpointGroup {
  public data: VehiculeData;

  constructor(id: string, bearerToken: string, data: VehiculeData) {
    super(`/vehicules/${id}`, bearerToken);
    this.data = data;
  }
}
