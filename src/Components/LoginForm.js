import { Component } from 'react'
const BackendURL = 'http://localhost:9000/'

class LoginForm extends Component {

    state = {
        username: "",
        password: "",
        sign_up: false,
        error: null
    }

    handleClick = (event) => {
        event.preventDefault()

        this.setState({ sign_up: !this.state.sign_up})

    }

    handleChange = (event) => {
        let { name, value } = event.target
        name === "username" ? this.setState({ username: value }) : this.setState({ password: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.sign_up){
            fetch(`${BackendURL}users`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(result => {
                if(result.error){
                    this.setState({ error: result.error })
                } else {
                    this.props.setUser(result.user)
                    this.props.setDirectives(result.user.usercommands)
                    this.setState({
                        username: "",
                        password: "",
                        error: null
                    })
                }
            })
        } else {
            fetch(`${BackendURL}login`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(result => {
                if(result.errors){
                    this.setState({ error: result.errors })
                } else {
                    this.props.setUser(result.user)
                    this.props.setDirectives(result.user.usercommands)
                    this.setState({
                        username: "",
                        password: "",
                        error: null
                    })
                }
            })
        }
    }

    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
                {this.state.sign_up ?  <h2>Sign Up</h2> : <h2>Log In</h2>}
                <label>Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id ="username" 
                    placeholder="USERNAME" 
                    value={ this.state.username }
                    onChange={ this.handleChange }/>
                <label>Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id ="password" 
                    placeholder="PASSWORD" 
                    value={ this.state.password }
                    onChange={ this.handleChange }/>
                {this.state.error ? <p>{this.state.error}</p> : null}
                <input type="submit" value="ENTER"/>
                {this.state.sign_up ? <button onClick={this.handleClick}>Log In</button> : <button onClick={this.handleClick}>New? Sign Up</button>}
            </form>
        )
    }
}

export default LoginForm