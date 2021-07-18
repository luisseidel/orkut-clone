import {SiteClient} from 'datocms-client';

export default async function createComunidade(request, response) {
    if (request.method === 'POST') {
        const TOKEN = '9e42dac1e106fef3e3cdf8bd1c01cf';
        const client = new SiteClient(TOKEN);

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
}