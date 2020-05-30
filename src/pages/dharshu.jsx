import React, { Component } from 'react'
import Nextpage from './Nextpage'
import {Link,Redirect,Route} from 'react-router-dom'

class Dharshu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             check:""
        }
    }
    Autenticate = (event) => {
        this.setState({
                check: event.target.value
        })
    } 
    Gone = () => {
        if(this.state.check=="tryit")
        {
            return <h1><link to='/darshubro/log'>click</link></h1>
        }
        
            <Redirect to="/darshubro"/>
        

    }
    
    render() {
        return (
            <div onmSubmit={this.Gone}>
                <form>
                    <input type="text" value={this.state.check} onChange={this.Autenticate}/>
                    <button type="submit">submit</button>
                </form>

            </div>
        )
    }
}

export default Dharshu
