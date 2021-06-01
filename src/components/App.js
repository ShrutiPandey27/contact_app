import React,{useState,useEffect} from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import {uuid} from 'uuidv4';  //so as to get unique id for each info and this id will help for deletion  


//it is functonal component

function App() {
  const LOCAL_STORAGE_KEY="contacts";
const [contacts,setContacts]=useState([]);

const addContactHandler=(contact)=>{
  console.log(contact);
  setContacts([...contacts,{id:uuid(), ...contact}]); //we use rest here(3...)
};

const removeContactHandler=(id)=>{
  const newContactList=contacts.filter((contact)=>{
    return contact.id!==id;

  });
  setContacts(newContactList);
}

useEffect(()=>{
  //retrieve back information from local storage
 const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
 if(retriveContacts) setContacts(retriveContacts);
 },[]);


//we use useeefect so as to retain,render the value like name and mail id (when we refresh the page)
useEffect(()=>{
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
},[contacts]);//contacts here are dependencies



  return (
   <div className="ui container">
     <Header/>
     <AddContact addContactHandler={addContactHandler}/>
     
      {/* we use handler when we need to pass information from child to parent */}
     <ContactList contacts={contacts} getContactId={removeContactHandler}/>

   </div>
  );
}

export default App;
