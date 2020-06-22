export interface VehiculeDriveState {
  gps_as_of: number;
  heading: number;
  latitude: number;
  longitude: number;
  native_latitude: number;
  native_location_supported: number;
  native_longitude: number;
  native_type: string;
  power: number;
  shift_state: string;
  speed: number;
  timestamp: number;
}

export interface VehiculeClimateState {
  battery_heater: boolean;
  battery_heater_no_power: boolean;
  climate_keeper_mode: string;
  defrost_mode: number;
  driver_temp_setting: number;
  fan_status: number;
  inside_temp: null;
  is_auto_conditioning_on: null;
  is_climate_on: boolean;
  is_front_defroster_on: boolean;
  is_preconditioning: boolean;
  is_rear_defroster_on: boolean;
  left_temp_direction: null;
  max_avail_temp: number;
  min_avail_temp: number;
  outside_temp: null;
  passenger_temp_setting: number;
  remote_heater_control_enabled: boolean;
  right_temp_direction: null;
  seat_heater_left: number;
  seat_heater_rear_center: number;
  seat_heater_rear_left: number;
  seat_heater_rear_left_back: number;
  seat_heater_rear_right: number;
  seat_heater_rear_right_back: number;
  seat_heater_right: number;
  side_mirror_heaters: boolean;
  steering_wheel_heater: boolean;
  timestamp: number;
  wiper_blade_heater: boolean;
}

export interface VehiculeChargeState {
  battery_heater_on: boolean;
  battery_level: number;
  battery_range: number;
  charge_current_request: number;
  charge_current_request_max: number;
  charge_enable_request: boolean;
  charge_energy_added: number;
  charge_limit_soc: number;
  charge_limit_soc_max: number;
  charge_limit_soc_min: number;
  charge_limit_soc_std: number;
  charge_miles_added_ideal: number;
  charge_miles_added_rated: number;
  charge_port_cold_weather_mode: boolean;
  charge_port_door_open: boolean;
  charge_port_latch: string;
  charge_rate: number;
  charge_to_max_range: boolean;
  charger_actual_current: number;
  charger_phases: null;
  charger_pilot_current: number;
  charger_power: number;
  charger_voltage: number;
  charging_state: string;
  conn_charge_cable: string;
  est_battery_range: number;
  fast_charger_brand: string;
  fast_charger_present: boolean;
  fast_charger_type: string;
  ideal_battery_range: number;
  managed_charging_active: boolean;
  managed_charging_start_time: null;
  managed_charging_user_canceled: boolean;
  max_range_charge_counter: number;
  minutes_to_full_charge: number;
  not_enough_power_to_heat: boolean;
  scheduled_charging_pending: boolean;
  scheduled_charging_start_time: null;
  time_to_full_charge: number;
  timestamp: number;
  trip_charging: boolean;
  usable_battery_level: number;
  user_charge_enable_request: null;
}

export interface VehiculeGUISettings {
  gui_24_hour_time: boolean;
  gui_charge_rate_units: string;
  gui_distance_units: string;
  gui_range_display: string;
  gui_temperature_units: string;
  show_range_units: boolean;
  timestamp: number;
}

export interface VehiculeConfig {
  can_accept_navigation_requests: boolean;
  can_actuate_trunks: boolean;
  car_special_type: string;
  car_type: string;
  charge_port_type: string;
  eu_vehicle: boolean;
  exterior_color: string;
  has_air_suspension: boolean;
  has_ludicrous_mode: boolean;
  key_version: number;
  motorized_charge_port: boolean;
  perf_config: string;
  plg: boolean;
  rear_seat_heaters: number;
  rear_seat_type: number;
  rhd: boolean;
  roof_color: string;
  seat_type: number;
  spoiler_type: string;
  sun_roof_installed: number;
  third_row_seats: string;
  timestamp: number;
  trim_badging: string;
  use_range_badging: boolean;
  wheel_type: string;
}

export interface MediaState {
  remote_control_enabled: boolean;
}

export interface SoftwareUpdate {
  download_perc: number;
  expected_duration_sec: number;
  install_perc: number;
  scheduled_time_ms: number;
  status: string;
  version: string;
}

export interface SpeedLimitMode {
  active: boolean;
  current_limit_mph: number;
  max_limit_mph: number;
  min_limit_mph: number;
  pin_code_set: boolean;
}

export interface VehiculeState {
  api_version: number;
  autopark_state_v2: string;
  autopark_style: string;
  calendar_supported: boolean;
  car_version: string;
  center_display_state: number;
  df: number;
  dr: number;
  fd_window: number;
  fp_window: number;
  ft: number;
  homelink_device_count: number;
  homelink_nearby: boolean;
  is_user_present: boolean;
  last_autopark_error: string;
  locked: boolean;
  notifications_supported: boolean;
  odometer: number;
  parsed_calendar_supported: boolean;
  pf: number;
  pr: number;
  rd_window: number;
  remote_start: boolean;
  remote_start_enabled: boolean;
  remote_start_supported: boolean;
  rp_window: number;
  rt: number;
  sentry_mode: boolean;
  sentry_mode_available: boolean;
  smart_summon_available: boolean;
  summon_standby_mode_enabled: boolean;
  sun_roof_percent_open: number;
  sun_roof_state: string;
  timestamp: number;
  valet_mode: boolean;
  valet_pin_needed: boolean;
  vehicle_name: string;

  media_state: MediaState;
  software_update: SoftwareUpdate;
  speed_limit_mode: SpeedLimitMode;
}

export interface FullVehiculeData {
  id: number;
  user_id: number;
  vehicle_id: number;
  vin: string;
  display_name: string;
  option_codes: string;
  color: string;
  tokens: string[];
  state: string;
  in_service: boolean;
  id_s: string;
  calendar_enabled: boolean;
  api_version: number;
  backseat_token: string;
  backseat_token_updated_at: number;

  drive_state: VehiculeDriveState;
  climate_state: VehiculeClimateState;
  charge_state: VehiculeChargeState;
  gui_settings: VehiculeGUISettings;
  vehicule_config: VehiculeConfig;
  vehicule_state: VehiculeState;
}
