const vouchers = require("../models/voucher.model");

module.exports.voucher_client = async (req, res) => {
    let date_ob = new Date();
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours()+":"+date_ob.getMinutes();

    var Check_tel = req.body.tel_hotel  ;


    const dataFull = date + "/" + month + "/" + year;
    if (Check_tel.length == 8) {
            const voucher =   new vouchers({
                nom_client: req.body.nom_client,
                prenom_client: req.body.prenom_client,
                nom_hotel:req.body.nom_hotel,
                adresse_hotel: req.body.adresse_hotel,
                tel_hotel: req.body.tel_hotel,
                date_arriver: req.body.date_arriver,
                nuits: req.body.nuits,
                chambres: req.body.chambres,
                adultes: req.body.adultes,
                enfants: req.body.enfants,
                bebes: req.body.bebes,
                formule: req.body.formule,
                montant: req.body.montant,
                date_emission: dataFull,
                heure_emission: hours,
                date:{
                    jour:parseInt(date),
                    mois:parseInt(month),
                    année:parseInt(year)
                  }

            });
     
            await voucher.save();
            res.send(voucher)
        }
        else {
            return res.status(404).send("Veuillez Vérifier votre Téléphone");
          }
  };

  module.exports.consulter_voucher = async(req,res)=>{
    const response = await vouchers.findOne({_id:req.params.id})
    res.json(response)   
}
module.exports.les_vouchers = async(req,res)=>{
    const response = await vouchers.find({})
    res.json(response)   
}
module.exports.archiver = async (req,res)=>{
    await vouchers.findByIdAndRemove({_id : req.params.id})
    res.status(200).send("deleted")
}
module.exports.serche = async (req, res) => {
    const response = await vouchers.find({
        prenom_client: { $regex: req.params.name, $options: "i" },
    })
    res.json(response);
  };

  module.exports.filtrer_les_vouchers = async (req, res) => {
    const response = await vouchers
      .find({
        "date.mois" : 
                {$gte: parseInt(req.body.date_deb),
                $lte: parseInt(req.body.date_fin),
              
        },
      }).sort({ _id: -1 });
    res.status(200).json(response);
  };

 


