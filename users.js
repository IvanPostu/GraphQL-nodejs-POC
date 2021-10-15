var users = [
    {
        id: 1,
        name: 'Brian',
        age: '21',
        shark: 'Great White Shark'
    },
    {
        id: 2,
        name: 'Kim',
        age: '22',
        shark: 'Whale Shark'
    },
    {
        id: 3,
        name: 'Faith',
        age: '23',
        shark: 'Hammerhead Shark'
    },
    {
        id: 4,
        name: 'Joseph',
        age: '23',
        shark: 'Tiger Shark'
    },
    {
        id: 5,
        name: 'Joy',
        age: '25',
        shark: 'Hammerhead Shark'
    }
];

// Return a single user
var getUser = function (args) {
    var userID = args.id;
    return users.filter(user => user.id == userID)[0];
}

// Return a list of users
var retrieveUsers = function (args) {
    if (args.shark) {
        var shark = args.shark;
        return users.filter(user => user.shark === shark);
    } else {
        return users;
    }
}

var updateUser = function ({ id, name, age }) {
    users.map(user => {
        if (user.id === id) {
            user.name = name;
            user.age = age;
            return user;
        }
    });
    return users.filter(user => user.id === id)[0];
}

module.exports.users = users
module.exports.getUser = getUser
module.exports.retrieveUsers = retrieveUsers
module.exports.updateUser = updateUser
