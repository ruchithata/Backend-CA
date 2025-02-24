class errorhandler extends error {
    constructor(statusCode, message) {
        super(message);
        res.status(statusCode,message);
    }
}