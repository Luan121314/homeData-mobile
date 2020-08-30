import moment from 'moment';
import 'moment-precise-range-plugin';


const serializeDate = (timestamp: string)=>{
    const date1 = moment();
    const date2 = moment(timestamp);
    const datePrecise = moment.preciseDiff(date1, date2)
    // const datePrecise = moment.duration(date1.diff(date2))

    // let currentTime = currentTimeFormat(rangeDatas[rangeDatas.length - 1], rangeDatas[0]);
    // let currentTimeResult = '';
    // if (currentTime.asSeconds() >= 59 && currentTime.asSeconds() <= 3599) {
    //   currentTimeResult = "Minutos - " + currentTime.asMinutes().toFixed(1) + " m";
    // } else if (currentTime.asSeconds() >= 3600 && currentTime.asSeconds() <= 86399) {
    //   currentTimeResult = "Horas - " + currentTime.asHours().toFixed(1) + " h";
    // } else if (currentTime.asSeconds() >= 86400 && currentTime.asSeconds() <= 604799) {
    //   currentTimeResult = "Dias - " + currentTime.asDays().toFixed(1) + " d";
    // } else if (currentTime.asSeconds() >= 604800 && currentTime.asSeconds() <= 2592000) {
    //   currentTimeResult = "Semanas - " + currentTime.asWeeks().toFixed(1) + " s";
    // }
    // console.log(datePrecise)
    return datePrecise
}

export default serializeDate