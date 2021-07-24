import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import styles from './LoginPage.styles';
import placholderLogo from '../../assets/placholder-logo.png';

const LoginPage = () => {
  
  const [loginFields, setLoginFields] = useState({
    email: '',
    password: ''
  });
  const [newUserFields, setNewUserFields] = useState({
    isNewUser: false,
    confirmPassword: ''
  })
  
  const handleLoginInputChange = (val) => {
    console.log(val);
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
  )
}



export default LoginPage
