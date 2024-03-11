import React, { Dispatch, SetStateAction } from 'react'
import { Card } from 'react-bootstrap'
import { Facebook, Twitter, Linkedin } from 'react-bootstrap-icons';
import {Images} from './Images';

import data from './data.json';
const Profile = ({bio, title, setShow, buttons}:{bio:string, title:string, setShow:Dispatch<SetStateAction<boolean>>, buttons:{message:string,contact:string}}) => {

  const handleClick = () => {
    setShow(true);
  }
  return (
    <Card className='p-3 py-4'>
      <div className="text-center">
          <img src={Images.profile} width="100" className="rounded-circle" alt="profile-image" />
      </div>
      <div className="text-center mt-3">
      {/* <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span> */}
        <h5 className="mt-2 mb-0">{data.name}</h5>
        <span>{title}</span>
        
        <div className="px-4 mt-1">
          <p className="fonts">{bio}</p>
        </div>
        
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", paddingBottom: "5%"}}>
          <a href={data.social.twitter} className="me-2" target="_blank"><Twitter /></a>
          <a href={data.social.facebook} className="me-2" target="_blank"><Facebook /></a>
          <a href={data.social.linkedin} className="me-2" target="_blank"><Linkedin /></a>
        </div>
        
        <div className="buttons">
          <button className="btn btn-outline-primary px-4" onClick={handleClick}>{buttons.message}</button>
          <button className="btn btn-primary px-4 ms-3">{buttons.contact}</button>
        </div>
      </div>
    </Card>
  )
}

export default Profile