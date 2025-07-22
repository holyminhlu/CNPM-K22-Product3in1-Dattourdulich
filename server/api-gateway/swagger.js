const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CheapTrip API Gateway',
      version: '1.0.0',
      description: 'API documentation for CheapTrip application - All endpoints go through API Gateway',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'API Gateway Server',
      },
    ],
    tags: [
      { name: 'Auth', description: 'Authentication and user management APIs' },
      { name: 'Tours', description: 'Tour information and management APIs' },
      { name: 'Bookings', description: 'Booking creation and management APIs' },
      { name: 'Discounts', description: 'Discount and promotion APIs' },
    ],
  },
  apis: [
    './swaggerDocs.js'  // Chỉ cần file docs này
  ],
};

const specs = swaggerJsdoc(options);
module.exports = specs;