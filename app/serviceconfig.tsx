import { 
    View, 
    TextInput, 
    Text, 
    StyleSheet,
  } from 'react-native';
  
  
  import { Link, router } from 'expo-router';
  import { StatusBar } from 'expo-status-bar';
  import { SelectList } from 'react-native-dropdown-select-list'
  import React from 'react';





export default function ModalScreen() {

const [selected, setSelected] = React.useState("");
  const data = [
    {key:'1', value:'Qbittorent', disabled:false},
    {key:'2', value:'TrueNAS Scale', disabled:true},
    {key:'3', value:'Prowlarr', disabled:true},
    {key:'4', value:'Radarr', disabled:true},
    {key:'5', value:'Sonarr', disabled:true},
]

  return (


    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#121212' }}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>Service Name</Text>
          <TextInput
            style={styles.input}
          />
        </View>

        <View  style={[styles.inputContainer, styles.inputDropdown]}>
        <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={data} 
          save="value"
        />
        </View >
        <View  style={[styles.inputContainer,]}>
          <Text>URL + PORT</Text>

          <TextInput
            style={styles.input}
          />
          <Text style={styles.ex}>(ex: http://localhost:8080)</Text>
        </View>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({

  input: {
    height: 40,
    width: 300,
    backgroundColor : "#575757",
    borderWidth: .9,
    borderRadius: 10,
    color: 'white',
  },
  ex:{
    fontStyle: 'italic', 
    color: 'grey',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    color: 'white',

  },
  inputDropdown: {
    backgroundColor : "#575757",
    borderRadius: 10,
    color: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 500,
    borderRadius: 10,
    backgroundColor: "#282828",
    color: 'white',
  }
});