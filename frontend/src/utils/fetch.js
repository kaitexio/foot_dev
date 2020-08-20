import {ROOT_URL} from "../constants";
import {getRequestHeader, responseHandler} from "../sagas/utils/common";

export function fetchGet(endpoint, useToken, payload) {
    return fetch(`${ROOT_URL}/${endpoint}`, {
            method: 'GET',
            headers: getRequestHeader(useToken)
        }
    ).then(response => {
        return response.json().then(json => ({
            status: response.status,
            json: json
        })).then(({status, json}) => {
            return responseHandler(json, status)

        }).catch((err) => {
                return [undefined, err]
            }
        )

    })
}

export function fetchPost(endpoint, useToken, payload) {
    return fetch(`${ROOT_URL}/${endpoint}/`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: getRequestHeader(useToken)
        }
    ).then(response => {
        return response.json().then(json => ({
            status: response.status,
            json: json
        })).then(({status, json}) => {
            return responseHandler(json, status)

        }).catch((err) => {
                return [undefined, err]
            }
        )

    })
}


export function fetchPatch(endpoint, useToken, payload) {
    return fetch(`${ROOT_URL}/${endpoint}/`, {
            method: 'PATCH',
            body: JSON.stringify(payload),
            headers: getRequestHeader(useToken)
        }
    ).then(response => {
        return response.json().then(json => ({
            status: response.status,
            json: json
        })).then(({status, json}) => {
            return responseHandler(json, status)

        }).catch((err) => {
                return [undefined, err]
            }
        )

    })
}

export function fetchPatchFormData(endpoint, payload) {
    const formData = new FormData();
    formData.append('img', payload.img);
    return fetch(`${ROOT_URL}/${endpoint}/`, {
        method: 'PATCH',
        body: formData,
        headers: {
            'authorization': 'Token ' + localStorage.getItem('token')
        }
    }).then(response => {
        return response.json().then(json => ({
            status: response.status,
            json: json
        })).then(({status, json}) => {
            return responseHandler(json, status)

        }).catch((err) => {
                return [undefined, err]
            }
        )

    })

}