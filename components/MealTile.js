import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, Platform, StyleSheet, ImageBackground } from 'react-native';

const MealTile = (props) => {
    var TouchableComp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version > 21) {
        TouchableComp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableComp onPress={props.onSelect}>
                <View>
                    <View style={{...styles.gridItemRow, ...styles.gridHeader}}>
                        <ImageBackground source={{ uri: props.image }} style={styles.image}>
                            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.gridItemRow,...styles.gridDetail}}>
                        <Text>{props.duration} mins</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableComp>
        </View>
    )
}

export default MealTile;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    gridItem: {
        height: 200,
        width: '98%',   
        marginVertical: 5,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#dcdcdc',
        alignSelf: 'center'
    },
    gridItemRow: {
        flexDirection: 'row'
    },
    title: {
        textAlign: "center",
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 5,
        paddingVertical: 12,
        color: 'white',
        fontSize: 20,
        fontWeight: "bold"
    },
    gridHeader:{
        height: '85%'
    },
    gridDetail:{
        height: '15%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5
    }
});