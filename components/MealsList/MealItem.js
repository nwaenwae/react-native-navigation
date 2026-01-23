import {View, Pressable, StyleSheet, Image, Text, Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "../MealDetails";

function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
 const navigation = useNavigation();

 function selectMealItemHandler() {
   navigation.navigate('MealDetail', {
     mealId: id
   });
 }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc', foreground: true}}
        style={({pressed}) => pressed ? styles.buttonPressed : null}
        onPress={selectMealItemHandler}
      >
        <View>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
