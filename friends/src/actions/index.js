import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';


export const fetchFriends = () => {
    const promise = axios.get('http://localhost:5000/api/friends')
    return dispatch => {
        dispatch({ type: FETCHING })
        promise.then(response => {
            console.log(response);
            dispatch({ type: FETCHED, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err })
        })
    }
}