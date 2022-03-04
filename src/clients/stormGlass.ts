import { AxiosStatic } from "axios";

export class StormGlass {
	private static urlStormGlass = "https://api.stormglass.io/v2/weather/point?params=swellDirection%2CswellHeight%2CswellPeriod%2CwaveDirection%2CwaveHeight%2CwindDirection%2CwindSpeed&source=noaa&lat=58.7984&lng=17.8081";
	readonly stormGlassAPIParams = "swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed";
	readonly stormGlassAPISource = "noaaa";
	constructor(protected request: AxiosStatic) {

	}

	public async fetchPoints(lat: number, lng: number): Promise<{}> {
		this.request.get(`https://api.stormglass.io/v2/wather/point?params=${this.stormGlassAPIParams}&source=${this.stormGlassAPISource}&end=1592113802&lat${lat}*lng=${lng}`);
	}
}
