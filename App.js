import React, {useState} from 'react';
import { Alert, Button, Text, Image, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
            iconName = focused ? 'dot-circle-o' : 'circle-o'
            size = 18
            // let iconName;

            // if (route.name === 'Home') {
            //   iconName = focused
            //     ? 'ios-information-circle'
            //     : 'ios-information-circle-outline';
            // } else if (route.name === 'Settings') {
            //   iconName = focused ? 'ios-list-box' : 'ios-list';
            // }

            // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: '#aaa',
          showLabel: false,
        }}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Stuff" component={Stuff} options={{title: 'Stuff Page 1'}} />
      <Tab.Screen name="Stuff2" component={Stuff} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

function LogoTitle() {
  return (
    <View style={{justifyContent: 'flex-end', backgroundColor: 'cornflowerblue'}}>
      <Ionicons onPress={() => Alert.alert('test', 'ting')} name="ios-menu" size={32} color="#444" />
    </View>
  );
}

function MainStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}
      options={{
        // headerTitle: () => <LogoTitle />,
        headerRight: () => (
          <Ionicons style={{marginRight: 20}} onPress={() => Alert.alert('test', 'ting')} name="ios-menu" size={32} color="#444" />
        ),
      }}
    />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Main' component={MainStack} />
        <Drawer.Screen name='About' component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
    </View>
  )
}

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>Built by Dave 🇦🇺</Text>
    </View>
  )
}

function Settings({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Settings Page</Text>
      <Button
        title='buttin' onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

function Feed({navigation}) {
  return (
    <View>
      <Text style={styles.container}>Feed Page</Text>
      <Button title='My Profile' onPress={() => navigation.navigate('Profile')} />
      <Button title='Settings' onPress={() => navigation.navigate('Settings')} />
    </View>
  )
}

function Messages() {
  return (
    <View style={styles.container}>
      <Text>Messages Page</Text>
    </View>
  )
}

function Stuff() {
  let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
  return (
    <View style={styles.container}>
      <Text>Stuff Page</Text>
      <Image source={pic} style={{width: 193, height: 110}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  }
});