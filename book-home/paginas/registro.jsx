import firebase from 'firebase';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export default function Registro({ navigation }) {

    const [state, setState] = useState({
        name: '',
        email: '',
        contra: '',
        concontra:''
    });

    const AddNewUser=()=>{
        if (!state.name || !state.email || !state.contra || !state.concontra) {
            Alert.alert('AVISO', 'Todos los campos son obligatorios.');
            return;
        }else if(state.contra!=state.concontra){
            Alert.alert('AVISO', 'Las contraseñas no coinciden');
            return;
        }
        else{
            
            firebase.db.collection('users').add({
                name:state.name,
                email:state.email,
                contra:state.contra
            })
            Alert.alert('todo good')
        }
        

    }


    const handleChangeText=(name,value)=>{
        setState({...state, [name]:value})
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.content}>
                <Text style={styles.text}>Registrarse</Text>

                <View style={styles.socialcontainer}>
                    <TouchableOpacity style={styles.socialbutton}><FontAwesome name="google" size={30} color="#000" /></TouchableOpacity>
                    <TouchableOpacity style={styles.socialbutton}><FontAwesome name="facebook" size={30} color="#000" /></TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={20} color="#000" style={styles.icon} />
                <TextInput style={styles.input} onChangeText={(value)=>handleChangeText('name', value)}  placeholder="Nombre" placeholderTextColor="#888"/>
                </View>         

                <View style={styles.inputContainer}>
                    <Ionicons name="mail-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput style={styles.input} onChangeText={(value)=>handleChangeText('email', value)} placeholder="Email" placeholderTextColor="#888"/>
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput style={styles.input} onChangeText={(value)=>handleChangeText('contra', value)} placeholder="Contraseña" secureTextEntry={true} placeholderTextColor="#888"/>
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput style={styles.input} onChangeText={(value)=>handleChangeText('concontra', value)} placeholder="Confirmar contraseña" secureTextEntry={true} placeholderTextColor="#888"/>
                </View>

                <TouchableOpacity style={styles.boton} onPress={()=>AddNewUser()}>
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
