# rn_seed_navigation_login
React Native Boilerplate with authentication screens and app screens with switch navigation and stack navigation 

This can be a starting point for a react native application.
From this project you can learn:
1. How to implement SafeAreaView
2. How to design the screen with Flex
3. How to implement different Navigators and how to customise them
4. How to organise an RN App in components & how to reuse them
5. How to pass props and how to manage states

In this project I have implemented the following screens:

1. Login Screen
2. Sign up Screen
3. Home Screen 
4. Search Screen
5. Auth Loading Screen

I have arranged them in Switch Navigation:
1. AuthLoading
2. Auth
3. App

I have implemented the logic in AuthLoading for checking if an user is in our Async Storage for switching between App & Auth.
Though I haven't written the logic for Login and Sign Up.

I have implemented following Stack Navigations:
1. StackNavigatior
2. createMaterialTopTabNavigator
3. createBottomTabNavigator (Commented in AppStackNavigator) 

To check the App:
1. git clone https://github.com/anuragbhattacharjee/rn_seed_navigation_login.git
2. npm install
3. npm start

I have created this app using expo. So you can directly see the app in your device.
