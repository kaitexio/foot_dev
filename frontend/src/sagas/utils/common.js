//ローカルストレージに保存
export const setAuthData = (access_token) => {
    localStorage.setItem('token', access_token);

};

export const getRequestHeader = (useToken) => {
    if (useToken) {
        return {
            'content-type': 'application/json',
            'authorization': 'Token ' + localStorage.getItem('token')
        }
    } else {
        return {
            'Content-Type': 'application/json',
        };
    }
}

export const responseHandler = (json, status) => {
    if (status === 400) {
        return [undefined, json]
    }
    return [json, undefined]
}
