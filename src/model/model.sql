CREATE TABLE companies(
    companie_id serial PRIMARY KEY NOT NULL,
    companie_name text NOT NULL
);
CREATE TABLE branches(
    branch_id serial PRIMARY KEY NOT NULL,
    branch_name text NOT NULL,
    companie int REFERENCES companies(companie_id) NOT NULL
);

CREATE TABLE houses(
    house_id bigserial PRIMARY KEY NOT NULL,
    house_adress text NOT NULL,
    house_room int NOT NULL,
    house_price int NOT NULL,
    companie int REFERENCES companies(companie_id) NOT NULL,
    branche int REFERENCES branches(branch_id)NOT NULL
);

CREATE TABLE homeorder(
    order_id serial PRIMARY KEY NOT NULL,
    client_name text NOT NULL,
    client_phone text NOT NULL,
    companie_name text NOT NULL,
    branch_name text NOT NULL,
    house_room int NOT NULL
);





CREATE TABLE banks(
    bank_id bigserial PRIMARY KEY NOT NULL,
    bank_name text NOT NULL,
    bank_type int NOT NULL,
    bank_foiz int NOT NULL
);

CREATE TABLE creditorder(
    order_id bigserial PRIMARY KEY NOT NULL,
    client_name text NOT NULL,
    client_phone text NOT NULL,
    bank_name text NOT NULL,
    bank_type text NOT NULL,
    bank_credit int NOT NULL
);

