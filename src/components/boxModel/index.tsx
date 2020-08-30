import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

 export interface propsInterface {
    title: string,
    humidity: number,
    temperature: number,
    lastUpdated: string
}

const BoxModel: FC<propsInterface> = ({ title, humidity, temperature, lastUpdated }) => {
    return (
        <View style={styles.container}>
            <View style={styles.title} >
                <Text style={styles.titleText} >{title}</Text>
            </View>
            <View style={styles.content} >
                <View style={styles.contentSensor} >
                    <Text style={styles.textPrimary} >Humidade:
                    <Text style={styles.textSecondary} > {humidity}%</Text>

                    </Text>
                </View>
                <View style={styles.contentSensor} >
                    <Text style={styles.textPrimary} >Temperatura:
                    <Text style={styles.textSecondary} > {temperature} º</Text>
                    </Text>

                </View>
            </View>
            <View style={styles.lastUpdated} >
                <Text style={styles.lastUpdatedText} >Ultima atualização {lastUpdated}</Text>
            </View>
        </View>
    )
}

export default BoxModel;