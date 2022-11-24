import React from 'react'
import ImageSlider from "./components/ImageSlider";
import { Products } from './components/products';
 import contents from './content';
 import SearchBar from "./components/SearchBar";
import BookData from "./Data.json";
import Footer from './components/Footer';



 export default function App() {
     return(
            <div className='App'>
                <h1 className="slider_title">React Image Carousel</h1>
                
      <ImageSlider />
      <Footer />
      
             <SearchBar placeholder="Enter a Book Name..." data={BookData} />
                {contents.map(contents => (
                    <Products 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        price={contents.price}
                        totalSales={contents.totalSales}
                        timeLeft={contents.timeLeft}
                        rating={contents.rating}
                        
                    />
                    
                 
                    
                ))}//
                
                 
    
            </div>
     )
 }