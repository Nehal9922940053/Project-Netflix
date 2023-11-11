import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './store';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
   <App />
  </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//Redux : Library for js app
//Redux:Predictable state container for js app
//Redux:Predictable  || state || container || for js app
//To-do list:update , input,
//update: Item /task - (pending) - (completed)
//Redux toolkit why?
//Abstraction of Redux

//KFC
//entity                                activities
// - shop stores the chicken wings      Customer - Complaints - order placing - decisions
// - shopkeeper -                       menu - Scan QR code - place order - print receipt - availability check - accept  -perp - deliver -
// - customer  -



//KFC           Redux        purpose
//Shop          store        Holds the states
//Wings order   Activity     Describe what is happening
//shopkeeper    Reducer      Ties the store along with the  action

// 3 Principles
//1st: Global state: The global state of your application is stored as a object inside a single store
// Tracking of wings 
//{
 // numberOfWings:50 
//}

//2nd: The only way to change the state is to dispatch an action , an object that describe what happened.
//KFC
//Scanning of QR and Placing the order - Cake_order
//state{
// type: "Cake_order"
//} 

//3rd: To Specify the state tree is updated based on  a action, you write pure reducers
//we need right to pure reducer to determine how the state changes
//pure function
//Reducer - {previousState, action}=> newState

//KFC
//Reducer is shopkeeper
//const reducer = (state = initialState, action)=>{
// switch(action.type)
//case CAKE_ORDER
//return{
//numberOfWings: state.numberOfWings -1
//}
//}


//visualize
// js app
//state is maintained by - redux store
//to update the state it must dispatch a action
//dispatch an action - reducer will handle 
