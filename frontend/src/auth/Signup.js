import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../service/firebase';
import Footer from '../components/Footer';
import "../style/style.css";
import learneaselogo from '../style/images/logo4.jpg';
import l2 from '../style/images/l2.png';
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSignup = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
    return (
        <div>
            <section id="about-signup">
                <div className='signup-img'>
                <img src={l2} alt="" style={{ width: '500px', height: '400px' }}/>

                </div>
                <div className='signup-text'>
                <div className='signup-main-container'>
         <div className="signup-container">
           <div className="signup-form-container">
             <img style={{width:"50%"}}className="logo" src={learneaselogo} alt="Logo" />
             {/* <h2 className="heading">Welcome Back!</h2> */}
             <form className="signup-form" onSubmit={onSignup}>
               <label className="signup-label">Email:</label>
               <input
                 className="signup-input"
                 type="text"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
               />
     
               <label className="signup-label">Password:</label>
               <input
                 className="signup-input"
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required
               />
     
               <button className="signup-button" type="submit">
                 Sign up
               </button>
             </form>
     
             <p style={{marginTop:"10px"}}>
                                 Already have an account? {' '}
                                 <NavLink to="/login">
                                      Sign in
                                  </NavLink>
                              </p>
           </div>
         </div>
         </div>
                    
                </div>
            </section>
         
         <Footer/>
         </div>
       );


//   return (
//     <main >        
//         <section>
//             <div>
//                 <div>                  
//                     <h1> FocusApp </h1>                                                                            
//                     <form>                                                                                            
//                         <div>
//                             <label htmlFor="email-address">
//                                 Email address
//                             </label>
//                             <input
//                                 type="email"
//                                 label="Email address"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}  
//                                 required                                    
//                                 placeholder="Email address"                                
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="password">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 label="Create password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)} 
//                                 required                                 
//                                 placeholder="Password"              
//                             />
//                         </div>                                             
                        
//                         <button
//                             type="submit" 
//                             onClick={onSubmit}                        
//                         >  
//                             Sign up                                
//                         </button>
                                                                     
//                     </form>
                   
//                     <p>
//                         Already have an account?{' '}
//                         <NavLink to="/login" >
//                             Sign in
//                         </NavLink>
//                     </p>                   
//                 </div>
//             </div>
//         </section>
//     </main>
//   )
};
 
export default Signup


// <div className='signup-main-container'>
//          <div className="signup-container">
//            <div className="signup-form-container">
//              <img style={{width:"50%"}}className="logo" src={learneaselogo} alt="Logo" />
//              {/* <h2 className="heading">Welcome Back!</h2> */}
//              <form className="signup-form" onSubmit={onSignup}>
//                <label className="signup-label">Email:</label>
//                <input
//                  className="signup-input"
//                  type="text"
//                  value={email}
//                  onChange={(e) => setEmail(e.target.value)}
//                  required
//                />
     
//                <label className="signup-label">Password:</label>
//                <input
//                  className="signup-input"
//                  type="password"
//                  value={password}
//                  onChange={(e) => setPassword(e.target.value)}
//                  required
//                />
     
//                <button className="signup-button" type="submit">
//                  Sign up
//                </button>
//              </form>
     
//              <p style={{marginTop:"10px"}}>
//                                  Already have an account? {' '}
//                                  <NavLink to="/login">
//                                       Sign in
//                                   </NavLink>
//                               </p>
//            </div>
//          </div>
//          </div>