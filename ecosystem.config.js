// pm2 배포 설정 (영문번역 앱)
// 실행:   pm2 start ecosystem.config.js
// 재시작: pm2 reload dmz-translation
// 로그:   pm2 logs dmz-translation
//
// 수집 앱(dmz-scraper, 3000)이 TRANSLATION_API_URL=http://localhost:3001 로 이 앱을 호출한다.
module.exports = {
  apps: [
    {
      name: 'dmz-translation',
      script: 'dist/main.js',
      cwd: __dirname,
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
    },
  ],
};
