import {DynamoDBClient, UpdateItemCommand} from "@aws-sdk/client-dynamodb";
import {marshall, unmarshall} from "@aws-sdk/util-dynamodb";

export const dynamoClient = () => {
    // Sets the local configuration when in development mode.
    const configuration = {
        ...(process.env.NODE_ENV === 'development' && {
            endpoint: 'http://host.docker.internal:4566',
            region: 'us-east-1'
        })
    }
    return new DynamoDBClient(configuration)
}