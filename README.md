<img width="1440" alt="Screenshot 2023-05-10 at 10 43 18" src="https://github.com/francescoGuglielmi/career_companion/assets/99144401/ea966f86-a66a-48cc-9b9b-5940065be9f8"> <br/>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-career-companion">About The Project</a>
    </li>
      <li>
      <a href="#technologies">Technologies</a>
    </li>
    <li>
      <a href="#quickstart">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#start">Start</a></li>
        <li><a href="#test">Test</a></li>
      </ul>
    </li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#contact-us">Contact us</a></li> 
  </ol>
</details>

## About Career Companion

Career Companion is your ultimate job search assistant.

With us, you can easily track your job applications, manage your interviews, and receive reminders and notifications to stay on top of your job search.

At Career Companion, we understand that job hunting can be a daunting process. That's why we're here to support you every step of the way. Whether you're a recent graduate or an experienced professional, our platform can help you land your dream job.

## Technologies

Here's an overview of the technologies used to build this application.

- MongoDB
- Express
- React
- Node.js
- OpenAI API
- Tailwind
- Daisy UI
- Bcrypt
- JWT
- Nodemon
- Jest
- Cypress
- ESLint

## Quickstart

### Installation

1. install npm

```
npm install npm@latest -g
```

2. Clone this repo

```
git clone https://github.com/francescoGuglielmi/career_companion.git
```

3. Install NPM dependencies
```
; cd api
; npm install
; cd ../frontend
; npm install
```

4. Install MongoDB
```
brew tap mongodb/brew
brew install mongodb-community@5.0
```

5. Start MongoDB
```
brew services start mongodb-community@5.0
```

### Start

1. Start the server
```
; cd api
; JWT_SECRET=SUPER_SECRET npm start
```

2. Start the front end

In a new terminal session...

```
; cd frontend
; npm start
```

Browse to [http://localhost:3000/](http://localhost:3000/)

### Test

#### The Backend (API)

**Note the use of an environment variable for the JWT secret**

Start the server in test mode (so that it connects to the test DB)

```
; cd api
; JWT_SECRET=SUPER_SECRET npm run start:test
```

Then run the tests in a new terminal session

```
; cd api
; JWT_SECRET=SUPER_SECRET npm run test
```

#### The frontend (React)

**Note the use of an environment variable for the JWT secret**

Start the server in test mode (so that it connects to the test DB)

```
; cd api
; JWT_SECRET=SUPER_SECRET npm run start:test
```

Then start the front end in a new terminal session

```
; cd frontend
; JWT_SECRET=SUPER_SECRET npm start
```

Then run the tests in a new terminal session

```
; cd frontend
; JWT_SECRET=SUPER_SECRET npm run test
```

## Demo

<img width="1443" alt="Screenshot 2023-05-10 at 10 43 35" src="https://github.com/francescoGuglielmi/career_companion/assets/99144401/62014b3f-4131-46ca-aaca-4c70a8fccde3"><br/>

- Users can create an account, sign in and out and perform actions as the logged in user.

<img width="1454" alt="Screenshot 2023-05-12 at 11 11 21" src="https://github.com/francescoGuglielmi/career_companion/assets/99144401/96ced7ef-fe3c-4f89-a888-eafdc819bf57"><br/>

- Users can add and track job applications, update the status, add key details and add an interview date.

<img width="1456" alt="Screenshot 2023-05-12 at 11 11 46" src="https://github.com/francescoGuglielmi/career_companion/assets/99144401/a91d1512-b93a-4c53-945e-2016958b33aa">

<img width="1443" alt="Screenshot 2023-05-12 at 11 12 15" src="https://github.com/francescoGuglielmi/career_companion/assets/99144401/12bb94c1-3b67-415c-bed4-70a39739d374"><br/>

- Users can train for tech job interviews receiving feedback from AI on their answers to the provided questions.

<img width="1452" alt="Screenshot 2023-05-12 at 11 12 33" src="https://github.com/francescoGuglielmi/career_companion/assets/99144401/46b36ba6-4b24-46e3-81d8-cf0392db5d97"><br/>

- Users can create a tailored resume

<img width="1424" alt="Screenshot 2023-05-12 at 11 13 25" src="https://github.com/francescoGuglielmi/career_companion/assets/99144401/95e18441-63c5-4464-b96b-0271160bb63f"><br/>

- Users can generate a personalised cover letter through AI.

<img width="1449" alt="Screenshot 2023-05-12 at 11 15 37" src="https://github.com/francescoGuglielmi/career_companion/assets/99144401/317e1648-af75-43f6-bd44-66c8d6a9cbe9"><br/>

- Users can leave a review about the quality of the companies's hiring system and rate them.

### Live Demo

You can watch a live demo of Career Companion here: https://youtu.be/0VTqKqXxe3Y?t=1528

## Contact us

This was a group project, created by:

- Sarah Davies [LinkedIn](https://www.linkedin.com/in/sarahdavies1/) [Github](https://github.com/sarahdavies186)
- Konrad Duński [LinkedIn](https://www.linkedin.com/in/konraddunski/) [Github](https://github.com/k-dun)
- Francesco Guglielmi [LinkedIn](https://www.linkedin.com/in/francesco-guglielmi-4a238714b/) [Github](https://github.com/francescoGuglielmi)
- Adnan Mann [LinkedIn](https://www.linkedin.com/in/adnanmann/) [Github](https://github.com/AMANN23)
- With thanks to Kassandra Kalejaye for supporting with the planning stages
