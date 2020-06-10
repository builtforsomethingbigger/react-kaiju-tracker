import React from 'react'

class EditKaijuForm extends React.Component {

  state = {
    name: this.props.kaiju.name,
    power: this.props.kaiju.power,
    image: this.props.kaiju.image
  }

  editKaiju = e => {
    e.preventDefault()
    e.persist()
    
    const patchReq = {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch(`http://localhost:4000/kaijus/${this.props.kaiju.id}`, patchReq)
    .then(res => res.json())
    .then(this.props.onSubmit)

  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div style={{display: this.props.display ? 'block' : 'none' }}>
        <form onSubmit={this.editKaiju} className='kaiju-card-edit-form'>

          <label>Name: </label>
          <input name='name' type='text' value={this.state.name} placeholder={this.props.kaiju.name} onChange={this.changeHandler}/>
          <br/>

          <label>Power: </label>
          <input name='power' type='text' value={this.state.power} placeholder={this.props.kaiju.power} onChange={this.changeHandler} />
          <br/>

          <label>Image URL: </label>
          <input name='image' type='text' value={this.state.image} placeholder={this.props.kaiju.image} onChange={this.changeHandler} />
          <br/>

          <input type="submit" value="Save Changes"  />

        </form>
      </div>
    )
  }
}

export default EditKaijuForm
