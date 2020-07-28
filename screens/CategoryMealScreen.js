import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import MealList from './MealList';
import {useSelector} from 'react-redux';

const CategoryMealScreen = (props) => {
    var categoryId = props.route.params.id;
    var category = CATEGORIES.filter(category => category.id === categoryId);
    var availableMeals = useSelector(state => state.meals.filteredMeals) 
    
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
          title: category && category[0].title ? category[0].title: props.route.params.title,
        });
      }, [props.navigation, category]);
    
    var MealsForCategory = availableMeals.filter((meal) => meal.categoryIds.indexOf(categoryId) !== -1);    
    
    return (
        <MealList listData={MealsForCategory} navigation={props.navigation}/>
    );
}

export default CategoryMealScreen;

