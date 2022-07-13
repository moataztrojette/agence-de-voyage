import {React,useState,useEffect} from "react";
import axios from "axios";

import Navbar from './Navbar/Navbar';
import SideBar from './SideBar/SideBar';
import { Route, Switch } from "react-router-dom"
import Fonctionnalité from '../Components/Voucher/Fonctionnalité';
import Clients from '../Components/Voucher/Clients/Clients';
import Impression from "../Components/Voucher/Voucher/Impression";
import Historique from "../Components/Voucher/Voucher/Historique";


const Interface = (props) => {

const [user, setUser] = useState(null);

useEffect(()=>{
    axios.get("http://localhost:4000/api/admin/verife").then((res)=>{
        setUser(res.data)
    }).catch((error)=>{
        if(error.response.status === 403){
            props.history && props.history.replace('/');
            setUser(null)
        }
    } )
},[])



    const logout = async ()=>{
        try{
         await axios.post('http://localhost:4000/api/admin/deconnexion')
         props.history.replace('/login')
        }
        catch(error){
        }
     }

  



    return (<div >
        <SideBar logout ={logout}/>
        <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Navbar logout ={logout} />
            <Switch>
            <Route path ="/admin/functions/impression/:id" component={Historique}/>
            <Route path ="/admin/functions/impression" component={Impression}/>
            <Route path ="/admin/functions" component={Fonctionnalité}/>
            <Route path ="/admin/clients" component={Clients}/>   

            </Switch>
  </main>
       
    </div>  );
}
 
export default Interface;






