import { useState,useEffect} from 'react';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import {fetchDataFromApi}  from "./utils/api";
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Details from './pagess/details/Details';
import Explore from './pagess/explore/Explore';
import Homee from './pagess/homee/Homee';
import NoPageFound from './pagess/404/NoPageFound';
import SearchResultt from './pagess/searchResultt/SearchResultt';


function App() { 
  const dispatch = useDispatch()
const {url} =useSelector((state) =>
  state.home);
//  console.log(url);


      useEffect(() =>{
        apiTesting();
      },[]);
         
  const apiTesting = () => {

    fetchDataFromApi("/movie/popular").then((res) =>
    {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };


  return 
    
      (<BrowserRouter>
      <Header/>
         <Routes>
          <Route path = "/" element={<Homee/>} />

          <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResultt />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<NoPageFound/>} />

         </Routes>
        <Footer/>
      </BrowserRouter>);
    
  
}

export default App
