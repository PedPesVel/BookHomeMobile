import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Principal({ navigation }) {
    const [selectedPurpose, setSelectedPurpose] = useState('');
    const [selectedType, setSelectedType] = useState('');

    const [delegacion, setDel] = useState('')
    const [calle, setCalle] = useState('')
    const [colonia, setCol] = useState('')
    const [cod, setCod] = useState('')
    const [ext, setExt] = useState('')
    const [inte, setInte] = useState('')
    const [precio, setPrecio] = useState('')
    const [metros, setMetros] = useState('')
    const [hab, setHab] = useState('')
    const [banos, setBanos] = useState('')
    const [des, setDes] = useState('')

    const val = () =>{

        const invalidos = /[<>{}$#!%=~]/
        const numeros = /^[0-9]+$/
        const solocinco = /^\d{5}$/

        if(!delegacion || !calle || !colonia | !cod || !ext || !precio || !metros || !hab || !banos || !des){
            Alert.alert('AVISO', 'Los campos marcados con *, son obligatorios.')
            return;
        }
        if(invalidos.test(delegacion) || invalidos.test(calle) || invalidos.test(colonia) || invalidos.test(cod) || invalidos.test(ext) || invalidos.test(inte)
             || invalidos.test(precio) || invalidos.test(metros)|| invalidos.test(hab) || invalidos.test(banos) || invalidos.test(des)){
            Alert.alert('PRECAUCIÓN', 'Por favor, evite el ingreso de carácteres no válidos')
            return;
        }
        if(!numeros.test(cod) || !numeros.test(ext) || !numeros.test(inte) || !numeros.test(precio) || !numeros.test(metros) || !numeros.test(hab) || !numeros.test(banos)){
            Alert.alert('AVISO', 'Por favor, asegúrese de introducir solo números en los campos requeridos')
            return;
        }
        if(!solocinco.test(cod)){
            Alert.alert('AVISO', 'Por favor, ingrese 5 números para el Código Postal')
            return;
        }

        if(!selectedPurpose){
            Alert.alert('AVISO','Por favor, seleccione Renta o Venta')
            return;
        }    

        if(!selectedType){
            Alert.alert('AVISO','Por favor, seleccione Casa o Departamento')
            return;
        }     

        Alert.alert('Válido')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>VENDER</Text>
                <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('sesion')}>
                    <Ionicons name="person-outline" size={28} color="#f0f4f3" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.formVender}>
                <Text style={styles.textF}>Detalla tu Propiedad</Text>

                <Text style={styles.label}>Delegación/Municipio *</Text>
                <TextInput style={styles.input} name={delegacion} onChangeText={setDel} placeholder="*****" placeholderTextColor="#888" />
                <Text style={styles.label}>Calle *</Text>
                <TextInput style={styles.input} name={calle} onChangeText={setCalle}  placeholder="*****" placeholderTextColor="#888" />
                <Text style={styles.label}>Colonia *</Text>
                <TextInput style={styles.input} name={colonia} onChangeText={setCol}  placeholder="*****" placeholderTextColor="#888" />
                <Text style={styles.label}>Código Postal *</Text>
                <TextInput style={styles.input} name={cod} onChangeText={setCod}   placeholder="Solo números" placeholderTextColor="#888" />

                <View style={styles.row}>
                    <TouchableOpacity style={[styles.checkbox, selectedPurpose === 'Renta' ? styles.activeFilterButton : styles.inactiveFilterButton ]} onPress={() => setSelectedPurpose('Renta')}>
                        <Text style={[selectedPurpose === 'Renta' ? styles.activeFilterText : styles.inactiveFilterText]}>Renta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ styles.checkbox, selectedPurpose === 'Venta'? styles.activeFilterButton : styles.inactiveFilterButton ]} onPress={() => setSelectedPurpose('Venta')} >
                        <Text style={[selectedPurpose === 'Venta' ? styles.activeFilterText : styles.inactiveFilterText]}>Venta</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                        <TouchableOpacity style={[ styles.checkbox, selectedType === 'Casa' ? styles.activeFilterButton : styles.inactiveFilterButton ]} onPress={() => setSelectedType('Casa')}>
                            <Text style={[selectedType === 'Casa' ? styles.activeFilterText : styles.inactiveFilterText]}>Casa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.checkbox, selectedType === 'Departamento'? styles.activeFilterButton : styles.inactiveFilterButton ]} onPress={() => setSelectedType('Departamento')}>
                            <Text style={[selectedType === 'Departamento' ? styles.activeFilterText : styles.inactiveFilterText]}>Departamento</Text>
                        </TouchableOpacity>
                </View>

                <View style={styles.rowT}>
                    <Text style={styles.label}>No. Exterior *</Text>
                    <Text style={styles.label}>No. Interior</Text>
                </View>

                <View style={styles.rowC}>
                    <TextInput style={[styles.input, styles.halfInput]} name={ext} onChangeText={setExt}  placeholder="Solo números" placeholderTextColor="#888"/>
                    <TextInput style={[styles.input, styles.halfInput]} name={inte} onChangeText={setInte}  placeholder="Solo números"  placeholderTextColor="#888"/>
                </View>

                <Text style={styles.label}>Precio *</Text>
                <TextInput style={styles.input} name={precio} onChangeText={setPrecio}  placeholder="Solo números" placeholderTextColor="#888" />
                
                <View style={[styles.rowT, styles.rowTsec]}>
                    <Text style={styles.label}>m² *</Text>
                    <Text style={styles.label}>Habitaciones *</Text>
                    <Text style={styles.label}>Baños *</Text>
                </View>

                <View style={styles.rowC}>
                        <TextInput style={[styles.input, styles.thirdInput]} name={metros} onChangeText={setMetros}  placeholder="Solo números"placeholderTextColor="#888" />
                        <TextInput style={[styles.input, styles.thirdInput]} name={hab} onChangeText={setHab}  placeholder="Solo números" placeholderTextColor="#888" />
                        <TextInput style={[styles.input, styles.thirdInput]} name={banos} onChangeText={setBanos}  placeholder="Solo números" placeholderTextColor="#888" />
                </View>

                <Text style={styles.label}>Descripción *</Text>
                <TextInput style={[styles.input, styles.multiline]} name={des} onChangeText={setDes}  placeholder="****" placeholderTextColor="#888" multiline={true}/>
            </View>

            <TouchableOpacity style={styles.boton} onPress={val}>
                    <Text style={styles.botonText}>REGISTRAR PROPIEDAD</Text>
            </TouchableOpacity>

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
                    <Ionicons name="person-circle-outline" size={28} color="#f0f4f3" />
                    <Text style={styles.navText}>Perfil</Text>
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
        alignItems: 'center',
    },
    formVender: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        width: '100%',
    },
    textF: {
        fontSize: 20,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#04916F',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#04916F',
    },
    input: {
        width: '100%',
        backgroundColor: '#f0f4f3',
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        fontSize: 16,
        color: '#333',
    },
    thirdInput:{
        width: '30%',
    },  
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 10,
    },
    rowC: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    rowT: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 5,
    },
    rowTsec: {
        width: '95%',
    },
    halfInput: {
        width: '48%',
    },
    checkbox: {
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
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
    multiline: {
        height: 100,
        textAlignVertical: 'top',
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
