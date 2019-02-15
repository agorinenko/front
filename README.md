# Программа обучения на специализацию "Frontend-разработчик"
## Введение
Данный документ описывает порядок следования тем, которые следует изучить для базового понимания экосистемы, 
на основе которой строятся современные веб приложения. Программа расчитана на 15 дней и подразумевает, что 
вы владеете базовыми знаниями HTML, Javascript и CSS. В процессе курса вы изучите основные инструменты и 
концепции современной frontend разработки с использованием фреймворков и open source  библиотек, 
которые помогут повысить вашу продуктивность в написании кода.

В процессе прохождения уроков вам предстоит написать веб-приложение "Рабочее место администратора системы" 
со следующей функциональностью:<br />
1. Форма входа в приложение
1. Страница приветствия с выводом имени вошедшего пользователя
1. Шаблон приложения должен иметь левую навигацию, наименование системы, имя пользователя с сылкой на выход из
системы
1. Реализация формы просмотра списка для сущности "Разделы каталога продукции". Вывод по 10 элементов на 
странице. Сортировка по всем колонкам списка кроме колонки "Действие". Поле поиска по списку
1. Реализация форм просмотра, создания и изменения для сущности "Разделы каталога продукции"
1. Реализация формы просмотра списка для сущности "Товар". Вывод по 10 элементов на 
странице. Сортировка по всем колонкам списка кроме колонки "Действие". Поле поиска по списку
1. Реализация форм просмотра, создания и изменения для сущности "Товар"
1. Сущность "Раздел каталога продукции". Иерархический справочник со следующими полями:
    1. Наименование
    1. Описание
    1. Родительский элемент
    1. Автор
    1. Дата создания
1. Сущность "Продукт". Плоский справочник со следующими полями:
    1. Наименование
    1. Описание
    1. Цена
    1. Каталог продукции
    1. Автор
    1. Дата создания
## Урок 1. Установка и настройка окружения (1 день)
Окружение: <br />
1. Webstorm или idea intellij + Vue plugin
1. nodejs + npm
1. vue + vue cli + vuetify
1. webpack + babel + eslint
1. git

В первом уроке вам предстоит изучить базовые понятия и окружение, которое будет использоваться в дальнейшем. 
Пока не стоит углубляться в чтение документации, достаточно базовых знаний
### Задание
1. Установите выбранный вами редактор кода
1. Установите компоненты, описанные в модуле "Окружение" 
1. Сделайте fork репозитория ``https://github.com/agorinenko/front.git``. В дальнейшем этот проект станет вашим основным 
местом хранения кода.
1. Изучите проект, создайте конфигурацию ``npm`` для запуска сервера, запустите приложение и порадуйтесь своему 
успеху  
1. Подключите ``bootstrap`` как зависимость, установите ее, используя терминал 
### Задание для самоконтроля
1. Какую роль в проекте играет каждый компонент, описанный в модуле "Окружение"?  
1. Как подключаются зависимости в проект?
1. В какое расположение происходит установка зависимостей?
1. Для чего исползуется файл ``.gitignore``?
1. Для чего, по вашему мнению, файл ``.gitignore`` содержит строку ``node_modules``?
## Урок 2. Распределённые системы управления версиями кода (1 день)
В этом уроке познакомимся с системами управления кода на примере Git.
### Задание
Заданием этого урока будет создание нового проекта, в котором вам будет удобно работать с HTML разметкой,
CSS и JavaScript. Проект необходимо добавить в git репозиторий. Убедитесь, что генерируемые ide файлы и 
зависимости не попали в репозиторий.

Переключитесь в новую вертку. В корне проекта создайте html файл и выведите наименование ветки. Отправьте 
изменения в удаленный репозиторий, указав комментарий(не в ``master``). Повторите опысанную процедуру ещё
для 3х файлов. Обратите внимание, что новые ветки должны создаваться строго из ветки ``master``
### Задание для самоконтроля
1. Какую роль играет git в процессе разработки?
1. Как посмотреть настройки git? Как указать прокси?
1. Что такое удаленный репозиторий? В чем его отличие от локального хранилища веток?
1. Как создать одной командой новую ветку и сразу переключиться в неё?
1. Как посмотреть список всех веток(удаленных и локальных)?
1. Что такое извлечение и возврат кода?
1. В чем отличие fetch от pull?
1. Для чего нужен push?
1. В чем отличие merge от rebase?
1. Что такое fork?
1. Для чего, по вашему мнению, создаются отдельные ветки? Какую роль играет ветка ``master``?
1. Убедитесь, что в результате выполнения задания у вас получилось следующее(в удаленном репозитории):
    1. Присутствует ветка ``master``
    1. Существует ещё 4 ветки
    1. Первая ветка содержит один html файл, вторая два и тд.
    1. Контент последней ветки идентичен ``master``
## Урок 3. Протоколы передачи данных в сети (1 день)
### Задание
Изучите теоретическую часть, ответив на вопросы для самоконтроля
### Задание для самоконтроля
1. Какой тип взаимодействия(или какая технология) лежит в основе протокола HTTP?
1. Не вдаваясь в детали опишите работу протокола
1. Какой порт по умолчанию используется при запросе веб-ресурса
1. Расскажите про заголовки запросов. Какой заголовок следует использовать для передачи файлов на сервер? Какой при этом 
объект API Javascript необходимо использовать для формирования пераметров запроса?
1. Какие форматы ответов вы знаете?
1. Расскажите про коды состояний?
1. Что такое HTTP методы? Какие методы вы знаете? 
1. В чем отличие GET от POST, POST от PUT, GET от HEAD
1. Что такое REST? Расскажите про его архитектуру?
1. Что такое DNS? Кратко опишите его роль
1. Что такое localhost? По какому IP можно получить к нему доступ?
1. Предположим, что в локальной сети есть веб-ресурс, доступный по ссылке http://192.168.10.1. Перед вами 
стоит задача обратиться к нему по ссылке http://mysite со своей локальной машины. Доступа к DNS нет. Что 
вы предпримете?
1. Что такое сервер приложения, какова его роль? Какие сервера приложений вы знаете?
1. Расcкажите про шифрование в сети. Какой порт по умолчанию используется при запросе веб-ресурса по зашифрованному 
протоколу?
1. Какой порт по умолчанию используется при запросе веб-ресурса по зашифрованному протоколу?
1. Расскажите про способы и протоколы аутентификации в веб-приложениях
1. Какие коды состояния используются в механизме аутентификации и авторизации?
1. Чем отличается аутентификация от авторизации?
1. Расскажите про Cross-Origin Resource Sharing
1. Расскажите про Cross-Site Scripting

## Урок 4. Основы HTML 5 (1 день)
### Задание
### Задание для самоконтроля
## Урок 5. Основы CSS3 и препроцессор SASS (1 день)
### Задание
### Задание для самоконтроля
## Урок 6. Основы Javascript и ECMAScript 6 (1 день)
### Задание
### Задание для самоконтроля
## Урок 7. Сборка проекта, компиляторы и транспиляторы (2 дня)
### Задание
### Задание для самоконтроля
## Урок 8. Построение приложений с использованием JavaScript-фреймворков (2 дня)
### Задание
### Задание для самоконтроля
## Урок 9. Знакомство с Django Framework (2 дня)
### Задание
### Задание для самоконтроля
## Урок 10. Сетевое взаимодействие с веб-сервером (1 день)
### Задание
### Задание для самоконтроля
## Урок 11. Тестирование веб-приложений (1 день)
### Задание
### Задание для самоконтроля
## Урок 12. Демонстрация готового веб-приложения (1 день)