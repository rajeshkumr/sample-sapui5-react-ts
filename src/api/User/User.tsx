import { BASE_URL, USERS, POSTS } from '../../config/endpoints';

export function Users() {
    return fetch(BASE_URL + "/" + USERS);
}

export function UserDetail(id?: string) {
    return fetch(BASE_URL + "/" + POSTS + "/" +id);
}


