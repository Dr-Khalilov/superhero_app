#!/bin/bash

cd ./server
npm install
npx sequelize db:create
npx sequelize db:migrate
npm run start-dev