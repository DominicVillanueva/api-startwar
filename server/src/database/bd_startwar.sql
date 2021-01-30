/* POSIBLE ERROR DE USER EXECUTE 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
*/

CREATE DATABASE  IF NOT EXISTS `bd_startwar`;
USE `bd_startwar`;

DROP TABLE IF EXISTS `planeta`;
CREATE TABLE planeta (
	id_planeta INT(11) NOT NULL,
    nombre VARCHAR(150) DEFAULT NULL,
    clima VARCHAR(150) DEFAULT NULL,
    diametro VARCHAR(50) DEFAULT NULL,
    gravedad VARCHAR(100) DEFAULT NULL,
    periodo_orbital VARCHAR(150) DEFAULT NULL,
    poblacion VARCHAR(15) DEFAULT NULL,
    periodo_rotacion VARCHAR(100) DEFAULT NULL,
    agua_superficie VARCHAR(100) DEFAULT NULL,
    terreno VARCHAR(150) DEFAULT NULL,
    PRIMARY KEY (id_planeta)
);

DELIMITER //
CREATE PROCEDURE `sp_get_all_planets`()
BEGIN
	SELECT 	pl.nombre, 
		pl.clima, 
		pl.diametro, 
		pl.gravedad,
		pl.periodo_orbital,
		pl.poblacion,
		pl.periodo_rotacion,
		pl.agua_superficie,
		pl.terreno
FROM planeta pl;
END //

DELIMITER ;

DELIMITER //
CREATE PROCEDURE `sp_insert_planet` (
	IN nombre VARCHAR(150),
    IN clima VARCHAR(150),
    IN diametro VARCHAR(50),
    IN gravedad VARCHAR(100),
    IN periodo_orbital VARCHAR(150),
    IN poblacion VARCHAR(15),
    IN periodo_rotacion VARCHAR(100),
    IN agua_superficie VARCHAR(100),
    IN terreno VARCHAR(150)
)
BEGIN
	-- Declaramos las variables de resultado y verificacion si el planeta existe
	DECLARE result VARCHAR(2);
    DECLARE exist_planet VARCHAR(250);
    
    -- Verificamos si existe el planeta
    SET exist_planet = (SELECT nombre from planeta pl where pl.nombre = nombre);
    
    IF exist_planet is null THEN
		START TRANSACTION;
			INSERT INTO planeta(nombre,clima,diametro,gravedad,periodo_orbital,poblacion,periodo_rotacion,agua_superficie,terreno)
			VALUES (nombre,clima,diametro,gravedad,periodo_orbital,poblacion,periodo_rotacion,agua_superficie,terreno);
            SET result = '1';
            SELECT result;
		COMMIT;
    ELSE
		SET result = '0';
        SELECT result; 
    END IF;
END //

DELIMITER ;
