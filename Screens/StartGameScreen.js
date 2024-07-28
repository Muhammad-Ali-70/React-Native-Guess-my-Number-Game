import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.TextInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 16,
    marginHorizontal: 10,
    backgroundColor: "#0b71ff",
    elevation: 25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 10,
  },
  TextInput: {
    height: 50,
    width: 80,
    borderWidth: 3,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffc354",
    marginVertical: 10,
    borderBottomColor: "#ffc354",
    borderTopColor: "#0b71ff",
    borderRightColor: "#0b71ff",
    borderLeftColor: "#0b71ff",
    borderRadius: 3,
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
});
