import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import axios from "axios";
import { withRouter } from "react-router";

const Voucher = (props) => {
  const [valuesInput, setValues] = useState({
    chambres:"Chambre single",
    formule:"ALL Inclusive",

  });

  const [valuesInput_2, setValues_2] = useState({
  });



  const MyValuesInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      event.preventDefault();
       const data = await axios.post(
        "http://localhost:4000/api/voucher/",
        valuesInput
      );

      toast("Voucher a été ajouté avec succès ", {
        type: "success",
      });
    
      console.log(valuesInput_2)
      props.history.push("/admin/functions/impression/",data.data._id)

      
    } catch (error) {
      if (error.response.data) {
        toast(error.response.data, {
          type: "error",
        });
      }
    }

  
  };


  return (
    <div>
      <Modal
      
        isOpen={props.modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => props.setModalIsOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "55%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
          overlay: {
            backgroundColor: "rgba(206, 239, 248,0.8)",
          },
        }}
      >

        <div className="auth-form-light text-left p-5">
          <h3 className="font-weight-light">Voucher</h3>
          <form
            className="pt-3"
            onSubmit={handleFormSubmit}
          >
                                    <ToastContainer></ToastContainer>

            <div className="bloc_component_ajouter_comptes">
              <div>
                <h5 style={{ color: "green" }}>
                  Les informations sur le client
                </h5>

                <div className="bloc_np">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUsername2"
                    name="nom_client"
                    required
                    placeholder="Nom du client"
                    onChange={MyValuesInput}
                  />

                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUsername2"
                    name="prenom_client"
                    required
                    placeholder="Prénom du client"
                    onChange={MyValuesInput}
                  />
                </div>
                <h5 style={{ color: "green" }}>Les informations d'hôtel</h5>

                <div className="bloc_np">

                <input
                    type="text"
                    className="form-control"
                    id="exampleInputUsername2"
                    name="nom_hotel"
                    required
                    placeholder="Nom de l'hôtel"
                    onChange={MyValuesInput}
                  />


                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUsername2"
                    name="adresse_hotel"
                    required
                    placeholder="Adresse de l'hôtel"
                    onChange={MyValuesInput}
                  />

                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputUsername2"
                    name="tel_hotel"
                    required
                    placeholder="Numéro du téléphone"
                    onChange={MyValuesInput}
                  />
                </div>
                <h5 style={{ color: "green" }}>Date d'Arrivée</h5>

                <div className="bloc_np">
                  <input
                  style={{height:"3em"}}
                    type="date"
                    className="form-control"
                    name="date_arriver"
                    required
                    onChange={MyValuesInput}
                    min={
                      new Date(
                        new Date().getTime() -
                          new Date().getTimezoneOffset() * 60000
                      )
                        .toISOString()
                        .split("T")[0]
                    }
                    //minDate={new Date()}
                  />
                  
                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      id="input_email"
                      name="nuits"
                      placeholder="Nuits"
                      required
                      onChange={MyValuesInput}
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text"> Nuit(s)</div>
                    </div>{" "}
              
                </div>
             
                <h5 style={{ color: "green" }}>Chambres</h5>

                <div className="bloc_np">
                  <select
                    class="form-select_date_deb"
                    aria-label="Default select example"
                    name="chambres"
                    onChange={MyValuesInput}
                  >
                    <option value="Chambre single">Chambre single</option>
                    <option value="Chambre double/standard">
                      Chambre double/standard
                    </option>
                    <option value="Chambre triple">Chambre triple</option>
                    <option value="hambre quadriple">Chambre quadriple</option>
                    <option value="Deux chambres communicantes">
                      Deux chambres communicantes
                    </option>
                  </select>
                </div>
                <div className="bloc_np">
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputUsername2"
                    name="adultes"
                    required
                    placeholder="Adultes"
                    onChange={MyValuesInput}
                  />
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputUsername2"
                    name="enfants"
                    required
                    placeholder="Enfants"
                    onChange={MyValuesInput}
                  />

                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputUsername2"
                    name="bebes"
                    required
                    placeholder="Bébés"
                    onChange={MyValuesInput}
                  />
                </div>

                <h5 style={{ color: "green" }}>Formule</h5>

                <div className="bloc_np">
                  <select
                                    style={{height:"3em"}}

                    class="form-select_date_deb"
                    aria-label="Default select example"
                    name="formule"
                    onChange={MyValuesInput}
                  >
                    <option value="All Inclusive Soft">
                      All Inclusive Soft
                    </option>
                    <option value="ALL Inclusive">ALL Inclusive </option>
                    <option value="Pension complète">PC</option>
                    <option value="Demi-pension">DMP </option>
                    <option value="Logement petit déjeune">LPD </option>
                  </select>

                  
                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      id="input_email"
                      name="montant"
                      required
                      placeholder="Montant"
                      onChange={MyValuesInput}
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">DT</div>
                    </div>{" "}
                </div>

              

                <div className="bloc_creation_compte">
                  <div className="mb-2">
                    <button
                      type="submit"
                      className="btn_terminer"
                    >
                      <i className="mdi mr-2" />
                      Terminer{" "}
                    </button>
                  </div>

                  <div className="mb-2">
                    <button
                      type="button"
                      onClick={() => props.setModalIsOpen(false)}
                      className="btn btn-block btn-facebook auth-form-btn"
                    >
                      <i className="mdi mr-2" />
                      Retour{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/img/3125848.png"
                  alt="erreur_1"
                  className="image_money"
                />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default withRouter(Voucher);
