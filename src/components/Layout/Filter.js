import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Filter({launches}){
    
    const years = launches.map((launch)=>{
        return launch.launch_year
    })
    let uniqueYears = [...new Set(years)];

    const boolArr = ['True','False'];

    return <>
            <div className='filterContent col-lg-2 col-sm-12 col-md-3 '>
            <h3 style={{'textAlign':'left'}}>Filters</h3>
            <Link to='/'><Button variant="success">Home</Button></Link>
            <div className='filterDivYears'>
                <h5>Launch Years</h5>
                <Row>
                    {uniqueYears.map((year,idx) => {
                        return (<Col
                            xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 6 }}
                            lg={{ span: 6 }} xl={{ span: 6 }}
                            style={{ paddingBottom: '15px' }} key={idx} >
                            <Link to={`/launchSuccess/landingSuccess/year/true/true/${year}`}><Button variant="success" >{year}</Button></Link></Col>);
                    })}
                </Row>
                <h5>Successful Launches</h5>
                <Row>
                    {boolArr.map((val,idx) => {
                        return (<Col
                            xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 6 }}
                            lg={{ span: 6 }} xl={{ span: 6 }}
                            style={{ paddingBottom: '15px' }} key={idx} >
                           <Link to={`/launchSuccess/${val}`}><Button variant="success">{val}</Button></Link></Col>);
                    })}
                </Row>
                <h5>Successful Landing</h5>
                <Row>
                    {boolArr.map((val,idx) => {
                        return (<Col
                            xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 6 }}
                            lg={{ span: 6 }} xl={{ span: 6 }}
                            style={{ paddingBottom: '15px' }} key={idx} >
                            <Link to={`/launchSuccess/landingSuccess/${val}/${val}`}><Button variant="success">{val}</Button></Link></Col>);
                    })}
                </Row>
                
            </div>
            </div>
        </>
}



export default Filter