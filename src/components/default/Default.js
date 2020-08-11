import React, {Component} from 'react'
import { render } from '@testing-library/react'



class Default extends Component{
            constructor(props){
                super(props)
            }
    render(){


        let imageStyle={
           position:'relative',
          width:'1450px',
          height:'310px',
          zIndex:'10',
          bottom:'200px',
          left:'525px',
          
          
    


        }



        return(
        
        <div className='errorMsg'>
            <img  src={this.props.image} alt={this.props.alt}  style={imageStyle}  />
            <img  src={this.props.image} alt={this.props.alt}  style={imageStyle}  />
        </div>
        )

    }
}



export default Default