import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import StoryView from "./StoryView";


export default function Stories(){


    return(
        <View style = {styles.Main}>
            <ScrollView horizontal = {true}>
            <View style = {styles.OtherStories}>
                <StoryView title = 'Add Story'/>
                <StoryView title = 'Given'/>
                <StoryView title = 'Joseph'/>
                <StoryView title = 'Sizwe'/>
                <StoryView title = 'NG'/>
                <StoryView title = 'Girlfriend'/>
                <StoryView title = 'Wits'/>
                
            </View>
            </ScrollView>

            
        </View>
    );

}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'row',
        borderTopWidth: 0.5,
        width: '97%',
        //width: '97%'
    },
    AddStory:{
        display: 'flex',
        flexDirection: 'row'
    },
    OtherStories:{
        display: 'flex',
        flexDirection: 'row',
    }
});






