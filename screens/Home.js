import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { globalStyles } from '../styles/global';

export default function Home ({navigation}) {
  const [reviews, setReview] = useState([
    { title: 'Life', rating: 4, body: 'Lorem Ipsum', key: '1' },
    { title: 'The Irishman', rating: 4.3, body: 'Lorem Ipsum', key: '2' },
    { title: 'Marriage Story', rating: 4.1, body: 'Lorem Ipsum', key: '3' },
    { title: 'Roma', rating: 3.6, body: 'Lorem Ipsum', key: '4' }
  ]);

  const clickHandler = (item) => {
    navigation.navigate('ReviewDetails', item);
  }
  return (
    <View style={ globalStyles.container }>
      <FlatList
        data = { reviews }
        renderItem = { ({ item }) => (
          <TouchableOpacity onPress={ () => clickHandler(item)}>
            <Text style={globalStyles.textTitle}>{ item.title }</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}