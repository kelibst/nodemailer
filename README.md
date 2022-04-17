![](https://img.shields.io/badge/Microverse-blueviolet)

# nodeMailer

> A NodeJs API.

## Built With

- NodeJs
- ExpressJs
- MongoDB
- Mongoose
- dotenv
- googleapis
- Validator

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Ensure you have to following installed and Running on your machine

- MongoDB
- NodeJs
- NPM

### Setup

    - Follow this link to generate clinetId and clientSecret https://developers.google.com/gmail/api/quickstart/nodejs
    - Use that ID and Secret and create a .env file with using the sampleenv.txt file provided

### Install

- npm install

### Setup

    npm run dev

### Usage

- Visit http://localhost:3001/v1/token to generate a token. It will return a URL.
- Copy the url and paste it into your browser
- Login into your gmal account and give the app access
- Visit http://localhost:3001/v1/mails/list to generate your email list. This email list will be saved into your mongoDB database
- Visit http://localhost:3001/v1/mails/ to get a json format of your recent 20 mails

👤 **Author1**

- Github: [@kelibst](https://github.com/kelibst)
- Twitter: [@keli_booster](https://twitter.com/keli_booster)
- LinkedIn: [Kekeli (Jiresse) Dogbevi](https://www.linkedin.com/in/kelibst/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./MIT.md) licensed.
