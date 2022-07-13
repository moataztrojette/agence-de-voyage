import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Clients = () => {
  const [ListeClient, setListeClient] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [valuesInput, setValues] = useState({});
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios.get("http://localhost:4000/api/voucher/vouchers").then((data) => {
      setListeClient(data.data);
    });
  }, []);


  const MyValuesInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    if (valuesInput.date_deb === "all" || valuesInput.date_fin==="all" ) {
        axios.get("http://localhost:4000/api/voucher/vouchers").then((res) => {
          setListeClient(res.data);
        });
        console.log("1")

      }
      else{
        console.log("2")

       const  response = await axios.post(
            "http://localhost:4000/api/voucher/filter",valuesInput)           
            setListeClient(response.data);
      }
     
  
  };


  const deleteVoucher = async (id) => {
    await axios
      .delete("http://localhost:4000/api/voucher/" + id)
      .then((verife) => {
        if (verife.status != 200) {
          Swal.fire("Deleted!", "Your file has been deleted.", "error");
        } else {
          const preventStatu = ListeClient;
          const newState = preventStatu.filter((dev) => dev._id != id);
          setListeClient(newState);
          Swal.fire("Voucher", "voucher has been deleted", "success");
        }
      });
  };
  const recherche = async (event) => {
    if (event.target.value === "") {
      axios.get("http://localhost:4000/api/voucher/vouchers").then((data) => {
        setListeClient(data.data);
      });
    } else {
      let res = await axios.get(
        "http://localhost:4000/api/voucher/serche/" + event.target.value
      );
      setListeClient(res.data);
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div class="filter_comptes">
            <div className="filter_historique">
              <form className="form_virement" onSubmit={handleFormSubmit}>
                <select
                  class="form-select_date_deb"
                  aria-label="Default select example"
                  name="date_deb"
                  onChange={MyValuesInput}
                >
                  <option value="all">Date de début</option>
                  <option value="1">Janvier</option>
                  <option value="2">Février</option>
                  <option value="3">Mars</option>
                  <option value="4">avril</option>
                  <option value="5">Mai</option>
                  <option value="6">Juin</option>
                  <option value="7">Juillet</option>
                  <option value="8">Août</option>
                  <option value="9">Septembre</option>
                  <option value="10">Octobre</option>
                  <option value="11">Novembre </option>
                  <option value="12">Décembre</option>
                </select>
                <select
                  class="form-select_date_fin"
                  aria-label="Default select example"
                  name="date_fin"
                  onChange={MyValuesInput}
                >
                  <option value="all">Date de Fin</option>
                  <option value="1">Janvier</option>
                  <option value="2">Février</option>
                  <option value="3">Mars</option>
                  <option value="4">avril</option>
                  <option value="5">Mai</option>
                  <option value="6">Juin</option>
                  <option value="7">Juillet</option>
                  <option value="8">Août</option>
                  <option value="9">Septembre</option>
                  <option value="10">Octobre</option>
                  <option value="11">Novembre </option>
                  <option value="12">Décembre</option>
                </select>
                <div class="input-group">
                  <button type="submit" class="btn btn-primary" id="btn_serche">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div class="form-outline">
              <input
                style={{ width: "19em" }}
                name="serche"
                onChange={recherche}
                id="form1"
                class="form-control"
                placeholder="Chercher par prénom "
              />
            </div>
          </div>
          <div className="card-header pb-0">
            <h6>Clients</h6>
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Date émission
                    </th>

                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Heure émission{" "}
                    </th>

                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Nom de l'hotel{" "}
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Nom et prénom du client{" "}
                    </th>
                  </tr>
                </thead>
                {ListeClient.map((data) => (
                  <tbody>
                    <tr>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">
                          {data.date_emission}{" "}
                        </span>
                      </td>

                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">
                          {data.heure_emission}{" "}
                        </span>
                      </td>

                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">
                          {data.nom_hotel}{" "}
                        </span>
                      </td>

                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">
                          {data.prenom_client} {data.nom_client}
                        </span>
                      </td>

                      <td class="align-middle text-center text-sm">
                        <Link to={"/admin/functions/impression/" + data._id}>
                          <img
                            src="/img/icons8-view-64-1.png"
                            className="icon_trash"
                          />
                        </Link>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <img
                          src="/img/icons8-trash.gif"
                          className="icon_trash"
                          onClick={() => {
                            Swal.fire({
                              title: "Êtes - vous sûr ?",
                              text: "",
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#3085d6",
                              cancelButtonColor: "#d33",
                              confirmButtonText: "Oui, supprimez-le!",
                            }).then((result) => {
                              if (result.value) {
                                deleteVoucher(data._id);
                              }
                            });
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
