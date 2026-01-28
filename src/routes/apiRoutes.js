const express = require('express');
const router = express.Router();
const data = require('../models/roomModel');
const { stat } = require('node:fs');

// Get all rooms
router.get('/rooms', (req, res) => { 
    const { type, price, isBooked, features} = req.query;


let filteredRooms = data
    .filter(
        (room) =>
        !type || room.type.toLowerCase() === type.toLowerCase(),
    )
    
    .filter(
        (room) =>
        !price || room.price === parseInt(price),
    )
    .filter(
        (room) =>
        isBooked !== undefined && isBooked !== null ? room.isBooked === (isBooked === 'true') : true,
    )
    .filter(
        (room) =>
        !features || features.split(',').every(feature => room.features.includes(feature)),
    );
return filteredRooms.lenght === 0
    ? req.status(404).json({
        status: 404, 
        message: 'No rooms found matching the criteria'
    }) 
    : res.status(200).json({ 
        status: 200,
        message: 'Rooms retrieved successfully', 
        data: filteredRooms
    })
});


// POST a new room
router.post('/rooms', (req, res) => {
    const {type, price, isBooked, features } = req.body || {};

    if (!type || !price || isBooked || !features ) {
        return reststatus(400).json({
            status: 400,
            message:
            'Type, price, isBooked, and features are required to create a room',
        });
}

const newRoom = {id: data.length + 1, type, price, isBooked, features};
data.push(newRoom);
res.status(201).json({
    status: 201,
    message: 'Room created successfully',
    data: newRoom,  
});
});

// PUT and Update room

router.put('/rooms/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex((d) => d.id === id);
    if (index === -1) {
        return res.status(404).json({
            status: 404,
            message: `Room with id ${id} not found.`,
        });
    }

    data [index] = { id, ...req.body };
    res.status(200).json({
        status: 200,
        message: 'Room Updated Successfully',
        data: data[index],
    });
});

// DELETE a room 

router.delete('/rooms/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex((d) => d.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: 404,
            message: `Room with id ${id} not found.`,
        });
    }

    data.splice(index, 1);
    res.status(203).json({
        status: 203,
        message: 'Room Deleted Successfully',
    });
});

module.exports = router;
