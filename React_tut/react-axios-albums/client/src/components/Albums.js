import React from "react";

function Albums(props) {
    return (
        <div className="albums-container">
            {props.albums.map((item, key) => {
                return (
                    <div className="album" key={key}>
                        <img src="https://via.placeholder.com/168x118" alt="" />
                        <h5>{props.albums[key].userId}</h5>
                        <h5>{props.albums[key].title}</h5>
                    </div>
                );
            })}
        </div>
    );
}

export default Albums;
