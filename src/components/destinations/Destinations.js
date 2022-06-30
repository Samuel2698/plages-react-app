import React from "react";
import "./DestinationsStyles.css";

import BoraBora from "../../assets/bora_bora.jpg";
import Bali from "../../assets/bali.jpg";
import LosRoques from "../../assets/los_roques.jpg";
import Maldives from "../../assets/maldives.jpg";
import Martinique from "../../assets/martinique.jpg";

const Destinations = () => {
  return (
    <div name="destinations" className="destinations">
      <div className="container">
        <h1>Hôtels tout compris</h1>
        <p>
          Bali, Bora Bora, Cancún, Los Roques, Maldives, Martinique, Oahu, et
          beaucoup plus de destinations partout dans le monde!
        </p>
        <div className="img-container">
          <img
            className="span-3 image-grid-row-2"
            src={Maldives}
            alt="Une plage des Maldives"
          />
          <img src={Bali} alt="Une plage de Bali" />
          <img src={LosRoques} alt="Une plage de Los Roques" />
          <img src={BoraBora} alt="Une plage de Bora Bora" />
          <img src={Martinique} alt="Une plage de Martinique" />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
