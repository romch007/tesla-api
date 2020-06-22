export interface WakeUpResponse {
  id: number;
  user_id: number;
  vehicle_id: number;
  vin: string;
  display_name: string;
  option_codes: string;
  color: null;
  tokens: string[];
  state: string;
  in_service: boolean;
  id_s: string;
  calendar_enabled: boolean;
  api_version: number;
  backseat_token: null;
  backseat_token_updated_at: null;
}

export interface TinyResponse {
  reason: string;
  result: boolean;
}

export interface TriggerHomelinkRequest {
  lat: number;
  lon: number;
}

export interface SpeedLimitRequest {
  limit_mph: number;
}

export interface SetValetModeRequest {
  on: boolean;
  password: string;
}

export interface SetSentryModeRequest {
  on: boolean;
}

export interface OpenTrunkRequest {
  which_trunk: "front" | "rear";
}

export interface WindowControlRequest {
  command: "vent" | "close";
  lat: number;
  lon: number;
}

export interface SunRoofControlRequest {
  state: "vent" | "close";
}

export interface SetChargeLimitRequest {
  percent: number;
}

export interface SetTempsRequest {
  driver_temp: number;
  passenger_temp: number;
}

export interface SetPreconditioningMaxRequest {
  on: boolean;
}

export interface SetRemoteSeatHeatRequest {
  heater: 0 | 1 | 2 | 3 | 4 | 5;
  level: 0 | 1 | 2 | 3;
}

export interface SetRemoteSteeringWheelHeaterRequest {
  on: boolean;
}

export interface ShareValue {
  "android.intent.extra.TEXT": string;
}

export interface ShareRequest {
  type: "share_ext_content_raw";
  value: ShareValue;
  locale: string;
  timestamp_ms: number;
}

export interface ScheduleSoftwareUpdateRequest {
  offset_sec: number;
}
