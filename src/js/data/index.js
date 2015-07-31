module.exports = {
      teams: [
            {
                  id: 'ars',
                  name: 'Arsenal',
                  players: require('./arsenal').items
            },
            {
                  id: 'chel',
                  name: 'Chelsea',
                  players: require('./chelsea').items
            }, 
            {
                  id: 'leic',
                  name: 'Leicester',
                  players: require('./leicester').items
            },
            {
                  id: 'liv',
                  name: 'Liverpool',
                  players: require('./liverpool').items
            },
            {
                  id: 'mancity',
                  name: 'Manchester City',
                  players: require('./manCity').items
            },
            {
                  id: 'manutd',
                  name: 'Manchester United',
                  players: require('./manUnited').items
            },
            {
                  id: 'south',
                  name: 'Southampton',
                  players: require('./southampton').items
            },
            {
                  id: 'swans',
                  name: 'Swansea',
                  players: require('./swansea').items
            },
            {
                  id: 'tott',
                  name: 'Tottenham',
                  players: require('./tottenham').items
            }
      ]
};