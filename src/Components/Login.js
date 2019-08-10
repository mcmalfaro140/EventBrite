import React from 'react'
import '../Style/login.css'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
          error: '',
          auth: false,
        };
    
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
      }
    //set error string back to empty
      dismissError() {
        this.setState({ error: '' });
      }
    //handle the form submit
      handleSubmit(e) {
        e.preventDefault();

        //makes sure that the user input is not empty before submitting
        if (!this.state.username) {
          return this.setState({ error: 'Username is required' });
        }
        //makes sure that the password input is not empty before submitting
        else if (!this.state.password) {
          return this.setState({ error: 'Password is required' });
        }
        //Authentificate the user and password
        //if they match then it sends the user back home;
        //otherwise, it displays an error.
        else {
            this.props.data.users.forEach(element => {
                if(element.user === this.state.username && element.pass === this.state.password){
                    this.setState({ auth: true})
                }
            });

            if(this.state.auth === true){
                this.props.history.push("/");
            }else{
                return this.setState({ error: 'User and password did not match' });
            }
            
        } 
      }
    
      handleUserChange(e) {
        this.setState({
          username: e.target.value,
        });
      };
    
      handlePassChange(e) {
        this.setState({
          password: e.target.value,
        });
      }
    
    render() { 
      //Still under development
      //If user has signed in already, it renders a different componet 
        if(this.props.data.isloggedin != true){
            return ( 
                <div>
                    <div className="logContainer">
                        <form className="innerDiv" onSubmit={this.handleSubmit}>
                            <div className="logoText">
                                <img className="eventLogo" src={require('../img/eventbrite.png')}></img>
                                <p style={{color: '#f6682f'}}>EvenBrite</p>
                            </div>
                            <i style={{fontSize: 100}} class="fas fa-user-circle"></i>
                            <p className="signText">Sign In</p>
                            <div>
                                <div className="box">
                                    <h3 className="title">Username or Email:</h3>
                                    <input className="input" type="text" value={this.state.username} onChange={this.handleUserChange}></input>
                                </div>
                                <div className="box">
                                    <h3 className="title">Password:</h3>
                                    <input type="password" className="input" value={this.state.password} onChange={this.handlePassChange}></input>
                                </div>
                                <Link className="forgotPass" to="/forgot">Forgot your Username or Password?</Link>
                                <p className="error">{this.state.error}</p>
                            </div>
                            <input className="logBtn" type="submit" value="Sign In"></input>
                        </form>
                    </div>
                </div>
             );
        }else{
            return ( 
                <div>
                    <div className="logContainer">
                        <h1>You've already logged in</h1>
                    </div>
                </div>
             );
        }
        
    }

}
 
Login.propTypes = {
    data: PropTypes.array.isRequired
}

export default Login;