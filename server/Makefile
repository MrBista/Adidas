.PHONY: dev install build docker-build docker-run db-create db-migrate db-seed db-setup

dev:
	npm start

install:
	npm install

build:
	docker build -t adidas-be .

run:
	docker run --rm -p 8081:3000 --env-file .env.docker --name adidas-be adidas-be

db-create:
	npx sequelize-cli db:create

db-migrate:
	npx sequelize-cli db:migrate

db-seed:
	npx sequelize-cli db:seed:all

db-setup: db-create db-migrate db-seed
