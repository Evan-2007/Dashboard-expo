import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper';

export default function Layout(){
  return (
    <PaperProvider>
      <Stack 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#575757',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

            
          },
        }}
      >


      <Stack.Screen
          name="index"
          options={{
            // Hide the header for all other routes.
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="addservice"
          options={{
            // Set the presentation mode to modal for our modal route.
            presentation: 'modal',
          }}
        />
      </Stack>
    </PaperProvider>
  );
}