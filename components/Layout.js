import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default class extends React.Component {
    
    static propTypes() {
        return {
          children: React.PropTypes.object.isRequired,
          fluid: React.PropTypes.boolean
        }
    }

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        return(
        <React.Fragment>
            <Head>
                <title>Next.js-MySQL</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <div className="app">
                <header>
                    <h1><Link href={{ pathname: '/' }}>Home</Link></h1>
                    <h2>Title</h2> 
                </header>
                { this.props.children }
                <footer>
                    <hr/>
                </footer>
            </div>
        </React.Fragment>
        )  
    }
}