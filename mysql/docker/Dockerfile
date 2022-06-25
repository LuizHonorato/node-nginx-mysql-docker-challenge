FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD root

COPY ./docker/initdb.sql /docker-entrypoint-initdb.d/initdb.sql

EXPOSE 3306