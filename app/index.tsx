import { Link, Stack } from 'expo-router';
import { Image, Text, View, Button, Pressable } from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  );
}

export default function Home() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Stack.Screen
          options={{
            // https://reactnavigation.org/docs/headers#setting-the-header-title
            title: 'Home',
            // https://reactnavigation.org/docs/headers#adjusting-header-styles
            headerStyle: { backgroundColor: '#575780' },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component/>,
          }}
        />
        <Text>Home Screen</Text>
        <Link href="/detail" asChild>
            <Pressable>
                <Text>1</Text>
            </Pressable>
        </Link>
        <Link href="/power" asChild>
            <Pressable>
                <Text>2</Text>
            </Pressable>
        </Link>
        <Link href="/nas" asChild>
            <Pressable>
                <Text>3</Text>
            </Pressable>
        </Link>

      </View>
    );
  }
