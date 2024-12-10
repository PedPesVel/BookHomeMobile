import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, TextInput, Alert, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Registro({ navigation }) {
    const [state, setState] = useState({
        name: '',
        email: '',
        contra: '',
        concontra: '',
        num: '',
    });

    // Función para manejar cambios en los inputs
    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value });
    };

    // Función para registrar un nuevo usuario
    const AddNewUser = async () => {
        const { name, email, contra, concontra, num } = state;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        const phoneRegex = /^\d{10}$/; 

        // Validaciones
        if (!name || !email || !contra || !concontra || !num) {
            Alert.alert('Error', 'Por favor completa todos los campos');
            return;
        }

        if (!phoneRegex.test(num) || num < 0) {
            Alert.alert('Error', 'Ingresa un número de teléfono válido');
            return;
        }

        if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Por favor ingresa un email válido');
            return;
        }

        if (contra.length < 6) {
            Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
            return;
        }

        if (contra !== concontra) {
            Alert.alert('Error', 'Las contraseñas no coinciden');
            return;
        }

        // Registro con Firebase
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, contra);
            Alert.alert('Registro exitoso', `Bienvenido, ${userCredential.user.email}`);
            navigation.navigate('sesion');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert('Error', 'Este correo ya está registrado. Por favor usa otro.');
            } else {
                console.error(error);
                Alert.alert('Error de registro', error.message);
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.content}>
                <Text style={styles.text}>Registrarse</Text>

                <View style={styles.socialcontainer}>
                    <TouchableOpacity style={styles.socialbutton}>
                        <FontAwesome name="google" size={30} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialbutton}>
                        <FontAwesome name="facebook" size={30} color="#000" />
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="person-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput style={styles.input} onChangeText={(value) => handleChangeText('name', value)} placeholder="Nombre" placeholderTextColor="#888" />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="call-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput style={styles.input} onChangeText={(value) => handleChangeText('num', value)} placeholder="Número de Teléfono" keyboardType="numeric" placeholderTextColor="#888" />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="mail-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput style={styles.input} onChangeText={(value) => handleChangeText('email', value)} placeholder="Email" placeholderTextColor="#888" />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput style={styles.input} onChangeText={(value) => handleChangeText('contra', value)} placeholder="Contraseña" secureTextEntry={true} placeholderTextColor="#888" />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput style={styles.input} onChangeText={(value) => handleChangeText('concontra', value)} placeholder="Confirmar contraseña" secureTextEntry={true} placeholderTextColor="#888" />
                </View>

                <TouchableOpacity style={styles.boton} onPress={AddNewUser}>
                    <Text style={styles.botonText}>REGISTRARSE</Text>
                </TouchableOpacity>

                <Text style={styles.textn}>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('sesion')}>
                    <Text style={styles.linkText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('principal')}>
                    <Text style={styles.linkTextP}>Página Principal</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f0f4f3',
    },
    content: {
        marginTop: 150,
        alignItems: 'center',
        backgroundColor: '#f0f4f3',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#04916F',
        alignItems: 'center',
        paddingVertical: 20,
        zIndex: 1,
    },
    text: {
        fontFamily: 'Montserrat',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textn: {
        fontFamily: 'Montserrat',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: 280,
        height: 50,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
    boton: {
        backgroundColor: '#039070',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 40,
    },
    botonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    linkText: {
        color: '#039070',
        textDecorationLine: 'none',
        marginTop: 0,
    },
    linkTextP: {
        color: '#039070',
        textDecorationLine: 'none',
        marginTop: 50,
    },
    socialcontainer: {
        flexDirection: 'row',
        justifyContent: 'center', // Asegura que los botones estén centrados
        alignItems: 'center',
        marginVertical: 30, // Espaciado vertical
        width: '100%', // Ocupará todo el ancho disponible
        paddingRight: 60,
        marginBottom: 40,
    },
    socialbutton: {
        width: 60, // Botones ligeramente más grandes
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#f0f4f3', // Color del borde más llamativo
        borderRadius: 30, // Forma circular
        backgroundColor: '#f0f4f3',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, // Sombra para Android
        marginHorizontal: 15,
    },
});
