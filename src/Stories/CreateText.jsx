import React, { useState } from "react";
import {Text, View, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ColourPalate from '../Post/StylePostColours.json';

export default function CreateText(){

    const [value, setValue] = useState('');
    const [fontSize, setFontSize] = useState(50);

    // import colours from JSON... 
    const coloursArray = ColourPalate.colours;

    // random number to init the position of the colour...
    const initColor = Math.floor(Math.random() * coloursArray.length);
    const [index, setIndex] = useState(initColor);

    const [colour, setColour] = useState(coloursArray[initColor]);
    const [brushColour, setBrushColour] = useState('white');

    // Text Specifics... 
    const bold = ['normal', '200','bold'];
    const [textState, setTextState] = useState(bold[0]);
    const [boldIndex, setBoldIndex] = useState(0);

    const textColoursArray = ["white", "white", "#FC5185", "#3498DB"];
    const [textColourIndex, setTextColourIndex] = useState(0);

    const [textColor, setTextColor] = useState(textColoursArray[index]);

    const onChangeColour = ()=>{
        if(index <= coloursArray.length){
            setIndex(index + 1);
        }else{
            // reset when reach the end of the list...
            setIndex(0);
        }
        setColour(coloursArray[index]);
    }

    const onChangeTextColor = ()=>{
            if(textColourIndex <= textColoursArray.length){
                setTextColourIndex(textColourIndex + 1);
            }else{
                setTextColourIndex(0);
            }
            setTextColor(textColoursArray[textColourIndex]);
    }

    const onChangeBold = ()=>{
        if(boldIndex <= bold.length){
            setBoldIndex(boldIndex + 1);
        }else{
            setBoldIndex(0);
        }

        setTextState(bold[boldIndex]);

    }

    const updateChange = (text)=>{
        setValue(text);

        if(value.length > 75){
            if(value.length > 150){
                setFontSize(30);
            }else{
                setFontSize(40);
            }
        }
    }

    // implement kayboard avoiding view...  

    return(
        <View style = {[styles.Main, {backgroundColor: colour}]}>
            <View style = {styles.Canvas}>
                <TextInput multiline placeholder="Compose Text" value={value} onChangeText={updateChange} maxLength={255}
                style={{fontSize: 18, color: textColor, fontWeight: textState, fontSize: fontSize}}/>
            </View>
           
            <TouchableOpacity style = {[styles.FAB, {borderColor: brushColour, right: 15}]} onPress={onChangeColour}>
            <FontAwesome name="paint-brush" size={24} color={brushColour} />
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.FAB, {borderColor: brushColour, right: 125}]} onPress={onChangeTextColor}>
            <MaterialCommunityIcons name="format-color-text" size={34} color={textColor} />
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.FAB, {borderColor: brushColour, right: 70}]} onPress={onChangeBold}>
            <MaterialIcons name="format-bold" size={34} color={brushColour} />
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: 45,
        padding: 15,
        //flexWrap: 'wrap',
        //backgroundColor:'gray'
    },
    FAB:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        top: 50, 
        //right: 15,
        borderWidth: 1,
        position: 'absolute',
        borderRadius: 100,
        width: 45,
        height: 45
    },
    Canvas:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //borderColor: 'gray',
        //borderWidth: 1,
        width: '100%',
        height: '90%',
    }
});


