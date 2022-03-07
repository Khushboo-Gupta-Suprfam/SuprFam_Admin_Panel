import React, {useState,useRef} from 'react';
import { Button,Grid } from '@material-ui/core';
import { makeStyles,useTheme } from '@material-ui/core';



export default function FileUploadPage({placeholder}){
	const [selectedFile, setSelectedFile] = useState([]);
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};
	const fileRef = useRef();

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};


	return(
   <div>
			<input type="file" name="file"      onChange={changeHandler} hidden ref={fileRef}
			
			/>
			<Grid item container style={{marginBottom:'2em'}}>
			<Grid item xs={6}>
			
				<div>
					<input type="text" value={selectedFile.name} placeholder={placeholder} style={{
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
				fontSize:"12px",
				fontWeight:'bold',
				'&::placeholder':{
					color: '#354776 !important'
				}
			}}/>
					
				</div>
			
			</Grid>
			<Grid item xs={6}>
			
			<label htmlFor="contained-button-file">
			<Button variant="contained" style={{backgroundColor:"#D49229",color:"white"}} component="span" onClick={() => fileRef.current.click()}>
			  Upload
			</Button>
		  </label>
			</Grid>
			</Grid>
		</div>
	)
			}