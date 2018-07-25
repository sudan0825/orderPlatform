import React from 'react';
import myStyle from './contents.css'
import { Route, Switch} from 'react-router-dom';
import InventoryManagement from '../../container/InventoryManagement/InventoryManagement';
import LoadMenu from '../../container/LoadMenu/LoadMenu';
import OrderSummary from '../../container/OrderSummary/OrderSummary'

const contents=(props)=>(
    <div className={myStyle.contents}>
      <Switch>
                   
          <Route path="/Menue" component={LoadMenu} />
          <Route path="/" exact component={LoadMenu} />
          <Route path="/Orders" component={OrderSummary} />
          <Route path="/InventoryManagement" component={InventoryManagement} />
         
                  
       </Switch>

            
                  
   </div>)
    
export default contents;