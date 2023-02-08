# Fruitcakes Pets API

This api will allow the users of our react front-end application to CRUD pets and their toys.

This application uses token authentication instead of sessions.

## Resources

### Pets

##### Routes Table

| Verb   | URI Pattern | Controller#Action |
|--------|-------------|-------------------|
| GET   | `/pets`      | `pets#index`      |
| GET   | `/pets/:id`  | `pets#show`       |
| POST   | `/pets`     | `pets#create`     |
| PATCH  | `/pets/:id` | `pets#update`     |
| DELETE | `/pets/:id` | `pets#delete`     |

### Users

##### Routes Table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |

### Toys

##### Routes Table

| Verb   | URI Pattern           | Controller#Action |
|--------|-----------------------|-------------------|
| POST   | `/toys/:petId`        | `toys#create`     |
| PATCH  | `/toys/:petId/:toyId` | `toys#update`     |
| DELETE | `/toys/:petId/:toyId` | `toys#delete`     |