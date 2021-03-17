import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container } from "reactstrap";
const CollectionPhoto = ({ username }) => {
    //key จาก unspash
    const accessKey = "EruaGNRLyIbzUuvY4tAdsN8mCrH95kiwLtDQ0PsMm4o"
    //เรียก api ด้วย username 
    const apiUnsplash = "https://api.unsplash.com/users/" + username + "/photos?page=1&query=&per_page=15&client_id=" + accessKey;
    const [collection, setCollection] = useState([]);//setstate เก็บค่าไว้ที่ collection
    useEffect(() => {
        axios.get(apiUnsplash).then((response) => {
            setCollection(response.data); //ดึง collection มาใช้
        });
    }, [username])
    return (
        <Container>
             <div>
 <center>
          <div class="collection">  
    {collection.map((collection) => (//เอามาวนลูป

            <img src= {collection.urls.small} alt="" class="photo__file" /> 

    ))}
       </div> 
    
    </center>
    </div>
        </Container>
    );
}
export default CollectionPhoto;