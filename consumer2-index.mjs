export const handler = async (event) => {
    console.log(JSON.stringify(event));
    for(const record of event.Records){
      const data = JSON.parse(Buffer.from(record.kinesis.data, 'base64'));
      //send emails client, publish the data social media
      console.log('consumer #2', data);
    }
  };
  