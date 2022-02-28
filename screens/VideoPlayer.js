/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {WebView} from 'react-native-webview';

import videos from '../assests/data/videos.json';
import VideoListItem from '../components/VideoListItem';
import video from '../assests/data/video.json';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faDownload,
  faSave,
  faShare,
  faThumbsDown,
  faThumbsUp,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import Video from 'react-native-video';

import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';

function VideoPlayer({navigation}) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisLikes] = useState(0);

  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };

  const videoGotFromRedux = useSelector(state => state.VIDEO);

  const {colors} = useTheme();
  const textcolor = colors.iconColor;

  let viewsString = videoGotFromRedux.views.toString();
  if (videoGotFromRedux.views > 1_000_000) {
    viewsString = (videoGotFromRedux.views / 1_000_000).toFixed(1) + 'M';
  } else if (videoGotFromRedux.views > 1_000) {
    viewsString = (videoGotFromRedux.views / 1_000).toFixed(1) + 'K';
  }

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        {/* Video player */}
        <View style={{width: '100%', height: 200}}>
          <Video
            style={styles.backgroundVideo}
            controls={true}
            muted={false}
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              //uri: videoGotFromRedux.videoUrl,
            }}
          />
        </View>

        {/* <WebView
            style={{flex: 1}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            allowsFullscreenVideo={true}
            mediaPlaybackRequiresUserAction={true}
            source={{
              // uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              uri: videoGotFromRedux.videoUrl,
            }}
          /> */}

        {/* Video info  */}
        <View style={{flex: 1}}>
          <View style={styles.videoInfoContainer}>
            <Text style={styles.tags}>{video.tags}</Text>
            <Text style={styles.title} style={{color: textcolor}}>
              {videoGotFromRedux.title}
            </Text>
            <Text style={styles.subtitle}>
              {viewsString} {videoGotFromRedux.createdAt}
            </Text>
          </View>
        </View>

        {/* Action List */}
        <View style={styles.actionListContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.actionListItem}>
              <FontAwesomeIcon
                icon={faThumbsUp}
                onPress={() => setLikes(likes + 1)}
                size={20}
                color="grey"
              />
              <Text style={{color: textcolor}}>{likes} Likes</Text>
            </View>

            <View style={styles.actionListItem}>
              <FontAwesomeIcon
                icon={faThumbsDown}
                size={20}
                color="grey"
                onPress={() => setDisLikes(dislikes + 1)}
              />
              <Text style={{color: textcolor}}>{dislikes} Dislikes</Text>
            </View>

            <View style={styles.actionListItem}>
              <FontAwesomeIcon icon={faShare} size={20} color="grey" />
              <Text style={{color: textcolor}}>Share</Text>
            </View>

            <View style={styles.actionListItem}>
              <FontAwesomeIcon icon={faDownload} size={20} color="grey" />
              <Text style={{color: textcolor}}>Download</Text>
            </View>

            <View style={styles.actionListItem}>
              <FontAwesomeIcon icon={faSave} size={20} color="grey" />
              <Text style={{color: textcolor}}>Save</Text>
            </View>

            <View style={styles.actionListItem}>
              <FontAwesomeIcon icon={faSave} size={20} color="grey" />
              <Text style={{color: textcolor}}>Save</Text>
            </View>

            <View style={styles.actionListItem}>
              <FontAwesomeIcon icon={faSave} size={20} color="grey" />
              <Text style={{color: textcolor}}>Save</Text>
            </View>
          </ScrollView>
        </View>

        {/* User info */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#3d3d3d',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            paddingVertical: 10,
          }}>
          <Image style={styles.avatar} source={{uri: video.user.image}} />
          <View style={{marginHorizontal: 10, flex: 1}}>
            <Text style={{color: textcolor, fontSize: 18, fontWeight: 'bold'}}>
              {video.user.name}
            </Text>
            <Text style={{color: 'grey', fontSize: 18}}>
              {video.user.subscribers} Subscribers
            </Text>
          </View>
          <TouchableOpacity onPress={() => toggleFunction()}>
            <Text
              style={{
                color: 'red',
                fontSize: 20,
                paddingRight: 8,
                fontWeight: 'bold',
              }}>
              {toggle ? (
                'SUBSCRIBE'
              ) : (
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 20,
                    paddingRight: 8,
                    fontWeight: 'bold',
                  }}>
                  SUBSCRIBED{' '}
                </Text>
              )}
            </Text>
          </TouchableOpacity>
        </View>

        {/*  Comments*/}
        <Pressable style={{padding: 8}}>
          <Text style={{color: textcolor}}>Comments 335</Text>
          {/*  Comments component*/}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Image
              style={{width: 35, height: 35, borderRadius: 20}}
              source={{uri: videoGotFromRedux.user.image}}
            />

            <Text
              style={{
                color: textcolor,
                marginLeft: 10,
              }}>
              Video is very interesting to do make app using react native
            </Text>
          </View>
        </Pressable>

        {/* Recommended Video  */}
        <SafeAreaView>
          <FlatList
            data={videos}
            renderItem={({item}) => (
              <VideoListItem navigation={navigation} video={item} />
            )}
            // ListHeaderComponent={videoGotFromReduxScreen}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

export default VideoPlayer;

const styles = StyleSheet.create({
  videoPlayer: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  videoInfoContainer: {
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 5,
  },
  tags: {
    color: '#0094e3',
    fontSize: 14,
    fontWeight: '500',
  },
  subtitle: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '500',
  },
  actionListContainer: {
    marginVertical: 5,
  },
  actionListItem: {
    width: 70,
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  backgroundVideo: {
    flex: 1,
  },
});
