# Backend Fanztar

This is a RESTful API for the Mobile Factory application, which allows customers to configure and order custom mobile phones. The API is built using Node.js, Express.js, and TypeScript.

## Features

- Configure and order custom mobile phones with different components (screen, camera, port, OS, and body)
- Input validation using Zod
- Error handling with custom error class
- Docker support for easy deployment and scalability
- API documentation using Swagger UI

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)
- Docker (if you want to run the application using Docker)
- Docker Compose (if you want to run the application using Docker Compose)

## Getting Started

1. Clone the repository:

```
git clone https://github.com/your-username/Backend-Assignment-Fanztar.git
```

2. Install dependencies:

```
cd Backend-Assignment-Fanztar
npm install
```

3. Start the development server:

```
npm run dev
```

The server will start running at `http://localhost:3000`.

## Building for Production

To build the application for production, run:

```
npm run build
```

This will create a `dist` folder with the compiled JavaScript files.

## Running with Docker

You can run the application using Docker or Docker Compose.

### Docker

1. Build the Docker image:

```
npm run docker:build
```

2. Run the Docker container:

```
npm run docker:run
```

The application will be accessible at `http://localhost:3000`.

### Docker Compose

1. Start the Docker containers:

```
npm run docker:compose:up
```

The application will be accessible at `http://localhost:3000`.

2. Stop the Docker containers:

```
npm run docker:compose:down
```

## API Documentation

The API documentation is available at `http://localhost:3000/api-docs` when the server is running. It provides information about the available endpoints and their request/response formats.

## Testing

To run the unit tests, execute the following command:

```
npm test
```

## Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting. You can run the following commands:

- `npm run lint`: Lint the TypeScript files
- `npm run lint:fix`: Lint and fix any fixable issues in the TypeScript files
- `npm run format`: Format the TypeScript files using Prettier

## Contributing

Contributions are welcome! Please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE).
