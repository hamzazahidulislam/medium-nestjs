## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## How to Use the Medium NestJs

```bash
# Get All Articles not Required Authentication
$ http://localhost:3001/articles

# Get Article By Tag
$ http://localhost:3001/articles?tag=nestjs

# Get Article By Author
$ http://localhost:3001/articles?author=hamza

# Get Article By limit and offset
$ http://localhost:3001/articles?limit=20&offset=0

# Get profile authentication not required
$ http://localhost:3001/profiles/hamza2

```

### POST /auth/signup

Signup Api: http://localhost:3000/auth/signup

Request body:

    {
     "username":"hamza",
     "password":"your_passwod"
    }

### POST /auth/sigIn

SignIn Api: http://localhost:3000/auth/signin

Request body:

    {
     "username":"hamza",
     "password":"your_password"
    }

## Stay in touch

- Author - [Hamza Zahidul Islam](https://hamzazahid.com/)
- Twitter - [@hamza_zahidul](hhttps://twitter.com/hamza_zahidul)

## License

This Project is licensed under the [MIT licensed](LICENSE).
