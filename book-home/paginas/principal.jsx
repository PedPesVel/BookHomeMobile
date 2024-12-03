import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Principal({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>BOOK-HOME</Text>
                <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('sesion')}>
                    <Ionicons name="person-outline" size={28} color="#f0f4f3" />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                {/* Contenido principal */}
            </View>

            <View style={styles.nav}>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('principal')}>
                    <Ionicons name="home" size={28} color="#f0f4f3" />
                    <Text style={styles.navText}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('buscar')}>
                    <Ionicons name="search" size={28} color="#f0f4f3" />
                    <Text style={styles.navText}>Buscar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('vender')}>
                    <FontAwesome name="money" size={28} color="#f0f4f3" />
                    <Text style={styles.navText}>Vender</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('perfil')}>
                    <FontAwesome name="bars" size={28} color="#f0f4f3" />
                    <Text style={styles.navText}>Más</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#f0f4f3',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#039070',
        paddingVertical: 20,
        paddingHorizontal: 15,
        elevation: 4,
    },
    text: {
        fontFamily: 'Montserrat',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f0f4f3',
        marginTop: 15,
    },
    profileButton: {
        backgroundColor: 'transparent',
        padding: 5,
        marginTop: 15,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f4f3',
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#04916F',
        paddingVertical: 15,
    },
    navItem: {
        alignItems: 'center', // Centra íconos y texto en cada botón
    },
    navText: {
        marginTop: 5, // Espaciado entre ícono y texto
        color: '#f0f4f3',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
