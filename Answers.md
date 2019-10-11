1. What problem does the context API help solve?

the context API helps with managing small scale state management, so that your calls wont get crossed and the app wont work.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

a reducer in redux is a pure function that takes in state and action, and returns whats coming next.
the action is the data that is being sent from the application to the store.
the store is a container where the information gets passwed through for each application. it is wehre the information is stored and retreived from for a later use.

each piece is a part of the applications call to get information and each bit does something with the data being passed.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

the application state is global and the component state is local. when you want to change something across the entire app you would modify the applciation state. if you want to make a smaller scale change you would use the component state. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

it is middelware that allowes a user to return a function instead of an action object. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

i like using Redux because it allows for easier change with more information that is being used. That being said, i see the merits in using context API because of its ease of use when using smaller scale applications.