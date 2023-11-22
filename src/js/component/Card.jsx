import React from "react";

function Card() {

    return (
        <div className="card text-center mx-3" style={{width: "325px"}}>
            <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1379753974i/151822.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, illum mollitia dolorum expedita non enim laborum eos cum voluptas deserunt aspernatur, esse, amet labore laboriosam.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )

}

export default Card;