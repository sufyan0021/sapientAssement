import axios from 'axios';

export const fetchData = (limit,params) => {
    
    return ((dispatch, getState) => {
        axios.get('https://api.spacexdata.com/v3/launches', {
                    params: {limit,...params}
    }).then((res) => {
            if(params===undefined || JSON.stringify(params)===JSON.stringify({})){
                dispatch({type:'Launches_Received',launches:res.data});
                console.log(res);
            }
            else{
                dispatch({type:'LaunchesFilters_Received',launches:res.data});
            }
            })
            .catch(err => {
                dispatch({type:'Launches_NotReceived',error:err.message});
              });
    });
}

export default fetchData;