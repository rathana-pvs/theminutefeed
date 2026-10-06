module.exports = {
  apps: [
    {
      name: 'theminutefeed',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3003',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1200M',
      env: {
        NODE_ENV: 'production',
        PORT: 3003,
      },
    },
  ],
}
