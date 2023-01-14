up-dev:
	docker compose up

up-migrate:
	./runMigrations.sh

down-migrate:
	./downMigrations.sh

down:
	docker compose down

stop:
	docker compose stop

logs:
	docker compose logs --follow ${c}

prune:
	docker system prune -a -f --volumes