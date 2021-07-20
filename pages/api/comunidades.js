import {SiteClient} from 'datocms-client';

export default async function createComunidade(request, response) {
    if (request.method === 'POST') {
        const client = new SiteClient('9e42dac1e106fef3e3cdf8bd1c01cf');

        const registroCriado = await client.items.create({
            itemType: '976582',
            ...request.body
        })

        console.log(registroCriado);


        response.json({
            dados: 'Algum dado',
            registroCriado: registroCriado,
        })

        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST sim!'
    });
}