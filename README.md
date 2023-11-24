Final project @ Technigo Bootcamp

# Tantverk

This is the final project at Technigo Bootcamp and it's a homepage for my mom and her crafts projects. The project included building both a back- and frontend as well as using Sanity for some content management.

*** NOTE *** Herokuapp is not active - and therefore the bulletin board is not working atm.

## Process

I started by sketching up a possible structure together with my mom where we decided what kind of features she wanted and which craft categories she wanted to display on the page.

* Front page
* About page
* Gallery page with all craft categories
* Event page
* For the backend part we decided that I would do a bulletin board where the messages would be stored in the database.

I first built the backend with a GET and POST endpoint and set up a reducer for the messages. Then I built the different pages and the routes in App.js as well as some components that I knew from the start that I would need, like the ones used for the bulletin page.

Since it's a crafts homepage I wanted the design to reflect that so my mom provided a photo with a project that had typical colors of crafts that she does, and from this I designed the layout and color scheme. The styling has been done with styled components.

A big focus was the user experience, and having a logical and easy to navigate page so I went for a Material-UI drawer with icons (the same as on the front page) and links that is present on all pages. For the gallery page I first only had a responsive React carousel but after having others testing the page I also built a footer with nav links so that it's easy to get to the different categories no matter if you're on the gallery page or on a catagory page.

On the event page I created 'postits' to display the different events and exhibitions as well as used a Material-UI accordion for the previous events, so that they aren't always visible. 

At first using a CMS platform was a stretch goal because it was something completely new for me, but after some consideration I decided it was the only relevant option for the content on the category pages. With some help from YouTube tutorials and the Sanity Slack channel I managed to install and set it up and after that it was really easy to add and change the titles, images and descriptions.

One of the last things I did was adding the pagination to both the back- and frontend on the bulletin page, only displaying 8 messages at a time.

!Backend deployed on Heroku so hours may run out for the month and then the bulletin board can't connect to the database.

### Dependencies Frontend

* react
* react-dom
* react-router-dom
* react-redux
* @reduxjs/toolkit
* styled-components
* moment
* @material-ui
* clsx
* react-multi-carousel
* sweetalert2
* Sanity (CMS)

#### Dependencies Backend

* express
* cors
* mongoose
* dotenv
* express-list-endpoints

##### Live

* Frontend: `https://tantverk.netlify.app/`
* Backend: `https://tantverk.herokuapp.com/`
