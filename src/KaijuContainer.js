//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

// const API = 'http://localhost:3000/kaijus'

class KaijuContainer extends React.Component {

  state = {
    kaijus: [],
    searchInput: ''
  }

  componentDidMount(){
    this.renderKaijus()
  }

  renderKaijus = () => {
    requests.fetchKaijus()
    .then(kaijus => this.setState({ kaijus }))
  }

  // submitHandler = (e, kaiju) => {
  //   if(this.state.kaijus === kaiju){
  //     e.preventDefault()

  //     console.log(kaiju)
  //   }
  // }

  changeHandler = e => {
    this.setState({
      searchInput: e.target.value
    })
  }

  filterKaijus = () => {
    const kaijus = [...this.state.kaijus]
    const search = this.state.searchInput.toLowerCase()
    return kaijus.filter(kaiju => {
      let power = kaiju.power.toLowerCase()
      return power.includes(search)
    })
  }

  render() {
    // console.log(this.state.kaijus)
    return (
      <>

        <CreateKaijuForm onSubmit={this.renderKaijus} />

        <input onChange={this.changeHandler} value={this.state.searchInput} />

        <div id='kaiju-container'>

          {this.filterKaijus().map(kaiju => <KaijuCard key={kaiju.id} {...kaiju} onSubmit={this.renderKaijus}/>)}

        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
