import React, { Component } from 'react';
class Signup extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <div>
            <table class="Setup">
                <tbody>
                <tr>
                    <td>
                    <p id="start1">Smarter Learning's</p>
                    <p id="start2">User Sign Up</p>
                    <p id="start3"> Welcome</p>
                    <p id="getget"></p>
                </td>
                </tr>
                <tr>
                    <td>
                    <input placeholder="Username" class="enter" type="email" id="temail"></input>
                    <input placeholder="Email" class="enter" type="password" id="tpassword"></input>
                    <div class="dropdown">
                                <button class="dropbtn">Type</button>
                                <div class="dropdown-content">
                                <a href="#">test 1</a>
                                <a href="#">test 2</a>
                                <a href="#">test 3</a>
                                </div>
                                </div>
                    <input placeholder="Gender" class="enter" type="password" id="tpassword"></input>
                    <input placeholder="Locality" class="enter" type="email" id="temail"></input>
                    <input placeholder="State" class="enter" type="password" id="tpassword"></input>
                    <input placeholder="Country" class="enter" type="password" id="tpassword"></input>
                    <input placeholder="Verify Password" class="enter" type="password" id="verifypassword"></input>






                    <button onclick="enterotp()" id="next">NEXT</button>
                    <a href="../index.html"><button   id="login">LOG IN</button></a> 
                    <button   id="signUp">SIgn Up</button>
                    <button   id="logout">Log Out</button>
                    </td>
                </tr>
                <tr>
                    <td class="problem"><a class="atag" href="forgotpsw.html">Forgot Password?</a></td>
                </tr>
                <tr>
                    <td class="problem" onclick="myFunction()" id="reg"> Have an account? Sign In</td>
                </tr>
                <tr>
                    <td class="problem"><a href="../index.html" ><button class="cancle">Cancel</button></a></td>
                </tr>
                </tbody>
            </table>
            </div>
            </React.Fragment>
         );
    }
}
 
export default Signup;