import styles from './css/Dashboard.module.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import Nav from './Nav';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Dashboard = () => {

    let history = useHistory();

    useEffect(() => {
        fetch('http://localhost:8080/adminloggedin', {
            credentials: 'include'
        })
        .then(result => result.json())
        .then((data) => {
            if(!data.admin_logged_in){
                // User is not logged in as an admin, redirect to login component
                history.push('/admin/');
            }
        })
    }, []);

    return (
        <div className={styles.dashboard}>
            <Nav></Nav>
            <Route path="/admin/dashboard/all">
                <h1>all pros</h1>
            </Route>
            <Route path="/admin/dashboard/create">
                <p>create</p>
            </Route>
        </div>
     );
}

export default Dashboard;