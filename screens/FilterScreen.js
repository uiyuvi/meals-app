import React, { useState, useCallback, useEffect } from 'react';
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import colors from '../constants/colors';
import { useDispatch } from 'react-redux';
import { applyFiler } from '../redux/actions/meals';
const Filter = ({ label, state, onChange }) => {
    return (
        <View style={styles.filter}>
            <Text>{label}</Text>
            <Switch
                value={state}
                onValueChange={newValue => onChange(newValue)}
                thumbColor={Platform.OS === 'android' ? colors.primary : ''}
                trackColor={{ true: colors.primary }}
            />
        </View>
    )
}

const FilterScreen = (props) => {
    const { navigation, route } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegeterian, setIsVegeterian] = useState(false);
    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const filters = {
            glutenFree: isGlutenFree,
            lactosefree: isLactoseFree,
            vegan: isVegan,
            vegeterian: isVegeterian
        }
        dispatch(applyFiler(filters));

    }, [isGlutenFree, isLactoseFree, isVegan, isVegeterian, dispatch]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({ }) => (
                <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item title="Favorite" iconName="ios-save" onPress={() => {
                        saveFilters();
                        navigation.navigate("Home");

                    }} /></HeaderButtons>
            )
        });
    }, [navigation, saveFilters]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Available Filers</Text>
            <Filter label="Gluten-free" state={isGlutenFree} onChange={(newValue) => setIsGlutenFree(newValue)} />
            <Filter label="Lactose-free" state={isLactoseFree} onChange={(newValue) => setIsLactoseFree(newValue)} />
            <Filter label="Vegan" state={isVegan} onChange={(newValue) => setIsVegan(newValue)} />
            <Filter label="Vegeterian" state={isVegeterian} onChange={(newValue) => setIsVegeterian(newValue)} />
        </View>
    );
}

export default FilterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,
        margin: 20,
        textAlign: "center",
        color: colors.primary
    },
    filter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        width: "80%",
        marginVertical: 10
    }
});
