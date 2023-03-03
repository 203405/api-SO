import { createConnection } from 'mysql';
import {conexion}  from "../database/MySQL.database.js";

//Crear Cliente
export const _create_cliente = (client,callback) =>{

    let sql = 'call client_new("'+client.sucursal+'", "'
                                 +client.tipoPersona+'", "'
                                 +client.nombre+'", "'
                                 +client.apellidoPaterno+'", "'
                                 +client.apellidoMaterno+'", "'
                                 +client.fechaNacimiento+'", "'
                                 +client.entidadNacimiento+'", "'
                                 +client.lugarNacimiento+'", "'
                                 +client.genero+'", "'
                                 +client.estadoCivil+'", "'
                                 +client.estudios+'", "'
                                 +client.IFEnumero+'", "'
                                 +client.IFEfolio+'", "'
                                 +client.IFEclave+'", "'
                                 +client.CURP+'", "'
                                 +client.RFC+'", "'
                                 +client.telefono+'", "'
                                 +client.celular+'", "'
                                 +client.email+'", "'
                                 +client.nacionalidad+'", "'
                                 +client.paisOrigen+'", "'
                                 +client.paisDomicilio+'", "'
                                 +client.estado+'", "'
                                 +client.municipio+'", "'
                                 +client.localidad+'", "'
                                 +client.domicilio+'", "'
                                 +client.tipoVivienda+'", "'
                                 +client.ubicacionGPS+'", "'
                                 +client.descripcionNegocio+'", "'
                                 +client.expreienciaNegocio+'", "'
                                 +client.antigudadNegocio+'", '
                                 +client.pagoDiario+', '
                                 +client.abreLunes+', '
                                 +client.abreMartes+', '
                                 +client.abreMiercoles+', '
                                 +client.abreJueves+', '
                                 +client.abreViernes+', '
                                 +client.abreSabado+', '
                                 +client.abreDomingo+', "'
                                 +client.horaApertura+'", "'
                                 +client.horaCierre+'", "'
                                 +client.lugarNegocio+'", "'
                                 +client.nombrePropietario+'", "'
                                 +client.paisNegocio+'", "'
                                 +client.estadoNegocio+'", "'
                                 +client.municipioNegocio+'", "'
                                 +client.domicilioNegocio+'", "'
                                 +client.telefonoNegocio+'", "'
                                 +client.nombreConyugue+'", "'
                                 +client.paternoConyugue+'", "'
                                 +client.maternoConyugue+'", "'
                                 +client.lugarTrabajo+'", "'
                                 +client.puesto+'", "'
                                 +client.antiguedad+'", "'
                                 +client.anos+'", "'
                                 +client.meses+'")';

    let connection = createConnection(conexion);

    connection.query(sql,(err,data) => {
        if(err){
            throw err;
        };
        if(data.length>0){
            connection.end();
            return callback(data[0][0]);
        };
        connection.end();
        return callback(null);
    });

}

//Traer todos los usuarios.
export const getAllClient = (callback) =>{

    let sql = 'call client_list()';
    let connection = createConnection(conexion);
    
    connection.query(sql,(err,data) => {
        if(err){
            throw err;
        };
        if(data.length>0){
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });

}

//Actualizar Cliente.
export const _update_client = (client, callback) =>{

    let sql = 'call client_upDate("'+client.IdCliente+'","'
                                    +client.sucursal+'", "'
                                    +client.tipoPersona+'", "'
                                    +client.nombre+'", "'
                                    +client.apellidoPaterno+'", "'
                                    +client.apellidoMaterno+'", "'
                                    +client.fechaNacimiento+'", "'
                                    +client.entidadNacimiento+'", "'
                                    +client.lugarNacimiento+'", "'
                                    +client.genero+'", "'
                                    +client.estadoCivil+'", "'
                                    +client.estudios+'", "'
                                    +client.IFEnumero+'", "'
                                    +client.IFEfolio+'", "'
                                    +client.IFEclave+'", "'
                                    +client.CURP+'", "'
                                    +client.RFC+'", "'
                                    +client.telefono+'", "'
                                    +client.celular+'", "'
                                    +client.email+'", "'
                                    +client.nacionalidad+'", "'
                                    +client.paisOrigen+'", "'
                                    +client.paisDomicilio+'", "'
                                    +client.estado+'", "'
                                    +client.municipio+'", "'
                                    +client.localidad+'", "'
                                    +client.domicilio+'", "'
                                    +client.tipoVivienda+'", "'
                                    +client.ubicacionGPS+'", "'
                                    +client.descripcionNegocio+'", "'
                                    +client.expreienciaNegocio+'", "'
                                    +client.antigudadNegocio+'", '
                                    +client.pagoDiario+', '
                                    +client.abreLunes+', '
                                    +client.abreMartes+', '
                                    +client.abreMiercoles+', '
                                    +client.abreJueves+', '
                                    +client.abreViernes+', '
                                    +client.abreSabado+', '
                                    +client.abreDomingo+', "'
                                    +client.horaApertura+'", "'
                                    +client.horaCierre+'", "'
                                    +client.lugarNegocio+'", "'
                                    +client.nombrePropietario+'", "'
                                    +client.paisNegocio+'", "'
                                    +client.estadoNegocio+'", "'
                                    +client.municipioNegocio+'", "'
                                    +client.domicilioNegocio+'", "'
                                    +client.telefonoNegocio+'", "'
                                    +client.nombreConyugue+'", "'
                                    +client.paternoConyugue+'", "'
                                    +client.maternoConyugue+'", "'
                                    +client.lugarTrabajo+'", "'
                                    +client.puesto+'", "'
                                    +client.antiguedad+'", "'
                                    +client.anos+'", "'
                                    +client.meses+'")';
    let connection = createConnection(conexion);

    connection.query(sql,(err,data) => {
        if(err){
            throw err;
        };
        if(data.length>0){
            connection.end();
            return callback(data[0][0]);
        };
        connection.end();
        return callback(null);

    });
}

//Eliminar cliente.
export const _delete_client = (IdUCliente,callback) =>{

    let sql = 'call client_delete('+IdUCliente+')';
    let connection = createConnection(conexion);
    
    connection.query(sql,(err,data) => {
        if(err){
            throw err;
        };
        if(data.length>0){
            connection.end();
            return callback(data[0])
        };
        connection.end();
        return callback(null);

    });

}

export const _getClientById = (IdCliente,callback) =>{

    let sql = 'call client_byId('+IdCliente+')';
    // console.log(sql);
    let connection = createConnection(conexion);
    
    connection.query(sql,(err,data) => {
        if(err){
            throw err;
        };
        if(data.length>0){
            connection.end();
            return callback(data[0][0])
        };
        connection.end();
        return callback(null);

    });

}