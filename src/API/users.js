import apiOrigin from './api';

export const getUsers = (authToken) => {
    return fetch(`${apiOrigin}/users`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    }).then(res => res.json());
}