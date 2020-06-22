export interface SiteLocation {
  lat: number;
  long: number;
}

export interface Site {
  location: SiteLocation;
  name: string;
  type: string;
  distance_miles: number;
}

export interface NearbyChargingSites {
  congestion_sync_time_utc_secs: number;
  destination_charging: Site[];
}
