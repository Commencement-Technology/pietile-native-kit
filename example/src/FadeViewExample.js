import React, { useState } from 'react';

import FadeView from '@pietile-native-kit/fade-view';
import { StyleSheet, Text, TouchableWithoutFeedback, View, ViewPropTypes } from 'react-native';

export default function FadeViewExample({ style }) {
  const [cat, setCat] = useState(true);

  function onPress() {
    setCat(!cat);
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style}>
        <FadeView data={cat}>
          <View style={[styles.content, { backgroundColor: cat ? '#c4c' : '#bfb' }]}>
            <Text style={[styles.text]}>{cat ? '🐱' : '🐶'}</Text>
          </View>
        </FadeView>
      </View>
    </TouchableWithoutFeedback>
  );
}

FadeViewExample.propTypes = {
  style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  content: {
    borderRadius: 16,
    padding: 16,
  },
  text: {
    fontSize: 86,
  },
});
