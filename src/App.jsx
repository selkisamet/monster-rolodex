import { Component } from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  // componentDidMount: DOM'a ilk yüklendiğinde çalışır.
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }
      ));
  }

  // Inputun değişiklik fonksiyonu.
  //  Class ilk kez çalıştığında sadece bir kez çalışır. Bu şekilde kullanımı performans odaklıdır.
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    // Stateye yeni değeri gönderildi.
    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // Gelen değere göre stateyi filtreleyip filteredMonsters adında yeni bir dizi oluşturur.
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>

        {/* SearchBox componentine monsters adında bir props gönderildi. */}
        <SearchBox className={"monsters-search-box"} onChangeHandler={onSearchChange} placeholder={"Search Monster"} />

        {/* CardList componentine monsters adında bir props gönderildi. */}
        <CardList monsters={filteredMonsters} filteredWord={searchField}  />
      </div>
    );
  }
}

export default App;
