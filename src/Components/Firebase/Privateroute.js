import { Route, Redirect } from 'react-router'
import Useauth from './Useauth';

const Privateroute = ({ children, ...rest }) => {
    const { users, isLoading } = Useauth()
    if (isLoading) {
        return <h1 className='fs-5 mt-5 text-danger'>Looading...</h1>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                users.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};



export default Privateroute;