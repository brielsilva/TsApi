import axios from 'axios';
import {StormGlass} from '../stormGlass';
import * as stormGlassWeatherPointFixture from '../../../test/fixtures/stormglass_weather_3_hours.json';
import * as stormGlassWeatherNormalized from '../../../test/fixtures/stormglass_normalized_response_3_hours.json';

describe('StormGlass Client', () => {
	const mockedAxios = axios as jest.Mocked<typeof axios>;

	it('Should return the normalized forecast from the StormGlass service', async () => {
		const lat = -33.792726;
		const lng = 151.289824

		axios.get = jest.fn().mockResolvedValue({data: stormGlassWeatherPointFixture}); // Valor mockado para igualar ao nosso comportamento

		const stormGlass = new StormGlass(mockedAxios);
		const response = await stormGlass.fetchPoints(lat,lng);
		expect(response).toEqual(stormGlassWeatherNormalized.data);
	});
});
