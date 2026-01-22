import {useLayoutEffect} from "react";
import {MEALS, CATEGORIES} from "../data/dummy-data";
import {View, FlatList, StyleSheet} from "react-native";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({route, navigation}) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(cat => cat.id === catId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    }

    return <MealItem {...mealItemProps}/>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}/>
    </View>
  )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#502e2b',
  },
});
