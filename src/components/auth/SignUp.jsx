import  { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const signUp = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return(
        <div className='sign-in-container'>
        <h1>Sign Up</h1>
            <form onSubmit={signUp}>
                <div className="form-group">
                  <label  htmlFor="email" style={{ padding: '10px' }}>Email </label>
                  <div>
                  <input  type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
               </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password" style={{ padding: '10px' }}>Password</label>
                  <div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  </div>
                </div>
                <button type="submit">Submit</button>
              </form>
              
        </div>
        
    )
} 
export default SignUp;