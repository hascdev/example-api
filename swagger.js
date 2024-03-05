import swaggerJsdoc from 'swagger-jsdoc';

const options = {

    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Simple API',
            description: "API endpoints for a simple API services documented on swagger",
            contact: {
                name: "Hascdev",
                email: "info@demo.com",
                url: "https://github.com/hascdev"
            },
            version: '1.0.0',
        },
        servers: [
            {
                url: `http://localhost:${process.env.SERVER_PORT}/`,
                description: "Local server"
            },
            {
                url: "<your live url here>",
                description: "Live server"
            },
        ],
        components: {
            securitySchemes: {
                ApiKeyHeader: {
                    type: "apiKey",
                    in: "header",
                    name: "auth_token"
                }
            }
        }
    },

    // looks for configuration in specified directories
    apis: ['./routers/*.js'],
}

const swaggerSpec = swaggerJsdoc(options)

export default swaggerSpec;