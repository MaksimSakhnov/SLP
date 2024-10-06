

## Описание

Бэкенд для приложения-игры "Проблема вагонетки"

## Установка пакетов

```zsh
yarn install
```

## Запуск приложения

```zsh
# development
yarn run start

# watch mode (hot reload)
yarn run start:dev

# production mode
yarn run start:prod
```

## Запуск тестов

```zsh
# unit tests
yarn run test

# e2e tests
yarn run test:e2e

# test coverage
yarn run test:cov
```

## Создание конфига ORM
```zsh
yarn run pretypeorm
```

## Создание миграций
```zsh
yarn typeorm:migration:generate -- my_init
```

## Запуск миграций
```zsh
yarn typeorm:migration:run
```

## Запуск БД

```zsh
docker-compose up --build
```

## Стартовый порядок действий разработчика:
1. Установить пакеты
2. Запустить контейнер с БД
3. Создать конфиг для ORM
4. Если миграций нет - создать миграции
5. Запустить приложение
6. Запустить миграции

## Swagger

Расположен по адресу ``api/docs/``

## Файлы

Расположены по адресу ``uploads/``