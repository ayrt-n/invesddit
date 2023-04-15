# Invesddit - A Finance Related Content Aggregation and Discussion Website

## Summary

Invesddit is a finance related content aggregation and discussion website. While there are a variety of finance related forums across the web (e.g., [Stockhouse.com](https://www.stockhouse.com), [TheCoBF.com](https://thecobf.com), [ValueInvestorsClub.com](https://valueinvestorsclub.com)), the user interfaces tend to be dated and features are limited. All-in-all, these websites are in need of an update!

As part of the final project for [The Odin Project](https://www.theodinproject.com/lessons/javascript-javascript-final-project), I was tasked with replicating one of my favorite websites as closely as possible. For my final project I wanted to build a competitor to these finance forums with an updated user interface and rich set of features, all inspired by one of my favorite websites - Reddit.

As a result, Invesddit was born! 

This repo is for the React frontend portion of the Invesddit. You can find more information on the backend Ruby on Rails API [here](https://github.com/ayrt-n/invesddit-api).

![alt text](https://github.com/ayrt-n/invesddit/blob/main/demo/readme-hero-example.png "Screenshot of Invesddit main page")

## Set up

### Using Web Brower

The simplest way to view Invesddit is live on Github at https://ayrt-n.github.io/invesddit/

Please note that it may take 30-45 seconds for the Heroku dyno to start up if the application has been inactive for awhile.

### Using Local Machine

If you want to run Invesddit locally on your own machine, you will first need to clone and set up the backend API by following the instructions in the associated repo [here](https://github.com/ayrt-n/invesddit-api).

After setting up the backend and starting the server, clone this repo into a fresh directory, navigate to that directoy, and run:

```npm start```

A browser window should now open up with the application running on the frontend. If your browser does not automatically open, simply open a browser tab and navigate to http://localhost:3000

You should now have your own copy of Invesddit running locally on your own machine!

## Features / Demo

One of the goals for this project was to replicate a number of features offered by Reddit in order to help improve the user experience offered by the typical finance-related forums. The following section highlights some of the main features:

### Infinite Scroll Pagination

Should Invesddit grow and start to accumulate a significant number of posts, we would want to avoid unnecessarily loading all of these posts at one time. To help with this, we've implemented pagination on the backend and infinite scroll pagination on the frontend to allow users to keep scrolling and lazily loading more posts once they reach the bottom of the feed.

![alt text](https://github.com/ayrt-n/invesddit/blob/main/demo/infinite-scroll.gif "Gif of user scrolling and loading posts")

### Skeleton Loaders

While waiting for resources to load (posts, comments, etc), users are displayed simplified skeleton loaders of the resource being requested to let them know that the application is working on their request.

![alt text](https://github.com/ayrt-n/invesddit/blob/main/demo/skeleton-loader.gif "Gif of invesddit feed loading")

### Account and Community Tooltips

Community and account tooltips included on each post to help users easily view more information about the community or the author of the post. Tooltips only displayed if hovered for a certain amount of time using JavaScript to avoid opening tooltip if user accidentally hovers.

![alt text](https://github.com/ayrt-n/invesddit/blob/main/demo/tooltips.gif "Gif example of community and account tooltips on hover")

### Realtime Updates and Dynamic User Interactions

To make Invesddit feel dynamic and responsive, user interactions provide real time updates to the user interface through the use of React state. The example below shows a user liking and commenting on a post, as well as liking the comment. Once a request is made to the backend API and a success response is received, the application will update the state appropriately to show users "realtime" updates and avoid reloading the entire page.

![alt text](https://github.com/ayrt-n/invesddit/blob/main/demo/realtime-updates.gif "Gif of user liking and commenting on a post")

### Recent Post Tracker

### Feed Controller and Sorting

### Keyword Search

### Infinitely Nested Comment System

To allow for deep discussions, users are able to comment on posts and reply to other comments. Like Reddit, the comment system allows for infinitely nested commenting, allowing for users to reply to replies to replies on replies, etc... Given the comment section can get unwieldy, you are also able to collapse and uncollapse comment threads to hide comments you are no longer interested in.

![alt text](https://github.com/ayrt-n/invesddit/blob/main/demo/nested-comments.gif "Gif example of user commenting and collapsing comment thread")

### Protected User Actions

Like reddit, much of the applications functionality is not hidden to users whether logged in or not. However, if a user is not logged in and tries to perform an action which requires authorization, they will trigger an onboarding modal, prompting them to create an account and/or log in.

![alt text](https://github.com/ayrt-n/invesddit/blob/main/demo/protected-cta.gif "Gif of user trying to use protected resources and triggering onboarding modal")
