import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'
import '../styles/Contact.css'
import { Redirect } from 'react-router-dom'

class Contact extends Component {

  constructor (props, context) {
    super(props, context)

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      name: {
        value: '',
        validationState: null
      },
      email: {
        value: '',
        validationState: null
      },
      message: {
        value: '',
        validationState: null
      },
      redirect: false
    }
  }

  getNameValidationState () {
    return this.state.name.value
      ? 'success'
      : 'error'
  }

  getEmailValidationState () {
    return this.state.email.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      ? 'success'
      : 'error'
  }

  getMessageValidationState () {
    return this.state.message.value
      ? 'success'
      : 'error'
  }

  validateForm () {
    this.setState(state => ({
      ...state,
      name: {
        ...state.name,
        validationState: this.getNameValidationState()
      },
      email: {
        ...state.email,
        validationState: this.getEmailValidationState()
      },
      message: {
        ...state.message,
        validationState: this.getMessageValidationState()
      }
    }))
  }

  isFormValid () {
    const { name, email, message } = this.state
    if (name.validationState === 'success' &&
    email.validationState === 'success' &&
    message.validationState === 'success') return true
    return false
  }

  handleNameChange (e) {
    this.setState({ name: { value: e.target.value } })
  }

  handleEmailChange (e) {
    this.setState({ email: { value: e.target.value } })
  }

  handleMessageChange (e) {
    this.setState({ message: { value: e.target.value } })
  }

  async handleSubmit (e) {
    e.preventDefault()
    await this.validateForm()
    if (!this.isFormValid()) {
    } else {
      this.setState({ redirect: true })
    }
  }

  render () {
    if (this.state.redirect) return <Redirect to='/' />
    return (
      <Form horizontal>
        <FormGroup
          controlId='formContactName'
          validationState={this.state.name.validationState}
        >
          <FormControl
            type='text'
            value={this.state.name.value}
            placeholder='Name'
            onChange={this.handleNameChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId='formContactEmail'
          validationState={this.state.email.validationState}
        >
          <FormControl
            type='text'
            value={this.state.email.value}
            placeholder='Email'
            onChange={this.handleEmailChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId='formContactMessage'
          validationState={this.state.message.validationState}
        >
          <FormControl
            componentClass='textarea'
            value={this.state.message.value}
            placeholder='Message'
            onChange={this.handleMessageChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
      </Form>
    )
  }
}

export default Contact
