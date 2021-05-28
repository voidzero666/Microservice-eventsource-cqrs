const express = require('express');
const bodyParser = require('body-parser');

const auxillaryFuelRoutes = require('./routes/fueltank.routes');
const RunwayRoutes = require('./routes/runway.routes');
const TaxiwayRoutes = require('./routes/taxiway.routes');
const AirplaneRoutes = require('./routes/airplane.routes');
const replayRoutes = require('./routes/replay.routes');

const app = (module.exports = express());
const port = 8080;

require('./utils/database.utils');
require('./utils/MQEventListener.utils');

app.use(bodyParser.json({ extended: true }));

app.use('/airside/fuel', auxillaryFuelRoutes);
app.use('/airside/runway', RunwayRoutes);
app.use('/airside/taxiway', TaxiwayRoutes);
app.use('/airside/airplane', AirplaneRoutes);

app.use('/airside/replay', replayRoutes);

app.listen(port, () => {
  console.info(`Started Airside on port ${port}`);
});