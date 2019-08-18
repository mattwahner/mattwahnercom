FROM python:3

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY requirements.txt /usr/src/app
RUN pip install -r requirements.txt
COPY . /usr/src/app
CMD python manage.py migrate && \
    exec gunicorn shuffley.wsgi:application --bind 0.0.0.0:8000
