<h1 align="center">Bienvenido a Disruptive Studio Test 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> Esta es una prueba técnica de Disruptive Studio, para ser más exactos, el primer punto del enunciado.

## Install

```sh
npm install
```

## Usage

```sh
##Comando para ejecutar el servidor.
npm run dev
```

```sh
## Test
npm test <nombredelarchivo.test.js>
```

## Server

App.js es el archivo en donde se hacen todas las configuraciones iniciales. Todas las peticiones de Binance se hicieron gracias a la librería @binance/connector.

### Controllers

- ### Currencies
  Controlador que se encarga de optener las 10 monedas que más perdioeron valor durante las últimas 24h
- ### Orders
  Controlador que se encarga de crear una orden. Cabe aclarar que en este caso no pude crear la compra con la moneda de menor valor, ya que dicho symbol no era válido
  en la request de newOrder, por lo que opté por que el usuario mandar el symbol. En el controlador dejé expresado en comentarios lo que quería hacer, lo dejé así para que
  se tuviera una idea.
- ### Users
  Existen 3 controladores, uno para obtener la información de la cuenta en Binance, otro para obtener el uid del usuario que estaría guardado en la BD que creé con la
  colección usuarios y por último el que guarda la información del usuario para hacer otras consultas con su Apikey y Secretkey.

### Database

- ### Config
  En este archivo se encuentra expresado la conexión a la BD

### Helpers

- ### Get Currencies
  Este helper ayuda a formatear la información que regresa el API de Binance para las perdidas de valor.

### Middlewares

- ### Check Fields
  Este middleware retorna en la respuesta de la petición los mensajes de los checks, como por ejemplo un campo que sea requerido y no fue enviado.

### Models

- ### User
  Modelo del usuario

### Routes

- ### Currencies
  Asigna la ruta al controlador currenciesGet
- ### Orders
  Asigna la ruta al controlador ordersPost
- ### Users
  Asigna la ruta al controlador usersPost, userGetByParams, userGet

### Librerias

- ### [@binance/connector](https://github.com/binance/binance-connector-node)
  Librería que nos ofrece muchas funciones para hacer las peticiones al API de Binance.
- ### [Cors](https://www.npmjs.com/package/cors)
  Librería para habilitar los sitios que queremos que hagan peticiones a nuestro servidor.
- ### [Express](https://expressjs.com/)
  Es básicamente un framework para Node.js que permite estructurar una aplicación de una manera ágil, nos proporciona funcionalidades como el enrutamiento, opciones para gestionar sesiones y cookies, etc.
- ### [Dotenv](https://www.npmjs.com/package/dotenv)
  Una forma muy eficiente de manejar las variables de entorno.
- ### [Express Validator](https://express-validator.github.io/docs/)
  Es un conjunto de middlewares de express.js que envuelve las funciones de validación.
- ### [Mongoose](https://mongoosejs.com/)
  Es una librería para Node.js que nos permite escribir consultas para una base de datos de MongooDB.

## Author

👤 **Jaider Bermudez**

- Github: [@bjaider](https://github.com/bjaider)
