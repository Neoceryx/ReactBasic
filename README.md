## React Basic

1. Installing Dependencies
2. Creating React Project
3. Doing the first Examples
4.  References

### Installing Dependencies
It’s necessary to have **Node js** Installed on our device. for this example i used the LTS version. we can download it from [Here](https://nodejs.org/es/)

Or we can **verify if already have node installed** in our machine, running the following command on CMD. **node -v** (*In my case i have the 10.16.3 version*)

also we'll need a text editor. I recommend to use [visual studio code](https://code.visualstudio.com/)

### Creating React Project
over the CMD or terminal (*if you're using linux or mac*) we are going to execute the following commands, to start whit our React project.
1. **npx create-react-app my-app**: To create our React Project, **my-app** is the name which we want give to our project. once executed the command, we are going to wait until node finish to create the solution, it can take a while.
2. **cd my-app**: to go to the folder previously created.
3. **cd src**: to go to the folder that contains the needed files for our React project.

*in this point Node has been created a couple of files inside the **src** folder, we can delete these file or not, but in this tutorial i deleted those files.*

If you also deleted the files inside the **src** folder. don't worry, because we are going ot create 2 new files inside **src** folder. 

1. index.css
2. index.js

*these files can be created doing right click on the src folder and then new file, we don't need any special command*


### Doing the first Examples
* We open **index.js** file, and then we add the following 3 code lines at the beginning from the scrip
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
```
* Then we execute the command **npm start** in the CMD. to run our React Project. the project will be opened in http://localhost:3000

#### Creating the first example.
* the following example create a very basic form, an then allow to the user write and display the string typed over the input.
```
class SingleForm extends React.Component {

	constructor(props){
		super(props);
		this.state = { username: '' }; // here is where you declare the variables which we are going to need
	}
	
	// Here is where we get the text who the user is typing
	handleChange = event => {
		this.setState({ username: event.target.value });
	};

render() {
	return (
	<React.Fragment>
	<form>
		<label htmlFor="username">username</label>
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
}

ReactDOM.render(
    <SingleForm/>,
    // Here is where your componets will be displayed. this element you can find it on public/index.html
    document.getElementById('root')
);
```
### References
[Official Tutorial](https://es.reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial)


[handling User Input](https://medium.com/the-andela-way/handling-user-input-in-react-crud-1396e51a70bf)
