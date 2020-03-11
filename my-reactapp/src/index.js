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

class WeatherForecast extends React.Component{

    // Start Contructor
    constructor(props){
        super(props);
        this.state = {weatherData:""};
    }
    // End constructor   

    // Document on ready
    componentDidMount(){
        console.log("Hello");
    }
    // End document on ready

    GetWeatherForecast = event =>{
        debugger
        // validate if weather forecast is storaged in local
        var IsforecastInLocal = localStorage.getItem("weather") != null ? localStorage.getItem("weather") : null ;
        
        // set the Url where the request would be sent
        let URL ="https://api.weatherbit.io/v2.0/forecast/daily?city_id=3981609&days=16&key=19dbfc63db5446fbaeb3ea537b3bb17e";
        
        // Start http request
        fetch(URL).then(async response=>{

            // gets api response 
            var data = await response.json();
            
            // storage the api response on localstorage. to avoid makes a request every time the page's reloading
            localStorage.setItem("weather",JSON.stringify(data));

        }).catch(error =>{ // Handling errors   
            alert("An Error Ocurred while the weather indormation was getting");
            console.log(error);
        })
        // End Http request

    }
    // End function

    render(){

        return (
            <React.Fragment>
                <hr/>
                <div>
                    <button type="button" onClick={this.GetWeatherForecast}>
                        See Weather forecast
                    </button>
                </div>
            </React.Fragment>
        );

    }
    // End render function

}
// End component

ReactDOM.render(
    // To Display All the Components
    [<SingleForm/>, <MultipleForm/>,<DisplayAlert/>,<WeatherForecast/>],

    // To display Jus one Component
    //<DisplayAlert/>,

    // Here is where your componets will be displayed
    document.getElementById('root')
);

