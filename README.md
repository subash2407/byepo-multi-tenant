
## Description
Frontend Repository:
https://github.com/yourname/byepo-feature-flags-frontend

# Multi-Tenant Feature Flag Management System

## Tech Stack
- Backend: NestJS
- Database: MySQL
- Frontend: React.js
- Authentication: JWT

## Features

### Super Admin
- Login
- Create Organization
- View Organizations

### Organization Admin
- Signup
- Login
- Create Feature Flags
- View Feature Flags
- Enable/Disable Feature Flags
- Delete Feature Flags

### End User
- Check Feature Status

## Setup
npm install
npm run start:dev

## Environment Variables

JWT_SECRET=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=

======================================================

## Create Project
nest new byepo-multi-tenant

## Project setup

```bash
$ npm install
```

## Install Auth Packages:
```bash
$ npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
```


## Install Validation Packages:
```bash
$ npm install class-validator class-transformer
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

