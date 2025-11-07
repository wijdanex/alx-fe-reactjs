import React from 'react';
import Counter from "./components/Counter";
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Danny Iris" age="21" bio="A digital marketing student who loves travel and learning React!" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
