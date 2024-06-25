/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './android/src/screens/home';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Home/>
    </SafeAreaView>
  );
}


export default App;
