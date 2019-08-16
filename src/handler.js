module.exports.hello = async (event, context) => {
  console.log('Event', JSON.stringify(event, null, 2));
  console.log('Context', JSON.stringify(context, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event
      },
      null,
      2
    )
  };
};
