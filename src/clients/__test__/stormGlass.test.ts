import axios from 'axios';
import {StormGlass} from '../stormGlass';

describe('StormGlass Client', () => {
	it('Should return the normalized forecast from the StormGlass service', async () => {
		const lat = -33.792726;
		const lng = 151.289824

		axios.get = jest.fn().mockResolvedValue({}); // Valor mockado para igualar ao nosso comportamento

		const stormGlass = new StormGlass();
		const response = await stormGlass.fetchPoints(lat,lng);
		expect(response).toEqual({});
	});
});
