import React from 'react'


function Display(props){

    return(

        <div><strong>Category: </strong>{props.data.category.title}
        <br/>
        <strong>Question: </strong>{props.data.question}
        <br/>
        <strong>value: </strong>{props.data.value}
        <br/>
              <form onSubmit={props.handleSubmit} >
                <div>

                <label htmlFor='answer'><strong>Your Answer:</strong></label>
                
                <input
                type='text'
                name='answer'
                value={props.formData.answer}
                onChange={props.handleChange}

            
              />   
                </div>
              <button type='submit'>Submit Answer</button>
              </form>
                <br/>
             
              <strong>Your Score: </strong>{props.score}</div>
    )



}

export default Display