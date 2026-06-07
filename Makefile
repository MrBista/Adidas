.PHONY: up up-all down build logs restart clean \
       up-be up-client-user up-client-admin \
       build-be build-client-user build-client-admin \
       logs-be logs-client-user logs-client-admin \
       restart-be restart-client-user restart-client-admin \
       db-create db-migrate db-seed db-setup

# === All services ===

up:
	docker compose up -d

up-all:
	docker compose up -d --build

up-build:
	docker compose up -d --build

down:
	docker compose down

down-v:
	docker compose down -v

build:
	docker compose build

logs:
	docker compose logs -f

restart:
	docker compose restart

clean:
	docker compose down -v --rmi local

# === Per-service build ===

build-be:
	docker compose build adidas-be

build-client-user:
	docker compose build adidas-client-user

build-client-admin:
	docker compose build adidas-client-admin

# === Per-service up (build + recreate only that service, no downtime on others) ===

up-be:
	docker compose up -d --build --no-deps adidas-be

up-client-user:
	docker compose up -d --build --no-deps adidas-client-user

up-client-admin:
	docker compose up -d --build --no-deps adidas-client-admin

# === Per-service restart ===

restart-be:
	docker compose restart adidas-be

restart-client-user:
	docker compose restart adidas-client-user

restart-client-admin:
	docker compose restart adidas-client-admin

# === Per-service logs ===

logs-be:
	docker compose logs -f adidas-be

logs-client-user:
	docker compose logs -f adidas-client-user

logs-client-admin:
	docker compose logs -f adidas-client-admin

# === Database (via shared-postgres from workspace/infra) ===

db-create:
	docker compose exec adidas-be npx sequelize-cli db:create

db-migrate:
	docker compose exec adidas-be npx sequelize-cli db:migrate

db-seed:
	docker compose exec adidas-be npx sequelize-cli db:seed:all

db-setup: db-create db-migrate db-seed
