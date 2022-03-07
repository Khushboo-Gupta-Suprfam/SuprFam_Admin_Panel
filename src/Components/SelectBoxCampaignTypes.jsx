import React, { useState } from 'react'
import Select from "react-select"
import InputBox from './InputBox';
import { Grid } from '@material-ui/core';
import FileUploadPage from './FileUploadPage';
export default function SelectBoxCampaignTypes(props) {
    var campaignTypes=[
        {
            value:1,
            label:"Amazon Based",
            cat:"E-comm"
        },
        {
            value:2,
            label:"Flipkart Based",
            cat:"E-comm"
        },
        {
            value:3,
            label:"First Cry Based",
            cat:"E-comm"
        },
        {
            value:4,
            label:"Delivery Based",
        },
        {
            value:5,
            label:"Playstore/Appstore Based",
        },
        {
            value:6,
            label:"Purple Based",
            cat:"E-comm"
        },
        {
            value:7,
            label:"Nykaa Based",
            cat:"E-comm"
        },
        {
            value:8,
            label:"Instagram Based",
        },
        {
            value:9,
            label:"Twitter Based",
        },
        {
            value:10,
            label:"Facebook Based",
        },
        {
            value:11,
            label:"Youtube Based",
        },
        {
            value:12,
            label:"Other ecommerce Based",
            cat:"E-comm"
        },
        
       
        
        
    ];
const [result,ddlvalue]=useState(campaignTypes.label);

const ddHandler=(e)=>{
    ddlvalue(e.cat);
    console.log(result)
    
}
    return (
        <>
           <Select options={campaignTypes}  onChange={ddHandler} /> <br />
           {campaignTypes.label}
        {result?(<><Grid item container style={{marginBottom:'1em'}}>
        <Grid item xs={6}>
        
          <FileUploadPage placeholder="Sample ScreenShots"/>
      
          
         
          
          
      
        </Grid>
        <Grid item xs={6}>
        <InputBox type="textarea" placeholder="Sample Description" value="" />
        </Grid>
        </Grid></>):null}


        
      
        </>
    )
}
