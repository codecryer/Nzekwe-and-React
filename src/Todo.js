import React, { Component } from 'react' ;
import Header from './Header';
class Todo extends Component {
    render(){
        return (
            <div>
                 {/* render header here */}
                <Header />
                <h1>Welcome to my todo app</h1>

            </div>
        )
    }
} 

export default Todo;