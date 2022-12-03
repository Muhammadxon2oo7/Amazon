import React from 'react';
import collectionData from '../../dummy-data-collection.json';
import collectionDataru from '../../dummy-data-collectionru.json';
import collectionDatauz from '../../dummy-data-collectionuz.json';
import ProductCard from '../product-card/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import c from "./Main.module.css";

const Main = () => {
  return (
    <div className={c.main}>
      {
      localStorage.getItem("lang") ==="en"?
        collectionData.map(collectionItem =>
          <ProductCard key={uuidv4()} linkLabel={collectionItem.linkLabel} linkURL={collectionItem.linkURL} image={collectionItem.image} title={collectionItem.title}/>  
        )
      :
      localStorage.getItem("lang") ==="ru"?
      collectionDataru.map(collectionItem =>
          <ProductCard key={uuidv4()} linkLabel={collectionItem.linkLabel} linkURL={collectionItem.linkURL} image={collectionItem.image} title={collectionItem.title}/>  
        )
      :
      localStorage.getItem("lang") ==="uz"?
      collectionDatauz.map(collectionItem =>
          <ProductCard key={uuidv4()} linkLabel={collectionItem.linkLabel} linkURL={collectionItem.linkURL} image={collectionItem.image} title={collectionItem.title}/>  
        ):console.log("er")

      }
    </div>
  )
}

export default Main