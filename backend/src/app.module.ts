import { Module } from '@nestjs/common';
import { LevelsModule } from 'src/modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'src/config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    LevelsModule,
  ],
})
export class AppModule {}
