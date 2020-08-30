import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import BoxModel, { propsInterface } from '../../components/boxModel';
import styles from './style';
import api from '../../services/api';
import serializeDate from '../../utils/serializeDate'
import Spinner from 'react-native-loading-spinner-overlay';


interface sensorInterface {
    name: string,
    humidity: number,
    temperature: number,
    timestamp: string,
    chipId: number
}


const Painel = () => {
    const [dataSensor, setDataSensor] = useState<sensorInterface[]>([]);
    const [spinnerVisible, setSpinnerVisible] = useState(true);
    setInterval(() => {
        api.get('/sensor/data').then(responseAPI => {
            // console.log(responseAPI.data)
            const { data } = responseAPI;
            setDataSensor(data)
            setSpinnerVisible(false);
        })
    }
        , 20000)
    

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.headerText} >HOME</Text>
            </View>
            <Spinner 
                visible={spinnerVisible}
                textContent= 'Loading data...'
                textStyle={styles.textSpinner}
             />
            <ScrollView>
                {dataSensor.map(sensor => {

                    return <BoxModel key={sensor.chipId} title={sensor.name}
                        humidity={sensor.humidity}
                        temperature={sensor.temperature}
                        lastUpdated={serializeDate(sensor.timestamp)|| '*_*'} />
                })}
            </ScrollView>
        </View>
    )
}

export default Painel