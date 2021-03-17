import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Row,Container } from 'reactstrap';

const UserProfile = ({ username }) => {
    //key จาก unsplash
    const accessKey = "EruaGNRLyIbzUuvY4tAdsN8mCrH95kiwLtDQ0PsMm4o"
    //ดึง api จาก Username  
    const apiUnsplash = "https://api.unsplash.com/search/users?page=1&query=" + username + "&per_page=1&client_id=" + accessKey;

    const [profile, setprofile] = useState([]);//setstate เเละเก็บค่าไว้ที่ profile
    useEffect(() => {
        axios.get(apiUnsplash).then((response) => { //ดึงค่าจาก const unsplash ข้างบน
            console.log(response);
            setprofile(response.data.results); //เอา setstate มาใช้
        });
    }, [username])
    return (
        
            <form>
                <div class="profile" >
                    {profile.map(profile =>// map วนลูปข้อมูลที่จะดึงมาใช้
                    <center>
                    <Container>
                    <Row>
                      <img class="photo__avatar" src={profile.profile_image.large}/> 
                      <img class="photo__avatar"  src= {profile.profile_image.large} alt="" class="photo__file" />
                      <h2 class="h3">Name : {profile.first_name} {profile.last_name}</h2>
                      <h2 class="h3">Instagram : {profile.instagram_username} </h2>
                      <h2 class="h3">Twitter : {profile.twitter_username} </h2>
                      <h2 class="h3">links : <a href={profile.links.html}> My Profile in Unsplash </a></h2>
                      <h2 class="h3">Photo : {profile.total_photos} </h2>
              
                  
                    </Row>
                 
                    </Container>  
              
                          </center>
                    )}
                </div>

            </form>
      
    );
}
export default UserProfile;