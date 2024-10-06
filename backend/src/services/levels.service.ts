import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LevelsDto } from 'src/dto';
import { LevelsEntity } from 'src/model/levels.entity';
import { LevelsUpdateDto } from '../dto/levels.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LevelsService {
  constructor(
    @InjectRepository(LevelsEntity)
    private readonly levelsEntityRepository: Repository<LevelsEntity>,
  ) {}
  async create(dto: LevelsDto) {
    const e = await this.levelsEntityRepository.save(dto.toEntity());
    return LevelsDto.fromEntity(e);
  }

  async findAll(search: string | undefined) {
    if (search) {
      return await this.levelsEntityRepository
        .find({
          where: [{ last_name: search }],
        })
        .then((items) => items.map((e) => LevelsDto.fromEntity(e)));
    }
    return await this.levelsEntityRepository
      .find()
      .then((items) => items.map((e) => LevelsDto.fromEntity(e)));
  }

  async findOne(id: number) {
    return await this.levelsEntityRepository
      .findOne(id)
      .then((item) => (item ? LevelsDto.fromEntity(item) : null));
  }

  async update(id: number, dto: LevelsUpdateDto) {
    await this.levelsEntityRepository.update(id, dto.toEntity());
    return await this.levelsEntityRepository
      .findOne(id)
      .then((item) => (item ? LevelsDto.fromEntity(item) : null));
  }

  private deleteFile(filename: string): void {
    const filePath = path.join(process.cwd(), 'uploads', filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  async remove(id: number) {
    const levelEntity = await this.levelsEntityRepository.findOne({
      where: { id },
    });

    if (!levelEntity) {
      throw new NotFoundException('Level not found');
    }

    const level = LevelsDto.fromEntity(levelEntity);

    if (level.picture_first) {
      this.deleteFile(level.picture_first);
    }

    if (level.picture_second) {
      this.deleteFile(level.picture_second);
    }

    return await this.levelsEntityRepository.delete(id);
  }
}
