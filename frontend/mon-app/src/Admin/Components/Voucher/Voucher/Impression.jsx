import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";

const Impression = (props) => {
  const [posts, setPosts] = useState([]);
  const componentRef = useRef();

  useEffect(async () => {
    console.log(props.location.state);
    const fetchPosts = async () => {
      const res = await axios.get(
        "http://localhost:4000/api/voucher/find/" + props.location.state
      );
      setPosts(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <ReactToPrint
        trigger={() => (
          <button class="btn btn-success">Imprimer le voucher!</button>
        )}
        content={() => componentRef.current}
      />
      <div className="impression" ref={componentRef}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00cba9"
            fillOpacity={5}
            d="M0,288L48,261.3C96,235,192,181,288,138.7C384,96,480,64,576,85.3C672,107,768,181,864,192C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
        <div className="b1" style={{ marginBottom: "-4em", marginTop: "16px" }}>
          <div className="log1" />
          <div className="log2">
            <img src="/img/logo-agence.png" className="logo-agence" alt="" />
          </div>
        </div>

        <div className="img-backgound">
          <h3 className="text-Hotel">Voucher Hôtel</h3>
          <br />
          <div>
            <div className="b2">
              <div>
                <h6>Date émission : {posts.date_emission}</h6>
                <h6>{posts.nom_hotel}</h6>
              </div>
              <div style={{border:"0.2px solid"}}></div>

         

              <div>
                <h6>
                  Nom et Prénom du client : 
                  <h6>{posts.prenom_client} {posts.nom_client}{" "}</h6>
                </h6>
              </div>
            </div>
            <br />
            <div className="b2">
            <div>
                <h6>Adressse : {posts.adresse_hotel}</h6>
                <h6>Tel : (+216) {posts.tel_hotel}</h6>
              </div>
            </div>

          
            <br />


            <div style={{marginBottom:"10px"}}>
              <h6  style={{ textDecoration: "underline" ,marginLeft:"19px"}}>Détail de la réservation</h6>
              <table className="b4">
                <tbody>
                  <tr>
                    <th />
                    <th />
                    <th>
                      <h6>Arrivée</h6>
                    </th>
                    <th>
                      <h6>Durée</h6>
                    </th>
                    <th>
                      <h6>Chambres</h6>
                    </th>
                    <th>
                      <h6>Adultes</h6>
                    </th>
                    <th>
                      <h6>Enfants</h6>
                    </th>
                    <th>
                      <h6>Bébés</h6>
                    </th>
                    <th>
                      <h6>Formule</h6>
                    </th>
                  </tr>
                  <tr>
                    <th />
                    <th />
                    <td>
                      <h6>{posts.date_arriver}</h6>
                    </td>
                    <td>
                      <h6>{posts.nuits} Nuit(s)</h6>
                    </td>
                    <td>
                      <h6>{posts.chambres}</h6>
                    </td>
                    <td>
                      <h6>{posts.adultes}</h6>
                    </td>
                    <td>
                      <h6>{posts.enfants}</h6>
                    </td>
                    <td>
                      <h6>{posts.bebes}</h6>
                    </td>
                    <td>
                      <h6>{posts.formule}</h6>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        

            <div className="b7" style={{padding:"20px"}}>
              <h6 style={{ textDecoration: "underline" ,marginLeft:"10px"}}>
                Paiement de la réservation :
              </h6>
              <p style={{ color: "black",
 }}>
                - Dès son arrivée{" "}
                <b>
                  {posts.prenom_client} {posts.nom_client}
                </b>{" "}
                doit payer la somme de : <b>{posts.montant} TND</b> à l hôtel ,
                Ce prix ne comprend pas la nouvelle taxe de séjour appliquée par
                le projet de loi de finances 2018
              </p>
              <p style={{ color: "black"
 }}>                - La facturation sera faite au nom du client{" "}
                <b>
                  {posts.prenom_client} {posts.nom_client}
                </b>
              </p>
            </div>

            <div style={{padding:"20px"}}>
              <div className="b6" style={{marginTop:"-50px"}}>
                <img src="/img/noter.jpg" />
                <h6 >A NOTER : </h6>
              </div>

              <p style={{ color: "black"
 }}>                - 18.00 TND : est le montant total de taxe de séjour à payer sur
                place à l'hôtel.
              </p>
              <p style={{ color: "black"
 }}>                - Toute modification de commande peut engendrer des frais
                supplémentaires.
              </p>
              <p style={{ color: "black"
 }}>                - Arrivée à partir de 15h00 (la formule All Inclusive Soft
                commence par le diner), départ avant 12h00 . L'hôtel se réserve
                le droit de facturer un supplément pour non-respect de l´une de
                ces conditions.
              </p>
              <p style={{ color: "black"
 }}>                - Tout client <b>Racines Travel</b> services s'engage à
                respecter le règlement intérieur de l'hôtel lors du séjour
                (vêtements de baignade, tenue correcte au restaurant...).
              </p>
            </div>
          </div>

 
        </div>
        <div style={{backgroundColor:"#00CBA9",padding:"10px",display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:"-23px"}}>
          <div style={{width:"25em",marginLeft:"50px"}}>
          <img
                            src="/img/image-footer.jpg"
                            style={{ width: "5em", borderRadius: "10px" }}
                          />
                              <h6 style={{ color: "#ffffff" }}>Besoin d´aide :</h6>
                        <h6 style={{ color: "#ffffff" }}>(+216) 50 718 439</h6>
          </div>
          <div>
          <h6 style={{ color: "#ffffff" }}>
                        -Toute demande de modification ou annulation de commande
                        devra être effectuée 72 heures avant votre arrivée
                      </h6>
                      <h6 style={{ color: "#ffffff" }}>
                          -Racines Travel Services, agence de voyage tunisienne
                          catégorie A sous licence n° 8517 Avenue Hassine Anane
                          - Houmet Souk 4180 Djerba.
                        </h6>
          </div>
       
        </div>
      </div>
    </>
  );
};

export default Impression;
