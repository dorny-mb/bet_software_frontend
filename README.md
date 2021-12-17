# betsoftware frontend

This repository contains the betsoftware frontend code.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before we get started, we're going to need to make sure we have a few things installed and available on our machine.

#### Node >= 12

##### MacOS

```bash
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

##### Other

See the installation guides available @ nodejs.org:

https://nodejs.org/en/download/package-manager/

#### Yarn

```bash
npm i -g yarn
```

### Installing

Below is a series of step by step instructions that tell you how to get a development env running.

Create a local clone of the repository

```bash
git clone git@bitbucket.org:betsoftware/betsoftware-frontend.git
```

Enter the cloned repositories' directory

```bash
cd betsoftware-frontend
```

Install the projects dependencies

```bash
yarn
```

Create a `.env` file based on the [.env.example template](.env.example)

Export the contents of the created `.env` file to the current terminal session.

```bash
set -o allexport; source .env; set +o allexport
```

Start the backend server or alternatively update the `REACT_APP_API_HOST` value to point to a deployed backend URL.

Start the projects development server

```bash
yarn start
```

The project should now be available at http://localhost:3000

![login page](https://nsokoo-assets.s3.sa-east-1.amazonaws.com/Screenshot+2021-12-17+at+23.46.22.png)
![login page](https://nsokoo-assets.s3.sa-east-1.amazonaws.com/Screenshot+2021-12-17+at+23.49.03.png)

## Authors

- **Dorny Muba** <dornymuba2016@gmail.com>

## Meta

| Version | Author                               | Date       |
| ------- | ------------------------------------ | ---------- |
| 0.0.1   | Dorny Muba <dornymuba2016@gmail.com> | 17/03/2020 |
