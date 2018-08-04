import ReactDOM from 'react-dom';
import React, {Fragment} from 'react';

let todoList = [];
let inputEle = null;
const styles = {
    "listStyleType": "none",
    "listStyle": "none",
    "paddingBottom" : '5px'
};

const addItem = e => {
    e.preventDefault();
    let length = todoList.length;
    const item = inputEle.value;
    todoList.push({"key": item, "value": item, "status": ""});
    inputEle.value = '';
    render();
}

const deleteItem = (delItem) => {
    var removeIndex = todoList.map(function(item) { return item.key; }).indexOf(delItem.key);
    todoList.splice(removeIndex, 1);

    // todoList = todoList.filter((item) => item.id !== delItem);
    render();
}

const markItemDone = (itemDone) => {

    todoList.forEach(function(item) {
        if (item.key === itemDone.key && item.status === "") {
            item.status = "checked";
        } else if (item.key === itemDone.key && item.status === "checked") {
            item.status = "";
        } 
    });
    render();
}

const AddItems = () => {
    return (<form onSubmit={addItem}>
            <input type="text" className="form form-control" ref={node => inputEle = node } />
            <input type="submit" className="btn  btn-primary" value="Go"/>
        </form>);
}

const ListItems = ({items}) => <ul>{items.map(i => 
    <li key={i.key} style={styles}>
        <input type="checkbox" checked={i.status} onClick={markItemDone.bind(this, i)}/>
        {i.value} <button onClick={deleteItem.bind(this, i)} className="btn btn-danger"> X </button> </li> )}
    </ul>;

const ListPanel = () => {
    return <div className="container">
        <div className="panel panel-default">
            <div className="panel-heading">To DO List</div>
            <AddItems />
            <div className="col-md-6">
                <ListItems items={todoList} />
            </div>
        </div>
    </div>;
}

function render () {
    ReactDOM.render(<Fragment>
        <ListPanel />  
    </Fragment>, document.getElementById('appTodo'));
}

render();