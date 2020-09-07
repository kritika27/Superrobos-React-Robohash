import React,{Component} from "react"
import CardList from "./CardList"
import { SearchBox } from "./SearchBox"
import "./App.css"
import {robos} from "./robos"

class App extends Component{
    constructor(){
        super()
        this.state={
            robos: robos,
            searchField: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchField : event.target.value})
    }
     render(){
        const filteredRobots=this.state.robos.filter(robos=>{
        return robos.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })   
    return(
        <div className='App'>
        <h1>Super Robos</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList robos={filteredRobots} />
      </div>
    )
}
}
export default App