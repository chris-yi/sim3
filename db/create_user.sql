insert into users
(firstname, lastname, gender, haircolor, eyecolor, hobby, bday_day, bday_month, bday_year, email)
values 
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
returning *;