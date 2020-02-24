import React, { Component } from "react";


class Details extends Component {

    render() {
        const { match } = this.props;
        return (
            <>
                <h1>Detalles</h1>
                {/* <p>{match.params.}</p> */}
            </>
        );
    }

}

export default Details;