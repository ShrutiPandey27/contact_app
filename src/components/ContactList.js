import React from 'react';
import ContactCard from './ContactCard'

const ContactList=(props)=>{

    //we are passing clickHandler from innerchild to its parent and from its parent to its parent i.e, contactcard gives id to contaclist and contactlist gives this id to app.js
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };
    

    const renderContactList=props.contacts.map((contact)=>{
        return(
          <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>

        );

    });
    return <div className="ui celled list">
            {renderContactList}
        </div>
    

};

export default ContactList;