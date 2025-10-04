import React from 'react';

const CientificoCard = ({ cientifico }) => {

    const { nombre, imagenUrl, profesion, premios, descubrimiento } = cientifico;

    const premiosString = premios.join(', ');

    return (
        <div className="cientifico-card">
            <h3>{nombre}</h3>
            <div className="card-content">
                <img
                    src={imagenUrl}
                    alt={`Retrato de ${nombre}`}
                    className="cientifico-imagen"
                />
                <ul className="info-list">
                    <li>
                        • <strong>Profesión:</strong> {profesion}
                    </li>
                    <li>
                        • <strong>Premios: {premios.length}</strong> ({premiosString})
                    </li>
                    <li>
                        • <strong>Descubrió:</strong> {descubrimiento}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CientificoCard;