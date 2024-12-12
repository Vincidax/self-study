const cartValidation = require("./lib/cartValidation");
app.use(cartValidation.resetValidation);
app.use(cartValidation.checkWaivers);
app.use(cartValidation.checkGuestCounts);
