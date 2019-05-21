import React, {Component} from 'react';
import ContactList from '../../components/ContactList';

class Contact extends Component {

     state = {
        controls:{
            email:'',
            password:'',
            address:'',
            city:'',
            zip:'',
            terms :'',
            state:''
        },
        isModal: false
    }

    saveForm =()=>{

         //if you want to save the data in database ..you need to call the api which inserts data to backend
        //this.props.saveDataToTable(this.state.controls);
        const controls ={
            email:'',
            password:'',
            address:'',
            city:'',
            zip:'',
            terms :'',
            state:''
        };

        this.setState({controls , isModal:false});
    };

    handleSubmit = () =>{

        this.setState({isModal: true});
    };

    modalClose =()=>{
      this.setState({isModal: false});
    };

    handleChange = (e,inputType) => {
        const data = [];
        data[inputType] = e.target.value;
        if(inputType === 'terms'){
            data[inputType] = e.target.checked;
        }
        const controls ={...this.state.controls,...data};
        this.setState({controls});
    };


    render(){
        return(
            <ContactList
                controls={this.state.controls}
                handleChange ={this.handleChange}
                handleSubmit ={this.handleSubmit}
                modalClose={this.modalClose}
                isModal={this.state.isModal}
                saveForm={this.saveForm}
            />
        )
    }
}
export default Contact;