import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";


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
        <strong>Category: </strong>{this.state.data.category.title}
        <br/>
        <strong>Question: </strong>{this.state.data.question}
        <br/>
        <strong>value: </strong>{this.state.data.value}
        <br/>
              <form onSubmit={this.handleSubmit} >
                <div>

                <label htmlFor='answer'><strong>Your Answer:</strong></label>
                
                <input
                type='text'
                name='answer'
                value={this.state.formData.answer}
                onChange={this.handleChange}

            
              />   
                </div>
              <button type='submit'>Submit Answer</button>
              </form>
                <br/>
             
              <strong>Your Score: </strong>{this.state.score}
      </div>
    );

      


  }
}
export default Jeopardy;