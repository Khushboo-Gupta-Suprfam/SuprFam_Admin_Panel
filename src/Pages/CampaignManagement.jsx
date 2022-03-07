import React, { useState,useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Paper, makeStyles, TableBody, TableRow, TableCell, InputAdornment ,Button,Grid,Avatar,Typography} from '@material-ui/core';
import axios from "axios";
import Navbar from '../Components/Navbar';
import CreateCampaign from './CreateCampaign';
import BasicTable from '../Components/BasicTable';
import { Edit,Delete,Info, SystemUpdateAlt, DeleteOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Searchbar from '../Components/Searchbar';
import { useCampaign } from "../contexts/CampaignDataProvider";
import API from "../api/api";
import moment from 'moment';





const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  searchInput: {
      width: '75%'
  },
  tbody:{
    backgroundColor:'#F3F3F3'
  },
  deleteIcon:{
    color:"#FF6D6D"
  },
  editIcon:{
    color:'#D49229'
  },
  infoIcon:{
    color:'#393C74'
  },
  mainContainer: {
    width: '1200px',
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #eee',
    borderRight: '1px solid #eee'
},
paper: {
    marginTop:"1rem",
    marginLeft:"-.9rem",
    width: '101.3%',
    marginBottom: theme.spacing(-2),
},
download_button: {
    ...theme.typography.button,
    color: 'white',
    width: 'auto',
    backgroundColor: '#393C74',
    "&:hover": {
        backgroundColor: '#393C74',
    }
},
table: {
   
    minWidth: '78.5vw',
    minHeight:'100%'
  },
  head:{
      boxShadow:" -1px 15px 21px -8px rgba(0,0,0,0.75)",
      mozBoxShadow:"-1px 15px 21px -8px rgba(0,0,0,0.75)",
                 
  },
second_container:{
    width:'100%',
    backgroundColor:'#EBEBF2 ',
    marginTop:"30px",
    borderRadius:"5px",
    paddingTop:"10px"
  },
  tableRow:{
    color:"red",
    color:'#354776',
    
   
  },
}))
const UserProfileComponent = (props) =>
{
  return (
    <Grid container direction='row' alignItems='center'>
      <Grid item>
      <Avatar alt="profile" style={{marginRight:'5px'}} src='https://picsum.photos/200/300?image=0' />
      </Grid>
      <Grid item>
        <Typography variant='userProfile'>{props.name}</Typography>
      </Grid>
    </Grid>
  )
};
export default function Campaign(props) {
    let history = useHistory();
    const {
      campaignData,
      getCampaigns,
      totalPages,
      totalResults,
      createCampaignLoader,
    } = useCampaign();

  const [records, setRecords] = useState([])
  const [open, setOpen] = useState(false);
  const [campaign, setCampaign] = useState(null);
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [pageNumber, setPageNumber] = useState(1);
  const [searchKey, setSearchKey] = useState("")
  const [checkedAll, setCheckedAll] = useState(false);

  const getCampaginDta = async () => {
    try {
      const data = await axios.get(
        "http://localhost:3000/campaigns"
      );
      console.log(data.data);
      setRecords(data.data);
    } catch (e) {
      console.log(e);
    }
  };
 const params = {
    page: pageNumber,   
    search: searchKey,
   };
  
    useEffect(() => {
      getCampaginDta()
    
 },[]);
  // useEffect(() => {
  //   getCampaigns(params);
  //   // getAllInfluencersWithoutPagination()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // useEffect(() => {
  //   if (localStorage.getItem("form")) {
  //     let localOpen = localStorage.getItem("open");
  //     if (localOpen && Boolean(localOpen)) {
  //       setOpen(Boolean(localOpen));
  //     } else {
  //       localStorage.setItem("open", "true");
  //       setOpen(true);
  //     }
  //     setOpen(true);
  //   }
  // }, []);
  // useEffect(() => {
  //   modifyObject();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [campaignData]);
  // const modifyObject = async () => {
  //   let data = await Promise.all(
  //     campaignData.map(async (campaign) => {
  //       return {
  //         ...campaign,
  //         name: campaign.name,
  //         start_date: moment(campaign.start_date).format("MMM Do YY"),
  //         end_date: moment(campaign.end_date).format("MMM Do YY"),
  //         influencers_count: campaign.min_influencers,
  //         reach: campaign.total_reach,
  //         // checked: checkedAll,
  //         registered_influencer: 0
  //           // allInfluencers?.filter(o => campaign.id === o.campaign_id)?.length + "/" + campaign.min_influencers,
  //       };
  //     })
  //   );
  //   setRecords(data);
  // };
  const headCells = [
    { id: 'user', disablePadding: true, label: 'Brand', disableSorting:true,lookup:{'M':'Male','F':'Female'} ,Textalign:'right'},
    { id: 'age', disablePadding: false, label: 'Start Date' },
    { id: 'gender', disablePadding: false, label: 'End Date' },
    { id: 'RegisteredInfluencer', disablePadding: false, label: 'Registered Influencer' },
    { id: 'city', disablePadding: false, disableSorting:true, label: 'Action' },
   
  ];
  const classes = useStyles();
    
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = BasicTable(records, headCells, filterFn);

   
function action(data){
  localStorage.setItem("open", "true");
      setOpen(true);
      setCampaign(data);
}


const handlePageNumber = (pageNum) => {
  setPageNumber(pageNum);
  params.page = pageNum;
  setCheckedAll(false);
  getCampaigns(params);
};

const handleSearch = e => {
  let target = e.target;
  setFilterFn({
      fn: items => {
          if (target.value === "")
              return items;
          else
              return items.filter(x => x.brand.toLowerCase().includes(target.value))
      }
  })
}
  return (
    
    <>
    <Navbar
                // icon = {<i class="fa-solid fa-arrow-left"></i>} 
                title="Campaign"



            >
            </Navbar>
              
            <Grid item container direction='column' className={classes.second_container}>
            <Grid item container style={{ padding: '1em' }} alignItems='center'>
                <Grid item container direction='row' alignItems='center' sm={9} style={{ paddingLeft: '2em' }}>
                    <Grid item>
                        <Searchbar onChange={handleSearch}  />
                    </Grid>
                    </Grid>
                    <Grid item sm={3} >

                        <Button variant='contained' className={classes.download_button} style={{marginLeft:"0rem"}}>
                            
                            <SystemUpdateAlt style={{ marginLeft: '', color: '#D69A3C' }} />
                        </Button>
                    </Grid>
               
                <Grid item container>

                    <div className={classes.root}>
                        <Paper className={classes.paper}>
               <TblContainer>
               <TblHead />
               <TableBody className={classes.tbody}>
               {
                recordsAfterPagingAndSorting().map(item =>
                    (<TableRow key={item.id} style={{textAlign:'center'}}>
                      <TableCell component="th"  scope="row" padding="20"  style={{textAlign:'center',paddingLeft:"50px"}}>
                      <UserProfileComponent name={item.name} align="right"/></TableCell>
                        <TableCell style={{textAlign:'center'}} >{item.start_date}</TableCell>
                        <TableCell style={{textAlign:'center'}}>{item.end_date}</TableCell>
                        <TableCell style={{textAlign:'center'}}>{item.registered_influencer}</TableCell>
                        <TableCell style={{textAlign:'center'}}><Edit className={classes.editIcon} onClick={action}/><DeleteOutlined className={classes.deleteIcon} onClick={action}/><Link to="/registerd-influencer"> <Info className={classes.infoIcon}/></Link></TableCell>
                    </TableRow>)
                )
            }
               </TableBody>
           </TblContainer>
           <TblPagination style={{width:"100px"}}/>
           </Paper>
           </div>
           </Grid>
           </Grid>
           </Grid>   
    </>
  )
}
const CampaignForm = ({
  formLabel,
 
  campaign,
  setCampaign,
  setOpen,
  loadCampaignList,
  campaignParams,
  open,
  createCampaignLoader,
}) => {
  return (
    
       
          <CreateCampaign
            campaign={campaign}
            setCampaign={setCampaign}
            setOpen={setOpen}
            loadCampaignList={loadCampaignList}
            campaignParams={campaignParams}
            open={open}
            createCampaignLoader={createCampaignLoader}
          />
       
      
  );
};
