import React, { useState } from 'react';
import { View, Button, Modal, TextInput } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { useDispatch } from 'react-redux';
import { addNewFile } from './actions/actions';
import CryptoJS from 'react-native-crypto-js';

const InputNewFile = props => {
    // const [basePdf, setBasePdf] = useState();
    const [fileAddData, setFileAddData] = useState({ title: '', url: '' });
    const [modalView, setModalView] = useState(false);
    const dispatch = useDispatch();

    function download() {
        RNFetchBlob.fetch('GET', fileAddData.url).then(res => {
            let base64Str = res.base64();
            // console.log(base64Str);
            dispatch(
                addNewFile(
                    CryptoJS.MD5(base64Str).toString(),
                    fileAddData.title,
                    base64Str.toString(),
                ),
            );

            setModalView(false);
            // setBasePdf(base64Str.toString());
            // console.log(base64Str);
            // props.navigation.navigate('ViewDocumentPage', { data: base64Str });
        });
    }

    return (
        <>
            <View>
                <Button
                    style={styles.button}
                    title="Добавить файл"
                    onPress={() => {
                        setModalView(true);
                    }}
                />
            </View>

            <Modal animationType="slide" visible={modalView} transparent={true}>
                <View style={styles.modalView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Название"
                        onChangeText={text =>
                            setFileAddData({ ...fileAddData, title: text })
                        }
                        value={fileAddData.title}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Ссылка"
                        onChangeText={text =>
                            setFileAddData({ ...fileAddData, url: text })
                        }
                        value={fileAddData.url}
                    />
                    <View style={styles.button}>
                        <Button title="Скачать файл" onPress={download} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Отмена"
                            onPress={() => {
                                setModalView(false);
                            }}
                        />
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = {
    button: {
        margin: 5,
    },
    input: {
        margin: 5,
    },
    viewButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
};

export default InputNewFile;
