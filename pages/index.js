import React from 'react'
import Layout from '../components/Layout';
import getData from '../data/data.js';
import Employee from '../components/Employee';

export default class extends React.Component {
    static async getInitialProps({req, res}) {
        let props = {
            employees : ''
          }

        return props
    }

    constructor(props) {
        super(props)
        this.state = {
            employees : ''
        }
    }

    async componentDidMount() {
        this.getEmployees()
        console.log(this.state)
    }

    getEmployees() {
        fetch('/api/employees')
        .then(res => res.json())
        .then(response => {
          this.setState({
              employees : {response}
          })
        })
      }

    render() {
        return(
            <Layout {...this.props}>
            {
            //this.state.employees.map((employee, key) => <p>{employee.name}</p>)
            // <Employee id={key} data={employee} />)
            }
            </Layout>
        )
    }
}