import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#E5E5E5",
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 3,
        height: 200,
        width: 300
        },
    title:{
        backgroundColor: "#fffc",
        height: 50,
        alignItems: "center",
        justifyContent: "center"

       },
    titleText:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        lineHeight: 30,
        fontWeight: '700',
    },
    content:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF"

    },
    contentSensor:{
      backgroundColor:"#04D361",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      width: 190,
      marginBottom: 6,
      borderRadius:8

    },
    textPrimary:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '600',
    },
    textSecondary:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '700',
    },
    lastUpdated:{
        backgroundColor: "#fffc",
    },
    lastUpdatedText:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        lineHeight: 20,
        fontWeight: '600',
        textAlign: "right",
        marginRight: 8,
        color: '#6A6180'
        
    }
})

export default styles;