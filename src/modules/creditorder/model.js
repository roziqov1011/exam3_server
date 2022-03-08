const { fetch, fetchAll } = require('../../lib/postgres')

const ALL_CREDITORDER = `
    SELECT
        *
    FROM
    creditorder
`
const ALL_CREDITORDERSUM = `
SELECT SUM(bank_credit ) FROM creditorder
`
const ALL_CREDITORDERTYPE = `
SELECT SUM(bank_credit ) FROM creditorder WHERE bank_type = $1
`

const POST_CREDITORDER = `
INSERT INTO creditorder(client_name, client_phone,bank_name, bank_type, bank_credit) 
VALUES($1,$2, $3, $4, $5)
`

const allCreditorderSum = () => fetchAll(ALL_CREDITORDERSUM)
const allCreditorder = () => fetchAll(ALL_CREDITORDER)
const typeCreditorder = (type) => fetchAll(ALL_CREDITORDERTYPE,type)
const postCreditorder = (ism, tel, bank, bankTy, kredidt) => fetchAll(POST_CREDITORDER,ism, tel, bank, bankTy, kredidt)

module.exports = {
    allCreditorder,
    postCreditorder,
    allCreditorderSum,
    typeCreditorder
}