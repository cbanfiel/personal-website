import React from 'react';
import logo from './GENERIC.png';
import appstore from './appstore.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          On Paper Sports
        </p>
      </header>
      <div className="games">
        <div className="basketball">
          <h2>On Paper Sports Basketball '20</h2>
          <p>Available Now!</p>
          <div className="vid-container">
          <iframe className="iframe" src="https://www.youtube.com/embed/AySQYTJunPI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="links">
          <a href='https://play.google.com/store/apps/details?id=com.chadbanfield.onpapersportsbasketball20&hl=en_US&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img class="storeimg" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
          <a href='https://play.google.com/store/apps/details?id=com.chadbanfield.onpapersportsbasketball20&hl=en_US&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img class="storeimg" alt='Get it on Google Play' src={appstore}/></a>
          </div>
        </div>
        <div className ="hockey">
          <h2>On Paper Sports Hockey '20</h2>
          <p>Coming Soon!</p>
        </div>
        </div>
      <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>This is the privacy policy for all On Paper Sports applications, none of your personal data is stored or collected in any way! So go have fun worry free!</p>
        </div>

    </div>
  );
}

export default App;
