import Check from "../assets/pngwing.com.png"
export default function Thankyou({thanks, title}){
        

    return(
        <div className="thank-yous">
            <img src= {Check} alt="check-png" id="check" />
            <h2>{title}</h2>
            <p>Embark on your learning journey today by claiming your free course!  Don't miss this opportunity to invest in your education.</p>
            <button onClick={thanks}>Return</button>
        </div>
    );
};