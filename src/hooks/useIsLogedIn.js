import {useSelector} from 'react-redux';

const useIsLoggedIn = () => {
    const loggedIn = useSelector(state => state.auth?.authToken);
    return loggedIn
};

export default useIsLoggedIn;