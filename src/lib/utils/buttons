<!DOCTYPE html>
<html>
<head>
    <title>Update Google Sheets</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://apis.google.com/js/api.js"></script>
    <script>
        var spreadsheetId = "1gnl6eOi3H1ih_Rv8CHemj4HyiAy2bvhUCy8oDrT7fBo";
        var range1 = "PlayerCompare!B2";
        var range2 = "PlayerCompare!D2";
        var values1, values2;

        function handleClientLoad() {
            gapi.load('client', initClient);
        }

        function initClient() {
            gapi.client.init({
                apiKey: 'AIzaSyDbNbY9qvhE5ZUCfvVQc84rgw5UocppfzI',
                clientId: '949192708882-jo2flupojs1b5b6lfthtom3toapg60bi.apps.googleusercontent.com',
                discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
                scope: "https://www.googleapis.com/auth/spreadsheets"
            }).then(function() {
                getValues();
            }, function(error) {
                console.log(JSON.stringify(error, null, 2));
            });
        }

        function getValues() {
            gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: spreadsheetId,
                range: range1
            }).then(function(response) {
                values1 = response.result.values[0][0];
                document.getElementById("username1").value = values1;
            });

            gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: spreadsheetId,
                range: range2
            }).then(function(response) {
                values2 = response.result.values[0][0];
                document.getElementById("username2").value = values2;
            });
        }

        function updateValues() {
            values1 = document.getElementById("username1").value;
            values2 = document.getElementById("username2").value;

            gapi.client.sheets.spreadsheets.values.update({
                spreadsheetId: spreadsheetId,
                range: range1,
                valueInputOption: 'USER_ENTERED',
                values: [[values1]]
            }).then(function(response) {
                console.log(response);
            });

            gapi.client.sheets.spreadsheets.values.update({
                spreadsheetId: spreadsheetId,
                range: range2,
                valueInputOption: 'USER_ENTERED',
                values: [[values2]]
            }).then(function(response) {
                console.log(response);
            });
        }
    </script>
</head>
<body onload="handleClientLoad()">
    <label for="username1">Username 1:</label>
    <input type="text" id="username1"><br><br>
    <label for="username2">Username 2:</label>
    <input type="text" id="username2"><br><br>
    <button onclick="updateValues()">Update</button>
</body>
</html>
