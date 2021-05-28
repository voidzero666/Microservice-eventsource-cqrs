const mongoose = require('mongoose');

const connection = process.env.MONGO_URL;

//conn
mongoose.connect(connection, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// Error
mongoose.connection.on(
  'error',
  console.error.bind(console, `Could not connect to ${connection}`)
);

// Success
mongoose.connection.once('open', () => {
  console.info(`Connected to Mongodb: ${connection}`);
});
