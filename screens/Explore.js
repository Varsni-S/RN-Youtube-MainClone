/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Header from '../components/Header';
import videos from '../assests/data/videos.json';
import VideoListItem from '../components/VideoListItem';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBullseye,
  faFilm,
  faFire,
  faGamepad,
  faGraduationCap,
  faMusic,
  faNewspaper,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

export default function Explore({navigation}) {
  return (
    <View>
      <Header />

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            backgroundColor: '#c0c0c0',
            height: 70,
            width: 80,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <FontAwesomeIcon
            icon={faFire}
            size={20}
            style={{
              marginLeft: 30,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 18,
              marginTop: 10,
            }}>
            Trending
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#c0c0c0',
            height: 70,
            width: 80,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <FontAwesomeIcon
            icon={faMusic}
            size={20}
            style={{
              marginLeft: 30,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 18,
              marginTop: 10,
            }}>
            Music
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#c0c0c0',
            height: 70,
            width: 80,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <FontAwesomeIcon
            icon={faFilm}
            size={20}
            style={{
              marginLeft: 30,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 18,
              marginTop: 10,
            }}>
            Flims
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#c0c0c0',
            height: 70,
            width: 80,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <FontAwesomeIcon
            icon={faBullseye}
            size={20}
            style={{
              marginLeft: 30,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 18,
              marginTop: 10,
            }}>
            Live
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#c0c0c0',
            height: 70,
            width: 80,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <FontAwesomeIcon
            icon={faGamepad}
            size={20}
            style={{
              marginLeft: 30,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 18,
              marginTop: 10,
            }}>
            Gaming
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#c0c0c0',
            height: 70,
            width: 80,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <FontAwesomeIcon
            icon={faNewspaper}
            size={20}
            style={{
              marginLeft: 30,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 18,
              marginTop: 10,
            }}>
            News
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#c0c0c0',
            height: 70,
            width: 80,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <FontAwesomeIcon
            icon={faTrophy}
            size={20}
            style={{
              marginLeft: 30,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 18,
              marginTop: 10,
            }}>
            Sports
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#c0c0c0',
            height: 70,
            width: 80,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <FontAwesomeIcon
            icon={faGraduationCap}
            size={20}
            style={{
              marginLeft: 30,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 18,
              marginTop: 10,
            }}>
            Learning
          </Text>
        </View>
      </View>
      <Text
        style={{
          margin: 8,
          fontSize: 22,
          borderBottomWidth: 1,
        }}>
        Trending Videos
      </Text>

      <FlatList
        data={videos}
        renderItem={({item}) => (
          <VideoListItem navigation={navigation} video={item} />
        )}
      />
    </View>
  );
}
