import React, { Component } from 'react';
import './App.css';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import UncontrolledLottie from './components/UncontrolledLottie';
firebase.initializeApp({
  apiKey:"AIzaSyDAqWHBVCQhSMXGopU-U_IAKwjO7lt-LFs",
  authDomain:"ark8-cabinet.firebaseapp.com",
})

class App extends Component{
  state = {isSignedIn: false}
  uiConfig = {
    signInFlow:"popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks:{
      signInSuccessWithAuthResult: () => false
    }
  }

  componentDidMount = ()=>{
    
    firebase.auth().onAuthStateChanged(user=>{
      this.setState({isSignedIn:!!user})
      console.log("user",user);
      console.log("IDtoken",user.getIdToken());
      console.log("PhotoURL",user.photoURL);
    })
    

  }
  render(){
    return (
      <div className ="App">
        {this.state.isSignedIn ? 
        <span>
          <div>Signed In!</div>
        <button onClick={()=>firebase.auth().signOut()}>Sign Out!</button>
        <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
        <img src={firebase.auth().currentUser.photoURL} alt="profile"/>
        </span>
        :(
        <span>
          <UncontrolledLottie/>
      <StyledFirebaseAuth
        uiConfig={this.uiConfig}
        firebaseAuth = {firebase.auth()}
        />
        </span>
        )}
        
      </div>
    )
  }
}

export default App;
