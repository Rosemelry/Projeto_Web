import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navegation=useNavigation()
  return (
    <View style={styles.container}>
      <Pressable style={styles.formButton} onPress={()=>navegation.goBack()}>
        <Text style={styles.textButton}>voltar</Text>
      </Pressable>
      <StatusBar style='auto'/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#212b46',
    justifyContent:"center"
  },
  formTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    margin: 10,
  },
  formButton: {
    backgroundColor: '#fff',
    width: '20%',
    margin: 50,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    color:"#212b46"
  },
  textButton: {
    color:"#212b46",
    fontSize: 15,
    fontWeight: 'bold',
  }
});