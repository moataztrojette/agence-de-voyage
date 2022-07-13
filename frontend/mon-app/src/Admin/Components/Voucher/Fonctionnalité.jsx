import React, { useEffect, useState } from 'react'
import { Link  } from 'react-router-dom';
import Voucher from './Voucher/Voucher';
import axios from "axios";

const Fonctionnalité = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);





    return (
  
    <div>  
      {modalIsOpen === true ? (<Voucher  modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}  />) : (<div></div>)  } 



    <div class="container-fluid py-4"> 

    <div class="row">

      <div class="col-lg-12">

        <div class="row">

          <div class="col-md-12 mb-lg-0 mb-4">

            <div class="row mt-4">

              <div >


                <div class="card">

                  <div class="card-header pb-0">

                    <h6>Voucher </h6>

                    <p class="text-sm">
                      <span class="font-weight-bold">Veuillez trouver ici  les fonctionnalité
                      </span>
                    </p>
                  </div>
                  <div class="card-body p-3">
                    <div >
                      <div class="card-body pt-4 p-3">
                          <ul class="list-group" >
                         
                          <li class="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg" onClick={() => setModalIsOpen(true)} >
            
                              <div className='bloc1' >
                                <div className='bloc2' >
                                            <img src="/img/3125848.png"  alt="erreur_1" className='imgWM'/>
                                          <h6>Voucher</h6>

                                      </div>
                            
                  
                                      <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" alt="erreur_1" className='imgW'/>                                
                                </div>
                                </li>
                             

                                <Link to={'/admin/clients'}><li class="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg" >
            
                                <div className='bloc1'>
                                <div className='bloc2'>
                                   <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/4a90e2/external-user-management-kiranshastry-lineal-kiranshastry-10.png" alt="erreur_1" className='imgWM'/>
                                      <h6 >Historique</h6>
                            
                  </div>
                  <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" alt="erreur_1" className='imgW'/>                                   
                  </div>

                                </li></Link>


                               

                           

                         

                     
                        
                        
                          </ul>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
 
  
  </div> </div> );
}
 
export default Fonctionnalité;