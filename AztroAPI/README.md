# 48hr Hackathon React Web App with API.

### A Daily Horoscope website with a restful API and React.js front end.

For my second project whilst studying at General Assembly, they placed us in small teams for a 48 hour hackathon. It had been just 3 days since I had first written anything in React. I am immensely proud of [Ana](https://github.com/Mafalda-hub) and I for building something in such a short space of time - and grateful to the team at GA for supporting us through our debut hackathon!

### Concept

Interestingly, the hardest part of this challenge was not the pseudo-coding and logic process - but finding an API that was free, well structured and clean.

![Postman Data](../AztroAPI/src/assets/readme/postmandata.png)

We then wireframed a basic concept for the React front end in excalidraw.

![Excalidraw Wireframing](../AztroAPI/src/assets/readme/excalidraw.png)

### Website functions

- User can register
  - they’d receive an optimised interface that as soon as they log in they would see their horoscope - removing some friction
- Login
- Favourites
  - user can favourite Horoscopes that resonate with them
- For users that aren’t logged in - they’d be presented with an interface allowing them to select their sign if they know it, or input their date of birth to be told their sign - and then get their daily horoscope.

### Design

Inspired by the moon! I have, shall we say, very little experience with star signs and the moon. This required research. Viral apps in the last few years like Co-Star updated the star sign aesthetic to have more of a minimal look: typefaces that are serif, simple black and white colour palettes and pencil illustration.

![Costar website](../AztroAPI/src/assets/readme/costarwebsite.png)

Above, co-star astrology.

Moonly.app has an inspired 70s aesthetic - Sabrina the Teenage Witch is what first came to mind for me. Graphics of stars and moons are prominent, whilst ‘groovy’ typefaces stand out against a dark background.

![Moonly.app website](../AztroAPI/src/assets/readme/moonlywebsite.png)

Above, moonly.app

![Starfinder homescreen grab](../AztroAPI/src/assets/readme/starfinder.png)

We tried our best in the limited time to meld these two concepts and came up with _Star Finder_.

### Main takeaways

This was my first time using git for a proper collaborative project. Defining a workflow took time in of itself - each building separate components and then pushing and merging. These are all very new experiences to me and though we had our trials (and hair pulling-out moments) along the way - it was an extremely valuable lesson in how to collaborate on a project together remotely.

Planning, planning, planning. Work from the outside inward in terms of structure, but at the same time make sure you understand the logic of your API at the core and how it will need to be integrated into the wider codebase.

### Things we’d do differently

We used [Bulma.io](http://Bulma.io) for our CSS framework in the hopes it would speed up the development of our front end structure so that we could focus on the main task of the logic and API integrations. Unfortunately, though Bulma’s documentation is very beginner friendly and highly legible - using a framework for the first time break some of the concepts of SCSS that we’d been learning; this resulted in us having to work overtime on our CSS to make it all work as expected - lesson learned!

Also, media query’s are absolutely vital and are not a 5 minute job! A consideration for next time; do we want to build mobile first? A horoscope website might have a more mobile user base.

### Stretch goals

At the time of writing, we don’t have a working login and register function - we simply didn’t have the time to implement these features.

We’d also liked to have had better interpretation of the data that [Aztro API](https://aztro.sameerkumar.website/) gave us. Right now, the data is in a simple drop down menu, but we could spread much of it across an entire web page, or as per our excalidraw wireframing, we could have a card interface with yesterday and tomorrow’s horoscopes on a carousel for the user to interact with.

Overall, this was a fascinating project. It had its frustrations but it really taught me the concepts of React, hooks and component structure.
