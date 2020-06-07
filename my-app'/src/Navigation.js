import react from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom" 
import ProductList from './product-list'

const Navigation = () => {
    return (
        <Router>
            <Route path='/' component={ProductList} />
        </Router>
    )
}

export default Navigation