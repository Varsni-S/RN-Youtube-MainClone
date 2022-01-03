/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList} from 'react-native';
import Header from '../components/Header';

import videos from '../assests/data/videos.json';
import VideoListItem from '../components/VideoListItem';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} />

      <FlatList
        data={videos}
        renderItem={({item}) => (
          <VideoListItem navigation={navigation} video={item} />
        )}
      />
    </View>
  );
}
