# LyriksSpotifyClone

![Current Version](https://img.shields.io/badge/version-v0.1-blue)
![GitHub contributors](https://img.shields.io/github/contributors/madhur-taneja/README-Template)

Open and view the Project using the `.zip` file provided or at my [GitHub Repository]

The project is also hosted on [Official Site]

## Table of Contents
- [Getting Started](#getting-started)
	- [Tools Required](#tools-required)
	- [Installation](#installation)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started

* `master` contains aggregate code of all branches

```
LyriksSpotifyClone
	├── README.md
	├── package-lock.json
	├── package.json
	├── postcss.config.js
	├── tailwind.config.js
	├── vite.config.js
	├── index.html
	├── license
	├── .gitignore
	└── src
		├── assets
		│	└── ...
		├── components
		│	├── MusicPlayer
		│	└── ...
		├── pages
		│	└── ...
		├── redux
		│	├── features
   		│       │	└── playerSlice.js
		│	├── services
   		│       │	└── shazamCore.js
		│	└── store.js
		├── App.jsx
		├── index.css
		└── index.jsx
```

### Tools Required

* Any web development IDE can be used, but I would recommend Visual Code.
* React, React-DOM, React-Router-DOM, React-Icons, Tailwind CSS, Swiper and  Redux Toolkit.
* Third Party Tools: Axios, RapidApi Cli, GEO.IPFY, Vite JS.


### Installation

Note: All installations are done using npm.

* Installing React-DOM
  ```
    npm i react-dom
  ```

* Installing React-Router-DOM
  ```
    npm i react-router-dom
  ```

* Installing React-Icons
  ```
    npm i react-icons
  ```

* Installing Tailwind CSS (Note: Installed through app creation using Vite JS)
  ```
	npm create vite@latest
  ```

* Installing Swiper
  ```
	npm i swiper
  ```

* Installing Redux Toolkit
  ```
	npm i @reduxjs/toolkit
  ```

* Installing Axios
  ```
	npm i react-axios
  ```

* Installing RapidApi Cli
  ```
	Installed within Visual Studio Code by browsing extensions and searching for RapidApi
  ```
  

## Running the App
There are two ways in running the app:

* First Way (Recommended):
  ```
    npm run dev
  ```

* Second Way:
  ```
    npm start
  ```

## Deployment

The app is deployed on **Netlify**.

### Steps in Deploying App

1. Create Netlify account.
2. Go to *Sites*.
3. Click on *Add New Site*.
4. Select *Import an existing project*.
5. Use any of the Git Providers (Note: I'll continue with GitHub as it's the most common used)
6. After connecting to your GitHub account, choose the existing repositiry you would like to deploy.
7. Click on *Deploy Site*.
8. Wait for site to build and deploy.

## Authors

#### Omar Adam Mostafa
* [GitHub]
* [LinkedIn]

## License

`LyriksSpotifyClone` is open source software [licensed as MIT][license].

## Acknowledgments

* This app was developed through a tutorial on YouTube called **Build and Deploy 3 Modern React API Applications in 8 Hours - Full Course | RapidAPI** by JavaScript Mastery.

[//]: # (HyperLinks)

[GitHub Repository]: https://github.com/OmarAdamMostafa/LyriksSpotifyClone
[Official Site]: https://lyriks-app-omar.netlify.app/

[GitHub]: https://github.com/OmarAdamMostafa
[LinkedIn]: https://www.linkedin.com/in/omar-adam-mostafa-a445a3259/

[license]: https://github.com/OmarAdamMostafa/LyriksSpotifyClone/blob/main/license
