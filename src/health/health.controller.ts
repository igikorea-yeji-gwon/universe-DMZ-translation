import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TranslationService } from '../translation/translation.service';

/**
 * 스크래퍼(TranslationClientService.healthCheck)가 호출하는 헬스체크 라우트.
 * 단순 생존 확인을 넘어 실제 Gemini 번역까지 한 번 수행해
 * "연결은 되는데 번역은 안 되는" 상태를 걸러낸다.
 */
@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(private readonly translationService: TranslationService) {}

  @Get()
  @ApiOperation({ summary: '헬스체크 — 번역 파이프라인까지 실제 동작 확인' })
  async check() {
    const message = await this.translationService.translateText(
      '번역기 정상 실행중!',
    );
    return { status: 'ok', message };
  }
}
