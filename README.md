# Автотесты для страницы регистрации на Koshelek.ru

Проект содержит автоматизированные тесты на [Playwright](https://playwright.dev/) с использованием JavaScript для проверки негативных сценариев на странице регистрации [Koshelek.ru](https://koshelek.ru/). Тесты охватывают проверки валидации различных полей.

## Основные тест-кейсы
  - **Имя пользователя**: Проверка на недопустимые символы, нарушение минимальной/максимальной длины, начало имени не с буквы.
  - **Email**: Неверные форматы email, отсутствие домена и т.д.
  - **Пароль**: Нарушение минимальной/максимальной длины, отсутствие заглавных букв или чисел.
  - **Реферальный код**: Неверные форматы кода.

## Требования

- Node.js (v14 или выше)
- npm (v6 или выше)
- playwright

## Установка зависимостей:

Необходимо перейти по [ссылке](https://nodejs.org/en) и скачать установщик Node.js

  <img src="pic/image.png" alt="Установка Node.js" width="500"/>

После завершения процесса установки необходимо удостовериться в том, что Node.js был установлен. Для этого необходимо:

Открыть терминал Windows (cmd или powershell) и выполните следующие команды:
```bash
node -v
npm -v
```
Playwright устанавливается, как npm пакет через терминал. Для его установки необходимо выполнить следующий алгоритм:

- Ввести команду:
```bash
npm init playwright@latest 
```
- Выбрать JavaScript, как ЯП для автотестов

<img src="pic/image-1.png" alt="Установка Playwright" width="500"/>

- Ввести имя (путь) каталога, в котором будут храниться Е2Е тесты

<img src="pic/image-2.png" alt="Установка Playwright" width="500"/>

- Отказаться от создания файла с "github actions"

<img src="pic/image-3.png" alt="Установка Playwright" width="500"/>

- Согласиться на установку браузеров

<img src="pic/image-4.png" alt="Установка Playwright" width="500"/>

- По завершению распаковки и установки пакета будет выведено сообщение с перечислением терминальных команд доступных в директории проекта и о том, что были созданы примеры тестов и конфигурация PW

<img src="pic/image-5.png" alt="Установка Playwright" width="500"/>

## Установка и запуск проекта

Склонируйте репозиторий:
```bash
git clone https://github.com/KKopilka/AQA-koshelek.git
```
Перейдите в директорию проекта:
```bash
cd AQA-koshelek
```
Для запуска тестов выполните команду:
```bash
npx playwright test
```
Запуск тестов из режима UI:
```bash
npx playwright test --ui
```

## Устранение неполадок
Убедитесь, что все зависимости установлены, а Node.js установлен корректно. В случае сбоев тестов из-за проблем с подключением или тайм-аутами, увеличьте время ожидания в **playwright.config.js**.
