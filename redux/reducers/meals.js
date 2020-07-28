import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE, APPLY_FILTERS } from '../actions/meals';
const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    if (action.type === TOGGLE_FAVOURITE) {
        let existingMealIndex = state.favouriteMeals.findIndex((meal) => meal.id === action.mealId);
        if (existingMealIndex >= 0) {
            const updatedFavMeals = [...state.favouriteMeals];
            updatedFavMeals.splice(existingMealIndex, 1);
            return { ...state, favouriteMeals: updatedFavMeals }
        }
        const favouriteMeal = state.meals.find((meal) => meal.id === action.mealId);
        const updatedFavouriteMeals = state.favouriteMeals.concat(favouriteMeal);
        return { ...state, favouriteMeals: updatedFavouriteMeals };
    }

    if (action.type === APPLY_FILTERS) {
        const appliedFilters = action.filters;
        const updatedFilteredMeals = state.meals.filter((meal) => {
            if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                return false;
            }
            if (appliedFilters.lactosefree && !meal.isLactoseFree) {
                return false;
            }
            if (appliedFilters.vegan && !meal.isVegan) {
                return false;
            }
            if (appliedFilters.vegeterian && !meal.isVegetarian) {
                return false;
            }
            return true;
        });
        return { ...state, filteredMeals: updatedFilteredMeals }
    }
    return state;
};

export default mealsReducer;