const Closesidebardisplay = ()=> (dispatch)=>{

    dispatch({type: 'closesidebar'})

}

const Addproduct = (obj)=> (dispatch)=>{

    dispatch({type: 'addproduct', cartobj: obj})

}

const Increqty = (i)=> (dispatch)=>{

    dispatch({type: 'Increqty', index: i})

}

const Decreqty = (i)=> (dispatch)=>{

    dispatch({type: 'Decreqty', index: i})

}

const RemoveItem = (i)=> (dispatch)=>{

    dispatch({type: 'removeitem', index: i})

}

const Hidedisplay = ()=> (dispatch)=>{

    dispatch({type: 'displayitem'})

}

const Popupdisplay = (e)=> (dispatch)=>{

    dispatch({type: 'popupdisplay', element: e})

}

export {Closesidebardisplay, Addproduct, Increqty, Decreqty, RemoveItem, Hidedisplay, Popupdisplay}