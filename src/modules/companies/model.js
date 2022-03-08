const { fetch, fetchAll } = require('../../lib/postgres')

const ALL_COMPANIES = `
    SELECT
        *
    FROM
    companies
`
const INSERT_COMPANIES = `
    INSERT INTO 
    companies(companie_name)VALUES($1)
`

const allCompanies = () => fetchAll(ALL_COMPANIES)
const insertCompanies = (comp) => fetchAll(INSERT_COMPANIES,comp)

module.exports = {
    allCompanies,
    insertCompanies
}