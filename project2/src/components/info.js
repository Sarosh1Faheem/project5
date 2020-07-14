import React from 'react';
import GlobalStats from './globalSt.js';
import AllCountries from './allCountry.js';


export default function Info(currentScreen) {
  if(currentScreen === 0)
    return <GlobalStats />
  else if(currentScreen === 1)
    return <AllCountries />

  else return <GlobalStats />
}
