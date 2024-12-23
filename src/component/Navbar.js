import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
export class Navbar extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand text-white bg-danger p-2" to="/">NewsAPP</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item "><Link className="nav-link" to="/">Home </Link></li>
                            <li className="nav-item "><Link className="nav-link" to="/general">General </Link></li>
                            <li className="nav-item "><Link className="nav-link" to="/business">Business </Link></li>
                            <li className="nav-item "><Link className="nav-link" to="/technology">Technology </Link></li>
                            <li className="nav-item "><Link className="nav-link" to="/sports">Sports </Link></li>
                            <li className="nav-item "><Link className="nav-link" to="/science">Science </Link></li>
                            <li className="nav-item "><Link className="nav-link" to="/health">Health </Link></li>
                            <li className="nav-item "><Link className="nav-link" to="/entertainment">Entertainment </Link></li>

                            

                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
