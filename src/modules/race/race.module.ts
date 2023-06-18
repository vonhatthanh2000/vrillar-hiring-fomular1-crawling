import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Race } from '@entities';
import { RaceService } from './race.service';
import { RaceController } from './race.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Race])],
  providers: [RaceService],
  exports: [RaceService],
  controllers: [RaceController],
})
export class RaceModule {}
