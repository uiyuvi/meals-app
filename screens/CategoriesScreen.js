import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data'
import CategoryTile from '../components/CategoryTile';

const CategoriesScreen = (props) => {
    const renderCategory = (itemData) => {
        return (
            <CategoryTile 
                title = {itemData.item.title}
                onSelect = {()=>props.navigation.navigate('CategoryMeal',{id: itemData.item.id})}
                color = {itemData.item.color}
            />
        )
    }

    return (
        <FlatList data={CATEGORIES} renderItem={renderCategory} numColumns={2} />
    );
}

export default CategoriesScreen;
