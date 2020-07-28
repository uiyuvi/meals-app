import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { toggleFavourite } from '../redux/actions/meals';

const MealDetailScreen = (props) => {
    const dispatch = useDispatch();
    const { mealId } = props.route.params;
    const availableMeals = useSelector(state => state.meals.filteredMeals)
    const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
    const selectedMealIsFavourite = useSelector(state => state.meals.favouriteMeals.some(meal => meal.id === mealId))

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            title: selectedMeal && selectedMeal.title ? selectedMeal.title : props.route.params.title,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item title="Favorite" iconName={selectedMealIsFavourite ? "ios-star": "ios-star-outline"} onPress={() => {
                        dispatch(toggleFavourite(mealId));
                    }} /></HeaderButtons>
            )
        });
    }, [props.navigation, selectedMeal, selectedMealIsFavourite]);

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text>{selectedMeal.duration}</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            <View style={styles.list}>
                {selectedMeal.ingredients.map((ingredient) => <Text key={ingredient}>{ingredient}</Text>)}
            </View>
            <Text style={styles.title}>Steps</Text>
            <View style={styles.list}>
                {selectedMeal.steps.map((step) => <Text key={step}>{step}</Text>)}
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-around"
    },
    title: {
        textAlign: "center",
        fontWeight: "bold"
    },
    list: {
        padding: 10
    }
});
