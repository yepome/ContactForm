import React, { Component } from 'react';
import Footer from './Footer';



class RegisterForm extends Component {

    state = {
        name:'',
        firstName:'',
        age:'',
        sex:'',
        city:'',
        phone:'',
        mail:''
    }

    handleName = (e) =>{
        this.setState({
            name: e.target.value    
        }
         )
    }
    handleFirstName = (e) =>{
        this.setState({
            firstName: e.target.value    
        }
         )
    }
    handleAge = (e) =>{
        this.setState({
            age: e.target.value    
        }
         )
    }
    handleSex = (e) =>{
        this.setState({
            sex: e.target.value    
        }
         )
    }
    handleCity = (e) =>{
        this.setState({
            city: e.target.value    
        }
         )
    }
    handlePhone = (e) =>{
        this.setState({
            phone: e.target.value    
        }
         )
    }
    handleMail = (e) =>{
        this.setState({
            mail: e.target.value    
        }
         )
    }
    handleSubmitform = (e) =>{
        console.log()
    }
    
    render(){ 
        
        return (

            <div className="global">
                <div className="wrapper">
                <form onSubmit={this.handleSubmitform}>
                    <label>Name 
                    <input type="text" value={this.state.name} onChange={this.handleName} placeholder="Enter your Name"/>
                    </label>
                    <label>First Name 
                    <input type="text" value={this.state.firstName} onChange={this.handleFirstName} placeholder="Enter your First Name"/>
                    </label>
                    <label>Age 
                    <input type="text" value={this.state.age} onChange={this.handleAge} placeholder="Enter your Age"/>
                    </label>
                    <label>Sex
                    <input type="text" value={this.state.sex} onChange={this.handleSex} placeholder="Enter your gender"/>
                    </label>
                    <label>City
                    <input type="text" value={this.state.city} onChange={this.handleCity} placeholder="Enter your City"/>
                    </label>
                    <label>Phone Number
                    <input type="text" value={this.state.phone} onChange={this.handlePhone} placeholder="Enter your Phone Number"/>
                    </label>
                    <label>E-Mail
                    <input type="email" value={this.state.mail} onChange={this.handleMail} placeholder="Example@example.com"/>
                    </label>
                    <button>Submit</button>
                </form>
                </div>
                <Footer />
            </div>
        );
    }
    
    
}

export default RegisterForm;
