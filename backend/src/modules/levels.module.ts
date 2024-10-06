import { Module } from '@nestjs/common';
import { LevelsController } from 'src/controllers';
import { LevelsService } from 'src/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelsEntity } from 'src/model/levels.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LevelsEntity])],
  controllers: [LevelsController],
  providers: [LevelsService],
})
export class LevelsModule {}
