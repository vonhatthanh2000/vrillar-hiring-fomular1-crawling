import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Race } from '@entities';

@Module({
  imports: [TypeOrmModule.forFeature([Race])],
})
export class RaceModule {}
