module.exports = {
    "development": {
        "username": "postgres",
        "password": "password",
        "database": "wsn_development",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "test": {
        "username": "postgres",
        "password": "password",
        "database": "wsn_test",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "production": {
        "username": "postgres",
        "password":  '',
        "database":  '',
        "host"    :  '',
        "dialect" : "postgres",
        "dialectOptions": {
            "ssl": true
        }
    }
}