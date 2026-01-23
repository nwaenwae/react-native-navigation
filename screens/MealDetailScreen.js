import {useContext, useLayoutEffect} from "react";
import {Text, Image, View, StyleSheet, ScrollView, Button} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import {FavoritesContext} from "../store/context/favorites-context";

function MealDetailScreen({route, navigation}) {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if(mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton
        icon={mealIsFavorite ? "star" : "star-outlined"}
        color="white"
        onPress={changeFavoriteStatusHandler}
        />
      }
    })
  }, [navigation, changeFavoriteStatusHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.contentContainer}>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients}/>
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps}/>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#502e2b',
  },
  contentContainer: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  }
});
