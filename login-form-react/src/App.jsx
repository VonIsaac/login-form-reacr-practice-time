
import { useState } from 'react';
import './App.css'
import LoginForm from './Components/LoginForm '

function App() {
  const [isLogin, setLogin] = useState(false);
    const [username, setUsername] = useState("");
    const [userLastName, setLastName] = useState("")
    const [userEmail, setEmail] = useState("")
    const [password, setPassword] = useState("");

    function resetAll(){
      setUsername("");
      setLastName("");
      setEmail("");
      setPassword("");
    }

    //for onchange
  function editName(event){
      setUsername(event.target.value)
  };

  function editLastName(event){
    setLastName(event.target.value)
  };

  function editEmail(event){
    setEmail(event.target.value)
  };

  function editPassword(event){
    setPassword(event.target.value)
  };


  //for button
 function setLoginForm(){
    if(username === "" || userLastName === "" || userEmail === "" || password === "" ){
      alert("plsee")
    }else{
      setLogin(login => !login)
    }
  };  



    return (
      <>
        <LoginForm 
          setLogins = {isLogin}
          userName ={username}
          userLastName = {userLastName}
          userEmail = {userEmail}
          password = {password}
          myName = {editName}
          myLastName = {editLastName}
          myEmail = {editEmail}
          myPassword = {editPassword}
          buttonClick = {setLoginForm}
          btnReset ={resetAll}
        />
      </>
    );
  
};

export default App
