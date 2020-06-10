// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {

  state = {
    display: false
  }
  // How can we show the edit form conditionally?
  renderEditForm = e => {
    const displayState = this.state.display
    if (displayState === true){
      this.setState({
        display: false
      })
    }else{
      this.setState({
        display: true
      })

    }
  }

  

  handleEditSubmit = e => {
    this.setState({
      display: false
    })
    this.props.onSubmit(e)
  }

  render(props) {
    return (
      <div className='kaiju-card'>
        <EditKaijuForm display={this.state.display}  kaiju={this.props} onSubmit={this.handleEditSubmit}/>
        <h2 className='kaiju-card-name'>{this.props.name}</h2>
        <h3 className='kaiju-card-power'>Power: {this.props.power}</h3>

        <img className='kaiju-card-image' src={this.props.image} alt={this.props.name} />

        {/* What should this edit button do? */}
        <button className='kaiju-card-edit-button' onClick={this.renderEditForm}>Edit</button>

      </div>
    )
  }
}

export default KaijuCard
