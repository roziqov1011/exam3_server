const { fetch, fetchAll } = require('../../lib/postgres')

const ALL_COMPANIES = `
    SELECT
        *
    FROM
    banks
    ORDER BY bank_id
`

const POST_COMPANIES = `
INSERT INTO
banks(bank_name,bank_type) VALUES($1,$2)
`
const PUT_COMPANIES = `
UPDATE banks SET bank_name = $2 ,   bank_type = $3 WHERE bank_id = $1
`
const DELETE_COMPANIES = `
DELETE FROM banks WHERE bank_id = $1
`

const allBanks = () => fetchAll(ALL_COMPANIES)
const postBanks = (bank, btype) => fetchAll(POST_COMPANIES,bank, btype)
const putBanks = (bId,bank, btype) => fetchAll(PUT_COMPANIES,bId,bank, btype)
const deleteBanks = (bId) => fetchAll(DELETE_COMPANIES,bId)

module.exports = {
    allBanks,
    postBanks,
    putBanks,
    deleteBanks
}