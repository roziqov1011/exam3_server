const PORT = process.env.PORT || 9000

const connection = {
    connectionString: 'postgres://postgres:root@localhost:5432/n10',
    connectionDoString:'postgresql://doadmin:XuWDJxVg15D1cJEx@db-postgresql-nyc1-36619-do-user-10621470-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require',
    connectionElString: 'postgres://oskpjvig:3eOd-dV0DIbdlcnc4oWxRwFitnpDewAj@jelani.db.elephantsql.com/oskpjvig'
}

module.exports = {
    connection,
    PORT
}