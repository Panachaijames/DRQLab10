import React from 'react';
import Card from 'react-bootstrap/Card';
export class MoviesItem extends React.Component {

    render() {
        return (
            <div>
                {/*
            <h3>{this.props.movie.Title}</h3>
            <p>{this.props.movie.Year}</p>
            <img src={this.props.movie.Poster} width="200" height="200"></img>
        */}
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.movie.year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>

        );
    }
}