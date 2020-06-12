import React from 'react';
import SignIn from '../components/SignIn';
import MainContent from '../components/MainContent';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const MainPage = ({ navigation }) => {
    const user = useSelector(store => store.user);

    function giveMainContent() {
        navigation.setOptions({ title: 'Список доступных документов' });
        return <MainContent navigation={navigation} />;
    }

    function giveSignIn() {
        navigation.setOptions({ title: 'Страница входа' });
        return <SignIn />;
    }

    return user.login ? giveMainContent() : giveSignIn();
};
//     return (
//         <>
//             <View>
//                 <Text>Welcome to watch main content</Text>
//             </View>
//         </>
//     );
// };

export default MainPage;
