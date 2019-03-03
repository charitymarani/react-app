import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
            <div>
                <div className="container">
                    <h1>Welcome to qwangu student hostels</h1>
                    <p>World class hostels that are home away from home</p>
                    <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
                </div>
            </div> 
        );
    }
}

export default Home;