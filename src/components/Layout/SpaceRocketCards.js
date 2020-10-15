import React,{useEffect,useState} from 'react';
import Filter from './Filter'
import fetchData from '../store/actions';
import {connect } from 'react-redux';
import {Card} from 'react-bootstrap';
import Pagination from './Pagination'

function SpaceRocketCards(props){

    
    const [limit,setLimit] = useState(100);
    const [currentPage, setCurrentPage] = useState(1);
    const [spaceLaunchesPerPage] = useState(10);
  

     // Get current SpaceLaunches
     const indexOfLastSpaceLaunch = currentPage * spaceLaunchesPerPage;
     const indexOfFirstSpaceLaunch = indexOfLastSpaceLaunch - spaceLaunchesPerPage;

     // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        console.log('params changes',props);
        props.fetchData(limit,props.match.params);
    }, [props.match.params,limit])
    const currentSpaceLaunch=(props.spacexLaunches==null&&props.filteredLaunches==null)
                                ?null:(props.spacexLaunches!=null&&props.filteredLaunches!=null)?props.filteredLaunches:props.spacexLaunches;


    return <>
            <h1>SpaceRocketCards</h1>
            <div className='row spaceRocketContent'>
              {currentSpaceLaunch===null?<h2>Thanks For Your Patience,Loading...</h2>
              :currentSpaceLaunch.length===0?<>
                <Filter launches={props.spacexLaunches}/>
                <h2>Nothing To Display</h2>
                </>:
              <>
                <Filter launches={props.spacexLaunches}/>
                <div className='col-sm-12 col-md-9'>
                    <div className='row'>
                 {currentSpaceLaunch.slice(indexOfFirstSpaceLaunch, indexOfLastSpaceLaunch).map((launch,idx)=>{
                    return(        
                    <Card className='spaceCards container-fluid col-lg-3 col-md-4 col-sm-12 ' key={idx}>
                       <> {
                            (window.matchMedia('screen and (max-width: 768px)').matches)?
                            <Card.Img variant="top" id='cardImg' src={launch.links.mission_patch_small} />:
                            <Card.Img variant="top" id='cardImg' src={launch.links.mission_patch} />
                        }</>
                        <Card.Title>{launch.mission_name} {launch.flight_number}</Card.Title>
                        <Card.Body>
                        <Card.Title>Mission Ids:{launch.mission_id.map((id,idx)=><p key={idx}>{id}</p>)}</Card.Title>
                        <Card.Title>Launch Year: {launch.launch_year}</Card.Title>
                        <Card.Title>Successful Launch:{launch.launch_success.toString().toUpperCase()}</Card.Title>
                    <Card.Title>Successful Landing:{launch.rocket.first_stage.cores[0].land_success}</Card.Title>
                        </Card.Body>
                    </Card>)
                })}
                    </div>
                    <Pagination
                    spaceLaunchesPerPage={spaceLaunchesPerPage}
                    totalLaunches={currentSpaceLaunch.length}
                    paginate={paginate}
                />
                </div>
              </>} 
            </div>
        </>
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchData: (limit,params) => {
            dispatch(fetchData(limit,params))
        },
    });
  };
  
  const mapStateToProps = (state) => {
    return ({
        spacexLaunches: state.spaceLaunches,
        filteredLaunches: state.filteredLaunches
    });
  }

export default connect(mapStateToProps,mapDispatchToProps)(SpaceRocketCards)