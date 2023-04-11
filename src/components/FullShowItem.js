import React, { Component } from 'react'
import Video from './Video'



export class FullShowItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
            <img src={'./img/' + this.props.item.img} alt='фото' onClick={() => this.props.onShowItem(this.props.item)} />
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <Video />
        </div>
      </div>
    )
  }
}

export default FullShowItem