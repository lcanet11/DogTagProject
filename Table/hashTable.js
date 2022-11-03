var createUsers = function(callback) {

    var dynamodb = new AWS.DynamoDB();

    var params = {
        TableName : "Unique_ID",
        KeySchema: [       
        { AttributeName: "UIUID", KeyType: "HASH"},
        { AttributeName: "AccountID", KeyType: "RANGE"}
    ],
    AttributeDefinitions: [       
        { AttributeName: "UIUID", AttributeType: "N" },
        { AttributeName: "AccountID", AttributeType: "S"}
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 5, 
        WriteCapacityUnits: 5
   }
};

dynamodb.createTable(params, callback);
};