/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';

import {useTheme} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {videoClickedAction} from '../redux/action';

const MiniVideoList = ({video, navigation}) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const textcolor = colors.iconColor;

  let viewsString = video.views.toString();
  if (video.views > 1_000_000) {
    viewsString = (video.views / 1_000_000).toFixed(1) + 'M';
  } else if (video.views > 1_000) {
    viewsString = (video.views / 1_000).toFixed(1) + 'K';
  }
  const navigationFunction = () => {
    navigation.navigate('VideoPlayer');
    dispatch(videoClickedAction(video));
  };
  return (
    <TouchableOpacity
      onPress={() => navigationFunction()}
      style={{flexDirection: 'row', margin: 12, marginBottom: 0}}>
      <Image
        style={{
          width: '45%',
          height: 100,
        }}
        source={{
          uri: video.thumbnail,
        }}
      />
      <View style={{paddingLeft: 7}}>
        <Text
          style={{
            fontSize: 18,

            width: Dimensions.get('screen').width / 2,
            color: textcolor,
          }}
          ellipsizeMode="tail"
          numberOfLines={3}>
          {video.title}
        </Text>
        <Text style={{fontSize: 13, color: 'gray'}} numberOfLines={3}>
          {viewsString} {video.createdAt}
        </Text>
      </View>
      <FontAwesomeIcon
        icon={faEllipsisV}
        size={16}
        color="grey"
        style={{marginLeft: -8, marginTop: 5}}
      />
    </TouchableOpacity>
  );
};

export default MiniVideoList;
