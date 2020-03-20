import React from './react'

const get = (url) => 
        fetch(url)
        .then(resp => resp.json())

    
    const getwithauth = (url) =>
        fetch(url, {
            headers: {
            Authorization: localStorage.token
            }
        }).then(resp => resp.json()) 
    
    const post = (url, data) => 
        fetch(url, {
            method: 'POST',
            headers:{
                'Authorization': localStorage.token,
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())

    const patch = (url, data, id) =>
        fetch(url + id, {
            method: 'PATCH',
            headers:{
                Authorization: localStorage.token,
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())

    const destroy = (url, id) =>
        fetch(url + id, {
          method: "DELETE",
          headers:{
            Authorization: localStorage.token,
            'Content-Type':'application/json'
        },
        })