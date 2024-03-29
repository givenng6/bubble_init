import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";


export default function PostHeader(props){

    const profileOnView = ()=>{
        props.navigation.navigate('Profile', {user: props.user, isUser: false});
    }

    return(
        <View style = {styles.Main}>
             <TouchableOpacity style = {styles.Profile} onPress = {profileOnView}>
                    <Text style = {styles.Initial}>{props.user.username[0]}</Text>
            </TouchableOpacity>
            <View style = {styles.Details}>
                <Text style = {styles.Name}>{props.user.username}</Text>
                <Text style = {styles.Time}>16:00 - 20/06/2020</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'row',
        //backgroundColor: 'blue',
        height: 50,
        width: '97%',
        alignItems: 'center',
        //borderBottomWidth: 0.5,
        borderColor: 'gray'
    },
    Profile:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#51E5C1',
        width: 40,
        height: 40,
        borderRadius: 100,
        marginLeft: 5,
        borderColor: 'black',
        borderWidth: 1,
        //borderColor: '#51E5C1'
    },
    Initial:{
        fontSize: 20,
        color: 'gray',
        fontWeight: 'bold'
    },
    Details:{
        display: 'flex',
        flexDirection: 'column'
    },
    Name:{
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginLeft: 12
    },
    Time:{
        fontWeight: 'bold',
        fontSize: 11,
        color: 'gray',
        marginLeft: 12
    }

});















