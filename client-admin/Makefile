.PHONY: dev install build preview docker-build docker-run

dev:
	npm run dev

install:
	npm install

build:
	npm run build

preview:
	npm run preview

docker-build:
	docker build -t adidas-client-admin --build-arg VITE_APP_URL=http://localhost:8081 .

docker-run:
	docker run --rm -p 5174:80 --name adidas-client-admin adidas-client-admin
