import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';   

import { FormType } from '../types';

function ContactForm(props: FormType ) {
  const { fields, form, setForm, button } = props;

  return (
    <Form data-netlify="true">
      {fields.map((field, index) => {
        return (
          <Form.Group className="mb-3" controlId={`contactForm${field.name}`} key={index}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control
              type={field.type}
              placeholder={field.placeholder}
              /* value={form[field.name]} */
              onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
            />
          </Form.Group>
        );
      }
      )}
      {/* <Form.Group className="mb-3" controlId="contactFormName">
        <Form.Label>{name}</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactFormEmail">
        <Form.Label>{email}</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="ContactFormMessage">
        <Form.Label>{message}</Form.Label>
        <Form.Control type="text" placeholder="Kirjoita viesti" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        {button}
      </Button>
    </Form>
  );
}

export default ContactForm;