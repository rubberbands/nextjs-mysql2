import Layout from '../components/Layout';
import getData from '../data/data.js'

const EmployeePage = (props) => (
    <Layout>
        <div className="container">
            <div className="employeeProfile">
                <p>Name : {props.employee.name}</p>
                <p>Address : {props.employee.address}</p>
                <p>Email : {props.employee.email}</p>
                <p>Phone : {props.employee.phone}</p>
            </div>
        </div>
    </Layout>
)

EmployeePage.getInitialProps = async ({query}) => {
    // could fetch data here
    let {id} = {...query}
    let employee = getData().find(m => m.id == id)
    return { employee } 
}

export default EmployeePage