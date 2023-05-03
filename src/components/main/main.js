import HornedBeasts from "../horned beasts/beasts";
import './main.css';
import { data } from '../../database';
import { useState } from 'react'
import Fuse from 'fuse.js'

function Main(check) {

    const [item, setItem] = useState(data);

    function pop() {

    let searchArray = []

    if (document.getElementById("search").value  == "") {
        setItem(data)
        return
    }

    const fuse = new Fuse(data, {
        keys: ['title'],
        threshold: 0.3,
    })
    
    const results = fuse.search(document.getElementById("search").value)
    results.forEach(element => searchArray.push(element.item));
    setItem(searchArray);
    }

    return (
        <main>
        <input type="text" id="search" onKeyUp={pop}></input>
        {Object.keys(item).map((id) => (
            <HornedBeasts text={item[id].title} image={item[id].image_url} horns={item[id].horns}/>
        ))}
        </main>
    );
  }
  
  export default Main;
