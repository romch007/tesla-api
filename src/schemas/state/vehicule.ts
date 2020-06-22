export interface VehiculeData {
  id: number;
  vehicle_id: number;
  vin: string;
  display_name: string;
  option_codes: string;
  color: string;
  tokens: string[];
  state: string;
  in_service: boolean;
  id_s: string;
  calendar_enabled: true;
  api_version: number;
  backseat_token: string;
  backseat_token_updated_at: number;
}
