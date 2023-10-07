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



export default function Modal() {

  const supportedServices = [
    {key:'1', value:'Qbittorent', image:''},
    {key:'2', value:'TrueNAS Scale', image:''},
    {key:'3', value:'Prowlarr', image:''},
    {key:'4', value:'Radarr', image:''},
    {key:'5', value:'Sonarr', image:''},
  ]

  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#121212' }}>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Link href="../">Dismiss</Link>}
      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />

    <View>
      {supportedServices.map((service) => (
        <Text>{service.value}</Text>
        <
      ))}
    </View>

    </View>


  );
}

const styles = StyleSheet.create({

});