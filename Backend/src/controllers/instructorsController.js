const db = require('../db/db');

const getAllInstructors = (req, res) => {
    const sql = 'SELECT * FROM Instructor';

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error getting Instructors');
        } else {
            res.send(result);
        }
    });
}

const getInstructorById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM Instructor WHERE id_Instructor = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result);
    })
}

const createInstructor = (req, res) => {
    console.log("Creating Instructor...");
    const { name,last_name, phone } = req.body;

    const sql = 'INSERT INTO Instructor (name,last_name,phone) VALUES (?,?,? )';
    db.query(sql, [name, last_name, phone], (err, result) => {
        if (err) throw err;
        res.json(
            {
                message: 'Instructor created',
                InstructorId: result.insertId
            });
    })
}


const updateInstructor = (req, res) => {
    console.log("Updating Instructor...");
    const { id } = req.params;
    const { name,lastName,phone } = req.body;
    console.log(req.params);
    const sql = 'UPDATE Instructor SET  name = ?, last_name = ?, phone = ? WHERE id_Instructor = ?';
    db.query(sql, [ name, lastName, phone,  id], (err, result) => {
        if (err) throw err;
        res.json({
            message: 'Instructor updated'
        });
    })
}


const deleteInstructor = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM Instructor WHERE id_Instructor = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({
            message: 'Instructor deleted'
        });
    })
}



// Exporta la función
module.exports = {
    getAllInstructors,
    // Agrega las demás funciones aquí si las tienes definidas
    getInstructorById,
    createInstructor,
    updateInstructor,
    deleteInstructor
};