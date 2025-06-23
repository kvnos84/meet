# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Meet App

A **serverless**, **progressive web application (PWA)** built with **React**, using **Test-Driven Development (TDD)**. The app fetches upcoming events from the Google Calendar API and allows users to search for events by city, control how many are displayed, view event details, use the app offline, and see visual representations of event data.

---

## 🚀 Project Features

- Filter Events by City
- Show/Hide Event Details
- Specify Number of Events to Display
- Offline Support with Service Workers
- Add App to Home Screen (PWA)
- Display Charts Visualizing Event Details (Genres & Locations)

---

## 🎯 User Stories

### 1. Filter Events by City

> As a user interested in local events,  
> I should be able to filter events by city,  
> So that I can view only the events happening in a location I care about.

### 2. Show/Hide Event Details

> As a user browsing the event list,  
> I should be able to toggle the visibility of an event’s details,  
> So that I can get more information about an event only when I need it.

### 3. Specify Number of Events

> As a user viewing the events list,  
> I should be able to choose how many events are displayed at a time,  
> So that I can control the length of the list to suit my preferences or screen size.

### 4. Use the App When Offline

> As a user with limited or no internet access,  
> I should be able to use the app offline,  
> So that I can view previously loaded event data even when I'm not connected.

### 5. Add an App Shortcut to the Home Screen

> As a user who accesses the app frequently,  
> I should be able to add the app to my home screen,  
> So that I can launch it quickly without opening my browser and typing in the URL.

### 6. Display Charts Visualizing Event Details

> As a user trying to understand event trends,  
> I should be able to view charts that visualize event locations and genres,  
> So that I can easily see where most events are happening and which types are most popular.

---

## ✅ Test Scenarios (Gherkin Syntax)

### 1. Filter Events by City

```gherkin
Scenario: Show events for a selected city
  Given the user is on the main page
  When the user selects "Berlin" from the city search
  Then only events in Berlin should be displayed

Scenario: Show all events when "See all cities" is selected
  Given the user has filtered events by city
  When the user selects "See all cities"
  Then events from all cities should be displayed

Scenario: Show city suggestions while typing
  Given the user is typing "San" in the city input
  When suggestions appear
  Then the user should see a list of matching cities like "San Francisco" or "San Diego"

Scenario: Hide event details by default
  Given the user is viewing a list of events
  Then each event should show summary info only by default

Scenario: Expand an event to show details
  Given the user is viewing the event list
  When the user clicks “Show Details” on an event
  Then additional details for that event should be displayed

Scenario: Collapse an event to hide details
  Given an event’s details are visible
  When the user clicks “Hide Details”
  Then the event’s details should be hidden

Scenario: Default number of events is 32
  Given the user hasn't changed the number of events
  Then 32 events should be shown by default

Scenario: User sets a specific number of events
  Given the user is on the main page
  When the user sets the number of events to 10
  Then only 10 events should be displayed

Scenario: User inputs an invalid number
  Given the user inputs a negative number or non-numeric value
  Then the app should display an appropriate error or ignore the input

Scenario: View cached events offline
  Given the user has previously loaded events online
  And the device is offline
  Then the app should display cached events

Scenario: Notify user they are offline
  Given the user is offline
  When they open the app
  Then they should see a notification or banner indicating offline mode

Scenario: Prevent live updates when offline
  Given the app is in offline mode
  Then the app should not try to fetch new events from the API

Scenario: Prompt user to add app to home screen
  Given the app meets PWA installation criteria
  When the user opens the app in a browser on mobile
  Then they should see a prompt to add the app to their home screen

Scenario: App can be launched from home screen
  Given the app has been added to the home screen
  When the user taps the shortcut
  Then the app should open in a standalone window

Scenario: Show chart of events per city
  Given the user has loaded the app
  Then a chart should be visible showing number of events by city

Scenario: Show pie chart of event genres
  Given the user is viewing events
  Then a pie chart should be displayed showing distribution of event genres

Scenario: Charts update when events change
  Given the user filters events by a new city
  When the list of visible events changes
  Then the charts should update to reflect the new event data

```
