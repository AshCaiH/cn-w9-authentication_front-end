
export async function makeRequest(url, query, method) {

    return await fetch(url, {
        method: method,
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: query,
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    })

}