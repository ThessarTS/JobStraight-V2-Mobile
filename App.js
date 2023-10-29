import { StyleSheet } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const client = new ApolloClient({
  uri: 'https://jobstraight.thessarts.site/',
  cache: new InMemoryCache()
})

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen name='Landing' component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Detail' component={DetailScreen} options={({ route }) => ({ title: route.params.jobTitle })} />
          <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>



  );
}
