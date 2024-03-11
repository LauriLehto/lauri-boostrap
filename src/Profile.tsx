import { Dispatch, SetStateAction, /* useState */ } from 'react'
import { Card } from 'react-bootstrap'
import { Facebook, Twitter, Linkedin, /* MusicNoteBeamed, CodeSlash */ } from 'react-bootstrap-icons';
import {Images} from './Images';

import data from './data.json';

const Profile = ({ title, subtitle, setShow, buttons}:{title:string, subtitle:string, setShow:Dispatch<SetStateAction<boolean>>, buttons:{message:string,contact:string}}) => {

  /* const [showCode, setShowCode] = useState(false);
  const [showMusic, setShowMusic] = useState(false); */

  const handleClick = () => {
    setShow(true);
  }

  const IconProps = {
    color:"royalblue",
    size: 30
  }

  /* const toggleShowCode = () => {
    setShowCode(!showCode);
  }

  const toggleShowMusic = () => {
    setShowMusic(!showMusic);
  } */

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
          <p className="fonts">{subtitle}</p>
        </div>

        {/* <div style={{display:"flex", flex:1, flexDirection:"row", justifyContent:"space-around"}}>
          <Card onMouseEnter={toggleShowCode} onMouseLeave={toggleShowCode} style={{padding:"5%"}}>
            {showCode ? <p className="fonts">{bio}</p> : <CodeSlash {...IconProps} size={50} />}
          </Card>
          <Card onMouseEnter={toggleShowMusic} onMouseLeave={toggleShowMusic} style={{padding:"5%"}}> 
            {showMusic ? <p className="fonts">{bio}</p> :  <MusicNoteBeamed {...IconProps} size={50} />}
          </Card>
        </div> */}
        
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", paddingBottom: "5%"}}>
          <a href={data.social.twitter} className="me-2 p-2" target="_blank"><Twitter {...IconProps} /></a>
          <a href={data.social.facebook} className="me-2 p-2" target="_blank"><Facebook {...IconProps} /></a>
          <a href={data.social.linkedin} className="me-2 p-2" target="_blank"><Linkedin {...IconProps}/></a>
        </div>
        
        <div className="buttons">
          <button className="btn btn-outline-primary px-4" onClick={handleClick}>{buttons.message}</button>
          <a className="btn btn-primary px-4 ms-3" href='/laurilehto.vcf' download>{buttons.contact}</a>
        </div>
      </div>
    </Card>
  )
}

export default Profile