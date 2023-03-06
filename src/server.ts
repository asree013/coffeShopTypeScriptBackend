import app from "./app"

const port = 3500

const start = async () => {
    try {
        await app.listen(port)
        console.log('Server Is Running!!!!');
        console.log('http://localhost:'+port);
    } catch (error) {
        console.log(error)
        process.exit(0)
    }
}

start()