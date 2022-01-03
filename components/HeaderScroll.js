import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function HeaderScroll() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            backgroundColor: '#c0c0c0',
            height: 40,
            width: 70,
            borderRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 18,
              marginTop: 10,
            }}>
            Explore
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#c0c0c0',
            height: 40,
            width: 40,
            borderRadius: 18,

            // marginBottom: 15,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 18,
              marginTop: 10,
            }}>
            All
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#c0c0c0',
            height: 40,
            width: 40,
            borderRadius: 18,
            margin: 15,
            // marginBottom: 15,
          }}>
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
            height: 40,
            width: 40,
            borderRadius: 18,
            margin: 15,
            // marginBottom: 15,
          }}>
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
            height: 40,
            width: 40,
            borderRadius: 18,
            margin: 15,
            // marginBottom: 15,
          }}>
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
            height: 40,
            width: 40,
            borderRadius: 18,
            margin: 15,
            // marginBottom: 15,
          }}>
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
            height: 40,
            width: 40,
            borderRadius: 18,
            margin: 15,
            // marginBottom: 15,
          }}>
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
      </View>
    </ScrollView>
  );
}
