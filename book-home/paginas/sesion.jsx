import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export default function Sesion({ navigation }) {
    const [email, setEmail] = useState('');
    const [con, setCon] = useState('');

    // Función para manejar el inicio de sesión
    const iniciarSesion = async () => {
        const invalidos = /[<>{}$#!%=~]/;

        if (!email || !con) {
            Alert.alert('AVISO', 'Todos los campos son obligatorios.');
            return;
        }

        if (invalidos.test(email) || invalidos.test(con)) {
            Alert.alert('PRECAUCIÓN', 'Ingreso de caracteres no válidos');
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, con);
            Alert.alert('Bienvenido', `Has iniciado sesión como ${userCredential.user.email}`);
            navigation.navigate('principal'); // Redirige al usuario a la página principal
        } catch (error) {
            console.error(error);
            if (error.code === 'auth/user-not-found') {
                Alert.alert(
                    'Error',
                    'El correo no existe. ¿Deseas registrarte?',
                    [
                        { text: 'Cancelar', style: 'cancel' },
                        { text: 'Registrarse', onPress: () => navigation.navigate('registro') }
                    ]
                );
            } else if (error.code === 'auth/wrong-password') {
                Alert.alert('Error', 'Contraseña incorrecta.');
            } else {
                Alert.alert('Error', 'No se pudo iniciar sesión. Inténtalo de nuevo más tarde.');
            }
        }
    };

    // Función para manejar recuperación de contraseña
    const recuperarContrasena = async () => {
        if (!email) {
            Alert.alert('AVISO', 'Por favor, ingresa tu correo electrónico para recuperar la contraseña.');
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            Alert.alert(
                'Éxito',
                'Se ha enviado un correo para restablecer tu contraseña. Revisa tu bandeja de entrada.'
            );
        } catch (error) {
            console.error(error);
            if (error.code === 'auth/user-not-found') {
                Alert.alert('Error', 'El correo no está registrado.');
            } else {
                Alert.alert('Error', 'No se pudo enviar el correo de recuperación. Inténtalo más tarde.');
            }
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header} />
                <View style={styles.content}>
                    <Text style={styles.text}>Inicio de Sesión</Text>

                    <View style={styles.socialcontainer}>
                        <TouchableOpacity style={styles.socialbutton}>
                            <FontAwesome name="google" size={30} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialbutton}>
                            <FontAwesome name="facebook" size={30} color="#000" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="mail-outline" size={20} color="#000" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Email"
                            placeholderTextColor="#888"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={20} color="#000" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            value={con}
                            onChangeText={setCon}
                            placeholder="Contraseña"
                            secureTextEntry={true}
                            placeholderTextColor="#888"
                        />
                    </View>

                    <TouchableOpacity onPress={recuperarContrasena}>
                        <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boton} onPress={iniciarSesion}>
                        <Text style={styles.botonText}>INICIAR SESIÓN</Text>
                    </TouchableOpacity>

                    <Text style={styles.textn}>¿Aún no tienes cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('registro')}>
                        <Text style={styles.linkText}>Registrarse</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('principal')}>
                        <Text style={styles.linkTextP}>Página Principal</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f0f4f3',
    },
    content: {
        marginTop: 200,
        alignItems: 'center',
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
        marginTop: 20,
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
        marginTop: 60,
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
        marginTop: 60,
    },
    socialcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        paddingRight: 65,
        width: '100%',
        marginBottom: 40,
    },
    socialbutton: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#f0f4f3',
        borderRadius: 30,
        backgroundColor: '#f0f4f3',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        marginHorizontal: 10,
    },
});
