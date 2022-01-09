import React from "react";
import {Component} from "react";
import Pelicula from "./Pelicula";

class Peliculas extends Component {

    state = {
        peliculas: [
            {title: "Spiderman", image: "https://filmdaily.co/wp-content/uploads/2021/12/nowayhome-02.jpeg"},
            {title: "Rapido y Furioso", image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/03/12/15840382283314.jpg"},
            {title: "TED", image: "data:image/jpeg;base64,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"}
        ],
        peliculasFavoritas: []
    }

    setPeliculaFavorita = (pelicula) => {
        this.setState({peliculasFavoritas: pelicula})
    }

    render() {
        return (
            <div id="App-peliculas">
                <h2 id="subtitle h2">Películas</h2>
                {
                    this.state.peliculasFavoritas.title
                        ? <h3 id="subtitle h3">Película Favorita: {this.state.peliculasFavoritas.title}</h3>
                        : null
                }
                {
                    this.state.peliculas.map((pelicula,i) => {
                        return (
                            <Pelicula key={i} pelicula={pelicula} peliculasFavoritas={this.setPeliculaFavorita}></Pelicula>
                        )
                    })
                }
            </div>
        );
    }

}

export default Peliculas;