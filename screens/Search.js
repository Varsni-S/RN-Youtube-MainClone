/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TextInput, FlatList, ActivityIndicator} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faMicrophone,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import MiniVideoList from '../components/MiniVideoList';

import videos from '../assests/data/videos.json';
import {useTheme} from '@react-navigation/native';

export default function Search({navigation}) {
  const {colors} = useTheme();
  const mycolor = colors.iconColor;

  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=${value}AIzaSyCFvI4WKZZGrzbksfbJUPrZgc8kKroKHpQ',
    );
    then(res => res.json()).then(data => {
      console.log(data);
      setLoading(false);
      dispatch({type: 'add', payload: data.items});
    });
  };

  return (
    <View style={{flex: 1, marginTop: 5}}>
      <View
        style={{
          padding: 5,
          flexDirection: 'row',
          // backgroundColor: colors.headerColor,
          justifyContent: 'space-around',
        }}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={24}
          color={mycolor}
          onPress={() => navigation.navigate('Home')}
        />
        <TextInput
          style={{
            width: '60%',
            height: '90%',
            backgroundColor: '#e6e6e6',
            color: 'black',
            fontSize: 20,
            paddingHorizontal: 15,
          }}
          value={value}
          onChangeText={text => setValue(text)}
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          size={22}
          color={mycolor}
          onPress={() => fetchData()}
        />

        <FontAwesomeIcon icon={faMicrophone} size={22} color={mycolor} />
      </View>
      {loading ? (
        <ActivityIndicator style={{marginTop: 10}} size="large" color="red" />
      ) : null}
      <FlatList
        data={videos}
        renderItem={({item}) => (
          <MiniVideoList navigation={navigation} video={item} />
        )}
      />
    </View>
  );
}

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key= AIzaSyCFvI4WKZZGrzbksfbJUPrZgc8kKroKHpQ
