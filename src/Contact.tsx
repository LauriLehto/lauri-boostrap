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
      })}
      <Button variant="primary" type="submit">
        {button}
      </Button>
    </Form>
  );
}

export default ContactForm;