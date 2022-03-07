import React from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar';  
import Page from './Page';
import Sidebar from './Sidebar';
import Campaign from './CampaignManagement';



export default function Dashboard(props) {
    return (
        <>
        
        <Sidebar /> 
        <Section>
        
      
        <div className="grid">
        <div className="row__one">
       <Page />
        </div>
        </div>
         </Section> 
        </>
    )
}
const Section=styled.section`
margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 0rem;
    .row__one {
      display: flex;
      flex-direction: column;
      height: 50%;
      gap: 1rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one
      {
       font-size:10px;
       
      }
    }
  }
`;
  
  
