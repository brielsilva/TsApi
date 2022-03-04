import supertest from 'supertest';

describe('Beach forecast functional tests',() => {
    it('Should return a forecast with just a few times', async () => {
        const {body, status} = await global.testRequest.get('/forecast');
        expect(status).toBe(200);
        expect(body).toEqual([
            {
                'name':'yes',
                'yes':'1'
            },
            {
                'name':'yes2'
            }
        ]);
    });
});
