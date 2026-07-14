import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { HealthController } from './health/health.controller';
import { TranslationModule } from './translation/translation.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot({
      pinoHttp: {
        level: 'info',
        autoLogging: false,
        transport: {
          target: 'pino-pretty',
          options: { colorize: true },
        },
      },
    }),
    TranslationModule,
  ],
  controllers: [HealthController],
  providers: [ResponseInterceptor],
})
export class AppModule {}
