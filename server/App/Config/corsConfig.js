const clientUrl = process.env.CLIENT_URL;
const allowedUrls = [
    clientUrl,
    'http://192.168.1.25:5173',
    'http://localhost:5174',
]
const corsConfig = {
    origin: (origin, callback) => {
        if (allowedUrls.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH"],
};

module.exports = corsConfig;