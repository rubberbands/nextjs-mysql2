import React from 'react'
import Layout from '../components/Layout';
import Router from 'next/router'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : '',
            address : '',
            email : ''
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeAddress = this.handleChangeAddress.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleSubmit(e) {
        e.preventDefault()

        let data = {
            name: this.state.name,
            address: this.state.address,
            email: this.state.email
          }

        fetch('/api/new', {
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

    render() {
        return(
            <Layout {...this.props}>
                <div>
                    <form>
                        <label>
                            Name:
                            <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
                        </label>
                        <label><br />
                            Address:
                            <input type="text" value={this.state.address} onChange={this.handleChangeAddress}/>
                        </label><br />
                        <label>
                            Email:
                            <input type="text" value={this.state.email} onChange={this.handleChangeEmail}/>
                        </label>
                        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                    </form>
                </div>
            </Layout>
        )
    }
}