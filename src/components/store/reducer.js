const initState={
    spaceLaunches:null,
    filteredLaunches:null,
    err:''
}

const reducer =(state=initState,action)=>{
    
    if (action.type === 'Launches_Received'){
        return({
            ...state,
            filteredLaunches:null,
            spaceLaunches:action.launches
        })
    }
    else if (action.type === 'LaunchesFilters_Received'){
        return({...state,
            filteredLaunches:action.launches,
        })
    }
    else if (action.type === 'Launches_NotReceived'){
        console.log('The action payload',action);
        return({
            ...state,
            err:action.error
        })
    }
    return state;
}

export default reducer;