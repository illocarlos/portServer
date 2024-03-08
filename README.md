 
 
 # portfolio-server

## Back-end Repository (Node.js with Express)
### Table of Contents 

1. [Table of Contents](#table-of-contents)
2. [Description](#description)
3. [Setup](#setup)
    - [Scripts](#scripts)
    - [Environment variables](#environment-variables)
4. [File Structure](#file-structure)
5. [Used Technologies](#used-technologies)
6. [API end Points](#api-end-points)
7. [License](#license)
8. [Contact](#contact)

[![Front-end Repository](https://img.shields.io/badge/Front--end-Repository-blue?style=for-the-badge&logo=github)](https://github.com/illocarlos/portClient)


 ## Description
backend to my portfolio

### Key Features

- **about me:**  Presentation letter, describe a littel of me.
- **my works:** Users can access specific details for each work, including information on the technologies used.

## Setup

#### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine before getting started.

Follow the steps below to setup the application in your local development environment:

1. Install dependencies

```bash
npm install
```

2. Run the application

```bash
npm run dev
```

The application will open automatically on localhost (port 5005 if it's not in use already).



### Scripts

The following commands can be found in the [`package.json`](./package.json) file in the project root. To execute them, simply use the command the following way:

```
npm run <command>
```

| Command   | Description                                       |
| --------- | --------------------------------------------------|
| `start`   | Starts the Node.js server for production.          |
| `dev`     | Starts the server with nodemon for development.    |


### Environment variables


| Variable            | Description                      |
| ------------------- | -------------------------------- |
| `PORT`              | Port for the API                 |
| `ORIGIN`            | App origin/title                 |
| `MONGODB_URI`       | MongoDB connection URI           |
| `TOKEN_SECRET`      | Secret key for authentication    |
| `CLOUDINARY_NAME`   | Cloudinary account name          |
| `CLOUDINARY_KEY`    | Cloudinary API key               |
| `CLOUDINARY_SECRET` | Cloudinary API secret            |

## File Structure

The file structure in the Jamlink front-end is organized as follows:

```plaintext
.
|-- .github/
|-- config/  
|-- controllers/  
|-- db/  
|-- error-handling/
|-- middleware/  
|-- models/ 
|-- routes/     
|-- .gitignore
|-- README.md
|-- app.js
|-- package-lock.json
|-- package.json
|-- server.js

```

## Used Technologies

- **Back-end:**
  - [Express](https://expressjs.com/) - Web framework for Node.js used on the server.
  - [Node.js](https://nodejs.org/) - Runtime environment for JavaScript on the server side.
  - [MongoDB](https://www.mongodb.com/) - NoSQL database used for data storage.
  - [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js.

- **Tools and Utilities:**
  - [GitHub Actions](https://github.com/features/actions) - For continuous integration and automatic deployment.

## API end Points


| works routes          |
| ---------------------- |
| Base URL : /works     |

| HTTP Method            | URI path           | Description                     |
| ---------------------- | -------------------| --------------------------------|
| GET                    | /listWork     | All work 
list Work                |
| POST                   | /newWork        | Add new work
new work                 |
| GET                    | /work:_id | Matching ID work details     
details work                
| POST                   |/delete/:work_id| Matching ID work deletion    

| Auth routes            |
| ---------------------- |
| Base URL : /auth       |

| HTTP Method            | URI path     | Description                 |
| ---------------------- | ------------ | --------------------------- |
| POST                   | /signup      | Signup user                 |
| POST                   | /login       | Login user                  |
| GET                    | /verify      | Verify Auth token           |

## License

This project uses various technologies and resources, each with its respective licenses. Below is the license information for the main technologies and tools used in the front-end:

### Back-end

- **Express**: [MIT License](https://opensource.org/licenses/MIT)
- **Node.js**: [MIT License](https://opensource.org/licenses/MIT)
- **MongoDB**: [Server Side Public License (SSPL)](https://www.mongodb.com/licensing/server-side-public-license)
- **Axios**: [MIT License](https://opensource.org/licenses/MIT)

### Tools and Utilities

- **GitHub Actions**: [GitHub Terms of Service](https://docs.github.com/en/github/site-policy/github-terms-of-service)


## Contact

Created by [Carlos Albendiz](https://github.com/illocarlos). 
