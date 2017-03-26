{\rtf1\ansi\ansicpg1252\cocoartf1404\cocoasubrtf470
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\paperw11900\paperh16840\margl1440\margr1440\vieww25400\viewh14500\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 CREATE OR REPLACE VIEW `funcionarios_por_municipio` AS \
select `funcionarios`.`oee` AS `oee`,\
	`funcionarios`.`descripcionOee` AS `descripcionOee`,\
	count(distinct `funcionarios`.`documento`) AS `cant_funcionarios`,\
	`funcionarios`.`mes` AS `mes`,\
	`funcionarios`.`anho` AS `anho` \
from `funcionarios` \
where (`funcionarios`.`nivel` = 30) \
group by `funcionarios`.`oee`,`funcionarios`.`mes`,`funcionarios`.`anho`\
\
\
CREATE OR REPLACE  VIEW `hombres_por_municipio` AS \
select `funcionarios`.`oee` AS `oee`,\
	`funcionarios`.`descripcionOee` AS `descripcionOee`,\
	count(distinct `funcionarios`.`documento`) AS `cant_hombres`,\
	`funcionarios`.`mes` AS `mes`,\
	`funcionarios`.`anho` AS `anho` \
from `funcionarios` \
where ((`funcionarios`.`nivel` = 30) and (`funcionarios`.`sexo` = 'MASCULINO')) \
group by `funcionarios`.`oee`,`funcionarios`.`mes`,`funcionarios`.`anho`\
\
\
CREATE OR REPLACE VIEW `mujeres_por_municipio` AS \
select `funcionarios`.`oee` AS `oee`,\
	`funcionarios`.`descripcionOee` AS `descripcionOee`,\
	count(distinct `funcionarios`.`documento`) AS `cant_mujeres`,\
	`funcionarios`.`mes` AS `mes`,\
	`funcionarios`.`anho` AS `anho` \
from `funcionarios` \
where ((`funcionarios`.`nivel` = 30) and (`funcionarios`.`sexo` = 'FEMENINO')) \
group by `funcionarios`.`oee`,`funcionarios`.`mes`,`funcionarios`.`anho`\
\
\
CREATE OR REPLACE VIEW `pcd_por_municipio` AS\
select `funcionarios`.`oee` AS `oee`,\
	`funcionarios`.`descripcionOee` AS `descripcionOee`,\
	count(distinct `funcionarios`.`documento`) AS `cant_pcd`,\
	`funcionarios`.`mes` AS `mes`,\
	`funcionarios`.`anho` AS `anho` \
from `funcionarios` \
where ((`funcionarios`.`nivel` = 30) and (`funcionarios`.`discapacidad` = 'SI')) \
group by `funcionarios`.`oee`,`funcionarios`.`mes`,`funcionarios`.`anho`\
\
\
CREATE OR REPLACE VIEW `resumen_municipios` AS \
SELECT `fm`.`oee` AS `oee`,\
`fm`.`descripcionOee` AS `descripcionOee`,\
`fm`.`cant_funcionarios` AS `cant_funcionarios`,\
`hm`.`cant_hombres` AS `cant_hombres`,\
`mm`.`cant_mujeres` AS `cant_mujeres`,\
`pm`.`cant_pcd` AS `cant_pcd`,\
`fm`.`mes` AS `mes`,\
`fm`.`anho` AS `anho`\
FROM (((`funcionarios_por_municipio` `fm` \
        JOIN `hombres_por_municipio` `hm` \
        		ON((`fm`.`oee` = `hm`.`oee`) AND (`fm`.`mes` = `hm`.`mes`) AND\
                (`fm`.`anho` = `hm`.`anho`))) \
        JOIN `mujeres_por_municipio` `mm` \
       		ON((`fm`.`oee` = `mm`.`oee`) AND (`fm`.`mes` = `mm`.`mes`) AND\
                (`fm`.`anho` = `mm`.`anho`))) \
        JOIN `pcd_por_municipio` `pm` \
      		ON((`fm`.`oee` = `pm`.`oee`) AND (`fm`.`mes` = `pm`.`mes`) AND\
                (`fm`.`anho` = `pm`.`anho`)));}