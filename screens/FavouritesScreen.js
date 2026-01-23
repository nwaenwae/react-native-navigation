import {useContext} from "react";
import {StyleSheet, View, Text} from "react-native";
import MealsList from "../components/MealsList/MealsList";
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";

function FavouritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const FavoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

  if (FavoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}> You have no favourite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={FavoriteMeals}/>
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#502e2b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
});
