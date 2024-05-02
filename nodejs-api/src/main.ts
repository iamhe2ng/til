import Fastify from 'fastify';

const fastify = Fastify()

fastify.get('/ping', async(request, reply) => {
    return 'pong\n'
})

const start = async () => {
    try {
        await fastify.listen({port:8083})
        console.log('server start!!')
    }
    catch(error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()