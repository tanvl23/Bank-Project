const dotenv = require('dotenv')
dotenv.config()

const PORT = 5005
const app = require('./app')
app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}.......`);
})
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));