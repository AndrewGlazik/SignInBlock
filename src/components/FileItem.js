import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import fileImage from './../images/fileImage.png';
import { useDispatch } from 'react-redux';
import { deleteFile } from './actions/actions';

const FileItem = ({ title, sign, id, navigation }) => {
    const dispatch = useDispatch();
    function viewFile() {
        navigation.navigate('ViewDocumentPage', {
            id: id,
            pageTitle: title,
            sign: sign,
        });
    }

    function deletePdfFile() {
        dispatch(deleteFile(id));
    }

    return (
        <>
            <View style={styles.Default}>
                <View style={styles.ViewItem}>
                    <Image style={styles.Image} source={fileImage} />
                    <View style={styles.ViewDescription}>
                        <Text style={styles.TextTitle}>{title}</Text>
                        {sign ? (
                            <Text style={styles.TextSign}>Подписано</Text>
                        ) : (
                            <Text style={styles.TextNotSign}>Неподписано</Text>
                        )}
                        <View style={styles.ViewButton}>
                            <Button
                                title={'Удалить'}
                                color={'#FF523E'}
                                onPress={deletePdfFile}
                            />
                            <View style={styles.Button}>
                                <Button title={'Просмотр'} onPress={viewFile} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = {
    Default: {
        margin: 10,
    },
    ViewDescription: {
        marginLeft: 10,
    },
    ViewItem: {
        flexDirection: 'row',
        // margin: 10,
    },
    TextSign: {
        color: 'green',
    },
    TextNotSign: {
        color: 'red',
    },
    TextTitle: {
        fontWeight: 'bold',
        // flex: 0.3,
    },
    Image: {
        // flex: 0.2,
        width: 100,
        height: 100,
    },
    ViewButton: {
        flexDirection: 'row',
        margin: 5,
    },
    Button: {
        marginLeft: 10,
    },
};
export default FileItem;
