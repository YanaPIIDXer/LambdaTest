let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    const body = JSON.parse(event.body)
    
    try {
        const responseHeaders = {
            "Access-Control-Allow-Methods": "OPTIONS,POST",
            "Access-Control-Allow-Headers" : "*",
            "Access-Control-Allow-Origin": "*"
        }
        response = {
            'statusCode': 200,
            'headers': responseHeaders,
            'body': JSON.stringify({
                result: body.a + body.b,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
