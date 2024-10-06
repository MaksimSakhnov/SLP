import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { LevelsEntity } from 'src/model/levels.entity';
import { Type } from 'class-transformer';

export class LevelsDto implements Readonly<LevelsDto> {
  @ApiProperty({ required: false })
  @Type(() => Number) // Преобразование строки в число
  id: number;

  @ApiProperty({
    required: true,
    example: 'Сбить шесть или одного',
    description: 'Название уровня',
  })
  @IsString()
  text: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: true,
    description: 'Первое изображение уровня',
  })
  picture_first: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: true,
    description: 'Второе изображение уровня',
  })
  picture_second: string;

  @Type(() => Number) // Преобразование строки в число
  @ApiProperty({
    required: true,
    example: 0,
    description: 'Статистика по первому выбору',
  })
  @IsNumber()
  statistic_first: number;

  @Type(() => Number) // Преобразование строки в число
  @ApiProperty({
    required: true,
    example: 0,
    description: 'Статистика по второму выбору',
  })
  @IsNumber()
  statistic_second: number;

  public static from(dto: Partial<LevelsDto>) {
    const it = new LevelsDto();
    it.id = dto.id ?? 0;
    it.text = dto.text ?? '';
    it.picture_first = dto.picture_first ?? '';
    it.picture_second = dto.picture_second ?? '';
    it.statistic_first = dto.statistic_first ?? 0;
    it.statistic_second = dto.statistic_second ?? 0;
    return it;
  }

  public static fromEntity(entity: LevelsEntity) {
    return this.from({
      id: entity.id,
      text: entity.text,
      picture_first: entity.picture_first,
      picture_second: entity.picture_second,
      statistic_first: entity.statistic_first,
      statistic_second: entity.statistic_second,
    });
  }

  public toEntity() {
    const it = new LevelsEntity();
    it.id = this.id;
    it.text = this.text ?? '';
    it.picture_first = this.picture_first ?? '';
    it.picture_second = this.picture_second ?? '';
    it.statistic_first = this.statistic_first ?? 0;
    it.statistic_second = this.statistic_second ?? 0;
    return it;
  }
}

export class LevelsUpdateDto implements Readonly<LevelsUpdateDto> {
  @ApiProperty({ required: false })
  @Type(() => Number) // Преобразование строки в число
  id: number;

  @ApiProperty({
    required: true,
    example: 'Сбить шесть или одного',
    description: 'Название уровня',
  })
  @IsString()
  text: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Первое изображение уровня',
  })
  picture_first: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Второе изображение уровня',
  })
  picture_second: string;

  @Type(() => Number) // Преобразование строки в число
  @ApiProperty({
    required: true,
    example: 0,
    description: 'Статистика по первому выбору',
  })
  @IsNumber()
  statistic_first: number;

  @Type(() => Number) // Преобразование строки в число
  @ApiProperty({
    required: true,
    example: 0,
    description: 'Статистика по второму выбору',
  })
  @IsNumber()
  statistic_second: number;

  public static from(dto: Partial<LevelsDto>) {
    const it = new LevelsDto();
    it.id = dto.id ?? 0;
    it.text = dto.text ?? '';
    it.picture_first = dto.picture_first ?? '';
    it.picture_second = dto.picture_second ?? '';
    it.statistic_first = dto.statistic_first ?? 0;
    it.statistic_second = dto.statistic_second ?? 0;
    return it;
  }

  public static fromEntity(entity: LevelsEntity) {
    return this.from({
      id: entity.id,
      text: entity.text,
      picture_first: entity.picture_first,
      picture_second: entity.picture_second,
      statistic_first: entity.statistic_first,
      statistic_second: entity.statistic_second,
    });
  }

  public toEntity() {
    const it = new LevelsEntity();
    it.id = this.id;
    it.text = this.text ?? '';
    it.picture_first = this.picture_first ?? '';
    it.picture_second = this.picture_second ?? '';
    it.statistic_first = this.statistic_first ?? 0;
    it.statistic_second = this.statistic_second ?? 0;
    return it;
  }
}
