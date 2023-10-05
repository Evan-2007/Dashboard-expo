import { Stack } from 'expo-router'

export default function Layout(){
  return (
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
    />
  );
}