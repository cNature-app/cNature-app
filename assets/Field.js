import React from "react";
import {TextInput } from "react-native";
 
const Field=props =>{
    return (
        <TextInput {...props} style={{borderRadius:100,color:'black',paddingHorizontal:10,width:'80%',height:50,
    backgroundColor:'rgb(220,220,220)',marginVertical:10,marginLeft:30,marginBottom:20}}></TextInput>
    )
}
export default Field