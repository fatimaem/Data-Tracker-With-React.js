import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from "./CountryPicker.module.css";
import {countries} from '../../api'
const CountryPicker=({pickCountry,defCountry})=>{
    const [fetchedCounts,setFetchedCounts]=useState([]);
    useEffect(()=>{
        const fetchCount=async()=>{
setFetchedCounts(await countries());
        }
        fetchCount();
        //going to change when setcountries changed
    },[setFetchedCounts])
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>pickCountry(e.target.value)}>
                
               
                <option  value=''>Global</option>
                {fetchedCounts.map((country,i)=>
                defCountry==country ?
                <option selected key={i} value={country}>{country}</option>
                :<option  key={i} value={country}>{country}</option>)}
                
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;