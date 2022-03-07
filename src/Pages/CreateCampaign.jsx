import React,{useState,useRef,useEffect, useContext} from 'react';
// import 'date-fns';
import { makeStyles,useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AlbumIcon from '@material-ui/icons/Album';
import {Add,Remove} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import CustomCalendar from '../Components/CustomCalendar';
import {InputGroup,FormControl} from '@material-ui/core'
import styled from 'styled-components'
import Selectbox from '../Components/SelectBox';
import InputBox from '../Components/InputBox';
import SelectBoxCampaignTypes from '../Components/SelectBoxCampaignTypes';
import Value from "../Components/InputBox"
//import KeyboardDatePicker from '@material-ui/pickers';

// import DateFnsUtils from '@date-io/date-fns';

//MUI-Icons
import AdjustIcon from '@material-ui/icons/Adjust';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import FileUpload from '../Components/FileUpload';
import FileUploadPage from '../Components/FileUploadPage';

const useStyles = makeStyles((theme) => ({
    main_container:{
        width:'100%',
        backgroundColor:'#FFFFFF',
        padding:'1em 2em 1em 2em'
    },
    campaign_container:{
        backgroundColor:'#EBEBF2',
        minHeight:'570px',
        padding:'1em 2em 3em 2em'
    },
    input_field:{
    background: '#FFF',
    borderRadius: '7px',
    opacity: 1,
    width:'90%',
    height:'2.7em',
    outline:'none',
    border:'none',
    paddingLeft:'1em',
    color: '#354776',
    opacity: 1,
    fontWeight:'bold',
    '&::placeholder':{
        color: '#354776'
    }
    
    
},
    
    
    input_fieldDesc:{
        background: '#FFF',
        borderRadius: '7px',
        opacity: 1,
        width:'95%',
        height:'8em',
        outline:'none',
        border:'none',
        paddingLeft:'1em',
        color: '#354776',
        opacity: 1,
        fontWeight:'bold',
        '&::placeholder':{
            color: '#354776'
        }
        },
       launch_button:{
           ... theme.typography.button,
           color:"white",
           backgroundColor:"#D69A3C",
           width:"12rem",
           fontStyle:"normal",
           
           '&:hover':{
               backgroundColor:"#D69A3C"
           }
       },
       icons_container:{
           width:'50%',
        //    paddingLeft:'5em',
        //    paddingRight:'5em'
       }
}));
const initialState = {
    name: "",
    about: "",
    category: [
      {
        label: "",
        total: 1,
        value: "",
      },
    ],
    campaign_link: "",
    campaign_types: [],
    number_of_deliverables: [],
    sample_screenshot: "",
    sample_description: "",
    review_rating_screenshot: "",
    review_rating_description: "",
    order_delivery_screenshot: "",
    order_delivery_description: "",
    sample_kyc_details: [],
    sample_signup_details: [],
    sample_review_rating_details: [],
    sample_static_post_details: [],
    sample_static_carousal_post_details: [],
    sample_reel_post_details: [],
    sample_video_post_details: [],
    sample_static_post_insights: [],
    sample_static_carousal_post_insights: [],
    sample_reel_post_insights: [],
    sample_video_post_insights: [],
    sample_story_insights: [],
    sample_story_details: [],
    sample_reimbursement_story_details: [],
    sample_purchase_order_details: [],
    sample_account_opening_details: [],
    sample_kyc_screenshot: "",
    sample_kyc_description: "",
    sample_signup_screenshot: "",
    sample_signup_description: "",
    cover_image: "",
    min_influencers: 0,
    start_date: "",
    end_date: "",
    send_approve_form: false,
    influencer_details: {
      target_location: "",
      social_performance: [
        {
          min_followers: 0,
          min_engagement_rate: 0,
        },
      ],
      product_details: {
        terms: "",
        barter: [
          {
            product: 0,
            price: 0,
            product_name: "",
          },
        ],
        products_info: [
          {
           
            name: "",
            review_count: 0,
            description: "",
            link: "",
            image: "",
          },
        ],
      },
    },
    tasks: [
      {
        social_media: [],
        details: "",
        instructions: "",
        caption_note: "",
        post_types: [],
        links: [
          {
            name: "",
            value: "",
          },
        ],
      },
    ],
    tasks_details: {
      link_in_bio: "",
      hashtags: "",
      tags: "",
      caption_note: "",
    },
    is_public: 0,
  };
//   function Assign(params){
//     return JSON.parse(JSON.stringify(params))
// }
function onSubmit(){
    alert("hello")
}

export default function CreateCampaign(props)
{
    const classes = useStyles();
    const startDate= useRef(null);
    const endDate= useRef(null);
    const [campaignDeliverable, setcampaignDeliverable] = useState([{ campaigndeliverable: "" }]);
    const [form, setForm] = useState(initialState);
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18'));
    const [step1,setStep1] = useState(true);
    const [step2,setStep2] = useState(false);
    // const handleServiceAdd = () => {
    //     setcampaignDeliverable([...campaignDeliverable, { campaigndeliverable: "" }]);
    //   };
    //   const handleServiceRemove = (index) => {
    //     const list = [...campaignDeliverable];
    //     list.splice(index, 1);
    //     setcampaignDeliverable(list);
    //   };
    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    //   };
    //   useEffect(() => {
    //     // getlatestAppData();
    //     if (localStorage.getItem("form")) {
    //       const newForms = JSON.parse(localStorage.getItem("form"));
    //       setForm(Assign(newForms));
    //     }
    //   }, []);
    //   useEffect(() => {
    //     return () => {
    //       if (JSON.stringify(initialState) !== JSON.stringify(form)) {
    //         localStorage.setItem("form", JSON.stringify(form));
    //       } else {
    //         localStorage.removeItem("form");
    //       }
    //       if (
    //         localStorage.getItem("form") &&
    //         localStorage.getItem("form") !== JSON.stringify(form)
    //       ) {
    //         localStorage.setItem("form", JSON.stringify(form));
    //       }
    //     };
    //   }, [form]);
    //   const val = useContext(Value)
    return step1 ? (
    // <Grid container>
        
    // </Grid>
    
    <Grid container direction='column' className={classes.main_container}>
        <Grid item container style={{marginBottom:'1em'}} alignItems='center'>
            <Grid item>
                <IconButton disableTouchRipple style={{backgroundColor:'transparent'}}>
                  <Link to ="/"><ArrowBackIcon style={{color:'#0E113C'}} /></Link>
                </IconButton>
            </Grid>
            <Grid item>
                <Typography variant='h5'>
                    Create Campaign
                </Typography>
            </Grid>
        </Grid>
       <Grid item container className={classes.campaign_container} direction='column'>
       <div id="line" style=
       {{
       
            height: "8px",
            
            width: "50%",
            background: "white",
            borderRadius: "90px",
            margin: "0",
            top: "20px",

            transform: "translateY(-50%)",
            position: "relative"
          
       }}></div>
       <Grid item container justifyContent='space-around' style={{marginBottom:'1.5em'}} className={classes.icons_container}>
            <Grid item>
                <IconButton disableTouchRipple style={{padding:'0px 0px 5px 10px',backgroundColor:'transparent'}} onClick={() => {setStep1(true);setStep2(false)}}>
                    <AlbumIcon style={{color:step1 ? '#D69A3C' : '#354776'}} />
                </IconButton>
                <Typography variant='subtitle2' style={{color:'#354776',fontWeight:'bold'}}>step 1</Typography>
            </Grid>
            <Grid item>
                <IconButton style={{padding:'0px 0px 5px 10px',backgroundColor:'transparent',color:step1 ? '#393C74' :'#D69A3C'}} onClick={() => {setStep1(false);setStep2(true)}}  disableTouchRipple>
                    <AlbumIcon />
                </IconButton>
                <Typography variant='subtitle2' style={{color:'#354776',fontWeight:'bold'}}>step 2</Typography>
            </Grid>
        </Grid>
       <Grid item style={{marginBottom:'1em'}}>
        <Typography variant='h4' style={{color:'#393C74'}} gutterBottom>Campaign Details</Typography>
      </Grid>
      <Grid item container style={{marginBottom:'1em'}}>
          <Grid item xs={6}>
              <input type='text' placeholder='Campaign Name' className={classes.input_field}  />
          </Grid>
          
              
          <Grid  item xs={6}>
              <SelectBoxCampaignTypes />
          </Grid>
        
      </Grid>
     
      <Grid item xs style={{marginBottom:'1em'}}>
          <input type='text' className={classes.input_fieldDesc} placeholder='write a brief about the campaign(Form Description)' />
      </Grid>
      
      <Grid item container style={{marginBottom:'1em'}}>
      {campaignDeliverable.map((singleService, index) => (
      <Grid item  key={index} xs={8} style={{marginBottom:"1rem"}} >
             <Selectbox />
             
           
        </Grid>
        ))}
      </Grid>
    <Section>
      <Grid item container style={{marginBottom:'1em'}} className='inputcontrol'>
      <Grid item xs className='inputfield' >
          <input type='text' className={classes.input_field} placeholder='User Count' />
      </Grid>
      <Grid item xs className='inputfield' >
          <input type='text' className={classes.input_field} placeholder='Target Location' />
      </Grid>
      <Grid item xs className='inputfield' >
          <input type='Text'  ref={startDate} className={classes.input_field} placeholder='Campaign Start Date' onFocus={() => (startDate.current.type = "date") } onBlur={() => (startDate.current.type = "text")}/>
      </Grid>
      <Grid item xs className='inputfield'>
      <input type='Text'  ref={endDate} className={classes.input_field} placeholder='Campaign End Date' onFocus={() => (endDate.current.type = "date") } onBlur={() => (endDate.current.type = "text")}/>
      </Grid>
      
      </Grid>
      
      <Grid item style={{marginBottom:'2.5em'}}>
        <FileUpload />
      </Grid>
      </Section>
      <Grid item>
          <Button className={classes.launch_button} variant='contained'>
              Next Step
          </Button>
      </Grid>
      </Grid>
    </Grid>
    )
    :
    (
        <Grid container direction='column' className={classes.main_container}>
        <Grid item container style={{marginBottom:'1em'}} alignItems='center'>
            <Grid item>
                <IconButton disableTouchRipple style={{backgroundColor:'transparent'}}>
                 <Link to="/"> <ArrowBackIcon style={{color:'#0E113C'}} /></Link>
                </IconButton>
            </Grid>
            <Grid item>
                <Typography variant='h5'>
                    Create Campaign
                </Typography>
            </Grid>
        </Grid>
       <Grid item container className={classes.campaign_container} direction='column'>
       <div id="line" style=
       {{
       
            height: "8px",
            
            width: "50%",
            background: "white",
            borderRadius: "90px",
            margin: "0",
            top: "20px",

            transform: "translateY(-50%)",
            position: "relative"
          
       }}></div>
       <Grid item container justifyContent='space-around' style={{marginBottom:'1.5em'}} className={classes.icons_container}>
            <Grid item>
                <IconButton disableTouchRipple style={{padding:'0px 0px 5px 10px',backgroundColor:'transparent'}} onClick={() => {setStep2(!step2);setStep1(!step1)}}>
                    <AlbumIcon style={{color:step1 ? '#D69A3C' : '#354776'}} />
                </IconButton>
                <Typography variant='subtitle2' style={{color:'#354776',fontWeight:'bold'}}>step 1</Typography>
            </Grid>
            <Grid item>
                <IconButton style={{padding:'0px 0px 5px 10px',
                backgroundColor:'transparent',
                color:step1 ? '#393C74' :'#D69A3C'
                }} disableTouchRipple
                onClick={() => {setStep2(!step2);setStep1(!step1)}}
                >
                    <AlbumIcon />
                </IconButton>
                <Typography variant='subtitle2' style={{color:'#354776',fontWeight:'bold'}}>step 2</Typography>
            </Grid>
        </Grid>
       <Grid item style={{marginBottom:'1em'}}>
        <Typography variant='h4' style={{color:'#393C74'}} gutterBottom>Influencer Details</Typography>
      </Grid>
      <Section>
   
      <Grid item container style={{marginBottom:'2em'}} className="inputcontrol">
          <Grid item xs={6}  >
          <FileUploadPage className={classes.input_field} placeholder="Review/Rating Sample ScreenShot" />
      
          
          </Grid>
          
          <Grid item xs={6}>
          <input type="text" className={classes.input_field} placeholder='Review/Rating Description'/>
          </Grid>
      </Grid>
      </Section>
     
      <Grid item>
          <Button className={classes.launch_button} variant='contained' onClick={
              onSubmit
          }>
              Launch Campaign
          </Button>
      </Grid>
      </Grid>
    </Grid>
  
    )
   
            };
            const Section=styled.section`
            @media screen and (min-width: 280px) and (max-width: 1080px){
            .inputcontrol{
              display:flex;
              flex-direction:column;
              padding-bottom:20px;

            }
            .inputfield
            {
                margin-bottom:10px;
            }
        }
            `;


{/* <Grid item>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifyContent="space-around">
                <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Campaign Start Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
      </Grid> */}
      {/* <Grid item>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifyContent="space-around">
                <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Campaign End Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
      </Grid> */}
      