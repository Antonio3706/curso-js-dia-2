CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    descripcion TEXT NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    imagen TEXT NOT NULL,
    tipo VARCHAR(50) NOT NULL
);

create table usuarios(
	id int auto_increment primary key,
	nombre varchar(100) not null,
	precio decimal(10,2) not null,
	descripcion TEXT not null,
	contrasena varchar(100) not null
);
