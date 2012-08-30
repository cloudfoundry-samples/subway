exports.dev = {
    port: 3000,
    client_port: 3000,
    host: 'localhost',
    mongoose_auth: 'mongodb://mongodb@localhost/subway'
}

exports.prod = {
    client_port: 80, // Websockets talk on port 80 on Cloud Foundry, regardless of listen port
    mongoose_auth: 'mongodb://mongodb@localhost/subway'
}

exports.misc = {
  max_log_size: 32000
}