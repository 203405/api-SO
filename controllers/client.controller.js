import { _create_cliente, getAllClient, _update_client, _delete_client, _getClientById } from "../models/client.model.js";

const create_client = async (req, res) => {
    let client = {
        IdCliente : req.body.IdCliente,
        sucursal : req.body.sucursal,
        tipoPersona : req.body.tipoPersona,
        nombre : req.body.nombre, 
        apellidoPaterno : req.body.apellidoPaterno, 
        apellidoMaterno : req.body.apellidoMaterno, 
        fechaNacimiento : req.body.fechaNacimiento, 
        entidadNacimiento : req.body.entidadNacimiento, 
        lugarNacimiento : req.body.lugarNacimiento, 
        genero : req.body.genero, 
        estadoCivil : req.body.estadoCivil, 
        estudios : req.body.estudios,
        IFEnumero : req.body.IFEnumero,
        IFEfolio : req.body.IFEfolio,
        IFEclave : req.body.IFEclave, 
        CURP : req.body.CURP, 
        RFC : req.body.RFC, 
        telefono : req.body.telefono, 
        celular : req.body.celular,
        email : req.body.email,
        nacionalidad : req.body.nacionalidad, 
        paisOrigen : req.body.paisOrigen,
        paisDomicilio : req.body.paisDomicilio, 
        estado : req.body.estado,
        municipio : req.body.municipio,
        localidad : req.body.localidad,
        domicilio : req.body.domicilio,
        tipoVivienda : req.body.tipoVivienda,
        ubicacionGPS : req.body.ubicacionGPS,
        descripcionNegocio : req.body.descripcionNegocio, 
        expreienciaNegocio : req.body.expreienciaNegocio,
        antigudadNegocio : req.body.antigudadNegocio,
        pagoDiario : req.body.pagoDiario,
        abreLunes : req.body.abreLunes,
        abreMartes : req.body.abreMartes,
        abreMiercoles : req.body.abreMiercoles,
        abreJueves : req.body.abreJueves,
        abreViernes : req.body.abreViernes,
        abreSabado : req.body.abreSabado,
        abreDomingo : req.body.abreDomingo,
        horaApertura : req.body.horaApertura,
        horaCierre : req.body.horaCierre,
        lugarNegocio : req.body.lugarNegocio,
        nombrePropietario : req.body.nombrePropietario,
        paisNegocio : req.body.paisNegocio, 
        estadoNegocio : req.body.estadoNegocio,
        municipioNegocio : req.body.municipioNegocio,
        domicilioNegocio : req.body.domicilioNegocio,
        telefonoNegocio : req.body.telefonoNegocio,
        nombreConyugue : req.body.nombreConyugue,
        paternoConyugue : req.body.paternoConyugue,
        maternoConyugue : req.body.maternoConyugue,
        lugarTrabajo : req.body.lugarTrabajo,
        puesto : req.body.puesto,
        antiguedad : req.body.antiguedad,
        anos : req.body.anos,
        meses : req.body.meses

    }

    try {
        _create_cliente(client,(data)=>{
            let client = data;
            
        if(client){
            return res.json({
                error:false,
                status:200,
                menssage:"Cliente Creado",
                client
            });   
        }else{
            return res.json({
                error:false,
                status:201,
                menssage:"Cliente no Creado",
                client
            }); 
        }
    })
    } catch (error) {
        console.log(error);
        return res.json({
            error:true,
            status:500,
            menssage:"Error en el servidor",
            error : error.toString()
        });
    }

};

//Traer todos los clientes.
const client_all = async(req,res) => {

    try {
        getAllClient((data)=>{
            let clients = data;

            if(clients){
                return res.json({
                    error:false,
                    status: 200,
                    message:"Se encontraron " + clients.length + " clientes",
                    clients,
                });   
            }else{
                return res.json({
                    error:false,
                    status:201,
                    menssage:"No se encontraron clientes",
                    clients
                }); 
            }

        })
    } catch (error) {
        console.log(error);
        return res.json({
            error:true,
            status:500,
            menssage:"Error en el servidor",
            error : error.toString()
        }); 
    }
   
}

const update_client = async(req, res) => {

    let client = {

        IdCliente : req.body.IdCliente,
        sucursal : req.body.sucursal,
        tipoPersona : req.body.tipoPersona,
        nombre : req.body.nombre, 
        apellidoPaterno : req.body.apellidoPaterno, 
        apellidoMaterno : req.body.apellidoMaterno, 
        fechaNacimiento : req.body.fechaNacimiento, 
        entidadNacimiento : req.body.entidadNacimiento, 
        lugarNacimiento : req.body.lugarNacimiento, 
        genero : req.body.genero, 
        estadoCivil : req.body.estadoCivil, 
        estudios : req.body.estudios,
        IFEnumero : req.body.IFEnumero,
        IFEfolio : req.body.IFEfolio,
        IFEclave : req.body.IFEclave, 
        CURP : req.body.CURP, 
        RFC : req.body.RFC, 
        telefono : req.body.telefono, 
        celular : req.body.celular,
        email : req.body.email,
        nacionalidad : req.body.nacionalidad, 
        paisOrigen : req.body.paisOrigen,
        paisDomicilio : req.body.paisDomicilio, 
        estado : req.body.estado,
        municipio : req.body.municipio,
        localidad : req.body.localidad,
        domicilio : req.body.domicilio,
        tipoVivienda : req.body.tipoVivienda,
        ubicacionGPS : req.body.ubicacionGPS,
        descripcionNegocio : req.body.descripcionNegocio, 
        expreienciaNegocio : req.body.expreienciaNegocio,
        antigudadNegocio : req.body.antigudadNegocio,
        pagoDiario : req.body.pagoDiario,
        abreLunes : req.body.abreLunes,
        abreMartes : req.body.abreMartes,
        abreMiercoles : req.body.abreMiercoles,
        abreJueves : req.body.abreJueves,
        abreViernes : req.body.abreViernes,
        abreSabado : req.body.abreSabado,
        abreDomingo : req.body.abreDomingo,
        horaApertura : req.body.horaApertura,
        horaCierre : req.body.horaCierre,
        lugarNegocio : req.body.lugarNegocio,
        nombrePropietario : req.body.nombrePropietario,
        paisNegocio : req.body.paisNegocio, 
        estadoNegocio : req.body.estadoNegocio,
        municipioNegocio : req.body.municipioNegocio,
        domicilioNegocio : req.body.domicilioNegocio,
        telefonoNegocio : req.body.telefonoNegocio,
        nombreConyugue : req.body.nombreConyugue,
        paternoConyugue : req.body.paternoConyugue,
        maternoConyugue : req.body.maternoConyugue,
        lugarTrabajo : req.body.lugarTrabajo,
        puesto : req.body.puesto,
        antiguedad : req.body.antiguedad,
        anos : req.body.anos,
        meses : req.body.meses

    }

    try {
        _update_client(client, (data) => {
            let status = data.status;
            // console.log(status);
           
            return res.json({
                error:false,
                status,
                menssage:"Cliente Actualizado",
                
            }); 
            
        })
    } catch (error) {
        return res.json({
            error:true,
            status:500,
            menssage:"Error en el servidor",
            error : error.toString()
        });
    }

}

const delete_client = async(req, res) => {

    // console.log(req.params);

    let {IdCliente} = req.params;

    try {
        _delete_client(IdCliente, (data => {

            let status = data.status;
            //console.log(status);
               
            return res.json({
                error:false,
                status:200,
                menssage:"Cliente Eliminado",
                    
            }); 
                
        }))
    } catch (error) {
        return res.json({
            error:true,
            status:500,
            menssage:"Error en el servidor",
            error : error.toString()
        });
    }
}

const getClientById = async(req,res) => {
   
    //console.log(req.params);

    let {IdCliente} = req.params;

    try {
        _getClientById(IdCliente, (data => {
            
            let client = data;
          
            if(client){
                return res.json({
                    error:false,
                    status:200,
                    menssage:"Cliente encontrado",
                    client
                }); 
            }else{
                return res.json({
                    error:false,
                    status:201,
                    menssage:"Cliente no encontrado",
                    client:[]
                });  
            } 
                
        }))
    } catch (error) {
        return res.json({
            error:true,
            status:500,
            menssage:"Error en el servidor",
            error : error.toString()
        });
    }
}

export const clientController = {
    create_client,
    client_all,
    update_client,
    delete_client,
    getClientById
};