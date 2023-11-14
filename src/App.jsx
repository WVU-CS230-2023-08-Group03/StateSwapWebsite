import { useState } from 'react'
import Store from "./pages/Store"
import Profile from "./pages/profile/Profile"

import Layout from "./components/Layout/Layout.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'

import { Link } from "react-router-dom";


//Basically, this just checks what the current URL is and decides whether to render the Store page, the profile page, or etc
function App() {
    var whereAmI = window.location.pathname.split("/")[1];

    //we can add extra else-ifs to this bad boy when we implement more pages.
    if(whereAmI === "Profile"){
      return (<div>
        <Layout>
          <Profile></Profile>
        </Layout>
      </div>)
    }
    else{
      return (<div>
        <Layout>
          <Store></Store>
        </Layout>
      </div>)
    }
}

export default App;