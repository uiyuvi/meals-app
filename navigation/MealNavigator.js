import React from 'react';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform, Text } from 'react-native';
import Colors from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const menuButton = (navigation) => {
    return () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
        }} /></HeaderButtons>);
}
const navigatorScreenOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};
const Stack = createStackNavigator();
const MealNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={navigatorScreenOptions}>
            <Stack.Screen name="Categories" component={CategoriesScreen} options={({ navigation }) => ({
                headerLeft: menuButton(navigation)
            })} />
            <Stack.Screen name="CategoryMeal" component={CategoryMealScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
    )
};
const FavStack = createStackNavigator();
const FavNavigator = () => {
    return (
        <FavStack.Navigator
            screenOptions={navigatorScreenOptions}>
            <FavStack.Screen name="Favourites" component={FavoritesScreen} options={({ navigation }) => ({
                headerLeft: menuButton(navigation)
            })} />
            <FavStack.Screen name="MealDetail" component={MealDetailScreen} />
        </FavStack.Navigator>
    )
};

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Meals"
            activeColor="white"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: colors.primary }}
            shifting={true}
        >
            <Tab.Screen name="Meals" component={MealNavigator}
                options={{
                    tabBarLabel: <Text style={{ fontSize: 15 }}> Meals </Text>,
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-restaurant" color={color} size={25} />
                    )
                }} />
            <Tab.Screen name="Favourites" component={FavNavigator}
                options={{
                    tabBarLabel: <Text style={{ fontSize: 15 }}> Favourites </Text>,
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-star" color={color} size={25} />
                    )
                }} />
        </Tab.Navigator>
    )
}
const FilterStack = createStackNavigator();
const FilterNavigator = () => {
    return (
        <FilterStack.Navigator screenOptions={navigatorScreenOptions}>
            <FilterStack.Screen name="Filters" component={FilterScreen} options={({ navigation }) => ({
                headerLeft: menuButton(navigation)
            })} />
        </FilterStack.Navigator>
    )
};
const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    return (

        <NavigationContainer>
            <Drawer.Navigator
                drawerStyle={{
                    width: 240
                }}
                drawerContentOptions={{
                    labelStyle: {
                        color: colors.accent
                    }
                }}
            >
                <Drawer.Screen name="Home" component={TabNavigator}  />
                <Drawer.Screen name="Favourites" component={FavNavigator} />
                <Drawer.Screen name="Filter Meals" component={FilterNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}


export default MainNavigator;

