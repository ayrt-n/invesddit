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

### Skeleton Loaders

While waiting for resources to load (posts, comments, etc), users are displayed simplified skeleton loaders of the resource being requested to let them know that the application is working on their request.

![alt text](https://github.com/ayrt-n/invesddit/blob/main/demo/skeleton-loader.gif "Gif of invesddit feed loading")

### Account and Community Tooltips

### Realtime Updates and Dynamic User Interactions

### Recent Post Tracker

### Feed Controller and Sorting

### Keyword Search

### Infinitely Nested Comment System

### Protected User Actions

Like reddit, much of the applications functionality is not hidden to users whether logged in or not. However, if a user is not logged in and tries to perform an action which requires authorization, they will trigger an onboarding modal, prompting them to create an account and/or log in.

![alt text](https://github.com/ayrt-n/invesddit/blob/main/demo/protected-cta.gif "Gif of user trying to use protected resources and triggering onboarding modal")
