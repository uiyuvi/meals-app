import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MealTile from '../components/MealTile';

const MealList = ({listData, navigation}) =>{
    function renderMealItem(itemData) {
        return (
            <MealTile
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                affordability = {itemData.item.affordability}
                complexity = {itemData.item.complexity}
                onSelect = {()=>{
                    navigation.navigate("MealDetail", {
                        mealId: itemData.item.id
                    })
                }}
            />
        )
    }
    return (
        <View style={styles.list}>
            <FlatList
                data={listData}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealList;

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});