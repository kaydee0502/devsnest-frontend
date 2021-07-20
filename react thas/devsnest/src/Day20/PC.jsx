import React, {useState} from 'react';
import './PC.css';
import { builds } from './builder';

function Item({item, delHandler}){

    return (
        <div className="pcitem">
            <div className="item-name">{item.part}</div>
            <div className="item-desc">{item.power}</div>
            <div className="item-actions">
                <button className="btn btn-danger" onClick={() => delHandler(item.id)}>Delete</button>
            </div>
        </div>
    );
}




function PC() {

const [item, setItem] = useState(builds);
const delHandler = (id) => {
    let updatedBuilds = item.filter((e) => e.id !== id);
    setItem(updatedBuilds);
};

console.log(item)
return (
    <div className="App">
        
            <h2>PC build</h2>

        <div className="container">
            {item.length > 0 ? item.map((e, index) => <Item key={index} item={e} delHandler={delHandler}/>) : <div>No builds</div>}
        </div>
    </div>

);


}

export default PC;
