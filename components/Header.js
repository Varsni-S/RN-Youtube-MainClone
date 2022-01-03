/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faPodcast,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import {useTheme} from '@react-navigation/native';

const Header = ({navigation}) => {
  const {colors} = useTheme();
  const mycolor = colors.iconColor;
  const searchClick = () => {
    navigation.navigate('Search');
  };
  return (
    <SafeAreaView>
      <View
        style={{
          height: 55,
          padding: 5,
          flexDirection: 'row',
          backgroundColor: colors.headerColor,
          alignItems: 'center',
          justifyContent: 'space-between',
          elevation: 5,
        }}>
        <Image
          resizeMode="contain"
          style={{width: 50, height: 45}}
          source={require('../assests/images/youtubeIcon.png')}
        />
        <Text
          style={{
            fontSize: 22,
            marginLeft: -100,
            color: mycolor,
            fontWeight: 'bold',
          }}>
          YouTube
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: 150,
            justifyContent: 'space-between',
          }}>
          <FontAwesomeIcon icon={faPodcast} size={24} color={mycolor} />
          <FontAwesomeIcon icon={faBell} size={24} color={mycolor} />
          <FontAwesomeIcon
            icon={faSearch}
            size={24}
            color={mycolor}
            onPress={searchClick}
          />
          <FontAwesomeIcon icon={faUser} size={24} color={mycolor} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Header;
