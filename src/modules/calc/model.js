const { fetch, fetchAll } = require('../../lib/postgres')

const ALL_CLAC = `
    SELECT
    h.house_price as uy_narhi,
    h.house_price - ((h.house_price / 100) * b.bank_foiz) as qolgan_summa,
    b.bank_type * 12 as muxlat,
    (h.house_price - ((h.house_price / 100) * b.bank_foiz)) / (b.bank_type * 12) as har_oy,
    b.bank_foiz
    FROM
    houses h,
    banks b
    WHERE
    h.house_id = $1 AND b.bank_id = $2
`

const allCalc = (houseId, bankId) => fetchAll(ALL_CLAC,houseId,bankId)

module.exports = {
    allCalc
}

