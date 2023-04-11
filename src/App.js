import React from "react";
import Header from "./components/Header";
import Categoreis from "./components/Categoreis";
import Footer from "./components/Footer";
import Items from "./components/Items";
import FullShowItem from "./components/FullShowItem";




class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: "Веселые мопсы (сезон 5)",
          img: "dogs.jpg",
          desc: "Мультик про веселых собачек",
          category: "children",
          video: "1" 
        },
        {
            id: 2,
            title: "Гарри Поттер и Филосовский Камень",
            img: "harry1.jpg",
            desc: "Фильм про юного волшебника",
            category: "adventures",
            video: ""
        },
        {
          id: 3,
          title: "Гарри Поттер и Тайная Комната",
          img: "harry2.jpg",
          desc: "Фильм про юного волшебника",
          category: "adventures",
          video: ""
        },
        {
          id: 4,
          title: "Гарри Поттер и Узник Азкабана",
          img: "harry3.jpg",
          desc: "Мрачный фильм про юного волшебника",
          category: "adventures",
          video: ""
        },
        {
          id: 5,
          title: "Гарри Потер и Кубок Огня",
          img: "harry4.jpg",
          desc: "Волшебник подросток учавствует в первых соревнованиях",
          category: "adventures",
          video: ""
        },
        {
          id: 6,
          title: "Гарри Поттер и Орден Феникса",
          img: "harry5.jpg",
          desc: "В школу подростка волшебника приходит неодекватная директриса",
          category: "adventures",
          video: ""
        },
        {
          id: 7,
          title: "Гарри Поттер и Принц Полукровка",
          img: "harry6.jpg",
          desc: "Норм Директор Умирает",
          category: "adventures",
          video: ""
        },
        {
          id: 8,
          title: "Гарри Поттер и Дары Смерти часть 1",
          img: "harry7.jpg",
          desc: "Волшебник в поисках возможности убийства другого волшебника",
          category: "adventures",
          video: ""
        },
        {
          id: 9,
          title: "Гарри Поттер и Дары Смерти часть 2",
          img: "harry8.jpg",
          desc: "Конец истории про волшебника",
          category: "adventures",
          video: ""
        }
      ],
      currentItems: [],
      fullShowItem: false,
      fullItem: {}
    }

    this.state.currentItems = this.state.items
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Categoreis chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onShowItem={this.onShowItem} />

        {this.state.fullShowItem && <FullShowItem onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if(category === "all") {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }


  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({fullShowItem: !this.state.fullShowItem})
  }









  
}

export default App;
