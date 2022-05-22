let ping_status_promise = null

function ping_server(){
    return new Promise((resolve, reject) => {
        fetch("http://localhost:5005/", {
            "method": "GET",
            "credentials": 'same-origin',
            "headers": {
                'Authorization': 'Basic ' + btoa('root:root')
            }
        }).then(response => {
            if (response.status === 200) {
                //console.log(response.status);
                resolve("Server is up");
            }
    
        }).catch(err => {
            reject("Server not reachable");
        });
    })
} 


function copy_db_entries() {
    let response
    let json_message

    let db_entries_json = JSON.parse('{"entries":[]}')
    let promise_req
    let promise_json

    return new Promise((resolve) => {
        promise_req = fetch("http://localhost:5005/test_database/_all_docs?include_docs=true", {
        "method": "GET",
        "credentials": 'same-origin',
        "headers": {
            'Authorization': 'Basic ' + btoa('root:root'),
        }
    }).catch( console.log("Nope 1"));

    promise_req.then(_response => {
        response = _response;
        promise_json = response.json();
        promise_json.then(_response => {
            json_message = _response;
            for (let i = json_message["rows"].length - 1; i >= 0; i--) {
                db_entries_json["entries"].push(json_message["rows"][i]['doc']);
            }
            resolve(db_entries_json)
        }).catch(reject("Nope 2"));
        
    }).catch(reject("Nope 3"));
    })

    
}

export { ping_server, copy_db_entries }