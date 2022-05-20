# ReadMe

## A Daily Horoscope website with a restful API and React.js front end.
For my second project whilst studying at General Assembly, they placed us in small teams for a 36 hour hackathon. It had been just 3 days since I had first written anything in React. I am immensely proud of [Ana](https://github.com/Mafalda-hub) and I for building something in such a short space of time - and grateful to the team at GA for supporting us through our debut hackathon!

The web-app is deployed to Netflifly and can be found here: ::[StarFinder](https://starfinder-react.netlify.app/)::


<img width="864" alt="Screenshot 2022-04-30 at 3 02 23 pm" src="https://user-images.githubusercontent.com/97558359/168840828-1383994a-a0b5-4ae5-b334-f331e35b6447.png">

## Brief:
* Create a React web app that consumes a public API
* Multiple components using modern React syntax
* With multiple pages, make use of react-router
* 36 hours to deploy

## Code Installation
* Clone  / download [the repo](https://github.com/TomCRiley/StarFinder)
* Check if you have npm installed with the terminal command `npm -v` if not, head to [the npm docs](https://docs.npmjs.com/cli/v7/configuring-npm/install) to get it installed.
* Make sure you navigate to the root folder then spin up the server with `npm run start`

### Concept and approach
It took a little while, and we were concerned with how much time it was taking, but eventually we found a free public api [horoscope API](https://github.com/sameerkumar18/aztro) . We tested the endpoints in Postman, and it seemed to be returning a wealth of horoscope data in a neat object. So, we built a simple daily horoscope website. 


<img width="634" alt="Screenshot 2022-03-19 at 4 41 17 pm" src="https://user-images.githubusercontent.com/97558359/168840927-e858cc4c-dd66-4e0f-87e4-ab454a6c7cdb.png">

Some quirks with the API meant that though a GET request would make the most sense in RESTful terms, it actually required us to POST the request in order to return a JSON object with today’s horoscope.

We then wireframed a basic concept for the React front end in excalidraw. We were aiming for the following functionality: 

* A daily horoscope
* Star sign selector
* Register
* Login
* Like functionality to retain your favourite horoscopes


<img width="1158" alt="Screenshot 2022-03-19 at 3 52 11 pm" src="https://user-images.githubusercontent.com/97558359/168840968-d3b9ada9-79b0-4d42-a9eb-0f19290629e8.png">


### The build
We started with creating a Lib directory where we could add a file to contain all our API requests. We used *Axios* to grab the data.

``` javascript
export const getSingleSign = (sign) => {
  return axios.post(`${baseUrl}?sign=${sign}`);
};`
```

As mentioned earlier, we needed to use a Post request here for the main horoscope API request. We also created Axios endpoints for registering a user and login. 

We used React useEffect with state to set the data for the user in our JSX:
```javascript
const [sign, setSign] = React.useState(‘’);
  const [horoscope, setHoroscope] = React.useState(null);

  React.useEffect(() => {
    if (sign) {
      async function getData(params) {
        const { data } = await getSingleSign(sign);
        setHoroscope(data);
      }

      getData();
    }
  }, [sign]);
```

When the user chooses a sign, in the component’s return statement it sets the sign to the dropdown.

```javascript
       <Dropdown
          handleClick={setSign}
          formLabel=‘Choose a sign’
          buttonText=‘Send sign’
          action=‘/‘
          signs={signs}
        ></Dropdown>
```


This allowed us to update the html with the data pulled from the API dynamically. 

<img width="547" alt="Screenshot 2022-04-30 at 2 38 13 pm" src="https://user-images.githubusercontent.com/97558359/168841020-43888af5-27e6-41e0-8254-2e2cf89ac954.png">


For CSS and styling, we chose to go with Bulma which optimised the process. As it was a hackathon, the goal is to fulfil the brief as quickly as possible — not to make the most beautiful product! Bulma offers complete components built with class names right out the box. For instance, to create a Navbar, we used `<nav className=‘navbar’ role=‘navigation’ aria-label=‘main navigation’>`.

With regards to Login and Registration functionality, though we wrote all the endpoints and most of the component and JSX structure, unfortunately we ran out of time. This was an ambitious project for us and it was our first time working with React!

### Design
Inspired by the moon! I have, shall we say, very little experience with star signs and the moon. This required research. Viral apps in the last few years like Co-Star updated the star sign aesthetic to have more of a minimal look: typefaces that are serif, simple black and white colour palettes and pencil illustration.

<img width="954" alt="159166611-145ba7fd-7367-4d85-b78d-a8e6c6c4f787" src="https://user-images.githubusercontent.com/97558359/168841050-a02a924f-68f6-4fb6-a787-c49e308c6bb2.png">
Above, co-star astrology.

Moonly.app has an inspired 70s aesthetic - Sabrina the Teenage Witch is what first came to mind for me. Graphics of stars and moons are prominent, whilst ‘groovy’ typefaces stand out against a dark background.

<img width="832" alt="159166615-d05a7b31-61a1-410e-8f38-00b6166be0d8" src="https://user-images.githubusercontent.com/97558359/168841071-7b7e6b64-664c-4082-83a0-766690eb11eb.png">
Above, moonly.app
Using a combination of standups and Trello in the limited timeframe, we managed to meld these two concepts and came up with /Star Finder/. 


### Wins & Challenges
We used [Bulma.io](http://Bulma.io) for our CSS framework in the hopes it would speed up the development of our front end structure so that we could focus on the main task of the logic and API integrations. Although Bulma’s documentation is very beginner friendly and highly legible, using a framework for the first time proved a big mountain to climb and we found it difficult to quickly build out the skeleton of the website. 

Media queries are absolutely vital and are not a 5 minute job! A consideration for next time; do we want to build mobile first? A horoscope website might have a more mobile user base.

This was my first time using Git for a proper collaborative project. Defining a workflow took time in itself, with each of us building separate components and then pushing and merging with git source control. It was an extremely valuable lesson in how to collaborate on a project together remotely.

It was a great experience and we had so many wins including learning proper version control with Git, learning how to deploy with Netlify and pair-programming. React already feels familiar due to the way we learnt to build in individual features across components and then merge the code. 

### Stretch goals
At the time of writing, we don’t have a working login and register function - we simply didn’t have the time to implement these features.

We also would like to have had a better implementation of the data that [Aztro API](https://aztro.sameerkumar.website/) gave us. Right now, the data is in a simple drop down menu, but we could spread much of it across an entire web page, or as per our excalidraw wireframing, we could have a card interface with yesterday and tomorrow’s horoscopes on a carousel for the user to interact with.


## More about me
You can find me at www.tomriley.dev where I maintain all my live portfolio projects. You can also email me ➡️[📧(click me!)](mailto:hello@tomriley.dev)⬅️  

I’m a junior software engineer with a whole lot of love for tech and learning. Connect with me on [LinkedIn](https://www.linkedin.com/in/tomcriley/)!
