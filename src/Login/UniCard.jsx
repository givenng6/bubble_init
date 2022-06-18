import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const UniCard = (props)=>{
    
    return(
        <View style = {styles.Main}>
            <Image style = {styles.Logo} source = {props.logo}/>
            <Text style = {styles.Name}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#edf4f5',
        width: 160,
        height: 160,
        margin: 12,
        borderRadius: 11,
       
    },
    Logo:{
        width: 100,
        height: 110,
        margin: 11
    },
    Name:{
        fontWeight: 'bold',

    }
});


export default UniCard;

