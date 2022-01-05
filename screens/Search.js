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
  const [search, setSearch] = useState('');

  const [filteredDataSource, setFilteredDataSource] = useState(videos);
  const [masterDataSource, setMasterDataSource] = useState(videos);

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log(newData);
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <View style={{flex: 1, marginTop: 5}}>
      <View
        style={{
          padding: 5,
          flexDirection: 'row',

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
          onChangeText={text => searchFilterFunction(text)}
          value={search}
        />
        <FontAwesomeIcon icon={faPaperPlane} size={22} color={mycolor} />

        <FontAwesomeIcon icon={faMicrophone} size={22} color={mycolor} />
      </View>

      <FlatList
        data={filteredDataSource}
        renderItem={({item}) => (
          <MiniVideoList navigation={navigation} video={item} />
        )}
      />
    </View>
  );
}

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=tamil%20songs&type=video&key=https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${value}amil%20songs&type=video&key=AIzaSyDq6OxC3cQK2yXcBSdT7XyR0u4P3TS1dng
