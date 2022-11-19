const app = require('./app')
const endless = require('./externalAPI/endless')

const PORT = 3003

endless.initApi()

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
