// create "admin" subdomain...this should appear
//before all your other routes
var admin = express.Router();
app.use(vhost("admin.meadowlark.local", admin));

//create admin routes; these can be defined anywhere
admin.get("*", (req, res) => res.send("Welcome, Admin!"));

//regular routes
app.get("*", (req, res) => res.send("Welcome, User!"));
