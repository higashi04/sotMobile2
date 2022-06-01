import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Platform,
  Alert,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { EyeFill, EyeSlashed } from "../assets/svgPaths";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [username, setUsername] = useState("");
  const [toggle, setToggle] = useState(true);

  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: `{"email":"${email}","username":"${username}","firstName":"${firstName}","lastName":"${lastName}","company":"${company}","password":"${password}"}`,
  };

  function changeToggle() {
    setToggle((prevToggle) => !prevToggle);
  }
  const handleSubmit = () => {
    fetch("https://transportes-villarreal.herokuapp.com/users/signup", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={43}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          autoCapitalize="none"
          autoCorrect={false}
          value={username}
          placeholderTextColor="#669BC7"
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          autoCapitalize="none"
          placeholderTextColor="#669BC7"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre(s)"
          value={firstName}
          placeholderTextColor="#669BC7"
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido(s)"
          value={lastName}
          placeholderTextColor="#669BC7"
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Empresa"
          value={company}
          placeholderTextColor="#669BC7"
          onChangeText={setCompany}
        />
        <View style={styles.boxOne}>
          <Text>
            <SvgXml
              xml={toggle ? EyeFill : EyeSlashed}
              style={styles.svgEye}
              width="48"
              height="48"
              stroke="black"
              strokeWidth=".5"
              fill="black"
              viewBox="0 0 48 48"
              onPress={changeToggle}
            />
          </Text>
        </View>
        <TextInput
          onChangeText={setPassword}
          secureTextEntry={toggle ? true : false}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          placeholder={"Contraseña"}
          placeholderTextColor="#669BC7"
        />
      </View>
      <TouchableOpacity>
        <Button title="Submit" onPress={() => handleSubmit()}>
          <Text>Submit</Text>
        </Button>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inputContainer: {
    width: "80%",
    padding: 15,
    backgroundColor: "grey",
    borderRadius: 10,
  },

  svgEye: {
    marginTop: 5,
    marginLeft: -15,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "white",
    marginBottom: 5,
    borderRadius: 10,
  },
});

export default RegisterScreen;
