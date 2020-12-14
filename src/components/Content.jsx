import React from 'react';

const Content = (props) => {
    const { name, url, description, addtInfo } = props;
    return (
        <li className="list-group-item list-group-item-action">
            <h6>
                <a href={url} target="_blank" rel="noreferrer">{name}</a>
                <p className="card-subtitle text-muted mt-2">{description}</p>
                <p><span className="badge badge-pill badge-secondary mt-1">{addtInfo}</span></p>
            </h6>
        </li>
    );
}

export default Content;
