module.exports = {
    apps: [{
      name: 'lutar-dev',
      script: 'npm',
      args: 'run dev -- --host 0.0.0.0 --port 3000',
      cwd: '/var/www/lutar.io',
      env: {
        NODE_ENV: 'development',
        VITE_ALLOW_HOST: 'lutar.io'
      },
      watch: false
    }]
  }