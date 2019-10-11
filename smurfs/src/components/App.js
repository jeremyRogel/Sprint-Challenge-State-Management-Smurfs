import React, { Component } from "react";
import Header from './Header';
import SmurfInfo from './SmurfInfo'
import Form from "./Form";
import "./App.css";

function App() {
    return (
      <div className="App">
        <Header/>
        <Form />
        <SmurfInfo/>
      </div>
    );
  }

export default App;