import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import styles from './LoginPage.styles';
import placholderLogo from '../../assets/placholder-logo.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const toggleLoginNewUser = () => {
    setIsNewUser(currentState => !currentState);
  }

  const handleSubmit = () => {
    console.log('Submit__Button Pushed')
  }

  return (
    <View style={styles.container}>
      <Image source={placholderLogo} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="email"
          value={email}
          placeholderTextColor="#aaf"
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={isNewUser ? "create password" : "password" }
          value={password}
          placeholderTextColor="#aaf"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
      </View>
      {
        isNewUser ?
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="confirm password"
              value={confirmPassword}
              placeholderTextColor="#003366"
              secureTextEntry={true}
              onChangeText={setConfirmPassword}
            />
          </View> :
          null
      }
      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
        <Text style={styles.loginText}>
          {isNewUser ? "CREATE ACCOUNT" : "LOGIN"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.subButton}>I forgot my password.</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleLoginNewUser}>
        <Text style={styles.subButton}>
          {isNewUser ? "I have an account." : "Create a new account."}
        </Text>
      </TouchableOpacity>
    </View>
  )
}



export default LoginPage
