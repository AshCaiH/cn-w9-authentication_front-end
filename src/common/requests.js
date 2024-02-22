
export async function postRequest(url, query) {    

    return await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: query,
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    })

}


export async function getRequest(url) {    

    return await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    })

}