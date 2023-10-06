# Build-Real-Time-Data-Streaming-System
Build a Real Time Data Streaming System with AWS Kinesis, Lambda Functions and a S3 Bucket
<img src="https://github.com/Nebiyu-0791/Build-Real-Time-Data-Streaming-System/blob/main/architecture.png">

# Set Up Your AWS Account:
If you don't already have an AWS account, sign up for one and log in to the AWS Management Console.

# Navigate to the IAM Console:
In the AWS Management Console, find the "Services" dropdown menu and select "IAM" under the "Security, Identity, & Compliance" section. Alternatively, you can search for "IAM" in the AWS Console search bar.

Access Roles:
In the IAM dashboard, select "Roles" from the left-hand navigation pane. This will take you to the Roles page.

Create a New Role:
Click the "Create role" button to start the process of creating a new IAM role.

Choose the Use Case:
In the "Select type of trusted entity" page, you will be prompted to choose the trusted entity type. Roles can be assumed by AWS services, Lambda functions, or other AWS accounts. Select the appropriate use case. Select AWS service: Select Lambda: 

Select the Permissions:
In the "Permissions" page, you can attach policies to the role. Policies define what actions can be performed by the entity assuming the role. You can either choose an existing policy or create a custom one. Make sure the policies you attach provide the necessary permissions for the role's intended purpose.
Select 	AmazonKinesisFullAcces
      	AmazonS3FullAccess
        CloudWatchFullAccess
        
Name the Role:
Provide a descriptive name for your role in the "Role name" field.

Create the Role:
Click the "Create role" button to create the IAM role.

## Create Lambda Functions:
You'll need Lambda functions to process the data from the Kinesis stream and store it in the S3 bucket. Here's an outline of the steps:

Navigate to the Lambda service in the AWS Management Console.
Click "Create function" and choose "Author from scratch."
Configure your function with appropriate settings and permissions.
Write the code for your Lambda function to process the data from the Kinesis stream and save it to the S3 bucket.
Ensure that the Lambda function has the necessary IAM roles and permissions to interact with Kinesis and S3.

We have to create three Lambda functions (consumer1, consumer2 and producer) and make sure that you give permission to the IAM role we created in the earlier step. And for the code I attached to the github file, check it out.

## Create an S3 Bucket:
You'll use this bucket to store the processed data. Follow these steps:

Navigate to the S3 service in the AWS Management Console.
Click "Create Bucket" and follow the instructions to create a new bucket.
Make sure that you have enabled the versioning and encryption sections.

Then go to the bucket, and under the event notification section, create an event notification.

## Create a Kinesis Data Stream:
This will be used to ingest the real-time data. Follow these steps:

Navigate to the Kinesis service in the AWS Management Console.
Click "Create data stream" and follow the instructions to create a new data stream. And give two shard estimator. Then go to the created kinesis stream and enable the encryption section.
Then go to the Consumer1 and Consumer2 lambda functions and add the kinesis data stream as a trigger.

## Test Your Setup:

Upload a file to S3 bucket and monitor the cloudwatch logs of lambda fuctions whether it works or not.
