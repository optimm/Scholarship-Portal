import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScholarshipModule } from './modules/scholarship/scholarship.module';

@Module({
  imports: [ScholarshipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
