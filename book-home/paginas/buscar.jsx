import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Principal({ navigation }) {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterPress = (filter) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter((f) => f !== filter));
        } else {
            setSelectedFilters([...selectedFilters, filter]);
        }
    };

    const isSelected = (filter) => selectedFilters.includes(filter);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>BUSCAR</Text>
                <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('sesion')}>
                    <Ionicons name="person-outline" size={28} color="#f0f4f3" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.filters}>
                    <Text style={styles.filtersTitle}>Filtros</Text>

                    <View style={styles.row}>
                        <TouchableOpacity style={[ styles.filterButton, isSelected('Renta') ? styles.activeFilterButton : styles.inactiveFilterButton,]} onPress={() => handleFilterPress('Renta')}>
                        <Text style={[isSelected('Renta') ? styles.activeFilterText : styles.inactiveFilterText,]}>Renta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.filterButton, isSelected('Compra') ? styles.activeFilterButton : styles.inactiveFilterButton,]} onPress={() => handleFilterPress('Compra')}>
                        <Text style={[isSelected('Compra') ? styles.activeFilterText : styles.inactiveFilterText,]}>Compra</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <TouchableOpacity style={[ styles.filterButton, isSelected('Casa') ? styles.activeFilterButton : styles.inactiveFilterButton,]} onPress={() => handleFilterPress('Casa')}>
                        <Text style={[isSelected('Casa') ? styles.activeFilterText : styles.inactiveFilterText,]}>Casa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.filterButton, isSelected('Departamento') ? styles.activeFilterButton : styles.inactiveFilterButton,]} onPress={() => handleFilterPress('Departamento')}>
                        <Text style={[isSelected('Departamento') ? styles.activeFilterText : styles.inactiveFilterText,]}>Departamento</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.label}>Precio</Text>
                    <View style={styles.row}>
                        <TextInput style={[styles.input, styles.halfInput]} placeholder="De:" placeholderTextColor="#888" />
                        <TextInput style={[styles.input, styles.halfInput]} placeholder="A:" placeholderTextColor="#888" />
                    </View>

                    <Text style={styles.label}>Delegación/Municipio</Text>
                    <TextInput style={[styles.input]} placeholder="*****" placeholderTextColor="#888" />

                    <View style={styles.row}>
                        <Text style={styles.label}>m²</Text>
                        <Text style={styles.label}>Habitaciones</Text>
                        <Text style={styles.label}>Baños</Text>
                    </View>

                    <View style={styles.row}>
                        <TextInput style={[styles.input, styles.thirdInput]} placeholder="###" placeholderTextColor="#888" />
                        <TextInput style={[styles.input, styles.thirdInput]} placeholder="##" placeholderTextColor="#888" />
                        <TextInput style={[styles.input, styles.thirdInput]} placeholder="##" placeholderTextColor="#888" />
                    </View>

                    <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('#')}>
                    <Text style={styles.botonText}>APLICAR FILTROS</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

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
        backgroundColor: '#04916F',
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
        padding: 20,
        backgroundColor: '#f0f4f3',
    },
    filters: {
        marginBottom: 20,
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 8,
        elevation: 2,
    },
    filtersTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#04916F',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    input: {
        backgroundColor: '#f0f4f3',
        padding: 10,
        borderRadius: 8,
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    halfInput: {
        width: '48%',
    },
    thirdInput: {
        width: '30%',
    },
    filterButton: {
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
        width: '48%',
    },
    inactiveFilterButton: {
        backgroundColor: '#fff',
        borderColor: '#04916F',
        borderWidth: 1,
    },
    activeFilterButton: {
        backgroundColor: '#04916F',
    },
    inactiveFilterText: {
        color: '#04916F',
    },
    activeFilterText: {
        color: '#fff',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#04916F',
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#04916F',
        paddingVertical: 15,
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        marginTop: 5,
        color: '#f0f4f3',
        fontSize: 14,
        fontWeight: 'bold',
    },
    boton: {
        backgroundColor: '#039070',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    botonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
