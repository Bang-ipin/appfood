import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import Inputs from '../components/Input';
import Submit from '../components/Submit';


const LoginScreen = props => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image
          source={require('../assets/login.png')}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Selamat Datang</Text>
        <Text style={styles.textBody}>Silakan login ke akun kamu</Text>
        <View style={{marginTop: 20}} />
        <Inputs name="Email" icon="mail" />
        <Inputs name="Password" icon="lock" pass={true} />
        <Submit
          title="MASUK"
          color="#0148a4"
          clicked={() => {
            // props.navigation.dispatch(CommonActions.navigate("container"));
            console.log('ini link login');
          }}
        />
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={styles.textBody}> Belum punya akun? </Text>
          <Text
            style={[styles.textBody, {color: 'blue'}]}
            onPress={() => props.navigation.navigate('SignupScreen')}>
            Daftar
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 250,
    marginVertical: 20,
  },
  textTitle: {
    fontSize: 40,
    marginVertical: 10,
  },
  textBody: {
    fontSize: 14,
    marginVertical: 0,
  },
});

export default LoginScreen;