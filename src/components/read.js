import React from 'react';
import { Movies } from './movies';
import axios from 'axios';
export class Read extends React.Component{

    state = {
        movies:[ ]
    };
    componentDidMount(){
        axios.get('http://localhost:3000/api/movies')
        .then(
            (response) => {
                this.setState({movies: response.data})
            }
        )
        .catch(
            (error) => {console.log(error)}
        );
    }
    render(){
        return(
            <div>
            <h3>Hello from read Component</h3>
            <Movies movies = {this.state.movies}></Movies>
            </div>

        )
    }
}