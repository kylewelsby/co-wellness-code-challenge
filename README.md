# Co-Wellnes Code Challenge

[Co-Wellness](https://www.co-wellness.com/) code challenge completed by [Kyle Welsby](https://github.com/kylewelsby)

👉 https://kylewelsby.github.io/co-wellness-code-challenge/ 👈

## ⚡️ System Dependencies
This project requires Node.js to build and run.

_At time of writing the latest stable version is Node.js 14.8.0_

## 🎲 Installation

Within the working directory of this project after checking it out to your local computer.

Run the following commands.

```bash
yarn install
```


## 🎯 Usage

### Application

Start a local development server with the following command

```bash
yarn dev
```

To deploy the resulting code to a Web Server, the code must be compiled before deployment.

```
yarn generate
```

The resulting code in `./dist` can be uploaded to your Web Server of choice.


### Storybook

Start a local storybook development server with the following command

```bash
yarn nuxt storybook
```

To deploy the resulting code to a Web Server, the code must be compiled before deployment.

```bash
yarn nuxt storybook build
```

The resulting code in `./storybook-static` can be uploaded to your Web Server of choice.

## 🎓 License

MIT: https://kylewelsby.mit-license.org
