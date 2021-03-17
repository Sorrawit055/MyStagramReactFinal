import React from "react";
import UserProfile from "../component/UserProfile";
import CollectionPhoto from "../component/CollectionPhoto";


const ProfileUser = (props) => {
    return (//ส่ง props username ไป
        <main>
            <h1>My Profile</h1>
            <UserProfile username={props.match.params.username} /> 

            
            <h1>Collection</h1>
            <CollectionPhoto username={props.match.params.username}/>
        </main>
    );
};

export default ProfileUser;
