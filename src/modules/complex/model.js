const { fetch, fetchAll } = require('../../lib/postgres')

const ALL_COMPLAEX = `
    SELECT
        *
    FROM
    branches
    WHERE
    branches.companie = $1
`
const POST_COMPLAEX = `
    INSERT INTO branches(branch_name, companie)VALUES($1, $2)
`

const allComplex = (id) => fetchAll(ALL_COMPLAEX,id)
const postComplex = (complex, comp) => fetchAll(POST_COMPLAEX,complex, comp)

module.exports = {
    allComplex,
    postComplex
}