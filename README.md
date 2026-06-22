
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

# Environment Variables

Create a `.env` file in the root directory and add:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=byepo_feature_flags
DB_USER=root
DB_PASSWORD=password

JWT_SECRET=your_jwt_secret

SUPER_ADMIN_EMAIL=admin@byepo.com
SUPER_ADMIN_PASSWORD=admin123

```
## Super Admin Credentials

Configured through environment variables:

SUPER_ADMIN_EMAIL
SUPER_ADMIN_PASSWORD
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

