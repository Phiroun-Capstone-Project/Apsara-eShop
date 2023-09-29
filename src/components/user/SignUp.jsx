import { useNavigate } from "react-router-dom"
import { fetchAllUsers } from "../../API/users"
import { useState } from "react"
import '../../style/signUp.css'
import NavBar from "../Navbar"

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState(true);
    
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            if (password === confirmPassword) {
              const newUser = await fetchAllUsers(username, email, password)
            if (newUser) {
              navigate("/Profile");
            }
          } else {
            setCheckPassword(false);
            console.log("Password doesn't match.");
          }
        } catch (error) {
          console.error(`Error occured.`, error);
        }
      }

    return (
          <div>
            <NavBar /> 
                <div className="title">
                    <h4>Sign Up</h4>
                </div>
                <div className="signUpForm">
                    <form onSubmit={handleSubmit}>
                        <div className="userInfo">
                                <input type="text" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
                        </div>
                        <div className="userInfo">
                                <input type="text" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className="userInfo">
                                <input type="text" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>
                        <div className="userInfo">
                                <input type="text" placeholder="Retype New Password" onChange={(e) => {setConfirmPassword(e.target.value)}}/>
                              <div>
                                <button>Enter</button>
                                <br/>
                                <button onClick={() =>{navigate('/Profile')}}>Back</button>
                              </div>
                        </div>
                    </form>
                  </div>
            </div>
        
         );
         
         
}