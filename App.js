import {
    View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid
} from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



export class ImagePickerApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            cameraPhoto: null,
            galleryPhoto: null,

            options: {
                saveToPhotos: true,
                mediaType: 'photo',
            }
        }
    }

    openCamera = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera(this.options);
            this.cameraPhoto = result.assets[0].uri
        }
    };

    openGallery = async () => {
        const result = await launchImageLibrary(this.options);
        this.galleryPhoto = result.assets[0].uri
        console.log(this.galleryPhoto)
    };


    render() {
        return (
            <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: "center" }}>
                <TouchableOpacity style={styles.Button} onPress={this.openCamera}
                >
                    <Text>Open Camera</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Button} onPress={this.openGallery}
                >
                    <Text>Open Gallery</Text>
                </TouchableOpacity>

            </View>
        )
    }

}


const styles = StyleSheet.create({
    Button: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#dddddd',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: "pink"
    },


})
