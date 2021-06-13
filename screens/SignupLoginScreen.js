import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import db from '../config'



export default class SignupLoginScreen extends Component{
    constructor(){
        super()
        this.state={
            emailId:'',
            password:''


        }
    }

    userSignUp=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
             return Alert.alert("User Added Successfully")
             }) 
             .catch(function(error) { 
                 // Handle Errors here. 
                 var errorCode = error.code;
                  var errorMessage = error.message; 
                  return Alert.alert(errorMessage) });
    }

    userlogin = (emailId , password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId , password)
        .then(()=>{
            return Alert.alert(" Successfully Login")
         }) 
             .catch((error)=>{ 
                 // Handle Errors here. 
                 var errorCode = error.code;
                  var errorMessage = error.message; 
                  return Alert.alert(errorMessage)
                 });
    }
    
    render(){
    return (
        <View style={styles.container}>
        <View style={styles.container}>
         <Text style = {styles.text}>Barter System App</Text>
         <Text style = {styles.text2}>Start Barter System Today</Text>
    
       </View>
   
       <View style={styles.container2}>
         <TextInput style = {styles.loginbox}
         placeholder = 'abc@xyz.com'
         keyboardType = 'email-address'
         onChangeText = {(text)=>{ this.setState({ emailId: text }) }}
         ></TextInput>
   
         <TextInput style = {styles.loginbox}
         placeholder = 'enter your passward'
         secureTextEntry = 'passward'
         onChangeText = {(text)=>{ this.setState({ passward: text }) }}>
         </TextInput>
   
         <TouchableOpacity style = {styles.button} onPress={()=>{
           this.UserLogin(this.state.emailId,this.state.passward)
         }}>
         <Text>Log In</Text>
         </TouchableOpacity>
   
         <TouchableOpacity  style = {styles.button}
         onPress = {()=>{this.UserSignUp(this.state.emailId,this.state.passward)}}
         >
         <Text>Sign Up</Text>
         </TouchableOpacity>
       </View>
       </View>
   
     );
     }
   
     }
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       backgroundColor: '#68C6B8',
     },
     text:{
       marginTop:10,
       marginBottom:500,
       alignSelf:'center',
       fontSize:25,
       textDecorationLine: 'underline',
     },
     text2:{
       marginTop:10,
       alignSelf:'center',
       fontSize:15,
     },
     loginbox:{
       borderColor:'black',
       justifyContent:'center',
       backgroundColor:'white',
       marginBottom:5,
       borderRadius:10
     },
     container2:{
       flex:1,
       alignItems:'center',
       marginTop:1,
     },
     button:{
       borderColor:'white',
       justifyContent:'center',
       backgroundColor:'#E35E28',
       marginBottom:5,
       borderRadius:8,
       width:100 ,
       alignItems:'center'   
     }
   });
   