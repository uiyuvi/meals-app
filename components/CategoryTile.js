import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, Platform, StyleSheet } from 'react-native';

const CategoryTile = (props) => {
    var TouchableComp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version > 21) {
        TouchableComp = TouchableNativeFeedback;
    }
    return (
    <TouchableComp onPress={props.onSelect}>
            <View style={{ ...styles.gridItem,...{backgroundColor: props.color}}}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableComp>
    )
}

export default CategoryTile;

const styles = StyleSheet.create({

    gridItem: {
        flex: 1,
        margin: 15,
        padding: 15,
        height: 150,
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width:0,height:2},
        shadowOpacity: 0.26,
        elevation: 3     
    },
    title :{
        textAlign: "right"
    }
});