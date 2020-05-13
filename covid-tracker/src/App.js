import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Cards,CountryPicker,Chart} from './components';
import styles from './App.module.css';
import img from './assets/covid.png';
import axios from 'axios';

import { fetchData,getGeoInfo } from './api';


class App extends Component{
  state={
    data:{

    },
    country:''
  }
  fetch = async(country)=>{
     const fetchedData=await fetchData(country);
     this.setState({data:fetchedData,country:country});

  }

  

  async componentDidMount(){
    var res=await getGeoInfo();
    this.fetch(res);
 
    
   
  }
  render(){
    const {data,country}=this.state;
  return (
    <div className={styles.container}>
      <img src={img}></img>
     <Cards data={data}/>
        <CountryPicker defCountry={country}  pickCountry={this.fetch}/>
        <Chart data={data} country={country} />
    </div>
  );
  }
}

export default App;

