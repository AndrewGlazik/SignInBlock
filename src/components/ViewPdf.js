import React from 'react';
import { View, Button, Text } from 'react-native';
import Pdf from 'react-native-pdf';
import { useDispatch, useSelector } from 'react-redux';
import { signFile } from './actions/actions';
// import ecc from 'eosjs-ecc';

export function ViewPdf({ route }) {
    const isSign = route.params.sign;
    const fileId = route.params.id;
    const dispatch = useDispatch();
    const privateKey = useSelector(store => store.keys.private);
    const fileData = useSelector(store =>
        store.fileList.find(item => item.id === fileId),
    );
    const source = {
        uri: 'data:application/pdf;base64,' + fileData.file,
    };

    function sign() {
        dispatch(signFile(fileId, 'testSignValue'));

        // let documentHash = ecc.sha256(fileData);
        // let sign = ecc.signHash(documentHash, privateKey);
        // alert('Подпись');
    }

    console.log(fileData);
    return (
        <View style={styles.container}>
            <Pdf
                source={source}
                // onLoadComplete={(numberOfPages, filePath) => {
                //     console.log(`number of pages: ${numberOfPages}`);
                // }}
                // onPageChanged={(page, numberOfPages) => {
                //     console.log(`current page: ${page}`);
                // }}
                // onError={error => {
                //     console.log(error);
                // }}
                // onPressLink={uri => {
                //     console.log(`Link presse: ${uri}`);
                // }}
                style={styles.pdf}
            />
            <View style={styles.ViewButton}>
                {isSign ? (
                    <Text>Подписано</Text>
                ) : (
                    <Button title={'Подписать'} onPress={sign} />
                )}
            </View>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5,
    },
    pdf: {
        flex: 1,
        width: 1000,
        height: 1000,
    },
    ViewButton: {
        margin: 5,
    },
};
