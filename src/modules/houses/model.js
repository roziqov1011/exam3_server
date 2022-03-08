const { fetch, fetchAll } = require('../../lib/postgres')

const ALL_HOUSES = `
    SELECT
        *
    FROM
    
   houses
   WHERE
   houses.branche = $1
`
const POST_HOUSES = `
    INSERT INTO houses(house_adress,house_room,house_price,companie,branche)VALUES($1,$2,$3,$4,$5)
`

const allHouses = (id) => fetchAll(ALL_HOUSES,id)
const postHouses = (address,room,price,comp,complex) => fetchAll(POST_HOUSES,address,room,price,comp,complex)

module.exports = {
    allHouses,
    postHouses
}