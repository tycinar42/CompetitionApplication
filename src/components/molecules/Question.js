import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
export default function Question(props) {
  const {data} = props;  
  const [answer,setAnswer] = useState(null);
  return (
  
            <div className='row' 
        style={{width:'100%', 
                backgroundColor:'#FFF5E4', 
                marginLeft: 6,
                padding: 10,
                borderRadius: 10}}>
            <div className='row'>
                <div className='col-md-10'>
                    <h3>{(props?.index===undefined ? '1': props?.index+1)+'- '+ data?.question?.question}</h3>
                </div>
                <div className='col-md-2 text-end'>
                    <label style={{
                        padding:5,
                        color:'white',
                        right: 3,
                        top: 3,
                        backgroundColor: 'red',
                        borderRadius: 10,
                    }}>
                        {data?.question?.point+' Puan'}
                    </label>
                </div>
            </div>
            
         
            <RadioGroup>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
                <Grid item md={6} sm={12}>
                    <FormControlLabel 
                    onClick={()=>{
                        setAnswer(data?.answerlist[0]?.id);
                    }}
                    value={data?.answerlist[0]?.answer} 
                    control={<Radio />} 
                    label={data?.answerlist[0]?.answer}  />                   
                </Grid>
                <Grid item md={6} sm={12}>
                    <FormControlLabel 
                     onClick={()=>{
                        setAnswer(data?.answerlist[1]?.id);
                    }}
                    value={data?.answerlist[1]?.answer} 
                    control={<Radio />} 
                    label={data?.answerlist[1]?.answer}  />
                </Grid>
                <Grid item md={6} sm={12}>
                    <FormControlLabel 
                     onClick={()=>{
                        setAnswer(data?.answerlist[2]?.id);
                    }}
                    value={data?.answerlist[2]?.answer} 
                    control={<Radio />} 
                    label={data?.answerlist[2]?.answer}  />
                </Grid>
                <Grid item md={6} sm={12}>
                    <FormControlLabel 
                     onClick={()=>{
                        setAnswer(data?.answerlist[3]?.id);
                    }}
                    value={data?.answerlist[3]?.answer} 
                    control={<Radio />} 
                    label={data?.answerlist[3]?.answer}  />
                </Grid> 
                </Grid>
                  
            </RadioGroup>   
            
            <Button 
            onClick={()=>{
                props.doAnswer(props?.index, answer);
            }}
            variant="contained" color="success" style={{marginTop:35, marginBottom: 20}}>
            {
                props?.size === props?.index+1 ? 'Bitir' : 'Sonraki'
            }
            </Button>
        </div>
   
  
  )
}
