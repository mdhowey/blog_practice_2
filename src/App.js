import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './containers/Home';
import Hero from './components/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './containers/Contact';
import Post from './containers/Post';
import AboutUs from './containers/About';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/post" component={Post} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={Contact} />

      </div>
    </Router>
  );
}

export default App;