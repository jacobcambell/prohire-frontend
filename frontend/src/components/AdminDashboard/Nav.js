import { Link } from 'react-router-dom';
import styles from './css/Nav.module.css';

const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link to="/admin/dashboard/all" className={styles.logo}>ProHire Admin</Link>

            <Link to="/admin/dashboard/all" className={styles.tab}><i className="fas fa-user-friends"></i> All Professionals</Link>
            <Link to="/admin/dashboard/create" className={styles.tab}><i className="fa fa-plus" aria-hidden="true"></i> Create Professional</Link>
        </div>
     );
}

export default Nav;