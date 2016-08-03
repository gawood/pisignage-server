'use strict';

module.exports = {
    env: 'development',
    https: false,
    port: process.env.PORT || 3000,
    mongo: {
        uri: 'mongodb://'+ process.env.MONGO_PORT_27017_TCP_ADDR + '/pisignage-dev'
    }
};
