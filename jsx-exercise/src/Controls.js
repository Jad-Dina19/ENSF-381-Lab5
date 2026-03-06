function del(){
    return(
        <div>
            <label for="textbox">Text box</label>
            <input type="text" id="textbox" name="textbox"></input>
            <button type="click">Delete</button>
        </div>
    );
}

function Controls(){
    return(
        <div>
            <del />
            <button>Sort by Group</button>
            <button>Sort by ID</button>
            <button>Grid/List</button>
        </div>
    )
}

export default Controls;