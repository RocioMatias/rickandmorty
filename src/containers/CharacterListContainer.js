import React, { Component } from "react";
import List from "../components/List";
import Nav from "../components/Nav";
import axios from "axios";

class CharacterListContainer extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
                const charactersData = res.data.results;
                this.setState({
                    items: charactersData,
                })
                // console.log(charactersData);

            }).catch(console.log('error'))
    }
    render() {

        const { items } = this.state;

        return (
            <>
                <Nav />
                <List items={items} />
            </>
        )
    }
}

export default CharacterListContainer;