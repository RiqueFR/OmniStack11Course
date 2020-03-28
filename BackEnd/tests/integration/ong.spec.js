const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG',() => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG and should be able to login the ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "TIO",
            email: "oi@oi.com",
            whatsapp: "3200000000",
            city: "Juiz de Fora",
            uf: "MG"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

        const login = await request(app).post('/session').send({
            id: response.body.id
        });

        expect(login.body).toHaveProperty('name');
    });
});