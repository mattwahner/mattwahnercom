
dev:
	docker-compose -f ./docker-compose-base.yml -f ./docker-compose-dev.yml up --build

devd:
	docker-compose -f ./docker-compose-base.yml -f ./docker-compose-dev.yml up --build -d

watch:
	docker-compose -f ./docker-compose-base.yml -f ./docker-compose-dev.yml -f ./docker-compose-watch.yml up --build

watchd:
	docker-compose -f ./docker-compose-base.yml -f ./docker-compose-dev.yml -f ./docker-compose-watch.yml up --build -d

down:
	docker-compose -f ./docker-compose-base.yml -f ./docker-compose-dev.yml down

prune:
	docker container prune -f
	docker volume prune -f
	docker network prune -f
	docker image prune -f
