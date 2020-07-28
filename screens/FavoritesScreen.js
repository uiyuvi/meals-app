import React from 'react';
import MealList from './MealList';
import {useSelector} from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = (props) => {    
    var availableMeals = useSelector(state => state.meals.favouriteMeals)  
    
    if(!availableMeals || availableMeals.length === 0){
        return (
            <View style={styles.container}>
                <Text>Choose any meal as favourite</Text>
            </View>
        )
    }
    return (
        <MealList listData={availableMeals} navigation={props.navigation}/>
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    }
})

