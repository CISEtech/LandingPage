import React from 'react';
import './App.css';
import Maincontent from './components/javascript/Maincontent';
import SubContent from './components/javascript/SubContent';
import SubContentLandLord from './components/javascript/SubContentLandLord';
import SubContentWhole from './components/javascript/SubContentWhole';
import SubContentReach from './components/javascript/SubContentReach';
import SubContentText from './components/javascript/SubContentText';
import SubContentSlider from './components/javascript/SubContentSlider';
import SubContentStatic from './components/javascript/SubContentStatic';
import TopNav from './components/javascript/TopNav';
import Footer from './components/javascript/Footer';

function App() {
  return (
    <div className='App'>
      <TopNav/>
      <Maincontent/>
      <SubContent/>
      <SubContentSlider/>
      <SubContentWhole/>
      <SubContentStatic/>
      <SubContentLandLord/>
      <SubContentText/>
      <SubContentReach/>
      <Footer/>
    </div>
  );
}

export default App;
