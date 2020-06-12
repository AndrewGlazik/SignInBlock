import React, { useState } from 'react';
import { View, TextInput, Button, Modal } from 'react-native';
import CryptoJS from 'react-native-crypto-js';
import { loginUser } from './actions/actions';

const Registration = props => {
    const [userData, setUserData] = useState({
        name: '',
        surname: '',
        login: '',
        password: '',
        email: '',
    });
    function registration() {
        let tempData = {
            ...userData,
            password: CryptoJS.MD5(userData.password).toString(),
        };
        fetch('http://10.0.2.2:8000/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(tempData),
        })
            .then(r => {
                alert('Пользователь успешно создан');
                setUserData({});
            })
            .catch(r => alert('Что-то пошло не так'));
        props.setModalVisible(false);
    }
    function cancel() {
        props.setModalVisible(false);
        setUserData({});
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}>
                <View style={styles.modalView}>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Имя"
                            onChangeText={text =>
                                setUserData({ ...userData, name: text })
                            }
                            value={userData.name}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Фамилия"
                            onChangeText={text =>
                                setUserData({ ...userData, surname: text })
                            }
                            value={userData.surname}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Логин"
                            onChangeText={text =>
                                setUserData({ ...userData, login: text })
                            }
                            value={userData.login}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Пароль"
                            onChangeText={text =>
                                setUserData({ ...userData, password: text })
                            }
                            value={userData.password}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="email"
                            onChangeText={text =>
                                setUserData({ ...userData, email: text })
                            }
                            value={userData.email}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Зарегистрироваться"
                            onPress={registration}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title="Отмена" onPress={cancel} />
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

export default Registration;
