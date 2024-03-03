import React,{useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import CustomForm from './common/CustomForm';


const Api="http://ubuntu@ec2-13-58-234-56.us-east-2.compute.amazonaws.com:8080/feedback";


const Feedbackform = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    rating:"",
    suggestion:""
  })

  const [alertData,setAlertData]=useState();

const handlechange=(event)=>{
  console.log(event.target.name);
  setFormData({...formData,[event.target.name]:event.target.value});

}

const handleClick=()=>{
  // We will make the api call here
  axios.post(Api,formData).then(result=>{
     console.log(result.data);
     setAlertData({
      text:result.data.message,
      variant:"success"
     })
     setFormData({
      name:"",
      email:"",
      rating:"",
      suggestion:""
    })
     setTimeout(()=>{
      setAlertData(undefined);
      
     },3000)
  }).catch(err=>{
    console.log(err);
  })
}

  return (
    <>
    <Row>

    <Col md={{ span: 6, offset: 3 }}>
      <h2 style={{textAlign:"center"}}>Feedback form</h2>
      {
           alertData?<Alert key={alertData.variant} variant={alertData.variant}>
          {alertData.text}
         </Alert>:""
      }
      <CustomForm formData={formData} handleClick={handleClick} handlechange={handlechange}/>
   


    </Col>
    </Row>
    </>
    
    
  )
}

export default Feedbackform