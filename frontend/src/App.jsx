import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Only include this line once
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HostEventForm from './HostEventForm';
import ParticipateEventForm from './ParticipateEventForm';
import ProtectedRoute from './ProtectedRoute';


const App = () => {
  const handleHostEvent = async (eventDetails) => {
    // Handle hosting event logic
  };
  const handleParticipateEvent = async (participantDetails) => {
    // Handle participating event logic
  };
  return <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/host" component={() => <HostEventForm onSubmit={handleHostEvent} />} role="host" />
      <ProtectedRoute path="/participate" component={() => <ParticipateEventForm onSubmit={handleParticipateEvent} />} role="participant" />
    </Switch>
    <Navbar />
    <HeroSection />
    <Services />
    <About />
    <Contact />
    <Footer />
    <Toaster />
  </Router>;
};

export default App;
