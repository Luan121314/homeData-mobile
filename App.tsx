import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Painel from './src/pages/painel';
import {AppLoading} from 'expo';
import {Poppins_400Regular, useFonts} from '@expo-google-fonts/poppins';



export default function App() {

  let [fontLoads] = useFonts({
    Poppins_400Regular
  })

  if(!fontLoads){
    return <AppLoading/>
  }else{
    return (
      <View style={styles.container}>
      <Painel/>
      <StatusBar style="light" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
