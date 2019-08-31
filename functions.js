module.exports = function (context, IoTHubMessages) {
    context.log(`JavaScript eventhub trigger function called for message array: ${IoTHubMessages}`);
    var deviceId = "";
    var image_url = "";
    var gps = "";

    IoTHubMessages.forEach(message => {
        context.log(`Processed message: ${message}`);
        deviceId = message.deviceId;
        gps = message.gps;
    });

    var output = {
        "deviceId": deviceId,
        "gps": gps
    };

    context.log(`Output content: ${output}`);
    context.bindings.outputDocument = output;
    context.done();
};