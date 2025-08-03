const initalstate = {

    sidebardisplay: 'hidden',
    cartarray: [],
    overlaydisplay: 'hidden',
    mapobj: {},
    notifstate: 0

}

const sitereducer = (state = initalstate, action) =>{

    switch(action.type){

        case 'closesidebar':
            return {...state, sidebardisplay: 'hidden'}

        case 'addproduct':

            let existingindex = state.cartarray.findIndex((e,i)=>{

                return e.prodname == action.cartobj.prodname && e.prodcolor == action.cartobj.prodcolor
                && e.prodsize== action.cartobj.prodsize

            })

            console.log(existingindex);

            if(existingindex == -1){

                return {...state, cartarray: [...state.cartarray, action.cartobj], sidebardisplay: 'block'}

            }
            else{

                return{...state, cartarray: state.cartarray.map((e,i)=>{

                    if(e.prodname == action.cartobj.prodname && e.prodsize == action.cartobj.prodsize
                        && e.prodcolor == action.cartobj.prodcolor
                    ){

                        return{...e, proqty: e.proqty + action.cartobj.proqty}

                    }
                    else{

                        return e

                    }


                }), sidebardisplay: 'block'}

            }

        case 'Increqty':
            return{...state, cartarray: state.cartarray.map((e,i)=>{

                console.log(action.index, i, 'jjjj');
                
                if(action.index == i){

                    return{...e, proqty: e.proqty+1}

                }
                else{

                    return e

                }

            })}

        case 'Decreqty':
            return{...state, cartarray: state.cartarray.map((e,i)=>{

                console.log(action.index, i, 'jjjj');
                
                if(action.index == i){

                    return{...e, proqty: e.proqty-1}

                }
                else{

                    return e

                }

            })}

        case 'removeitem':
            return{...state, cartarray: state.cartarray.filter((e,i)=>{

                return action.index !=i

            })}

        case 'displayitem':
            return{...state, overlaydisplay: 'hidden'}

        case 'popupdisplay':
            return{...state, mapobj: action.element, overlaydisplay: 'block'}
        
        default:
           return state

    }

}

export default sitereducer