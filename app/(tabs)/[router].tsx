
import { useLocalSearchParams, useGlobalSearchParams } from 'expo-router';

import { Text } from 'react-native';

export default function Page() {
  const { router } = useGlobalSearchParams();

  return <Text>Blog post: {router}</Text>;
}
