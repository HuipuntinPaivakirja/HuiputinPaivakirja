import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native';
import { useAuth } from '../firebase/AuthProvider';
import CustomDrawerContent from './CustomDrawerContent';
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';
import LoadingIcon from '../components/LoadingIcon';
import { useCustomTheme } from '../theme/CustomTheme';
import { useTheme } from 'react-native-paper';

const Drawer = createDrawerNavigator();

function AppNavigator() {
  const { user, loading } = useAuth();
  const { isDarkTheme } = useCustomTheme();
  const { colors } = useTheme();

  if (loading) {
    return (
      <>
        <StatusBar
          backgroundColor={colors.background}
          barStyle={isDarkTheme ? "light-content" : "dark-content"}
        />
        <LoadingIcon />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <StatusBar
          backgroundColor={colors.background}
          barStyle={isDarkTheme ? "light-content" : "dark-content"}
        />
        <AuthStackNavigator />
      </>
    );
  }

  return (
    <>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={isDarkTheme ? "light-content" : "dark-content"}
      />
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerPosition: 'right',
          swipeEnabled: false,
          gestureEnabled: false
        }}
      >
        <Drawer.Screen name="MainStack" component={MainStackNavigator} />
      </Drawer.Navigator>
    </>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
