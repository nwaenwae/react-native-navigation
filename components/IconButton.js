import {Pressable, StyleSheet} from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

function IconButton({icon, color, onPress}) {
  return <Pressable onPress={onPress} style={({pressed}) => pressed ? styles.pressed : null}>
    <Entypo name={icon} size={24} color={color}/>
  </Pressable>
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  }
});
