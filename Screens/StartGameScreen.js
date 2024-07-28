import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import { useState } from "react";

function StartGameScreen() {
  const [enteredNumber, SetEnteredNumber] = useState("");

  function inputHandler(enteredData) {
    SetEnteredNumber(enteredData);
  }

  function ConfirmationHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Input!",
        "The Number has to be a Number between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            Onpress:  clearTextFieldHandler ,
          },
        ]
      );
      return;
    }

    console.log("Valid Number !")
  }

  function clearTextFieldHandler() {
    SetEnteredNumber("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.TextInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={inputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton Onpress={clearTextFieldHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton Onpress={ConfirmationHandler}>Confirm</PrimaryButton>
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
    borderWidth: 4,
    textAlign: "center",
    fontSize: 34,
    fontWeight: "bold",
    color: "#ffc354",
    marginVertical: 10,
    borderBottomColor: "#ffc354",
    borderTopColor: "#0b71ff",
    borderRightColor: "#0b71ff",
    borderLeftColor: "#0b71ff",
    paddingBottom: 8,
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
