import React, { createContext, useState } from 'react'
import { makeStyles,useTheme } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
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
        height:'3em',
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
}));
function InputBox({value, placeholder,  type}) {
    const Value=createContext(value)
    const classes = useStyles();
    const [val,setValue]=useState("")
    const handleChange = (e) => {
        setValue(e.target.value)      
    };
  return (
    <div className="form-group">
    {type === 'textarea' ? (
        <textarea
            className={classes.input_fieldDesc}
            placeholder={placeholder}
            value={val}
            onChange={handleChange}     
        />
    ) :
    (
        <input
                    type={type}
                    value={val}
                    className={classes.input_field}
                    placeholder={placeholder}
                    onChange={handleChange}
                   
                />
    )
    }
    </div>
  )
}
InputBox.defaultProps = {
    value: '',
    label: '',
    placeholder: '',
    type: 'text',
    
  };
  

export default InputBox