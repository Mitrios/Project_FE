import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const PLACES=[
    {name: "Киев" , zip:"94303"},
	{name: "Харьков" , zip:"94088"},
	{name: "Львов" , zip:"95062"},
	{name: "Чернигов" , zip:"96803"}
];

class WeatherDisplay extends Component{
	constructor(){
		super();
		this.state={
			 weatherData: null
			 
		  };
		}

	componentDidMount(){
			const zip = this.props.zip;
			const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
	  fetch(URL).then(res => res.json()).then( json=>{
		  this.setState({ weatherData: json});
			});
		}
	render(){
		const weatherData = this.state.weatherData;
		if(!weatherData) return <div>Loading</div>;
			
		const weather = weatherData.weather[0];
		const iconUrl = ""
		return(
		<div>
				<h1>
						{weather.main} in {weatherData.name}
						
				</h1>
				<p>Current : {weatherData.main.temp}</p>
				<p>High : {weatherData.main.temp_max}</p>
				<p>Low : {weatherData.main.temp_min}</p>
				<p>Wind Speed : {weatherData.wind.speed} mi/hr</p>
		</div>
		);
	}
	}
	
class App extends Component {
	
constructor(){
	super();
	this.state ={
			activePlace:0,
		};
	}
	
  render() {
	  const activePlace = this.state.activePlace;
    return (
      <div class="App">
			{PLACES.map((plase, index)=>(
		<button 
				key={index}
				onClick={()  =>{
					this.setState({activePlace: index});
				}}
				>
				{plase.name}
			</button>
			))}
			
			<WeatherDisplay 
				key={activePlace}
				zip={PLACES[activePlace].zip}
			/>
			
	  </div>
    );
  }
}


export default App;
