import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";

const FormInput = (props) => {
  return (
    <TextInput
      value={props.value}
      style={styles.input}
      numberOfLines={1}
      placeholder={props.placeholder}
      placeholderTextColor="#666"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: 200,
    height: 50,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 32,
    marginHorizontal: 32,
  },
});

export default FormInput;
