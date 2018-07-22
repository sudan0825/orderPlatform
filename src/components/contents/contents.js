import React from 'react';
import myStyle from './contents.css'
import { Route, Switch, Redirect } from 'react-router-dom';
import ItemContainer from './itemContainer/itemContainer';
import Orders from '../orders/orders';

const contents=(props)=>(
    <div className={myStyle.contents}>
      <Switch>
                   
          <Route path="/Menue" component={ItemContainer} />
          <Route path="/" exact component={ItemContainer} />
          <Route path="/Orders" component={Orders} />
         
                  
       </Switch>

            
                  
   </div>)
    
export default contents;