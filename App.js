import React from 'react';
import { View } from 'react-native';
import FadeInView from './src/FadeInView';


const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView>
        {/* Your content */}
      </FadeInView>
    </View>
  );
};

export default App;
