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
import { Image } from 'expo-image';





export default function Modal() {

  const supportedServices = [
    {key:'1', value:'Qbittorent', image:'/assets/Qbittorrent.png'},
    {key:'2', value:'TrueNAS Scale', image:''},
    {key:'3', value:'Prowlarr', image:''},
    {key:'4', value:'Radarr', image:''},
    {key:'5', value:'Sonarr', image:''},
    {key:'6', value:'Jellyfin', image:''},
    {key:'7', value:'Plex', image:''},
    {key:'8', value:'Docker', image:''},
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

    <View style={styles.container}>
      {supportedServices.map((service) => (
        <View key={service.value} style={styles.map}>
          <Link href={'/add'}>
            <View>
              <Image source={service.image} />
              <Text>{service.value}</Text>
            </View>
          </Link>
        </View>
      ))}
    </View>

    </View>


  );
}

const styles = StyleSheet.create({
  map: {
    width: 300,
    height: 75,  
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
    display: 'flex',
    alignItems: 'center',
  },

});