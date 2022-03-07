import React from 'react';
// import Topbar from '../components/TopBar/Topbar'

import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Campaignmanagement from './CampaignManagement';
import Login from './Login/Login'
import CreateCampaign from './CreateCampaign';

import Dashboard from './Dashboard';






function Page() {
  return (
    <>
    
     <Router>
    
       <Switch>
         <div className="pages">
        
         <Route path='/' exact component={Campaignmanagement}  />
         <Route path='/Login' exact component={Login}  />
         <Route path='/dashboard' exact component={Dashboard}  />
        
         <Route path='/create-campaign' exact component={CreateCampaign}  />
         
        
         </div>
       </Switch>
     </Router>
     
    </>
  );
}

export default Page;

