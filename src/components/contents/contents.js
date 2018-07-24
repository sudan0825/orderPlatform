import React from 'react';
import myStyle from './contents.css'
import { Route, Switch, Redirect } from 'react-router-dom';
import ItemContainer from './itemContainer/itemContainer';
import Orders from '../orders/orders';
import InventoryManagement from '../../container/InventoryManagement/InventoryManagement';

const contents=(props)=>(
    <div className={myStyle.contents}>
      <Switch>
                   
          <Route path="/Menue" component={ItemContainer} />
          <Route path="/" exact component={ItemContainer} />
          <Route path="/Orders" component={Orders} />
          <Route path="/InventoryManagement" component={InventoryManagement} />
         
                  
       </Switch>

            
                  
   </div>)
    
export default contents;