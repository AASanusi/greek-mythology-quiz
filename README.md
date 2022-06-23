# Greek Mythology Quiz

## Overview
Greek Mythology Quiz website is an interactive site created to test the knowledge of users who are interested in Greek Mythology. It is designed to be both fun and challenging for all users regardless of their level of knowledge on Greek Mythology. It consists of 5 questions that ranges in difficulty and targets users of all ages, genders and interests. 

This quiz site is inteneded to challenge the knowledge of users who are already fascinated about Greek Mythology and hopefully to spark an interest in users who aren't as well versed in Greek Mythology. 

HTML and CSS3 technologies were used to creeate the general structure and design of the website. JavaScript technology was then used to bring website alive making it interactive for the users to use and play.

[View live website here!](https://aasanusi.github.io/greek-mythology-quiz/)

![Screenshot of greek mythology quiz website across all devices](assets/images/initial-screenshot-greek-mythology-quiz-all-devices.png)


## Table of Contents
- [User Experience (UX)](#User-Experience-UX)
   - [User Stories](#User-Stories)
      - [First Time User](#First-Time-User)
      - [Returning User](#Returning-User)
      - [Consistent User](#Consistent-User)

- [Features](#Features)
   - [Existing Features](#Existing-Features)
      - [Header](#Header)
      - [Home Page](#Home-Page)
      - [Quiz Page](#Quiz-Page)
      - [Endpoint Page](#Endpoint-Page)
      - [Highscores Page](#Highscores-Page)
      - [Future Implementation](#Future-Implementation)

- [Design](#Design)
   - [Typography](#Typography)
   - [Colour Layout](#Colour-Layout)
   - [Balsamiq Wireframe](#Balsamiq-Wireframe)

- [Technologies Used](#Technologies-Used)
   - [Languages Used](#Languages-Used)
   - [Frameworks, Libraries And Programs Used](#Frameworks-Libraries-And-Programs-Used)
      - [Balsamiq](#Balsamiq)
      - [Git](#Git)   
      - [Gitpod](#Gitpod)
      - [Github](#Github)
      - [Google Fonts](#Google-Fonts)
      - [Font Awesome](#Font-Awesome)
      - [ColorSpace](#ColorSpace)
      - [Google Fonts](#Google-Fonts)
      - [Favicon.cc](#Favicon.cc)

- [Testing](#Testing)
   - [Manual Testing](#Manual-Testing)
      - [Header](#Header)
      - [Test Yourself](#TestYourself!)
      - [High Scores](#High-Scores)
      - [Answers](#Answers)
      - [Save](#Save)
      - [Restart](#Restart)
      - [Home](#Home)
      - [Homepage](#Homepage)

   - [Validator Testing](#Validator-Testing)
     - [HTML](#HTML)
     - [CSS](#CSS)
     - [JavaScript](#JavaScript)
     - [Lighthouse](#Lighthouse-Testing) 

   - [Bugs Encountered And Solved](#Bugs)
    
- [Deployment](#Deployment)

- [Credits](#Credits)
   - [Media](#Media)
   - [Code](#Code)
   - [Content](#Content)
   - [Acknowledgments](#Acknowledgments)


## User Experience (UX)
- ### User Stories
  - #### First Time User
    - As a First Time User, I want to understand what the website is about from the main page.
    - As a First Time User, I want to know the subject matter of the quiz.
    - As a First Time User, I want the site to be easy to navigate in order to access the questions for the quiz.
    - As a First Time User, I want to know the amount of questions there is in the quiz.
    - As a First Time User, I want to know my progression status.
    - As a First Time User, I want to see my score in real time as I'm going through the quiz.
    - As a First Time User, I want all the buttons to direct to the correct pages it's intended to take me to.
    - As a First Time User, I want to know in real time if my answer selection are correct or incorrect.
    - As a First Time User, I want to be able to save and access my score after completing the quiz.
    - As a First Time User, I want to be able to restart the game.

   - #### Returning User
     - As a Returning User, I want to easily find my way to the quiz.
     - As a Returning User, I want to access the homepage at anytime during the quiz.
     - As a Returning User, I want to be able to save my most recent score.
     - As a Returning User, I want to be able to view and compare all my scores.

   - #### Consistent User
     - As a Consistent User, I want to able to get straight to the quiz.
     - As a Returning User, I want to access the homepage at anytime during the quiz.
     - As a Consistent User, I want to be able to access the scores table from the homepage.

## Features
Each individual feature on this quiz site was designed to make it easy for the users to navigate this site without running into any issues. This site is made up of clickable button that ranges in accessibility to either direct the users to the quiz page, home page, the highscore page and actually answering the questions asked on the quiz page.

- ### Existing Features
  - ### Header
    - This consists of the heading of the page which provides details on that the site is. This heading lets the user know that this is a Greek Mythology Quiz site.
    - The header was also created to be able to be clicked at anytime and will direct user back to the home page. This was to provide the user the option to be able to go to the homepage at any given time during the game or after.

![Screenshot of the header](assets/images/header-screenshot.png)

  - ### Home Page
    - The home page has a well balanced colour structure from the header, the messages and the buttons. The colours on the homepage is consistent across the site.
    - The home page consists of welcoming messgae that informs the user about the page and urges the user to challenge their knowledge on Greek Mythology.
    - The home page also consists of two clickable buttons: Test Yourself! and High Scores button. Both buttons has hover to ensure the user knows which button they are about to click. Both buttons increase in size and highlighed with a shadow of their respective colour when hovered over.
    - The "Test Yourself!" button takes the user to the quiz page.
    - The "High Scores" button takes the user to the Highscore page. 

![Screenshot of the homepage](assets/images/homepage-screenshot.png)  

  - ### Quiz Page
    - The quiz page follows the same colour scheme and aesthics as the home page.
    - The quiz page consists of the question which is captuted in blue writing and the four answer choices buttons in blue with white writing.
    - Each answer buttons increases in size and highlights with a shadow of their respective colour when hovered over.
    - When user clicks one of the button, it will either turn "red" meaning incorrect answer or turn "green" which means answer selected was correct. After each selection incorrect or correct, the page moves on to the next question until reaching the endpoint.
    - At the bottom the quiz page, there's a display text for amount of questions completed out of the overall questions, progression bar and a scoring meter. 

![Screenshot of the Quiz Page](assets/images/quiz-page-screenshot.png)  

  - ### Endpoint Page
      - After completing all questions, user directed to the endpoint page of the quiz. Endpoint is aesthically similar to the other pages.
      - The endpoint page shows the user's score at the top with a message belwo informing the user they've reached the end of the game.
      - Below the score and endpoint message is another messgae that informs the user to input their name in the box provided to save their scores. The box has a placeholder to prompt the user to enter their name in the box.
      - Below the input box, there are 3 buttons: "Save" button, "Restart!" button and "Home Page" button. The "Save" button allows the users to save their details and scores which directs them to the High Score page once clicked. "Restart!" button allows user to start quiz over."Home Page" when clicked on will take the user back to the home page.

![Screenshot of the Endpoint Page](assets/images/endpoint-screenshot.png)  

  - ### Highscores Page
      - The highscores page consists of the scores table heading to inform the user of the leaderboard table.
      - The scores tables updates automatically when user save their scores. This will show users name alongside with the score.

![Screenshot of the Highscores Page](assets/images/highscore-screenshot.png)  

- ## Future Implementation
  - ### Additional questions
      - To add more questions to the quiz to really challenge the users knowledge. This will also increase the time spent on the quiz providing a more worthy user experience.

  - ### Sharing scores
      - Provide a button to be able to share scores to social media. This will allow users to boast about their scores online.
      - Doing this will also bring traction to the site as it will pique the interest of people online.

## Design
  - ### Typography 
      - The Arvo family font is the main font used for the header, questions and all headings across the page. This font gives a Greek aesthic feeling to the elements it was applied on.
      - Oswald family is the secondary font that was used for the rest of the elements that appeared in the body of the site. Oswald font complemented the Arvo font to give a nice consistent aesthic structure to the page.
      - Sans serif used as the fallback font in case the Arvo family font doesn't load in some browsers. San serif is the standard font to use as a fallback.

  - ### Colour Layout
      - The colour idea came from the website [ColorSpace](#https://mycolor.space/), this genrates complementary colours to use on the site.
      - The colour layout of this site consists of three main colours which are white, blue and light pastel green. The white colour used for the text inside the buttons and header text. The blue to encapsulate the header text, the buttons text, questions, scores text at the bottom of the quiz page and the end point text. The light pastel green was used as the overall background colour of the site. 
      - There are other colours that features on the site: black for the display progression question text, the actual score text and the message to inform the user to enter details. There's also a brown-reddish colour used for the score details on the highscore page.    

![Screenshot of the colours used from ColorSpace](assets/images/colorspace-screenshot.png)

  - ### Balsamiq Wireframe
      - Balsamiq wireframe used to create the initial idea of the website layout. This was later developed even further when coding.

![Screenshot of balsamiq wireframe one](assets/images/balsamiq-screenshot-one.png)

![Screenshot of balsamiq wireframe two](assets/images/balsamiq-screenshot-two.png)

![Screenshot of balsamiq wireframe three](assets/images/balsamiq-screenshot-three.png)



     


