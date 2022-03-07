import React, { useState } from 'react'
import Select from "react-select"
import InputBox from './InputBox';
import { Grid } from '@material-ui/core';

export default function Selectbox(props) {
    var campaignTypes=[
        {
            value:1,
            label:"Static Post",
        },
        {
            value:2,
            label:"Static Carousal Post",
        },
        {
            value:3,
            label:"Reel Post",
        },
        {
            value:4,
            label:"Video Post",
        },
        {
            value:5,
            label:"Story",
        },
        {
            value:6,
            label:"Video Post",
        },
        {
            value:7,
            label:"PlatForm eComm Review",
        },
        {
            value:8,
            label:"Sign-Ups",
        },
        {
            value:9,
            label:"KYC Registration",
        },
        {
            value:10,
            label:"Play Store/App Review",
        },
        {
            value:11,
            label:"Account Opening",
        },
        {
            value:12,
            label:"Brush-Up",
        },
        {
            value:13,
            label:"Purchase Order",
        },
       
        
        
    ];
const [result,ddlvalue]=useState(campaignTypes.label);

const ddHandler=(e)=>{
    ddlvalue(e.label);
    console.log(result)
    
}
    return (
        <>
           <Select options={campaignTypes}  onChange={ddHandler} style={{color:"red"}} /> <br />
           {campaignTypes.label}
        {result==="Static Post"?(<><Grid item container style={{marginBottom:'1em'}}>
        <Grid item xs={6}>
        <InputBox type="text" placeholder="no of Static Post ScreenShots" value=""  />
        </Grid>
        <Grid item xs={6}>
        <InputBox type="text" placeholder="no of Static Post Insights" value="" />
        </Grid>
        </Grid></>):null}


        {result==="Static Carousal Post"?(<><Grid item container style={{marginBottom:'1em'}}>
        <Grid item xs={6}>
        <InputBox type="text" placeholder="no of Static Carousal Post ScreenShots" value=""  />
        </Grid>
        <Grid item xs={6}>
        <InputBox type="text" placeholder="no of Static Carousal Post Insights" value="" />
        </Grid>
        </Grid></>):null}

        {result==="Reel Post"?(<><Grid item container style={{marginBottom:'1em'}}>
        <Grid item xs={6}>
        <InputBox type="text" placeholder="no of Reel Post ScreenShots" value=""  />
        </Grid>
        <Grid item xs={6}>
        <InputBox type="text" placeholder="no of Reel Post Insights" value="" />
        </Grid>
        </Grid></>):null}

        {result==="Video Post"?(<><Grid item container style={{marginBottom:'1em'}}>
        <Grid item xs={6}>
        <InputBox type="text" placeholder="no of Video Post ScreenShots" value=""  />
        </Grid>
        <Grid item xs={6}>
        <InputBox type="text" placeholder="no of Video Post Insights" value="" />
        </Grid>
        </Grid></>):null}

        {result==="Story"?(<><Grid item container style={{marginBottom:'1em'}}>
        <Grid item xs={6}>
        <InputBox type="text" placeholder="no of Story ScreenShots" value=""  />
        </Grid>
        <Grid item xs={6}>
        <InputBox type="text" placeholder="no of Story Insights" value="" />
        </Grid>
        </Grid></>):null}

        {result==="Sign-Ups"?(<><Grid item container style={{marginBottom:'1em'}}>
        <Grid item xs={6}>
        <InputBox type="text" placeholder="no of Sign-ups ScreenShots" value=""  />
        </Grid>
        <Grid item xs={6}>
      
        </Grid>
        </Grid></>):null}

        {result==="Account Opening"?(<><Grid item container style={{marginBottom:'1em'}}>
        <Grid item xs={6}>
        <InputBox type="text" placeholder="no of Account Opening ScreenShots" value=""  />
        </Grid>
        <Grid item xs={6}>
      
        </Grid>
        </Grid></>):null}

        {result==="Purchase Order"?(<><Grid item container style={{marginBottom:'1em'}}>
        <Grid item xs={6}>
        <InputBox type="text" placeholder="no of Purchase Order ScreenShots" value=""  />
        </Grid>
        <Grid item xs={6}>
      
        </Grid>
        </Grid></>):null}

        {result==="KYC Registration"?(<><Grid item container style={{marginBottom:'1em'}}>
        <Grid item xs={6}>
        <InputBox type="text" placeholder="no of Purchase KYC Registration ScreenShots" value=""  />
        </Grid>
        <Grid item xs={6}>
      
        </Grid>
        </Grid></>):null}

      
        </>
    )
}
