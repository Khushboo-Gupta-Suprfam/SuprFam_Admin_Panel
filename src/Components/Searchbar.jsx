import React , {useState}from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
    search:{
        backgroundColor:'#BCBCCB',
        color:'#FFFFFF',
        width:'22em',
        borderRadius:'75px',
        height:'35px',
        border:'none',
        outline:'none',
        padding:'1em'
      },
      searchIcon:{
        backgroundColor:'#D49229',
        borderRadius:'0px 90px 90px 90px',
        color:'#FFFFFF',
        padding:'5px',
        fontSize:"1.4rem",
        cursor:"Pointer",
        fontWeight:"900"
        
      },
}))
export default function Searchbar(props) {
  const {onChange, ...other } = props;
    const classes = useStyles();
   
    return (
        <>
        
        <Grid item>
          <input type='search' className={classes.search} placeholder='Search...'  onChange={onChange}  {...other} /> 
          <SearchIcon className={classes.searchIcon} style={{marginLeft:'-33px',marginBottom:'-11px'}} /> 
        </Grid>
        </>
    )
}
