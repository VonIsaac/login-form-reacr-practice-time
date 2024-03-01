import Thankyou from "./Thankyou";


export default function LoginForm({
    setLogins,
    userName,
    userLastName,
    userEmail,
    password,
    myName,
    myEmail,
    myPassword,
    myLastName,
    buttonClick,
    btnReset,
}){
 
    
    return(
        <>
           {!setLogins && 
            <div className="login-forms">
                <form action="login-form">
                  
                    <input type="text" value= {userName} required id="first-name" placeholder="First Name:" onChange={myName}/> <br></br>

                    <input type="text" value= {userLastName} required id="last-name"  placeholder="Last Name:" onChange={ myLastName} /> <br></br>
                    
                    <input type="email" name="email" id="email" required value= {userEmail} placeholder="Email Address:" onChange={myEmail }/> <br></br>

                    <input type="password" name="password" id="password" required value= {password} placeholder="Password:" onChange={myPassword }/> <br></br>

                    <button className="btn" onClick={buttonClick}>CLAIM YOUR FREE TRIAL</button>
                </form>
            </div>
            }

            {setLogins && (
            <Thankyou
              thanks = { () => {buttonClick(); btnReset();}}
              title= "Thank you for Claming!"
            />)}
        </>
        
    );

    
    
};






















