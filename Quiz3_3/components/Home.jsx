import React, { useState } from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';

export default function Home() {
  const menu = [
    { menu: 'Indomie', harga: 5000, jenis: 'makanan' },
    { menu: 'Nasi Goreng', harga: 10000, jenis: 'makanan' },
    { menu: 'Telor', harga: 3000, jenis: 'makanan' },
    { menu: 'Nasgor Mie', harga: 12000, jenis: 'makanan' },
    { menu: 'Sosis Bakar', harga: 3000, jenis: 'makanan' },
    { menu: 'Pasta', harga: 15000, jenis: 'makanan' },
    { menu: 'Es Teh Manis', harga: 3000, jenis: 'minuman' },
    { menu: 'Kopi Hitam', harga: 5000, jenis: 'minuman' },
    { menu: 'Susu Coklat', harga: 7000, jenis: 'minuman' },
    { menu: 'Jus Alpukat', harga: 10000, jenis: 'minuman' },
    { menu: 'Air Mineral', harga: 2000, jenis: 'minuman' },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [orders, setOrders] = useState([]);

  const handleBeli = (item) => {
    setSelectedItem(item);
    setQuantity(1);
  };

  const handlePembayaran = (metode) => {
    if (metode === 'QRIS') {
      Alert.alert('Informasi', 'Metode pembayaran QRIS belum tersedia, cash only');
    } else {
      const total = selectedItem.harga * quantity;
      Alert.alert(
        'Pembayaran Berhasil',
        `${selectedItem.menu} x${quantity} = Rp${total}`
      );


      setOrders((prev) => [
        ...prev,
        {
          menu: selectedItem.menu,
          jumlah: quantity,
          total: total,
          status: 'Belum Siap',
        },
      ]);
    }

    setSelectedItem(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* Menu List */}
        {menu.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{item.menu}</Text>
            <Text style={styles.harga}>Rp {item.harga}</Text>
            <Text style={styles.jenis}>{item.jenis.toUpperCase()}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleBeli(item)}
            >
              <Text style={styles.buttonText}>Beli</Text>
            </TouchableOpacity>
          </View>
        ))}

        {orders.length > 0 && (
          <View style={styles.orderContainer}>
            <Text style={styles.orderTitle}>Daftar Pesanan:</Text>
            {orders.map((order, idx) => (
              <View key={idx} style={styles.orderItem}>
                <Text>{order.menu} x{order.jumlah}pcs</Text>
                <Text>{order.harga} </Text>
                <Text>Total Harga: {order.total}</Text>
                <Text>Status: {order.status}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Popup Pembayaran */}
      {selectedItem && (
        <View style={styles.popup}>
          <Text style={styles.popupTitle}>Pilih Pembayaran</Text>
          <Text style={styles.popupItem}>
            {selectedItem.menu} - Rp{selectedItem.harga}
          </Text>


          <View style={styles.qtyContainer}>
            <TouchableOpacity
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
              style={styles.qtyButton}
            >
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyCount}>{quantity}</Text>
            <TouchableOpacity
              onPress={() => setQuantity(quantity + 1)}
              style={styles.qtyButton}
            >
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => handlePembayaran('Cash')}>
            <Text style={styles.option}>Cash</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePembayaran('QRIS')}>
            <Text style={styles.option}>QRIS</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedItem(null)}>
            <Text style={styles.close}>Tutup</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 15,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  harga: {
    fontSize: 16,
    color: '#444',
    marginTop: 5,
  },
  jenis: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  popup: {
    position: 'absolute',
    bottom: 100,
    left: 30,
    right: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    borderColor: '#aaa',
    borderWidth: 1,
    alignItems: 'center',
    elevation: 5,
  },
  popupTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  popupItem: {
    marginBottom: 10,
    fontSize: 14,
  },
  option: {
    fontSize: 16,
    color: '#007AFF',
    marginVertical: 5,
  },
  close: {
    marginTop: 10,
    color: 'red',
    fontSize: 14,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  qtyButton: {
    backgroundColor: '#ddd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  qtyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  qtyCount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 1,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 5,
  },
});
