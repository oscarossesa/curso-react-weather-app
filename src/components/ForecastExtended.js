import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import ForecastItem from './ForecastItem';

const days = [
   'Lunes',
   'Martes',
   'Miércoles',
   'Jueves',
   'Viernes',
]

const data2 = {
   temperature: 10,
   humidity: 19,
   weatherState: 'normal',
   wind: 'normal',
}


export const api_key = 'cc6aae116a67355c8d5c5772051cb35d';
export const url_base_weather = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {

   constructor() {
      super();

      this.state = { forecastData: null };
   }

   componentDidMount() {
      
   }

   renderForcastItemDays() {
      return "Render ítems";
      //return days.map( day => (<ForecastItem weekDay={day} data={data}></ForecastItem>));
   }

   renderProgress = () => {
      return <h3>Cargando pronostico extendido...</h3>;
   }

   render() {
      const { city } = this.props;
      const { forecastData } = this.state;

      return (
         <div>
            <h2>Pronostico extendido para {city}</h2>
            {
               forecastData ?
               this.renderForcastItemDays() :
               this.renderProgress()
            }
         </div>
      )
   }
}

ForecastExtended.propTypes = {
   city: PropTypes.string.isRequired,
}

export default ForecastExtended;