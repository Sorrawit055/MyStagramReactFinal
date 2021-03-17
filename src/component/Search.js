import React, { useState } from "react";
import { Container } from "reactstrap";
import Unsplash, { toJson } from "unsplash-js";
import {Row} from 'reactstrap';
//เรียกใช้ unsplash
const unsplash = new Unsplash({
    accessKey: "EruaGNRLyIbzUuvY4tAdsN8mCrH95kiwLtDQ0PsMm4o",
});

const Search = () => {
    const [query, setQuery] = useState(""); 
    const [photo, setPhoto] = useState([]);

    const searchPhotos = async (e) => {
        e.preventDefault(); //ใช้หยุดการเกิดเหตุการณ์ใดๆขึ้น ที่เป็นเหตุการณ์ของ browser 
        //คือเหตุการณ์ที่ไม่ได้เกิดขึ้นจากการที่เรากำหนดให้มัน
        //เช่น จะไม่ link ไปยังหน้าถัดไปของการ click tag a
        unsplash.search.photos(query).then(toJson).then((json) => {setPhoto(json.results);
            });

    };

    return ( //event เมื่อกด ค้นหาจะทำการดึงข้อมูจจาก unsplash ที่ serach
        <>            
            <form className="form" onSubmit={searchPhotos}> 
                {" "}
                <label className="label" htmlFor="query">
                    {" "}
 
        </label>
                <input type="text"name="query"className="input"placeholder={``}value={query}onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="button">
                    ค้นหา
        </button>
            </form>
            <Container>
                <from >
                    <div class="row">
                        <div class="col">
                            {photo.map((photo) => (
                                <center>
                                <div>
                                    <Row>
                                    <section class="photo">
                                <header class="photo__header">
                               
                                  <div class="photo__header-column">
                                   <a href = "" >
                                    <img class="photo__avatar" src={photo.user.profile_image.small}/> 
                                    </a>
                                  </div>
                                  <div class="photo__header-column">
                                    <span class = "photo__username" >
                                     <a href ={"/ProfileUser/" + photo.user.username} >{photo.user.first_name}{photo.user.last_name} </a></span>
                                  </div>
                                 
                                </header>
                                <div class="photo__file-container">
                                  <img src={photo.urls.regular} alt="" class="photo__file" />
                                </div>
                                <div class="photo__info">
                                 
                                  <span class="photo__likes">likes : {photo.likes}</span>
                                  <div class="photo__comments">
                                    <div class="photo__comment">
                                      <span class="photo__comment-author"><a href = {"/informationphoto/" + photo.id} >{photo.user.first_name}{photo.user.last_name}</a>:{photo.alt_description}</span>
                                    </div>
                                  </div>
                                </div>
                              </section>
                                  </Row>
                              
                                      </div>
                                      </center>
                            ))}{" "}

                        </div>
                    </div>

                </from>
            </Container>

        </>
    );
}
export default Search;