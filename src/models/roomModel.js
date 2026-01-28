const rooms = [
    {
        id: 101,
        type: 'Single',
        Price: 100,
        isBooked: false,
        features: ['WiFi', 'TV'],
    },
    {
        id: 102,
        type: 'Double',
        Price: 150,
        isBooked: true,
        features: ['WiFi', 'TV', 'Mini Bar'],

    },
    {
        id: 201,
        type: 'Suite',
        Price: 300,
        isBooked: false,
        features: ['WiFi', 'TV','Mini Bar', 'Jacuzzi'],
    },
    {
        id: 202,
        type: 'Single',
        Price: 100,
        isBooked: false,
        features: ['WiFi'],
    }
];

module.exports = rooms;