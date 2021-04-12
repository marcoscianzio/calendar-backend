const { response, json } = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, resp = response) => {
    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            return resp.status(400).json({
                ok: false,
                msg: "Un usuario existe con ese email",
            });
        }

        usuario = new Usuario(req.body);

        const salt = bcrypt.genSaltSync();

        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        const token = await generarJWT(usuario.id, usuario.name);

        resp.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });
    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: "Hable con el admin",
        });
    }
};

const loginUsuario = async (req, resp = response) => {
    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return resp.status(400).json({
                ok: false,
                msg: "El usuario no existe con ese email",
            });
        }

        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return resp.status(400).json({
                ok: false,
                msg: "Password incorrecta",
            });
        }

        const token = await generarJWT(usuario.id, usuario.name);

        resp.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });
    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: "Hable con el admin",
        });
    }
};
const revalidarToken = async(req, resp = response) => {

    const {uid, name} = req;

    const token = await generarJWT(uid, name);

    resp.json({
        ok: true,
        uid,
        name,
        token
    });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
