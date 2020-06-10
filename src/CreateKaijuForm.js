import React from 'react'

class CreateKaijuForm extends React.Component {

  state = {
    name: '',
    power: '',
    image: ''
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }
  
  addKaiju = e => {
    e.preventDefault()
    e.persist()
    
    const postReq = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:4000/kaijus', postReq)
    .then(res => res.json())
    .then(this.props.onSubmit)
    // kaiju container =  this.setState({kaijus: [...kaijus, newKaiju]})
  }

  render() {
    return (
      <form id='create-kaiju-form' onSubmit={this.addKaiju}>

        <label>Name: </label>
        <input name='name' type='text' placeholder="add your name here.." value={this.state.name} onChange={this.handleChange} />

        <label>Power: </label>
        <input name='power' type='text' placeholder="add your power here..." value={this.state.power} onChange={this.handleChange} />

        <label>Image: </label>
        <input name='image' type='text' placeholder="add your image url here..." value={this.state.image} onChange={this.handleChange} />

        <br/>

        <input type='submit' value='List Kaiju' />

      </form>
    )
  }
}

export default CreateKaijuForm
