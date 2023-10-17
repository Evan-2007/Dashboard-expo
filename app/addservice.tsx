import { 
  View, 
  TextInput, 
  Text, 
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';


import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SelectList } from 'react-native-dropdown-select-list'
import React from 'react';






export default function Modal() {

  const supportedServices = [
    {key:'1', value:'Qbittorent', image: require('./assets/images/Qbittorrent.png')},
    {key:'2', value:'TrueNAS Scale', image: require('./assets/images/Qbittorrent.png')},
    {key:'3', value:'Prowlarr', image: require('./assets/images/Qbittorrent.png')},
    {key:'4', value:'Radarr', image: require('./assets/images/Qbittorrent.png')},
    {key:'5', value:'Sonarr', image: require('./assets/images/Qbittorrent.png')},
    {key:'6', value:'Jellyfin', image: require('./assets/images/Qbittorrent.png')},
    {key:'7', value:'Plex', image: require('./assets/images/Qbittorrent.png')},
    {key:'8', value:'Docker', image: require('./assets/images/Qbittorrent.png')},
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
        <ScrollView>
        {supportedServices.map((service) => (
          <View key={service.value} style={styles.map}>
            <Link 
              href={`/${service.key}`}>
              <View>
                <Image source={service.image} style={styles.icon}/>
                <Text>{service.value}</Text>
              </View>
            </Link>
          </View>
        ))}
        </ScrollView>
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
  icon: {
    flex: 1,
    width: 50,
    height: 50,
  }

});