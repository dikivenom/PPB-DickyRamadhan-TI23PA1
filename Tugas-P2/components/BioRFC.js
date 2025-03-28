import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BioRFC = () => {
    const [MyBio] = useState({
        identity: {
            npm: 232310015,
            firstname: "DICKY",
            lastname: "RAMADHAN",
        },
        educations: [
            { id: 1, school: "SDN Panaragan 3" },
            { id: 2, school: "SMP PGRI 3" },
            { id: 3, school: "SMK Infokom Kota Bogor" },
        ],
        mobile_phone: +62888,
        email: "232310015@student.ibik.ac.id",
        gender: 'M',
        tall_body: 165,
        weight_body: 50
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Data Diri (RFC)</Text>
            <Text style={styles.text}>NPM: {MyBio.identity.npm}</Text>
            <Text style={styles.text}>Nama: {MyBio.identity.firstname} {MyBio.identity.lastname}</Text>
            <Text style={styles.text}>Email: {MyBio.email}</Text>
            <Text style={styles.text}>Nomor HP: {MyBio.mobile_phone}</Text>
            <Text style={styles.text}>Tinggi: {MyBio.tall_body} cm</Text>
            <Text style={styles.text}>Berat: {MyBio.weight_body} kg</Text>
            <Text style={styles.subtitle}>Pendidikan:</Text>
            {MyBio.educations.map((edu) => (
                <Text key={edu.id} style={styles.text}>- {edu.school}</Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFCCBC',
        padding: 20,
        borderRadius: 10,
        width: '90%',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    }
});

export default BioRFC;
