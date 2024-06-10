module.exports = {

  datastores: {
    default: {
      adapter: 'sails-postgresql',
      url: 'postgres://g03_user:d4MwFRR1dcKy7EnpW7KvhrunfEM7FrGr@dpg-cpb8dgnsc6pc73a49k5g-a.oregon-postgres.render.com/g03',
      ssl: true
    }
  },

  models: {
    migrate: 'safe',
  },

  blueprints: {
    shortcuts: false,
  },

  security: {
    cors: {
      // allowOrigins: [
      //   'https://example.com',
      // ]
    },
  },

  session: {
    cookie: {
      // secure: true,
      maxAge: 24 * 60 * 60 * 1000,  // 24 hours
    },
  },

  sockets: {
    // onlyAllowOrigins: [
    //   'https://example.com',
    //   'https://staging.example.com',
    // ],
    // adapter: '@sailshq/socket.io-redis',
    // url: 'redis://user:password@bigsquid.redistogo.com:9562/databasenumber',
  },

  log: {
    level: 'debug'
  },

  http: {
    cache: 365.25 * 24 * 60 * 60 * 1000, // One year
    // trustProxy: true,
  },

  // port: 80,

  custom: {
    baseUrl: 'https://example.com',
    internalEmailAddress: 'support@example.com',
    // sendgridSecret: 'SG.fake.3e0Bn0qSQVnwb1E4qNPz9JZP5vLZYqjh7sn8S93oSHU',
    // stripeSecret: 'sk_prod__fake_Nfgh82401348jaDa3lkZ0d9Hm',
  },
};
