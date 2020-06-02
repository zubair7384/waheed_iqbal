import React from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col } from "reactstrap";
import Button from "../button";
import "./styles.scss";

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["user_name"] = "";
      fields["user_email"] = "";
      fields["message"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
      emailjs
        .sendForm(
          "gmail",
          "waheedtamplate",
          e.target,
          "user_xT0ZxX445uX02kOFR7crE"
        )
        .then(
          (result) => {
            console.log("result", result.text);
          },
          (error) => {
            console.log("error", error.text);
          }
        );
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["user_name"]) {
      formIsValid = false;
      errors["user_name"] = "*Please enter your name.";
    }

    if (typeof fields["user_name"] !== "undefined") {
      if (!fields["user_name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["user_name"] = "*Please enter alphabets only.";
      }
    }

    if (!fields["user_email"]) {
      formIsValid = false;
      errors["user_email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["user_email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["user_email"])) {
        formIsValid = false;
        errors["user_email"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["message"]) {
      formIsValid = false;
      errors["message"] = "*Please enter your message.";
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className="contact-form">
            <form
              method="post"
              name="userRegistrationForm"
              onSubmit={this.submituserRegistrationForm}
            >
              <div className="input-wrapper">
                <label className="form-label" for="fname">
                  Full Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="fname"
                  name="user_name"
                  placeholder="John Doe"
                  value={this.state.fields.user_name}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.user_name}</div>
              </div>
              <div className="input-wrapper">
                <label className="form-label" for="email">
                  Email
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="johndoe@example.com"
                  value={this.state.fields.user_email}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.user_email}</div>
              </div>
              <div className="input-wrapper">
                <label className="form-label" for="subject">
                  Message
                </label>
                <input
                  placeholder="Write your intro message here"
                  className="form-textarea"
                  name="message"
                  id="message"
                  type="message"
                  maxlength="2500"
                  value={this.state.fields.message}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.message}</div>
              </div>
              <Button className="form-button" text="Submit" type="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactForm;
