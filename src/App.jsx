import { useState,useEffect} from 'react';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import {fetchDataFromApi}  from "./utils/api";
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration,getGenres } from './store/homeSlice';

import Footer from './componentss/footer/Footer';
import Details from './pagess/details/Details';
import Explore from './pagess/explore/Explore';
import Homee from './pagess/homee/Homee';
import NoPageFound from './pagess/404/NoPageFound';
import SearchResultt from './pagess/searchResultt/SearchResultt';
import Header from './componentss/header/Header';



function App() { 
  const dispatch = useDispatch()
const {url} =useSelector((state) =>
  state.home);
//  console.log(url);


      useEffect(() =>{
        fetchApiConfig();
        genresCall();
      },[]);


      const genresCall = async () => {
        let promises = [];
        let endPoints = ["tv", "movie"];
        let allGenres = {};

        endPoints.forEach((url) => {
            promises.push(fetchDataFromApi(`/genre/${url}/list`));
        });

        const data = await Promise.all(promises);
        console.log(data);
        data.map(({ genres }) => {
            return genres.map((item) => (allGenres[item.id] = item));
        });

        dispatch(getGenres(allGenres));
    };
         
      const fetchApiConfig = () => {
        fetchDataFromApi("/configuration").then((res) => {
            console.log(res);

            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            };

            dispatch(getApiConfiguration(url));
        });
    };



  return (
      <BrowserRouter>
      <Header/>
         <Routes>        
                <Route path = "/" element={<Homee />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResultt />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<NoPageFound />} />

         </Routes>
        <Footer/>
      </BrowserRouter>);
    
  
}

export default App;
