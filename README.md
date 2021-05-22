<br />
<p align="center">
  <h1 align="center">Sight on Sights</h1>

  <p align="center">
    A travel planning website to search for points of interest by city and save favorite sites in a user's list
    <br />
    <h3 align="center">
     <strong>Contributers »</strong>
    <br />
     <a href="https://github.com/acdavitt">Amanda Davitt</a>
  </p>
</p>

# About
The objective of this project was to create a full stack web application over a two day sprint.  Triposo's API was used to seed the MongoDB database with points of interest by city via requests from an Express server.  I was responsible for the end-to-end design and implementation of the application.

![](https://media.giphy.com/media/SOsiWsILc9OtOlJvsu/giphy.gif)

# Features 

## Search Results
  * List of sites by city with a thumbnail photo, title, and caption
  * Each point of interest is clickable, linking to the Wikipedia page for more information
  * A point of interest can be saved to a favorites list by clicking the plus icon 

## Favorites List
  * List of saved sites that persists upon page refresh and exiting the website
  * An item may be removed by clicking the 'X' icon
 
 ![](https://media.giphy.com/media/DwzBfwzttNyg8rJ1ei/giphy.gif)
 
# Stack

<table>
  <tbody>
    <tr>
      <th>Frontend</th>
      <td>
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
         <img alt="HTML" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
         <img alt="CSS" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
      </td>
    </tr>
       <tr>
      <th>Backend</th>
      <td>
        <img alt="Node.js" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white" />
        <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />	
      </td>
    </tr>
    <tr>
      <th>Frameworks & Libraries</th>
      <td>
        <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
        <img alt="Material-UI" src="https://img.shields.io/badge/-Material--UI-%230081CB?&style=for-the-badge&logo=material-ui&logoColor=white" />
        <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?&style=for-the-badge"/>
      </td>
    </tr>
    <tr>
      <th>Utilities</th>
      <td>
        <img alt="Webpack" src="https://img.shields.io/badge/webpack%20-%2320232a.svg?&style=for-the-badge&logo=webpack&logoColor=%2361DAFB" />
        <img alt="Babel" src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black" />
        <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
        <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red" />
        <img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
      </td>
    </tr>
     <tr>
      <th>Workflow</th>
      <td>
        <img alt="Github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
        <img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/>
      </td>
    </tr>
  </tbody>
</table>

## Trello
A Trello board was used to create and track tickets.

# Development

## Repo
`git clone https://github.com/acdavitt/MVP.git`

## Install
`npm install`

## Start Scripts
```
npm run build:watch
npm start
npm start:server
```

## Triposo API Token

To create a API token:

1. Go to: https://www.triposo.com/api/console/20210317
2. Request token
3. Use the following format for requests to the API: 

ht<span>tps://</span>www.triposo.com/api/20210317/location.json?id=**city**&account=**account ID**&token=**API token**
  
or by adding HTTP headers to your request:

X-Triposo-Account: **account ID**
 <br />
X-Triposo-Token: **API token**
  
Note that this token is only viewable once, at generation time. Make sure to copy it to a secure place and never check it into your git history.
