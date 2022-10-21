import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../Components/Api.css'
import e from "express";


function Api() {

  const [userList, ssetUserList] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users").then(res => ssetUserList(res.data))

  }, []);

  function gitClick(Api){
    userList.map(userurl,res=>(
      res.send(userurl.url)

    ))
    
  }
  

  return (

    <div className="Api">
      {
        userList.map(user => (
          <div className="card" onClick={user.url} >
            
            <img src={user.avatar_url} alt="user" />
            <h2> {user.login} </h2>
            <h5>{user.id}</h5>
            <h5>{user.node_id}:</h5>
            <h5>{user.gravatar_id}</h5>
            <h5>{user.url}</h5>
            <h5>{user.html_url}</h5>
            <h5>followers:{user.followers_url}</h5>
            <h5>{user.following_url}</h5>
            <h5>{user.gists_url}</h5>
            <h5>{user.starred_url}</h5>
            <h5>{user.subscriptions_url}</h5>
            <h5>{user.organizations_url}</h5>
            <h5>{user.repos_url}</h5>
            <h5>{user.events_url}</h5>
            <h5>{user.received_events_url}</h5>
            <h5>{user.type}</h5>
            <h5>{user.site_admin}</h5>

          </div>
        ))
      }

    </div>
  );
}

export default Api;
