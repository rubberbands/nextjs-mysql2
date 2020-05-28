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
          console.error(e)
        }
      }
    
    server.get('/api/delete/:id', async (req, res) => {
        var id = req.params.id
        const results = await deleteEmployee(id)
        if(results) {
            res.redirect('/')
        } else {
            res.status(500)
        } 
    })

    async function deleteEmployee(id) {
        try {
            const results = await pool.query(`DELETE FROM employee where id='${id}'; `)
            return results
        } catch(e) {
            console.error(e)
        }
    }

    server.get('/api/employee/:id', async (req, res) => {
        var id = req.params.id
        const results = await getEmployee(id)
        if(results){
            return res.json({employee : results[0][0]})
        } else {
            return res.json({message: 'No such Employee'})
        }
    })

    async function getEmployee(id) {
        try {
            const results = await pool.query(`SELECT * FROM employee where id='${id}'; `)
            return results
        } catch(e) {
            console.error(e)
        }
    }

    server.post('/api/new', async (req, res) => {
        var name = req.body.name
        var address = req.body.address
        var email = req.body.email
        const results = await addEmployee(name, address, email)
        if(results) {
            res.redirect('/')
        } else {
            res.status(500)
        } 
    })

    async function addEmployee(name, address, email) {
        try {
          const results = await pool.query(`INSERT INTO employee (name, address, email) VALUES ("${name}", "${address}", "${email}");`)
          return results
        }catch(e){
          console.error(e)
        }
    }

    server.post('/api/update/:id', async (req, res) => {
        var id = req.params.id
        var name = req.body.name
        var address = req.body.address
        var email = req.body.email
        const results = await updateEmployee(id, name, address, email)
        if(results) {
            res.redirect('/')
        } else {
            res.status(500)
        }
    })

    async function updateEmployee(id, name, address, email) {
        try {
          const results = await pool.query(`UPDATE employee SET name='${name}', address='${address}', email='${email}' WHERE id='${id}';`)
          return results
        }catch(e){
          console.error(e)
        }
    }
}