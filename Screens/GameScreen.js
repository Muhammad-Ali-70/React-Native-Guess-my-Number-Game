// import { View, Text } from "react-native";

// function GameScreen() {
//   return (
//     <View>
//       <Text style={{ fontSize: 20, color: "white" }}>Game Screen</Text>
//     </View>
//   );
// }

// export default GameScreen;
import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";

function GameScreen({ onGameOver }) {
  const [guessRounds, setGuessRounds] = useState(0);

  function handleNextGuess() {
    // Placeholder function to simulate making a guess
    setGuessRounds(guessRounds + 1);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game Screen</Text>
      <Text style={styles.text}>Number of guesses: {guessRounds}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Make a Guess" onPress={handleNextGuess} />
        <Button title="End Game" onPress={onGameOver} />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    color: "white",
  },
  text: {
    fontSize: 20,
    color: "white",
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
