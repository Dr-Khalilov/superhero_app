## Description

Superheroes application for everyone!

## Installation

You need install Docker: 20.10.22 and Docker Compose: v2.13.0 or latest version.

## Running the app

```bash
make up-dev
```

After the first launch of containers
you need to open a new terminal tab.
Type command in terminal:

```bash
make up-migrate
```

If you want to down migration
you need type command in terminal:

```bash
make down-migrate
```

## Stopping the app

For stop the project
Type command in terminal:

```bash
 make stop
```

## Downing the app

For downing containers and network the project
Type command in terminal:

```bash
 make down
```

## Removing the app

For remove all docker containers, images, networks, and volumes the project
Type command in terminal:

```bash
 make prune
```
