import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function PostButton({navigation}){

    const [postData, setPostData] = useState({});

    const onPost = ()=>{
        
    }

    return(
        <TouchableOpacity style = {styles.Main} onPress = {onPost}>
            <Text style = {styles.Title}>POST</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    Main:{
        borderWidth: 1,
        borderColor: 'white',
        padding: 7,
        borderRadius: 9
    },
    Title:{
        fontWeight: 'bold',
        color: 'white'
    }
});




