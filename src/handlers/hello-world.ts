import {logger} from "../utils/logger";
import {PutItemCommand, PutItemCommandInput} from "@aws-sdk/client-dynamodb";
import {dynamoClient} from "../aws-clients/dynamo";
import {marshall} from "@aws-sdk/util-dynamodb";

export const handler = async (request: unknown): Promise<string> => {
    try {
        const item: PutItemCommandInput = {
            Item: marshall({pk: 'hello', sk: 'world!'}),
            TableName: process.env.HELLO_WORLD_TABLE
        }

        await dynamoClient().send(new PutItemCommand(item));
        logger.info('Successfully put item into hello world table', {item})
        return 'Success';
    } catch (e) {
        logger.error('Failed putting item into hello world table', {error: e})
    }
}
