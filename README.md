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

# Current User Feed authentication not required
$ http://localhost:3001/articles/feed

# Current User Feed (limit and offset) authentication not required
$ http://localhost:3001/articles/feed?limit=1&offset=0

# Get profile authentication not required
$ http://localhost:3001/profiles/hamza2

# Current User authentication is required
$ http://localhost:3001/user

```

### POST /users

Register User: http://localhost:3001/users

Request body:

    {
     "user":{
        "username":"hamza2",
        "email":"hamza2@gmail.com",
        "password":"123"
      }
    }

### POST /users/login

User Login: http://localhost:3001/users/login

Request body:

    {
      "user":{
        "email":"hamza@gmail.com",
        "password":"123"
      }
    }

### POST /articles authentication is required

Create Article: http://localhost:3001/articles

Request body:

    {
        "article":{
            "title":"HOW TO",
            "description":"ever ",
            "body":"You have",
            "tagList":["hamza"]
        }
    }

### POST /articles/{slug}/favorite authentication is required

Like Article: http://localhost:3001/articles/{slug}/favorite

### POST /profiles/{username}/follow authentication is required

Follow Profile: http://localhost:3001/profiles/{username}/follow

### PUT /user authentication is required

Update User: http://localhost:3001/user

Request body:

    {
        "user":{
            "bio":"hi this is bio",
            "username":"hamza",
            "email":"hamza@gmail.com",
            "image": ""
        }
    }

### PUT /articles/{slug} authentication is required

Update Article By Slug: http://localhost:3001/articles/{slug}

Request body:

    {
        "article":{
            "title":"HOW TO",
            "description":"ever ",
            "body":"You have",
            "tagList":["nestjs","typescript"]
        }
    }

### DELETE /articles/{slug} authentication is required

Delete Article by Slug: http://localhost:3001/articles/{slug}

### DELETE /articles/{slug}/favorite authentication is required

Dislike Article: http://localhost:3001/articles/{slug}/favorite

### DELETE /profiles/{username}/follow authentication is required

UnFollow Profile: http://localhost:3001/profiles/{username}/follow

## Stay in touch

- Author - [Hamza Zahidul Islam](https://hamzazahid.com/)
- Twitter - [@hamza_zahidul](hhttps://twitter.com/hamza_zahidul)

## License

This Project is licensed under the [MIT licensed](LICENSE).
