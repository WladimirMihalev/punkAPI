import React, {Component} from  "react";
import "./BeerList.css";
import URL from '../API_URL/API_URL.js';

 

export default class BeerList extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false, 
            items: [],
            searchTerm:""
        };
    }

    componentDidMount(){
        fetch(URL.API)
        .then(res=> res.json())
        .then(
            (result)=> {
                this.setState({
                    isLoaded: true, 
                    items: result
                });
            }, 
              (error) => {
                    this.setState({
                        isLoaded:true,
                        error
                    });
                }
            )
            }
        
    render() {
const {error, isLoaded, items} = this.state;
console.log(items)
if(error){
    return <p> Error {error.message} </p>
}
else if (!isLoaded){
    return <p> Loading...</p>
}
else{
    const searchTerm = this.state.searchTerm;
    return(
    <table key='beer_table'>
    <input type="text" placeholder="Search..."
    onChange={(event) => { this.setState({ searchTerm: event.target.value }); }} />
    {items.filter((val) => searchTerm === "" || val.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(item => (
    <tr>
    <th>{item.name}</th>
    <td> {item.description} </td>
    <td> <img width="25vw" heigth="25vh" src={item['image_url']} alt="beer img" /> </td>
    </tr>
    ))}
    </table>
    ) 
}
    }
}
