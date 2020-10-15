# sapientAssesment
The stack used are React,Redux,Express.
The approach is:
i)The app.js file from src directory is stringified and served on the homepage route as per SSR approach.
ii)Once the app is served,react-router takes over and the UI and its data requirements is taken care of by it.
iii)The Redux is being used as a central state management.
iv)Thunk is being used to provide a middleware for fetching data and then storing it.

Steps to run the app:-
i)Go into the app directory in the terminal.
ii)In the terminal write npm run ssr.
iii)Go to the browser and type localhost:8000

Screenshot For App Perfomance:-
Link:![image](https://user-images.githubusercontent.com/25960943/96171516-a840a880-0f42-11eb-87cc-8ddbb0519e59.png)

