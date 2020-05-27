const pool = require('../dbconfig/dbconfig')

module.exports = (server) => {
    if (server === null) {
        throw new Error('server should be an express instance')
    }

    server.get('/api/employees', async (req, res) => {
        const results = await getEmployees()
        if(results){
            return res.json({employees : results[0]})
        } else {
            return res.json({message: 'No Employees'})
        }
    })

    async function getEmployees() {
        try {
          const results = await pool.query(`SELECT * FROM employee`)
          return results
        }catch(e){
            console.log("error");
          console.error(e)
        }
      }
}