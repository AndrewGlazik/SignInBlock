import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import Registration from './Registration';
import CryptoJS from 'react-native-crypto-js';
import { loginUser, setKeys } from './actions/actions';
import { useDispatch } from 'react-redux';
// import ecc from 'eosjs-ecc';

const SignIn = () => {
    const dispatch = useDispatch();
    const [loginData, setLoginData] = useState({ login: '', password: '' });
    const [registrationVisible, setRegistrationVisible] = useState(false);
    function signIn() {
        // fetch('http://10.0.2.2:8000/users/', {
        //     method: 'POST',
        //     body: JSON.stringify(loginData),
        // })
        //     .then(r => alert(r))
        //     .catch(r => alert(r));
        // let temp = CryptoJS.MD5(loginData.password);
        // alert(temp);
        let keys = {
            privateKey: '',
            publicKey: '',
        };
        // ecc.randomKey().then(privKey => {
        //     keys.privateKey = privKey;
        //     keys.publicKey = ecc.privateToPublic(privKey);
        // });
        dispatch(setKeys(keys));
        dispatch(loginUser('Андрей', 'Глазунов', loginData.login));
    }
    function registration() {
        setRegistrationVisible(true);
    }

    return (
        <>
            <View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Логин"
                        onChangeText={text =>
                            setLoginData({ ...loginData, login: text })
                        }
                        value={loginData.login}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Пароль"
                        onChangeText={text =>
                            setLoginData({ ...loginData, password: text })
                        }
                        value={loginData.password}
                    />
                </View>
                <View style={styles.button}>
                    <Button title="Войти" onPress={signIn} />
                </View>
                <View style={styles.button}>
                    <Button title="Регистрация" onPress={registration} />
                </View>
            </View>
            <Registration
                modalVisible={registrationVisible}
                setModalVisible={setRegistrationVisible}
            />
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
};

export default SignIn;
