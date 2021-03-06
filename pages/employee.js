import React from 'react'
import Layout from '../components/Layout'
import Router from 'next/router'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id : '',
            name : '',
            address : '',
            email : ''
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeAddress = this.handleChangeAddress.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentDidMount(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        this.getEmployee(id)
    }

    handleChangeName(event){
        this.setState({name: event.target.value});
    }
    
    handleChangeAddress(event){
        this.setState({address: event.target.value});
    }

    handleChangeEmail(event){
        this.setState({email: event.target.value});
    }

    getEmployee(id) {
        fetch('/api/employee/' + id)
        .then(res => res.json())
        .then(response => {
          this.setState({
                id : response.employee.id,
                name : response.employee.name,
                address : response.employee.address,
                email : response.employee.email
            })
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        let data = {
            name: this.state.name,
            address: this.state.address,
            email: this.state.email
          }

        fetch('/api/update/' + this.state.id, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json'
            }
        })
        .then(async res => {
            if (res.status === 200) {
                Router.push('/')
            } else {
            }
          })

    }

    render(){
        return(
            <Layout {...this.props}>
                <div className="container">
                    <form >
                        <p>Name : </p> <input type='text' value={this.state.name} onChange={this.handleChangeName}/>
                        <p>Address : </p> <input type='text' value={this.state.address} onChange={this.handleChangeAddress}/>
                        <p>Email : </p> <input type='text' value={this.state.email} onChange={this.handleChangeEmail}/>
                        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                    </form>
                </div>
            </Layout>
        )
    }
}