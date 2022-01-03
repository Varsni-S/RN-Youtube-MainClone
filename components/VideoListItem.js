/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {useTheme} from '@react-navigation/native';
import {videoClickedAction} from '../redux/action';
import {useDispatch} from 'react-redux';

const VideoListItem = ({video, navigation}) => {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const textcolor = colors.iconColor;
  const minutes = Math.floor(video.duration / 60);
  const seconds = video.duration % 60;
  let viewsString = video.views.toString();
  if (video.views > 1_000_000) {
    viewsString = (video.views / 1_000_000).toFixed(1) + 'M';
  } else if (video.views > 1_000) {
    viewsString = (video.views / 1_000).toFixed(1) + 'K';
  }
  const videoPressFunction = () => {
    navigation.navigate('VideoPlayer');
    dispatch(videoClickedAction(video));
  };

  return (
    <TouchableOpacity onPress={videoPressFunction} style={styles.videoCard}>
      <View>
        <Image
          style={styles.thumbnail}
          source={{
            uri: video.thumbnail,
          }}
        />

        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {minutes}:{seconds < 10 ? '0' : ''}
            {seconds}
          </Text>
        </View>
      </View>

      {/* Title row */}
      <View style={styles.titleRow}>
        {/* Avatar */}
        <Image
          style={styles.avatar}
          source={{
            uri: video.user.image,
          }}
        />

        {/* Middle Container*/}
        <View style={styles.midContainer}>
          <Text style={styles.title} style={{color: textcolor}}>
            {video.title}
          </Text>
          <Text style={styles.subtitle}>
            {video.user.name} {viewsString} {video.createdAt}
          </Text>
        </View>
        {/* Menu icon*/}

        <FontAwesomeIcon icon={faEllipsisV} size={16} color="grey" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  timeContainer: {
    backgroundColor: '#00000099',
    height: 25,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  time: {
    color: 'white',
    fontWeight: 'bold',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  titleRow: {
    flexDirection: 'row',
    padding: 10,
  },
  midContainer: {
    marginHorizontal: 15,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 3,
  },
  subtitle: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default VideoListItem;
