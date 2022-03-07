import { useContext, createContext, useReducer } from "react";
import toast from "react-hot-toast";
import API from "../api/api";
import axios from "axios";

export const CampaignContext = createContext({})
export const useCampaign = () => useContext(CampaignContext);

const campaignActions = {
    MAKE_REQUEST: '_MAKE_REQUEST',
    SET_CAMPAIGN_DATA: 'SET_CAMPAIGN_DATA',
    SET_CAMPAIGN_BY_ID: 'SET_CAMPAIGN_BY_ID',
    ERROR: 'ERROR',
    CREATE_CAMPAIGN: "CREATE_CAMPAIGN",
    SUCCESS: "_SUCCESS",
    FAILED: "_FAILED"
}

const initialState = {
    loading: false,
    campaignData: [],
    totalPages: 0,
    totalResults: 0,
    hasMoreData: false,
    error: '',
    imageUrl: '',
    campaign: null,
    createCampaignLoader: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case campaignActions.MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case campaignActions.SET_CAMPAIGN_DATA:
            return {
                ...state,
                loading: false,
                campaignData: action.payload.data.results,
                totalPages: action.payload.data.totalPages,
                totalResults: action.payload.data.totalResults,
                hasMoreData: action.payload.hasMoreData
            }
        case campaignActions.SET_CAMPAIGN_BY_ID:
            return {
                ...state,
                loading: false,
                campaign: action.payload
            }
        case campaignActions.CREATE_CAMPAIGN + campaignActions.MAKE_REQUEST:
            return {
                ...state, 
                createCampaignLoader: true
            }
        case campaignActions.CREATE_CAMPAIGN + campaignActions.SUCCESS:
            return {
                ...state,
                createCampaignLoader: false
            }
        case campaignActions.CREATE_CAMPAIGN + campaignActions.FAILED:
            return {
                ...state,
                createCampaignLoader: false
            }
        default:
            return state;
    }
}

export const CampaignDataProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getCampaigns = async (params) => {
        try {
            dispatch({ type: campaignActions.MAKE_REQUEST })
            const { data } = await API.getCampaigns(params)
            dispatch({
              type: campaignActions.SET_CAMPAIGN_DATA,
              payload: {
                data: data,
                hasMoreData: data.page === data.totalPages ? false : true,
              },
            })
          } catch (error) {
            dispatch({
              type: campaignActions.ERROR,
              payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
            })
          }

        // try {
        //           const data = await axios.get(
        //             "http://localhost:3000/campaigns"
        //           );
        //           console.log(data.data);
        //        return data
        //         } catch (e) {
        //           console.log(e);
        //         }
    }

    const getCampaignById = async (campaignId) => {
            API.getCampaignById(campaignId)
            .then(response => {
                dispatch({
                    type: campaignActions.SET_CAMPAIGN_BY_ID,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: campaignActions.ERROR,
                    payload:
                      error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
                  })
            })
    }

    const getImageUrl = async (body) => {
        try {
            const res = await API.uploadCampaignCoverImage(body);
            return res.data.file_name
        } catch (error) {
            dispatch({
                type: campaignActions.ERROR,
                payload:
                  error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
              })
        }
    }

    const createCampaign = async (user, form, campaignParams) => {
       return new Promise((resolve, reject) => {
            dispatch({type: campaignActions.CREATE_CAMPAIGN + campaignActions.MAKE_REQUEST})
            const loadingId = toast.loading("Please wait...");
            let userdetails = typeof user === "string" ? JSON.parse(user) : user.data;
            let brands = userdetails.brand_details;
            let targetLocation = form.influencer_details?.target_location && !Array.isArray(form.influencer_details?.target_location) ? form.influencer_details?.target_location?.split(",").map((v) => v.trim()): form.influencer_details?.target_location
            let newForm = {
                ...form,
                influencer_details: {
                    ...form.influencer_details,
                    target_location: targetLocation
                },
                brand_id: brands.id,
                brand_representative_id: brands.brand_representative_id,
                brand_details: {
                name: brands.brand_name,
                profile_pic: brands.profile_pic,
                about: brands.about,
                },
            }

            API.createCampaign(newForm)
            .then(res => {
                dispatch({type: campaignActions.CREATE_CAMPAIGN + campaignActions.SUCCESS})
                API.createInfluencerCampaign({...res.data, campaign_id: res.data.id})
                getCampaigns(campaignParams)
                toast.success("Campaign Created Successfully", {
                    id: loadingId,
                });   
                resolve(res.data)
            })
            .catch(err => {
                dispatch({type: campaignActions.CREATE_CAMPAIGN + campaignActions.FAILED})
                toast.error("Something went wrong", {
                    id: loadingId,
                });
                reject(null)
            })
        })
    }

    const updateCampaign = async (campaign_id, form, campaignParams) => {
        const loadingId = toast.loading("Please wait...");
        return new Promise((resolve, reject) => {
            API.updateCampaign(campaign_id, form)
            .then(res => {
                getCampaigns(campaignParams)
                toast.success("Campaign Created Successfully", {
                    id: loadingId,
                }); 
                resolve(res.data)
            })
            .catch(err => {
                toast.error("Something went wrong", {
                    id: loadingId,
                });
                reject()
            })
        })
    }

    const formValidation = (form) => {
       const checkLink = /https?:\/\//
       const is_product = form.influencer_details.product_details.barter.some(o => o.product === 1)
       let errors = {};
        
       if(is_product){
            errors.influencer_details = {}
            errors.influencer_details.product_details = {}
            errors.influencer_details.product_details.products_info = []
            form.influencer_details.product_details.products_info.forEach((data, i) => {
                let obj = {}
                if(data.link && !checkLink.test(data.link)){
                    obj.link = "Please enter valid link!"
                }
                errors.influencer_details.product_details.products_info.push(obj)
            })
            if(errors.influencer_details.product_details.products_info.length === 0){
                delete errors.influencer_details
            }
            
       }

       if(form.send_approve_form){
           if(form.sample_static_post_links.length){
               errors.sample_static_post_link = []
               form.sample_static_post_link.forEach((data, i) => {
                   if(data.link && !checkLink.test(data.link)){
                        errors.sample_static_post_link.push({
                            link: "Please enter valid Link!"
                        })
                   }
               })
               if(errors.sample_static_post_link.length === 0){
                    delete errors.sample_static_post_link
               }
           }
           if(form.sample_static_carousal_post_links.length){
               errors.sample_static_carousal_post_links = []
               form.sample_static_carousal_post_links.forEach((data, i) => {
                   if(data.link && !checkLink.test(data.link)){
                        errors.sample_static_carousal_post_links.push({
                            link: "Please enter valid Link!"
                        })
                   }
               })
               if(errors.sample_static_carousal_post_links.length === 0){
                    delete errors.sample_static_carousal_post_links
               }
           }
           if(form.sample_reel_post_links.length){
               errors.sample_reel_post_links = []
               form.sample_reel_post_links.forEach((data, i) => {
                   if(data.link && !checkLink.test(data.link)){
                        errors.sample_reel_post_links.push({
                            link: "Please enter valid Link!"
                        })
                   }
               })
               if(errors.sample_reel_post_links.length === 0){
                    delete errors.sample_reel_post_links
               }
           }
           if(form.sample_video_post_links.length){
               errors.sample_video_post_links = []
               form.sample_video_post_links.forEach((data, i) => {
                   if(data.link && !checkLink.test(data.link)){
                        errors.sample_video_post_links.push({
                            link: "Please enter valid Link!"
                        })
                   }
               })
               if(errors.sample_video_post_links.length === 0){
                    delete errors.sample_video_post_links
               }
           }
           if(form.sample_story_links.length){
               errors.sample_story_links = []
               form.sample_story_links.forEach((data, i) => {
                   if(data.link && !checkLink.test(data.link)){
                        errors.sample_story_links.push({
                            link: "Please enter valid Link!"
                        })
                   }
               })
               if(errors.sample_story_links.length === 0){
                    delete errors.sample_story_links
               }
           }
       }

       return errors
    }   

    return (
        <CampaignContext.Provider 
            value={{
                ...state,
                getCampaigns,
                getImageUrl,
                createCampaign,
                updateCampaign,
                formValidation,
                getCampaignById
            }}>
            { children }
        </CampaignContext.Provider>
    )

}