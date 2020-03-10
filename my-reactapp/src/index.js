import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SingleForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {username:""};
    }

    handleChange = event=>{        
        this.setState({username: event.target.value})
    }

    render(){

        return(
            <React.Fragment>
            <form>
              <label>username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </form>
     
            <h3>Your username is: {this.state.username}</h3>
          </React.Fragment>
        );
        
    }
    // End Render Method
    
}
// End Component

class MultipleForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {username:"", password:""};
    }    

    // To Assign Dinamycly to the variable , the typed value according each field
    handleChange = ({target}) =>{        
        this.setState({[target.name]:target.value });
    }

    render(){
        return(

            <React.Fragment>
                <form>
                    <label htmlFor="username">Username</label>
                    <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange ={this.handleChange}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                    type="text"
                    name="password"
                    value={this.state.password}
                    onChange ={this.handleChange}
                    />

                </form>

                <b>UserName: {this.state.username} </b> <br/>
                <b>Password: {this.state.password}</b>
            </React.Fragment>

        )
    }

}
// End Component

class DisplayAlert extends React.Component{

    constructor(props){
        super(props);
        this.state = {msg:""}
    }

    handleChange = event=>{        
        this.setState({msg: event.target.value})
    }

    handleClick = event =>{
        
        // Avoid event propagation
        event.preventDefault();        
        var Message = this.state.msg;
        alert(Message);
    } 

    render(){
        return(

            <React.Fragment>
                <form>
                <label htmlFor="username">Username</label>
                <textarea type="text" name="msg" value={this.state.msg} onChange={this.handleChange}>                    
                </textarea>
                </form>

                <button type="button" onClick={this.handleClick}>Click Me</button>
            </React.Fragment>

        );
    }

}
// End Component

ReactDOM.render(
    // To Display All the Components
    [<SingleForm/>, <MultipleForm/>,<DisplayAlert/>],

    // To display Jus one Component
    //<DisplayAlert/>,

    // Here is where your componets will be displayed
    document.getElementById('root')
);

