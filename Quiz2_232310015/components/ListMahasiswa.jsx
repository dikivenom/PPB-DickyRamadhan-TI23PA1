import React, { useState } from 'react'
import { View, TouchableOpacity,Text, Alert, FlatList,StyleSheet } from 'react-native'

export default function ListMahasiswa() {
    const [mhs, setMhs] = useState([
        {
            id: 1,
            nama: 'Diki',
            npm: 15
        },
        {
            id: 2,
            nama: 'Yasrah',
            npm: 22
        },
        {
            id: 3,
            nama: 'Rido',
            npm: 33
        },
        {
            id: 4,
            nama: 'Qyco',
            npm: 44
        },
        {
            id: 5,
            nama: 'Vista',
            npm: 55
        },
    ])
const renderItem = ({item}) => {
    return (
        <View key={item.key} style={styles.containerCard}>
            <Text style={{textAlign: 'left', fontWeight:'bold'}}>{item.nama}</Text>
            <Text style={{textAlign: 'left'}}>{item.npm}</Text>
        </View>
    )
}
  return (
   <View>

    <View>
        <FlatList data={mhs} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>

   </View>
  )
}

const styles = StyleSheet.create({

    containerCard: {
         borderWidth: 3,
         gap: 10,
         borderRadius: 10,
         borderColor: 'brown',
         marginVertical: 10,
         width: '40%',
         paddingLeft: 7,
         marginHorizontal: 'auto'
    }

})
