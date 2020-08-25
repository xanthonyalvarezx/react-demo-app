import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
import Display from './Display'


class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {
        category: ''
      },
      formData:{
        answer:''}
      ,
      submitted:false,
      score: 0,
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

scoreTotal() {
  if (this.state.formData.answer === this.state.data.answer){
  this.setState({
    score: this.state.score + this.state.data.value 
    })
  } else   this.setState({
    score: this.state.score -  this.state.data.value 
    
})
  
}
handleChange = (event) => {

  const formData = {...this.state.formData}
  formData[event.target.name] = event.target.value

  this.setState({formData}
    
  )
}

handleSubmit = (event) =>{
  event.preventDefault()
  this.scoreTotal()
  this.getNewQuestion()
  this.resetForm()
  
  
      
  
  
      }

      resetForm = (event) => {
        this.setState({
            
            formData:{
                answer:''
        }

        })
    }




  //display the results on the screen
  
  render() {
    
    return (
      <div>
        <Display
        data={this.state.data}
        formData={this.state.formData}
        score={this.state.score}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        
        />
      </div>

        
        
    );

      


  }
}
export default Jeopardy;