import React,{useState,useEffect} from 'react'
import styled from 'styled-components'

import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import logo from '../assets/images/logo.svg'
import { Select } from '@material-ui/core'
import { MenuItem,InputLabel,Grid } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import adminlogo from '../assets/images/admin.jpeg'
const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(1),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
export default function Sidebar(props) {
    
    const [currentLink, setCurrentLink] = useState(1);
    const [navbarState, setNavbarState] = useState(false);
    const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return (
        
        <>
        <Section>
        <div className="top">
          <div className="brand">
            <img src={logo} alt="logo"/>
            <div className="toggle">
          {navbarState ? (
            <VscChromeClose onClick={() => setNavbarState(false)} />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setNavbarState(true);
              }}
            />
          )}
          </div>
          </div>
          
          <div className="links">
            <ul>
              
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <a href="#">
                <i className="fa-solid fa-chart-column"></i>
                  <span> CAMPAIGN MANAGEMENT</span>
                </a>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <a href="#">
                <i className="fa-solid fa-message"></i>
                  <span> SUPERLANCER MANAGEMENT</span>
                </a>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <a href="#">
                <i className="fa-solid fa-volume-high"></i>
                  <span> MANAGE INFLUENCERS</span>
                </a>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <a href="#">
                <i className="fa-solid fa-users"></i>
                  <span> TEAMS</span>
                </a>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <a href="#">
                <i className="fa-solid fa-bell"></i>
                  <span> PUSH NOTIFICATION</span>
                </a>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <a href="#">
                <i className="fa-solid fa-pause"></i>
                  <span> AUTOMATE</span>
                </a>
              </li>
            
              
           
        <li  style={{marginTop:"13rem",marginBottom:"-40px"}}>
          <a href="#">
          <i className="fa-solid fa-arrow-right-from-bracket" style={{marginTop:".5rem",PaddingTop:"-2rem"}}></i>
            <span className="logout">Logout</span>
          </a>
           
        </li>

        <span className="adminSelect" style={{marginTop:".8rem"}}>
        <Grid container spacing={3} style={{height:"50px",paddinTop:"-2rem" }}>
        <Grid item xs={6}>
        <FormControl className={classes.margin} >
              <InputLabel id="demo-customized-select-label" ></InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />
                }
                style={{width:"140px",marginLeft:"0em",marginTop:"1rem",paddingTop:"-6rem"}}>
                <MenuItem value="">
                  
                </MenuItem>
                <MenuItem value={"admin"} selected>Admin</MenuItem>
                <MenuItem value={"superadmin"}>Bhavik</MenuItem>
               
              </Select>
            </FormControl>
        </Grid> <Grid item xs={6}>
           <img src={adminlogo} alt="image" style={{width:"40px",height:"38px",marginTop:"1.6rem",borderRadius:"3px"}}></img>  
           </Grid>
           </Grid>
        </span>
        </ul>
        </div>
      </div>
      </Section>
     

      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
      <div className="responsive__links">
      <ul>
          <li
          className={currentLink === 1 ? "active" : "none"}
          onClick={() => setCurrentLink(1)}
        >
          <a href="#">
          <i className="fa-solid fa-chart-column"></i>
            <span> Campaign Management</span>
          </a>
        </li>
        <li
          className={currentLink === 2 ? "active" : "none"}
          onClick={() => setCurrentLink(2)}
        >
          <a href="#">
          <i className="fa-solid fa-message"></i>
            <span> SUPERLANCER MANAGEMENT</span>
          </a>
        </li>
        <li
          className={currentLink === 3 ? "active" : "none"}
          onClick={() => setCurrentLink(3)}
        >
          <a href="#">
          <i class="fa-solid fa-volume-high"></i>
            <span> MANAGE INFLUENCERS</span>
          </a>
        </li>
        <li
          className={currentLink === 4 ? "active" : "none"}
          onClick={() => setCurrentLink(4)}
        >
          <a href="#">
          <i class="fa-solid fa-users"></i>
            <span> TEAMS</span>
          </a>
        </li>
        <li
          className={currentLink === 5 ? "active" : "none"}
          onClick={() => setCurrentLink(5)}
        >
          <a href="#">
          <i class="fa-solid fa-bell"></i>
            <span> PUSH NOTIFICATION</span>
          </a>
        </li>
        <li
          className={currentLink === 6 ? "active" : "none"}
          onClick={() => setCurrentLink(6)}
        >
          <a href="#">
          <i className="fa-solid fa-pause"></i>
            <span> AUTOMATE</span>
          </a>
        </li>

        <li  style={{marginTop:"14rem",marginBottom:"-50px"}}>
        <a href="#">
        <i className="fa-solid fa-arrow-right-from-bracket" style={{marginTop:".5rem",PaddingTop:"-2rem"}}></i>
          <span className="logout" style={{marginTop:".4rem"}}>Logout</span>
        </a>
         
      </li>
      </ul>
    </div>
  </ResponsiveNav>
      
    </>
  );
} 
        
const Section=styled.section`
box-shadow: 7px -1px 17px -6px rgba(0,0,0,0.75);
-webkit-box-shadow: 7px -1px 17px -6px rgba(0,0,0,0.75);
-moz-box-shadow: 7px -1px 17px -6px rgba(0,0,0,0.75);
position: fixed;
left: 0;
background-color: #EBEBF2;
height: 100vh;
width: 20vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding-bottom: 2rem ;
gap: 2rem;
.top {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
 
  .toggle {
    display: none;
  }
  .brand {
    width: 100%;
    height:10vh;
    display: flex;
    justify-content: center;
    align-items: top;
    gap: 0rem;
    background-color:#0E113C;
    img {
     heigh:10vh;
     width:200px;
    }
   
  }
 
  .links {
    display: flex;
    justify-content: left;
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-inline-start: 20px;

      li {
        padding: 0.6rem 0.6rem;
        border-radius: 0.6rem;
        
        &:hover {
          background-color: #393C74;
          
          a {
            color: #FFFFFF;
          }
          i{
              color:#D49229;
          }
        }
        i{
            color:#A5A4BF;
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1.2rem;
          color: #0E113C;
          font-weight:700;
          font-size:.9rem;
        }
      }
      .active {
        background-color: #393C74;
        a {
          
          color: #FFFFFF;
        }
        i{
            color:#D49229;
        }
        
      }
    }
  }
}


.logout {
  padding: 0.3rem 1rem;
  margin-left:-1rem;
  font-size:16px;
  border-radius: 0.6rem;
  &:hover {
    background-color: #393C74;
    color:white
  }
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #1D253B;
  }
  i{
      
      margin-left:-6rem;
  }
}

@media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 0rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 0rem;
      .toggle {
        display: block;
        color: #A5A4BF;
        z-index: 99;
        margin-right:1rem;
        margin-top:1rem;
        
      }
      .brand {
        gap: 0rem;
        justify-content: flex-start;
      }
      .brand img{
          height:10vh;
          width:100vw;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }`;



const ResponsiveNav = styled.div`
position: fixed;
right: -10vw;
top: 0;
z-index: 10;
background-color: #EBEBF2;
height: 100vh;
width: ${({ state }) => (state ? "80%" : "0%")};
transition: 0.4s ease-in-out;
font-size:12px;
font-weight:900;
.responsive__links {
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
    li {
      padding: 0.6rem 1rem;
      border-radius: 0.6rem;
      &:hover {
        background-color: #393C74;
        a {
          color: white;
        }
      }
      a {
        text-decoration: none;
        display: flex;
        gap: 1rem;
        color: #0E113C;
        font-weight:500;
      }
      i{
          color:#A5A4BF;
      }
    }
    .active {
      background-color: #393C74;
      a {
        color: white;
      }
      i{
          color:#D49229
      }
    }
  }
}
`;