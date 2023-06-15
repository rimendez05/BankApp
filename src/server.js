require('dotenv').config();
const {db} = require('./database/config');
const app = require('./app');

db.authenticate()
.then(()=> console.log('database authenticated'))
.catch((err)=> console.log(err))

db.sync()
.then(()=>(console.log("database synced")))
.catch((err)=>(err))

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}🛵`);
});