import React from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

import '../App.css';
import { Redirect } from 'react-router';

// emailjs API to help send email (https://www.emailjs.com/docs/examples/reactjs/)

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('ToUpper LLC Gmail', 'template_whkpa5n', e.target, 'user_6XIEx1sRn9u9oj0HyYOxu')
      .then((result) => {
            window.location.replace('/sent')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

{/* Contact page */}

function Contact() {
    return (
    <div className="controls">
        <div className="row">
            <div className="col-md-6">
                <div class="form-group">
                </div>
            </div>
            <div className="container">
                <div className="center">
                    <form onSubmit={sendEmail} style={{ width: '400px'}}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="firstname" name="firstname" placeholder="Jane" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="lastname" name="lastname" placeholder="Doe" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="Email" name="email" placeholder="janedoe@gmail.com" />
                            </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="3" name="message" placeholder="Write something here..." />
                        </Form.Group>
                        <Button className="d-inline-block" variant="primary" type="submit">
                                    Send
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Contact;