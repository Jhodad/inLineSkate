import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const NewsCardContainer = (props) => {
    return (
        <View>
            <View style={styles.cardContainer}>
                {props.children}
                <View style={styles.cardAuthor}>
                    <Text>written by Jho</Text>
                </View>
            </View>
            <View style={styles.separator}>

            </View>
        </View>
    )
}

export const NewsCardHeader = (props) => {
    return (
        <View style={styles.cardHeader}>
            <View style={styles.cardHeaderText}>
                {props.children}
            </View>
        </View>
    )
}

export const NewsCardContent_Text = (props) => {
    return (
        <View style={styles.cardContentSmall}>
            <View style={styles.cardContent_Text}>
                {props.children}
            </View>
        </View>
    )
}

export const NewsCardContent_Image = (props) => {
    return (
        <View style={styles.cardContentBig}>
            <View style={styles.cardContent_Image}>
                {props.children}
            </View>
        </View>
    )
}

export const NewsCardContent_Video = (props) => {
    return (
        <View style={styles.cardContent}>
            <View style={styles.cardContent_Text}>
                {props.children}
            </View>
        </View>
    )
}


export const NewsCardFooter = (props) => {
    return (
        <View style={styles.cardFooter}>
            <View style={styles.cardFooterText}>
                {props.children}
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    cardContainer: { //All 3 cards containers are the same
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 5 },
        shadowColor: '#333',
        shadowOpacity: 1,
        shadowRadius: 2,
        marginHorizontal: 12,
        marginVertical: 14,
        flex: 1,

    },
    cardText: {
        //marginHorizontal: 10,
        //marginVertical: 8,
    },


    cardHeader: { //All 3 cards headers are the same
        //elevation: 1,
        borderStyle: 'dotted',
        borderColor: '#333',
        borderWidth: 0.2,
        height: 40,
        //width: 100,
    },
    cardHeaderText: { //All 3 cards header's text are the same
        marginHorizontal: 10,
        marginVertical: 8,
        alignItems: 'center',
    },


    cardContentSmall: { //For Text
        borderStyle: 'dotted',
        borderColor: '#333',
        borderWidth: 0.2,
        height: 100,
    },
    cardContentBig: { //For Img, Gif, Video, etc
        borderStyle: 'dotted',
        borderColor: '#333',
        borderWidth: 0.2,
        height: 180,
    },


    cardContent_Text: { //For insides of text card
        marginHorizontal: 10,
        marginVertical: 8,
    },
    cardContent_Image: { //For insides of image card
        //marginHorizontal: 10,
        //marginVertical: 8,
    },
    cardContent_Video: { //For insides of video card
        //marginHorizontal: 10,
        //marginVertical: 8,
    },


    cardFooter: {
        height: 30,
        marginHorizontal: 10,

    },
    cardFooterText: {
        alignItems: 'flex-end',
    },
    cardAuthor: {
        height: 0
    },
    separator: {
        height: 15,
        //borderStyle: 'dotted',
        //borderColor: '#333',
        //borderWidth: 1,
    }


})