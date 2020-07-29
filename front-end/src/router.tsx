import React from 'react';

import {  Route, BrowserRouter} from 'react-router-dom';
import Home from './Home/'
import CreatePoint from './CreatePoint'

const Router: React.FC = () => {
  return( 
      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>      
        <Route path="/create-point" exact component={CreatePoint}></Route>      
      </BrowserRouter>
  );
}

export default Router;