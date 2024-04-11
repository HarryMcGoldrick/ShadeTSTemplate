# Stack Playground SAM template

A minimal Typescript boilerplate SAM application that works out of the box with  Stack Playground.

### Steps to run:

1. Install the dependencies
   ``npm install``
2. Build the handler code. ```npm run build``` or if you are making changes use ```npm run build:watch``` for instant
   updates.
3. Import into StackPlayground
4. Invoke the handler and view the output in the dynamo table.

### Steps to deploy to AWS
1. Ensure that the SAM cli is installed first. [Install Guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
2. Configure your AWS access with `aws configure`
3. Make any changes to the `samconfig.toml` as necessary. Pleaes note the region is set as eu-west-1 by default.
4. Run the command. ```npm run deploy```