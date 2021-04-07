CREATE TABLE helo_users (
id serial primary key,
username varchar(25) not null,
password text not null,
profile_pic text
);

CREATE table helo_posts (
id serial primary key,
title varchar(45) not null,
content text,
img text,
author_id integer references helo_users(id),
date_created timestamp
);

UPDATE helo_users 
SET profile_pic = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.p8eJ7vNa9MgTZukFWZ-SZQHaLk%26pid%3DApi&f=1'
WHERE id = 35;

UPDATE helo_users 
SET profile_pic = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tvmM9cHL66qF3TY4Lrte5wHaJ3%26pid%3DApi&f=1'
WHERE id = 2;

UPDATE helo_users 
SET profile_pic = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftv-fanatic-res.cloudinary.com%2Fiu%2Fs--qs3jagsY--%2Ft_full%2Fcs_srgb%2Cf_auto%2Cfl_strip_profile.lossy%2Cq_auto%3A420%2Fv1553530368%2Fspock-as-witness-star-trek-discovery-s2e10.jpg&f=1&nofb=1'
WHERE id = 37;

