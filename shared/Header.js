import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header ({navigation}) {
 
  const openMenu = () => {
    console.log('here');
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} style={styles.icon} onPress={openMenu} />
      <View >
        <Text style={styles.headerText}>Movies</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   header: {
     width: '100%',
     height: '100%',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center'
   },
   headerText: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 20,
      letterSpacing: 1,
      marginLeft: 60
   },
   icon: {
      position: 'absolute',
      left: 10
   }
})
