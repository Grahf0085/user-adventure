## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## State
1) HP
2) Gold
3) Quests Completed
4) Toon Name

## Welcome Screen
1) H1 for title
2) Input for name
3) Radio buttons for classes
4) Button to Submit
5) On Submit
    * Load name and class into local storage

## Map Page
1) DIV with background image and links to quests
2) On Load
    * Load links for quests not completed - id in query params (somehow)
    * If dead or beat game go to results page
    * Disable links for completed quests

## Quest Page
1) DIV to put stuff into
2) On Load
    * Get quest object that matches query selector
    * Use that object to render items to page using for loop and append
3) On Submit
    * Update HP, Gold, completion status of quest
    * Give feedback to player in the form of text (story) about their choice
    * Redirect user back to map

## Results Page
1) DIV to put stuff into
2) On Load
    * Render results based on current state

## Backlog
1) Do data modeling
    * name: from user input
    * class: from user selection
    * hp: from class?
    * gold: born with it?
    * completed: true or false for each quest
2) Utils
    * findById
    * getter and setter for local storage
3) HTML skeleton

