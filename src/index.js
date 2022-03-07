import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from "./contexts/Auth"
// import { 
//   useAuth, 
//   UserDataProvider, 
//   CampaignDataProvider,
//   AppDataProvider } from "./contexts"
import {useAuth} from "./contexts/Auth"
import {CampaignDataProvider} from "./contexts/CampaignDataProvider"
import {AppDataProvider} from "./contexts/AppDataProvider"

ReactDOM.render(
 
      <AuthProvider>
       
            <CampaignDataProvider>
              <AppDataProvider>
                
                  <App />
                
              </AppDataProvider>
            </CampaignDataProvider>
          
   
      </AuthProvider>,
  document.getElementById("root")
)


