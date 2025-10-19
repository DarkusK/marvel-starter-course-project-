# 🦸‍♂️ Marvel Information Portal

Информационный портал о персонажах и комиксах Marvel, построенный на React.

![Marvel](https://img.shields.io/badge/Marvel-DC143C?style=for-the-badge&logo=marvel&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## 📋 Описание

Marvel Information Portal - это веб-приложение, которое предоставляет информацию о персонажах и комиксах вселенной Marvel. Пользователи могут просматривать детальную информацию о героях, их комиксах, а также изучать различные истории из мира Marvel.

## ✨ Основные возможности

- 🔍 **Просмотр персонажей Marvel** - детальная информация о героях
- 📚 **Коллекция комиксов** - каталог комиксов с описаниями
- 🎲 **Случайный персонаж** - функция для изучения случайных героев
- 📱 **Адаптивный дизайн** - работает на всех устройствах
- ⚡ **Быстрая загрузка** - оптимизированная производительность
- 🛡️ **Обработка ошибок** - Error Boundary для стабильной работы

## 🚀 Технологии

- **React 18.3.1** - основной фреймворк
- **React Router DOM 5.3.4** - маршрутизация
- **SASS** - препроцессор CSS
- **Marvel API** - источник данных
- **PropTypes** - проверка типов

## 📦 Установка и запуск

### Предварительные требования

- Node.js (версия 14 или выше)
- npm или yarn

### Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/DarkusK/marvel-starter-course-project-.git
cd marvel-starter-course-project-
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите приложение в режиме разработки:
```bash
npm start
```

Приложение откроется в браузере по адресу [http://localhost:3000](http://localhost:3000)

### Другие команды

```bash
# Сборка для продакшена
npm run build

# Запуск тестов
npm test

# Извлечение конфигурации (необратимо)
npm run eject
```

## 🏗️ Структура проекта

```
src/
├── components/           # React компоненты
│   ├── app/             # Главный компонент приложения
│   ├── appHeader/       # Шапка сайта с навигацией
│   ├── appBanner/       # Баннер для страниц
│   ├── charInfo/        # Информация о персонаже
│   ├── charList/        # Список персонажей
│   ├── comicsList/      # Список комиксов
│   ├── errorBoundary/   # Обработка ошибок
│   ├── errorMessage/    # Сообщения об ошибках
│   ├── pages/           # Страницы приложения
│   ├── randomChar/      # Случайный персонаж
│   ├── singleComic/     # Отдельный комикс
│   ├── skeleton/        # Skeleton загрузка
│   └── spinner/         # Спиннер загрузки
├── services/            # API сервисы
│   └── MarvelService.js # Сервис для работы с Marvel API
├── resources/           # Ресурсы (изображения)
│   └── img/            # Изображения персонажей и логотипы
└── style/              # Глобальные стили
    ├── style.scss      # Основные стили
    ├── variables.scss  # SASS переменные
    └── button.scss     # Стили кнопок
```

## 🎯 Основные компоненты

### App.js
Главный компонент приложения с маршрутизацией между страницами.

### MainPage
Главная страница с:
- Случайным персонажем
- Списком персонажей
- Детальной информацией о выбранном персонаже

### ComicsPage
Страница с каталогом комиксов Marvel.

### MarvelService
Сервис для работы с Marvel API:
- Получение списка персонажей
- Получение информации о персонаже
- Получение списка комиксов
- Трансформация данных API

## 🎨 Дизайн

Приложение использует:
- **SASS** для стилизации
- **Адаптивный дизайн** для всех устройств
- **Современный UI/UX** в стиле Marvel
- **Skeleton loading** для улучшения UX

## 🔧 API

Проект использует Marvel API для получения данных:
- **Base URL**: `https://marvel-server-zeta.vercel.app/`
- **Endpoints**: 
  - `/characters` - список персонажей
  - `/characters/{id}` - информация о персонаже
  - `/comics` - список комиксов

## 🚀 Развертывание

Для развертывания приложения:

1. Соберите проект:
```bash
npm run build
```

2. Загрузите содержимое папки `build/` на ваш веб-сервер.

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/AmazingFeature`)
3. Зафиксируйте изменения (`git commit -m 'Add some AmazingFeature'`)
4. Отправьте в ветку (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## 📝 Лицензия

Этот проект создан в образовательных целях.

## 👨‍💻 Автор

**DarkusK**
- GitHub: [@DarkusK](https://github.com/DarkusK)

## 🙏 Благодарности

- Marvel за предоставление API
- React команде за отличный фреймворк
- Сообществу разработчиков за вдохновение

---

⭐ Если вам понравился проект, поставьте звезду!