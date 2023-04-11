import React, { Component } from 'react'

export class Categoreis extends Component {

    constructor(props){
        super(props)
        this.state = {
            categoreis: [
                {
                    key: "all",
                    name: "Всё"
                },
                {
                    key: "comedy",
                    name: "Комедии"
                },
                {
                    key: "horror",
                    name: "Ужасы"
                },
                {
                    key: "children",
                    name: "Для детей"
                },
                {
                    key: "militants",
                    name: "Боевики"
                },
                {
                    key: "melodramas",
                    name: "Мелодраммы"
                },
                {
                    key: "adventures",
                    name: "Приключинея"
                },
                {
                    key: "detective",
                    name: "Детективы"
                }

            ]
        }
    }
  render() {
    return (
      <div className='categoreis'>
        {this.state.categoreis.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}    
      </div>
    )
  }
}

export default Categoreis