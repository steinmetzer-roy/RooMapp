let ping_status_promise = null
let server = "1a6d-2a06-4944-16fe-3e00-50f8-bc85-faf7-4a9b.eu.ngrok.io"

function ping_server() {
    return new Promise((resolve, reject) => {
        fetch(`http://${server}:5005/`, {
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

    return new Promise((resolve,reject) => {
        promise_req = fetch("http://100.64.220.151:5005/test_database/_all_docs?include_docs=true", {
            "method": "GET",
            "headers": {
              "Content-Type": "application/json"
            }
          })

        promise_req.then(_response => {
            promise_json = _response.json();
            promise_json.then(_response => {
                json_message = _response;
                for (let i = json_message["rows"].length - 1; i >= 0; i--) {
                    db_entries_json["entries"].push(json_message["rows"][i]['doc']);
                }
                resolve(db_entries_json)
            })

        })
    })
}

export { ping_server, copy_db_entries }
