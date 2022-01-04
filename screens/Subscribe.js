import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import VoiceSearch from '../components/VoiceSearch';

import VideoPlayer from './VideoPlayer';

export default function Subscribe() {
  return (
    <View>
      <Header />
      <VoiceSearch />
    </View>
  );
}
