## Версии ПО
Ubuntu	    ``18.04 LTS``<br/>
Python	    ``3.7.2``<br/>
Django	    ``2.1.7``<br/>
PyCharm	    ``2018.2``<br/>
## GIT
Ставим
```
sudo apt-get update
sudo apt-get install git-core

git config --global user.name "agorinenko"
git config --global user.email "agorinenko@croc.ru"

git config --global http.proxy http://proxy.croc.ru:8000
git config --global https.proxy http://proxy.croc.ru:8000
```
## Python
Важно! Виртуальная среда должна быть вне проекта и не должна попасть в репозиторий кода!<br/>
Качаем
```
https://www.python.org/ftp/python/3.7.2/Python-3.7.2.tgz
```
Ставим
```
sudo tar xzf Python-3.7.2.tgz
cd Python-3.7.2/

./configure --enable-optimizations
make
make install
```
Проверяем
```
python3.7 -V
```
Создаем(командой либо через IDE) виртуальную среду и активируем ее
```
python3 -m venv ~/venvs/vtb/web_app/bin/activate
. ~/venvs/vtb/web_app/bin/activate
```
Устанавливаем зависимости и смотрим версию Django
```
python -m django --version
```
## Pip
Установка зависимостей
```
pip install -r requirements.txt
```
## Миграции
Создание, если нужно
```
python manage.py makemigrations
```
Накатываем
```
python manage.py migrate
```
Просмотр миграций
```
python manage.py showmigrations
```
Откатываем все миграции приложения regulatory_background
```
manage.py migrate regulatory_background zero
```
или возвращаемся к 0001_initial
```
manage.py migrate hello_world 0001_initial
```
Загрузка тестовых данных
```
python manage.py loaddata regulatory_background/test_data/init_01.json
```
Создание пустой миграции
```
python manage.py makemigrations --empty user_auth
```
## Создание администратора
```
python manage.py createsuperuser
```
## Создание приложения
```
python manage.py startapp auth
```