import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image , Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'react-native-image-picker';


export default function Perfil({ navigation }) {
    const [selectedImage, setSelectedImage] = useState(null);


    const [isFavorite1, setIsFavorite1] = useState(false);
  const [isFavorite2, setIsFavorite2] = useState(false);
  const [isFavorite3, setIsFavorite3] = useState(false);
  const [isFavorite4, setIsFavorite4] = useState(false);

  // Función para cambiar el estado de favorito
  const toggleFavorite = (setFavorite) => {
    setFavorite((prevState) => !prevState);
  };

  const selectImage = async () => {
    try {
      // Llamada para abrir la galería
      const result = await ImagePicker.launchImageLibrary({
        mediaType: 'photo',
        quality: 1,  // Calidad de la imagen
        includeBase64: false,
      });

      if (result.didCancel) {
        // El usuario canceló la acción
        console.log('El usuario canceló la selección de imagen');
      } else if (result.errorCode) {
        // Error al seleccionar imagen
        console.log('Error al seleccionar imagen:', result.errorMessage);
        Alert.alert('Error', 'Hubo un error al seleccionar la imagen');
      } else {
        // Si la selección es exitosa
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Error en la selección de imagen:', error);
      Alert.alert('Error', 'Hubo un error al intentar seleccionar la imagen');
    }
  };


  const pickImage = async () => {
    // Pedir permisos para acceder a la galería
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Se necesita permiso', 'Lo sentimos, necesitamos permiso para acceder a la galería.');
      return;
    }

    // Seleccionar una imagen
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setImage(pickerResult.assets[0].uri);
    }
  };

    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>PERFIL</Text>
                <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('sesion')}>
                    <Ionicons name="person-outline" size={28} color="#f0f4f3" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.PerfilCont}>
                <TouchableOpacity onPress={selectImage} style={styles.imagePicker}>
                    {/* Si se ha seleccionado una imagen, mostrarla; de lo contrario mostrar el ícono */}
                    {selectedImage ? (
                        <Image source={{ uri: selectedImage }} style={styles.profileImage} />
                    ) : (
                        <Ionicons name="person-circle-outline" size={250} color="#04916F" style={styles.iconStyle} />
                    )}
                </TouchableOpacity>


                <View style={styles.datos}>
                    <Text style={styles.textF}>Nombre de Usuario</Text>
                </View>

                

            


                
                    
                    
                        <View style={styles.tableContainer}>
                            {/* Encabezado de la tabla */}
                            <View style={styles.tableHeader}>

                                <Text style={[styles.tableCell, styles.headerCell]}>Propiedades favoritas</Text>
                                
                            </View>
                            {/* Filas de la tabla */}
                            <View style={styles.tableRow}>
                                <View style={styles.tableCellWithIcon}>
                                    <TouchableOpacity onPress={()=>toggleFavorite(setIsFavorite1)}>
                                        <Ionicons name={isFavorite1 ? "star-outline" : "star"} size={28} color="#04916F" />
                                    </TouchableOpacity>
                                    
                                    <Text style={styles.tableCell}>Casa en la playa</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <TouchableOpacity style={styles.detailsButton} onPress={() => alert('Detalles de Casa en la playa')}>
                                        <Text style={styles.detailsButtonText}>Detalles de la propiedad</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCellWithIcon}>
                                    <TouchableOpacity onPress={()=>toggleFavorite(setIsFavorite2)}>
                                        <Ionicons name={isFavorite2 ? "star-outline" : "star"} size={28} color="#04916F" />
                                    </TouchableOpacity>
                                    <Text style={styles.tableCell}>Casa moderna</Text>
                                </View>
                                
                                <View style={styles.tableCell}>
                                    <TouchableOpacity style={styles.detailsButton} onPress={() => alert('Detalles de Casa moderna')}>
                                        <Text style={styles.detailsButtonText}>Detalles de la propiedad</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCellWithIcon}>
                                    <TouchableOpacity onPress={()=>toggleFavorite(setIsFavorite3)}>
                                        <Ionicons name={isFavorite3 ? "star-outline" : "star"} size={28} color="#04916F" />
                                    </TouchableOpacity>
                                    <Text style={styles.tableCell}>Apartamento céntrico</Text>
                                </View>
                                
                                <View style={styles.tableCell}>
                                    <TouchableOpacity style={styles.detailsButton} onPress={() => alert('Detalles de Apartamento céntrico')}>
                                        <Text style={styles.detailsButtonText}>Detalles de la propiedad</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCellWithIcon}>
                                    <TouchableOpacity onPress={()=>toggleFavorite(setIsFavorite4)}>
                                        <Ionicons name={isFavorite4 ? "star-outline" : "star"} size={28} color="#04916F" />
                                    </TouchableOpacity>
                                    <Text style={styles.tableCell}>Villa en las montañas</Text>
                                </View>
                                
                                <View style={styles.tableCell}>
                                    <TouchableOpacity style={styles.detailsButton} onPress={() => alert('Detalles de Villa en las montañas')}>
                                        <Text style={styles.detailsButtonText}>Detalles de la propiedad</Text>
                                        
                                        
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.logoutButton} onPress={() => alert('Cerrar sesión')}>
                                <Text style={styles.buttonText}>Cerrar sesión</Text>
                                <Ionicons name="log-in-outline" size={25} color="#ffffff" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteButton} onPress={() => alert('Eliminar cuenta')}>
                                <Text style={styles.buttonText}>Eliminar cuenta</Text>
                                <Ionicons name="trash-outline" size={23} color="#ffffff" />
                                
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
                    {/* Si hay una imagen seleccionada, mostrarla; de lo contrario, mostrar el ícono */}
                    {selectedImage ? (
                        <Image source={{ uri: selectedImage }} style={styles.profileImage2} />
                    ) : (
                        <Ionicons name="person-circle-outline" size={28} color="#f0f4f3" />
                    )}
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
   
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#04916F',
        paddingVertical: 10,
        borderRadius: 5,
    },
    headerCell: {
        color: '#fff',
        fontWeight: 'bold',
    },
    favoritesTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#04916F',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3',
        paddingBottom: 5,
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
    textF: {
        fontSize: 20,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#04916F',
    },
    
    profileButton: {
        backgroundColor: 'transparent',
        padding: 5,
        marginTop: 15,
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
    text: {
        fontFamily: 'Montserrat',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f0f4f3',
        marginTop: 15,
    },

    PerfilCont: {
        padding: 20,
        alignItems: 'center',
    },
    imagePicker: {
        alignItems: 'center',
        marginTop: 20,
    },
    profileImage: {
        width: 210,
        height: 210,
        borderRadius: 150,
        borderWidth: 2,
        borderColor: '#04916F',
    },
    profileImage2: {
        width: 28,
        height: 28,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#04916F',
    },

    tableContainer: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 10,
        overflow: 'hidden',
        width: '100%',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingVertical: 10,
        paddingHorizontal: 5,
        width: '100%',
        alignItems: 'center',
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        color: '#333',
        paddingHorizontal: 5,
        


    },
    tableCellWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    detailsButton: {
        backgroundColor: '#04916F',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    detailsButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row', // Alinea los botones horizontalmente
        justifyContent: 'space-between', // Distribuye los botones de manera uniforme
        marginTop: 30,
        width: '100%',
        alignSelf: 'center',
    },
    logoutButton: {
        backgroundColor: '#D84B16',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: '49%', // Tamaño ajustado para que ambos botones encajen
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: '#D84B16',
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 5,
        width: '50%', // Tamaño ajustado para que ambos botones encajen
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14.3,
        fontWeight: 'bold',
    },
});
