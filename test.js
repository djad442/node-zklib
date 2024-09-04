const ZKLib = require('./zklib')
const test = async () => {


    let zkInstance = new ZKLib('10.2.0.30', 4370, 10000, 4000);
    try {
        // Create socket to machine 
        await zkInstance.createSocket()


        // Get general info like logCapacity, user counts, logs count
        // It's really useful to check the status of device 
        console.log(await zkInstance.getInfo())
    } catch (e) {
        console.log("error", e)
    }

    // Disconnect the machine ( don't do this when you need realtime update :))) 
    // const users = await zkInstance.getUsers();
    // console.log(users.data.length);

    //const attendances = await zkInstance.getAttendances();

    

    //return attendances.data;

    //const rtl = await zkInstance.getRealTimeLogs();
    const attendances = await zkInstance.getAttendances();    

    await zkInstance.disconnect();
    return attendances.data;
}

test().then((data) => {
    //const last = data[data.length-1];
    console.log("Found data", data)
});