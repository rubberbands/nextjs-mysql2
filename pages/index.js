import React from 'react'
import Layout from '../components/Layout';
import Employee from '../components/Employee';
import Link from 'next/link'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            employees : []
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    async componentDidMount() {
        this.getEmployees()
    }

    getEmployees() {
        fetch('/api/employees')
        .then(res => res.json())
        .then(response => {
          this.setState({employees : response.employees})
        })
    }

    async handleDelete(e) {
        e.preventDefault()
        var id = e.target.value
        fetch('/api/delete/' + id)
        .then(async res => {
            if (res.status === 200) {
              this.getEmployees()
            } else {
                res.json()
            }
          })

    }

    render() {
        return(
            <Layout {...this.props}>
            <Link href={{ pathname: '/new' }}>New</Link>
            {
            this.state.employees.map(
                (employee, key) => 
                    <div>
                        <Employee id={key} data={employee} />
                        {/* <button onClick={(e) => this.handleDelete(e, {employee})}> Delete Employee</button> */}
                        <button type="submit" onClick={this.handleDelete} value={employee.id}>Delete</button>
                    </div>
                )
            }
            </Layout>
        )
    }
}