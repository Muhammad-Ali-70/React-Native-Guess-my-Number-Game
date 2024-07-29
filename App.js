import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./Screens/GameScreen";
import { useState } from "react";

export default function App() {

  const [pickedNumber, SetPickedNumber] = useState();

  function PickedNumberHandler(enteredData){
    SetPickedNumber(enteredData);
  }

  let Screen = <StartGameScreen OnValidation={PickedNumberHandler} />

    if (pickedNumber){
      Screen = <GameScreen/>
    }


  return (
    <LinearGradient
      colors={["#ffa600", "#facb73", "#5d9ffa", "#0b71ff"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./Images/background.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundStyle}
      >
      {Screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundStyle:{
    opacity: 0.65,
  }
});
