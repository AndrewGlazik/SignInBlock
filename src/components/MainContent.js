import React from 'react';
import { View, Text, VirtualizedList } from 'react-native';
import InputNewFile from './InputNewFile';
import FileItem from './FileItem';
import { useSelector } from 'react-redux';

// const DATA = [];

const MainContent = ({ navigation }) => {
    const fileArray = useSelector(store => store.fileList);

    const getItem = (data, index) => {
        let tempItem = data[index];
        return {
            key: tempItem.id,
            title: tempItem.title,
            sign: tempItem.sign !== '',
        };
    };

    const getItemCount = data => {
        return data.length;
    };

    return (
        <>
            <View style={styles.container}>
                {fileArray.length === 0 ? (
                    <View style={styles.textCenter}>
                        <Text>Список пока пуст. Добавьте новые файлы.</Text>
                    </View>
                ) : (
                    <View style={styles.container}>
                        <VirtualizedList
                            data={fileArray}
                            renderItem={({ item }) => (
                                <FileItem
                                    title={item.title}
                                    sign={item.sign}
                                    id={item.key}
                                    navigation={navigation}
                                />
                            )}
                            keyExtractor={item => item.key}
                            getItemCount={getItemCount}
                            getItem={getItem}
                        />
                    </View>
                )}
                <InputNewFile />
            </View>
        </>
    );
};

const styles = {
    container: {
        flex: 1,
    },
    button: {
        margin: 5,
    },
    input: {
        margin: 5,
    },
    textCenter: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default MainContent;
