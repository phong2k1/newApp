/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from "./src/routes/index";
import CheckLogin from "./src/routes/checkLogin/checkLogin"
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  const {check} = CheckLogin()
  
  return (
    <SafeAreaProvider>
      <AppNavigator check={check}/>
    </SafeAreaProvider>
  );
}


export default App;
