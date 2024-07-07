/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from "./src/routes/index";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from "./src/redux/store"

function App(): React.JSX.Element {
  
  return (
    <SafeAreaProvider>
      <Provider store={store}>
      <AppNavigator/>
      </Provider>
    </SafeAreaProvider>
  );
}


export default App;
