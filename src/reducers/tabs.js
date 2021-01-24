const initState = {
    tabs: [{
        id: 0,
        title: `tab0`
    },{
        id: 1,
        title: `tab1`
    },{
        id: 2,
        title: `tab2`
    }],
    currentTab: 0
}


const rootReducer = (state = initState, action) => {
    if(action.type === 'SELECT_TAB'){
        return {
            ...state,
            currentTab: action.id
        }
    } else if (action.type === 'ADD_TAB'){
        if (state.tabs.length === 10)
            return state
        else {
            let newtabs = [...state.tabs], tempid
            
            do{
                tempid = Math.floor(Math.random() * 100)
            }
            while(newtabs.find((item) => item['id'] === tempid));
            newtabs.push({
                id:tempid,
                title: `tab${tempid}` 
            })
            return {
                ...state,
                tabs: newtabs
            }
        }
    }
    return state
}


export default rootReducer