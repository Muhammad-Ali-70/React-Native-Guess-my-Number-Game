import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function OnpressHandler() {
    console.log("Button Pressed!");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={OnpressHandler}
        android_ripple={{ color: "#2661b4" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    marginVertical: 8,
    overflow: "hidden",
    borderRadius: 18,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonInnerContainer: {
    padding: 10,
    backgroundColor: "#3d8bf7",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    alignSelf: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
