import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import placholderLogo from './assets/placholder-logo.png';

export default function App() {
  const [loginFields, setLoginFields] = useState({
    email: '',
    password: ''
  });
  const [newUserFields, setNewUserFields] = useState({
    isNewUser: false,
    confirmPassword: ''
  })

  const handleLoginInputChange = (val) => {
    console.log(val)
  }

  return (
    <View style={styles.container}>
      <Image source={placholderLogo} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="email"
          placeholderTextColor="#003366"
          onChangeText={handleLoginInputChange}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="password"
          placeholderTextColor="#003366"
          secureTextEntry={true}
          onChangeText={handleLoginInputChange}
        />
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotButton}>I forgot my password.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: "#EEE",
    borderRadius: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    width: "55%",
    height: 45,
    marginBottom:15,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10
  },
  loginButton: {
    width:"55%",
    borderRadius: 10,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 20,
    marginBottom: 10,
    backgroundColor:"#aaf",
  },
  forgotButton: {
    height: 20
  }
});
