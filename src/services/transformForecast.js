import moment from 'moment';
import transformWeather from './transformWeather';

// const transformForecast = data => (
//    data.list.filter(item => (
//       moment.unix(item.dt).hour() === 6 ||
//       moment.unix(item.dt).hour() === 12 ||
//       moment.unix(item.dt).hour() === 18
//    )).map(item => (
//       {
//          weekDay: moment.unix(item.dt).format('ddd'),
//          //hour: '',
//          hour: moment.unix.apply(item.dt).hour(),
//          data: transformWeather(item)
//       }
//    ))
// );

const transformForecast = data => (
   data.list.filter(item => (
      moment.unix(item.dt).hour() === 6 ||
      moment.unix(item.dt).hour() === 12 ||
      moment.unix(item.dt).hour() === 18
   )).map(item => (
      {
         weekDay: item.dt,
         hour: item.dt.hour(),
         data: transformWeather(item)
      }
   ))
);


export default transformForecast;