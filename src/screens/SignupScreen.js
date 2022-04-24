import {View, Text, Image, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import Inputs from '../components/Input';
import Submit from '../components/Submit';

const SignupScreen = props => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../assets/signup.png')}
            resizeMode="center"
            style={styles.image}
          />
          <Text style={styles.textTitle}>Let's Get Started</Text>
          <Text style={styles.textBody}>
            Buat akun untuk lihat semua fitur.
          </Text>
          <Inputs name="Full Name" icon="person-add" />
          <Inputs name="Email" icon="mail" />
          <Inputs name="Phone" icon="phone" />
          <Inputs name="Password" icon="lock" pass={true} />
          <Inputs name="Confirm Password" icon="lock" pass={true} />
          <Submit
            color="#0251ce"
            title="CREATE"
            clicked={() => {
              props.navigation.navigate('container');
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textBody}>Sudah punya akun ? </Text>
            <Text
              style={[styles.textBody, {color: 'blue'}]}
              onPress={() => props.navigation.navigate('LoginScreen')}>
              Masuk
            </Text>
          </View>
        </View>
      </SafeAreaView>
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
    width: 200,
    height: 200,
    marginTop: 10,
  },
  textTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 40,
    marginVertical: 10,
  },
  textBody: {
    fontFamily: 'open-sans-bold',
    fontSize: 12,
    marginVertical: 30,
  },
});

export default SignupScreen;
