import React from 'react';
import { MoviesItem } from './movieItem';

export class Movies extends React.Component{

    render(){
        return( this.props.movies.map((movie) =>{
            return <MoviesItem movie = {movie} ReloadData={this.props.ReloadData}></MoviesItem>
        }));
        
    }
}