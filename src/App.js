import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './pages/MainPage';
import { Provider } from 'react-redux';
import ViewDocumentPage from './pages/ViewDocumentPage';
import { store, persistor } from './config/store';
import { PersistGate } from 'redux-persist/integration/react';
var Buffer = require('buffer/').Buffer;

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Main">
                        <Stack.Screen
                            name="MainPage"
                            component={MainPage}
                            options={{ title: 'Страница входа' }}
                        />
                        <Stack.Screen
                            name="ViewDocumentPage"
                            component={ViewDocumentPage}
                            options={({ route }) => ({
                                title: route.params.pageTitle,
                            })}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default App;
