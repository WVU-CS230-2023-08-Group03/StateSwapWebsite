import SignIn from "../components/auth/SignIn";
import SignOut from "../components/auth/SignOut";
import SignUp from "../components/auth/SignUp";
import React from 'react';

function SignInUp() {
    return (
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
       <SignIn/>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
    <SignUp/>
      </div>
    </div>
  </div>
  <SignOut/>
</div>
    )
}

export default SignInUp;