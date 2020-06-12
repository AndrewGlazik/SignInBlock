import React from 'react';
import { View, Text } from 'react-native';
import { ViewPdf } from '../components/ViewPdf';

const ViewDocumentPage = ({ route, navigation }) => {
    const isDocumentSigned = false;
    if (isDocumentSigned) {
        return (
            <>
                <View style={styles.textCenter}>
                    <Text>Welcome to signed document view</Text>
                </View>
            </>
        );
    } else {
        return (
            <>
                {/*<View style={styles.textCenter}>*/}
                {/*    <Text>Welcome to not signed document view</Text>*/}
                {/*</View>*/}
                <ViewPdf route={route} />
            </>
        );
    }
};

const styles = {
    button: {
        margin: 5,
    },
    input: {
        margin: 5,
    },
    textCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default ViewDocumentPage;
