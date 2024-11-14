import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UploadedFiles,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { LevelsDto } from 'src/dto';
import { LevelsService } from 'src/services';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LevelsUpdateDto } from '../dto/levels.dto';

@ApiTags('Levels') // Указываем группу в документации
@Controller('levels')
export class LevelsController {
  constructor(private levelsService: LevelsService) {}
  @Post()
  @ApiOperation({ summary: 'Создать новый уровень' }) // Описание метода
  @ApiResponse({ status: 201, description: 'Уровень успешно создан.' })
  @ApiResponse({ status: 400, description: 'Неверные данные.' })
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'picture_first', maxCount: 1 },
        { name: 'picture_second', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: './uploads', // Путь для сохранения файлов
          filename: (req, file, callback) => {
            const fileExt = file.originalname.split('.').pop();
            const fileName = `${Date.now()}-${
              file.originalname.split('.')[0]
            }.${fileExt}`;
            callback(null, fileName);
          },
        }),
        limits: {
          fileSize: 5 * 1024 * 1024, // Ограничение на размер файла — 5MB
        },
      },
    ),
  )
  @ApiConsumes('multipart/form-data') // Указываем тип контента для загрузки файлов
  @ApiBody({
    description: 'Данные для создания уровня',
    type: LevelsDto, // Привязываем DTO для валидации и документации
  })
  async postLevel(
    @UploadedFiles()
    files: {
      picture_first?: Express.Multer.File[];
      picture_second?: Express.Multer.File[];
    },
    @Body(new ValidationPipe({ transform: true })) levelsDto: LevelsDto,
  ) {
    // Если файлы загружены, добавляем их в DTO
    if (files.picture_first?.[0]) {
      levelsDto.picture_first = files.picture_first[0].filename;
    }

    if (files.picture_second?.[0]) {
      levelsDto.picture_second = files.picture_second[0].filename;
    }
    return this.levelsService.create(levelsDto);
  }

  @ApiOperation({ summary: 'Получить все уровни' }) // Описание метода
  @ApiResponse({ status: 200, description: 'Уровни успешно получены.' })
  @ApiQuery({ name: 'search', required: false })
  @Get()
  async getAll(@Query('search') search: string | undefined) {
    return await this.levelsService.findAll(search);
  }

  @ApiOperation({ summary: 'Получить уровень' }) // Описание метода
  @ApiResponse({ status: 200, description: 'Уровень успешно получен.' })
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.levelsService.findOne(Number(id));
  }

  @ApiOperation({ summary: 'Обновить уровень' }) // Описание метода
  @ApiResponse({ status: 200, description: 'Уровень успешно обновлен.' })
  @Put(':id')
  @ApiBody({
    description: 'Данные для обновления уровня',
    type: LevelsUpdateDto, // Привязываем DTO для валидации и документации
  })
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) dto: LevelsUpdateDto,
  ) {
    return this.levelsService.update(Number(id), dto);
  }

  @ApiOperation({ summary: 'Удалить уровень' }) // Описание метода
  @ApiResponse({ status: 204, description: 'Уровень успешно удален.' })
  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.levelsService.remove(Number(id));
  }
}
