import './App.css'
import {useState} from 'react'
import { Container } from 'react-bootstrap'
import Profile from './Profile';
import Contact from './Contact';

import data from './data.json';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [language, ] = useState<string>('fi');
  const [profile, ] = useState('developer');
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [show, setShow] = useState(false);

  const page = (data as { [key: string]: any })[language];

  const ContactProps = {
    fields: page.fields,
    form,
    setForm,
    button:page.buttons.send
  }

  return (
    <Container className='tm-5'>
      <div className="d-flex justify-page-center">
        {show ? 
        <Contact  {...ContactProps} />
        :
        <Profile bio={page[profile].bio} title={page.title} buttons={page.buttons} setShow={setShow}/>}

      </div>

    </Container>
  )
}

export default App
