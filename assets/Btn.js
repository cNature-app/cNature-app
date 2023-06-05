import { View,Text,TouchableOpacity } from "react-native";
import React from "react";
export default function Btn({bgcolor,btnlabel,textcolor}){
    return(
        <TouchableOpacity style={{backgroundColor:bgcolor,borderRadius:200,alignItems:'center',
        width:'80%',marginLeft:30,height:50,marginVertical:10,marginBottom:20}}>
        <Text style={{color:textcolor,fontSize:22,fontWeight:"bold",textAlign:"center",marginTop:7}}>{btnlabel}</Text>
        </TouchableOpacity>
    )
}