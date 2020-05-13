import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchData=async(country)=>{
    let changeableUrl=url;
    if(country){
        changeableUrl=`${url}/countries/${country}`
    }
    try{

        const {data:{confirmed,recovered,deaths,lastUpdate}} =await axios.get(changeableUrl);
        const modifiedData={
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
return modifiedData;
    }
    catch(err){

    }
}
export const fetchDailyData=async()=>{
    try{

        const {data} =await axios.get(`${url}/daily`);
        const modifiedData=data.map((dailydata)=>({
            confirmed:dailydata.confirmed.total,
            
            deaths:dailydata.deaths.total,
date:dailydata.reportDate        }));
      

return modifiedData;
    }
    catch(err){

    }
}

export const countries=async ()=>{
    try{
const {data:{countries}}=await axios.get(`${url}/countries`);

// names of countries
return countries.map((country)=>country.name)
    }
    catch(er){

  
    }
}
export const getGeoInfo = async () => {
    
    try{
          let {data:{country_name}} = await axios.get('https://ipapi.co/json/')
          return country_name;
          
      
  }
  catch(er){}
  }