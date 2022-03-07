import React from 'react'
import { Button, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { NotificationsNone} from "@material-ui/icons";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const { title, icon } = props;

    return (
        <>
       
        <Nav>
      <div className="title">
      <Typography
      variant="h6"
      component="div" className="heading">
      {icon} {title}</Typography>
       
      </div>
      <div className="topRight">
          <div className="topbarIconContainer">
         <NotificationsNone  style={{color:"grey"}}/>
            <span className="topIconBag">2</span>
          </div>
          </div>
      <div className="btn">
        
      <Link to ="/create-campaign" style={{textDecoration:"none"}}><Button variant='contained' className="campaign_button" style={{backgroundColor:"#393C74",color:"white"}}>
      <i class="fa-solid fa-plus" style={{color:"#D49229",marginRight:"7px"}}></i>
        Create Campaign
      </Button>
      </Link>
      </div>
      </Nav>
      </>
      );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  
  .title {
    .heading{
       
        margin-left: 0.5rem;
        color: #0E113C;
        font-weight:600;
        letter-spacing: 0.1rem;
      
    }
  }
  .topRight{
    display:flex;
    align-items:center;
}
.topbarIconContainer{
    position:fixed;
    cursor:pointer;
    margin-left:25rem;
}
.topIconBag{
position:absolute;
top:-5px;
right: 2px;
background-color:#D49229;
color:white;
border-radius:50%;
width:15px;
height:15px;
display:flex;
align-items:center;
justify-content:center;
font-size:10px;
}
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    Nav{
    flex-direction: column;
    
      justify-content:center;
      
    }
    .topbarIconContainer{
      position:fixed;
      cursor:pointer;
      margin-left:-1.9rem;
      font-size:10px !important;
  }
    .title {
     display:flex;
     flex-direction:coumn;
     align-items:center;
     justify-content:flex-start;
     width:200px;

      .heading {
        
          display: flex;
          flex-direction:column;
          margin: 0;
          padding-right:0;
          font-size:16px;
          
        
        
      }
    }
    .btn{
      width:18rem;
    margin-right:-40px;
    margin-left:30px;
      Button{
        
          font-size:10px;
      }
    }
  }
  
  }
  `;
