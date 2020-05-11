import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '../styles/global';
import Card from '../shared/Card';

export default function Home ({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
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
      <Modal visible={modalOpen} animationType='slide'>
        
        <View style={styles.modalContent}>
          <MaterialIcons name='add'
            size={24}
            onPress={() => setModalOpen(true)}
          />
          <Text>Hello World!!!</Text>
        </View>
      </Modal>

      <MaterialIcons name='add'
        size={24}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data = { reviews }
        renderItem = { ({ item }) => (
          <TouchableOpacity onPress={ () => clickHandler(item)}>
            <Card>
              <Text style={globalStyles.textTitle}>{ item.title }</Text>    
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    modalContent: {

    }
})