import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <Link to="/pizza-day">Login page</Link>
        </div>
    );
};

export default PageNotFound;