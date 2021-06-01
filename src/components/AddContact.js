import React from "react";

// here i am using class component

class AddContact extends React.Component {

    state={
        name:" ",
        email:" ",
    };

    add=(e)=>{
        e.preventDefault();//dont get refresh by default because i am using button component
        if(this.state.name === " " || this.state.email === " "){
            alert("all the fields need to be filled");return;
        };

        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});  //to clear the data in form as soon as we click button component
        
    };
    render(){
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name"
                     placeholder="Name"
                      value={this.state.name}
                    onChange={(e)=>this.setState({name:e.target.value})}/>

                </div>

                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email"
                     placeholder="email" 
                     value={this.state.email}
                    onChange={(e)=>this.setState({email:e.target.value})}
                    />
                    
                </div>
                <button className="ui button blue">Add</button>
                </form>
            </div>
            
        );
    };

};

export default AddContact;
