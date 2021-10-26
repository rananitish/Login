import React from 'react';

import './App.css';

function App() {
  return (
   <div className="loginpage">
      <div className="dine-overlay">
              <div className="automate-takeaway">
              <b>Automate your takeaway</b> </div>
               <p><b>Pos features help your business to be fully automated with <br/> DineOrder online ordering system.</b></p>
               <a href="#" class="login-box" tabindex="0">
							<b>View More</b>
						</a>
       </div>
    <div className="log-section">
      <div className="log-details">
        <form id ="loginForm" action="" method="post">
         <div className="form-element-wrapper">
           <input className='form-input' autoComplete='on' name='login_user_Username' type="email" name="" id="email" placeHolder="Email Address or Phone Number"/>
           <label htmlFor="email address" className="form-label">Email Address or Phone Number</label>
         </div>
         <div className="form-element-wrapper">
           <input type="password" name="login_user_Password" id="login-password" autoComplete="on" className="form-input" placeholder="Password"   />
           <label htmlFor="pos_customer_Username" className="form-label">Password</label>
         </div>
         <a href="#" className="edit-receipt-btn"><b>LOG IN</b></a>
       </form>
      </div>
     </div>
   </div>
  );
}

export default App;
