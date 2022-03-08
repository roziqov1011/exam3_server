const { fetch, fetchAll } = require('../../lib/postgres')

const ALL_HOMEORDER = `
    SELECT
        *
    FROM
    
    homeorder
`
const POST_HOMEORDER = `
INSERT INTO homeorder(client_name, client_phone,companie_name, branch_name, house_room) 
VALUES($1,$2, $3, $4, $5)
`

const allHomeorder = () => fetchAll(ALL_HOMEORDER)
const postHomeorder = (ism, tel, compan, compl, hous) => fetchAll(POST_HOMEORDER, ism, tel, compan, compl, hous)

module.exports = {
    allHomeorder,
    postHomeorder
}