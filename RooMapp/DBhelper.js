function ping_server() {
    fetch("http://localhost:5005/", {
        "method": "GET",
        "headers": {}
    }).then(response => {
        if (response.status) return true
    }).catch(err => {
        return false;
    });
}


function copy_db_entries() {
    let response
    let json_message

    let db_entries_json = JSON.parse('{"entries":[]}')
    let promise_req
    let promise_json

    promise_req = fetch("http://localhost:5005/test_database/_all_docs?include_docs=true", {
        "method": "GET",
        "credentials": 'same-origin',
        "headers": {
            'Authorization': 'Basic ' + btoa('root:root'),
        }
    });

    promise_req.then(_response => {
        response = _response;
        promise_json = response.json();

        promise_json.then(_response => {
            json_message = _response;
            console.log(_response)
            for (let i = json_message["rows"].length - 1; i >= 0; i--) {
                db_entries_json["entries"].push(json_message["rows"][i]['doc']);
            }
            console.log(db_entries_json)
        });

        if (_response.status) return true
    }).catch(err => {
        return false;
    });
}