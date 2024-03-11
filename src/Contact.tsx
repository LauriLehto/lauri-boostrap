import Button from 'react-bootstrap/Button';
import {Form, Card} from 'react-bootstrap';   

import { FormType } from '../types';

function ContactForm(props: FormType ) {
  const { fields, form, setForm, button } = props;

  return (
    <Card className='p-3 py-4'>
      {/* React Netilyf forms instructions in https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/ */}
    <Form method="POST" data-netlify="true" data-netlify-honeypot="bot-field" name="contact-form">
      <input type="hidden" name="form-name" value="contact" />
      {fields.map((field, index) => {
        return (
          <Form.Group className="mb-3" controlId={`contactForm${field.name}`} key={index}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              /* value={form[field.name]} */
              onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
            />
          </Form.Group>
        );
      })}
      <Button variant="primary" type="submit">
        {button}
      </Button>
    </Form>
    </Card>
  );
}

export default ContactForm;