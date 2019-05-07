module.exports = {
  apps: [{
    name: 'Primrose',
    script: 'server.js',
    instances: 1,
    autorestart: true,
    watch: false,
    log_date_format: 'YYYY-MM-DD HH:mm Z',
  }],

  deploy: {
    production: {
      user: 'root',
      host: '106.12.83.183',
      ref: 'origin/master',
      repo: 'git@github.com:Makcy/Primrose.git',
      path: '/var/www/production',
      'post-deploy': 'yarn && pm2 startOrReload deploy/echosystem.config.js --env production',
      env: {
        NODE_ENV: 'production',
      },
    },
  },
};
