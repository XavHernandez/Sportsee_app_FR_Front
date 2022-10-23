# Sportsee - Coaching Sportif

Douzième projet du parcours "Développeur Front-End" chez OpenClassroom. L'objectif est de réaliser un dashboard pour une application de coaching sportif. La mission principale est de réaliser la page profile de l'application, en intégrant une API.

## Objectifs

1. Réalisation de la page profile de l'application Sportsee.
2. Récupération des données auprès de l'API.
3. Séparation logique du code dans des composants réutilisables.
4. Mise en place d'une documentation (Readme && JSDoc).
5. Responsivness pour les écrans >= 1024px.

## Technologies

React / JSX / TypeScript / React-Router 6.4 / Sass Modules / Vite

## Back-End Installation (**without Docker**)

### 1 Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 2 Launching the project

- Fork the repository at at this repo [Github](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.

## Back-End Installation (**with Docker**)

### 1 Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 2 Starting the project

- The `docker image build --no-cache -t micro-api .` command will allow you to build your image.
- The `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn` command will allow you to create your Docker container and run your image on port 3000.
- The `docker container stop micro-api` command will allow you to stop your micro-api.
- The `docker container rm micro-api` command will allow you to delete your micro-api container.

## Endpoints

### 1 Possible endpoints

This project includes four endpoints that you will be able to use:

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

### 2 Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.

## Front-End Installation (**without Docker**)

### 1 Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 2 Launching the project

- Fork this repository
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the react front-end project.
- The project works by default on port 5173.
