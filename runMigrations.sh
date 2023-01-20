#!/bin/bash

started_at=$(date +"%s")

docker compose ps

web=$(docker compose --file ./docker-compose.yaml ps | grep dev-server | awk '{print $1}')

# Run Sequelize's migrations.
echo "-----> Running application migrations!"
docker exec -it "$web" sequelize db:migrate
echo "<----- Migrations created!"

ended_at=$(date +"%s")

minutes=$(((ended_at - started_at) / 60))
seconds=$(((ended_at - started_at) % 60))

echo "-----> Done in ${minutes}m${seconds}s"
