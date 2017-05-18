# hacktivpress

A simple web log made using Express, Mongoose, Vue.

## endpoints

| routes | method | description |
| ------ | ------ | ----------- |
| /users | GET    | get all users |
| /user/:id | GET    | get a user by id |
| /signup | POST    | register new user |
| /signin | POST    | sign a user in |

| routes | method | description |
| ------ | ------ | ----------- |
| /articles | GET    | get all articles |
| /article/:id | GET    | get an article by id |
| /articles | POST    | post new article |
| /article/:id | PUT    | edit an article |
| /article/:id | DELETE    | delete an article |

## usage

clone the repo and install the dependencies in the server and the client folders.

```sh
$ cd server
$ npm install
```
```sh
$ cd client
$ npm install
```
Access the server from http://localhost:3000
