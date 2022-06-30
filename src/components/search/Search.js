import React from "react";
import "./SearchStyles.css";

import Gold from "../../assets/gold.png";

const Search = () => {
  return (
    <div name="préparation" className="search">
      <div className="container">
        <div className="left">
          <h2>Vacances de luxe pour deux personnes</h2>
          <p>
            Venez découvrir le summum des vacances tout compris de luxe dans les
            meilleures plages du monde, y compris bien sûr pour les couples.Nos
            stations balnéaires de luxe, situées le long des plus beaux décors
            tropicaux et des plages exquises de Bali, de la Martinique, des
            Maldives, de Tahiti, de Cancún, etc. proposent des repas
            gastronomiques illimités, des bars uniques servant des liqueurs et
            des vins de qualité supérieure, de vues paradisiaques et une
            expérience incomparable! Si vous planifiez un mariage, nous sommes
            aussi le leader des mariages et des forfaits lune de miel.
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img
                  src={Gold}
                  alt="emblème 'WORLD TRAVEL AWARDS WINNER 2021'"
                  style={{ marginRight: "1rem" }}
                />
              </div>
              <div>
                <h3>LEADER MONDIAL</h3>
                <p>STATIONS BALNÉAIRES TOUT INCLU DEPUIS 20 ANS DE SUITE</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>VACANCES DE QUALITÉ SUPÉRIEURE</h3>
                <p>STATIONS BALNÉAIRES RECONNUES DANS LE MONDE ENTIER</p>
                <button>VOIR LES FORFAITS</button>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="promo">
            <h4 className="save">OBTENEZ UNE REDUCTION DE 10%</h4>
            <p className="timer">12 HEURES RESTANTES!</p>
            <p className="offers">REGARDEZ TOUTES LES OFFRES</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>Destination</label>
              <select>
                <option value="1">Bali</option>
                <option value="1">Bora Bora</option>
                <option value="1">Cancun</option>
                <option value="1">Los Roques</option>
                <option value="1">Maldives</option>
                <option value="1">Martinique</option>
                <option value="1">Oahu</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Enregistrement</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Départ</label>
                <input type="date" />
              </div>
            </div>
            <button>Tarifs et disponibilités</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
