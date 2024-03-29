<?php

require_once __DIR__ . '/../includes/app.php';

use MVC\Router;
use Controllers\LoginController;
use Controllers\DashboardController;
use Controllers\TareaController;
use Model\Proyecto;

$router = new Router();


//Metodos para LOGIN
$router->get('/', [LoginController::class, 'login']);
$router->post('/', [LoginController::class, 'login']);

//Metodos para cerrar cuenta
$router->post('/logout', [LoginController::class, 'logout']);

//RUTAS PARA CREAR CUENTA
$router->get('/crear', [LoginController::class, 'crear']);
$router->post('/crear', [LoginController::class, 'crear']);

//RUTAS PARA FORM DE OLVIDAR PASSWORD
$router->get('/recuperar', [LoginController::class, 'recuperar']);
$router->post('/recuperar', [LoginController::class, 'recuperar']);

//ruta para confirmar que se visito el enlace 3nviado por mail y se escribira u nuevo password
$router->get('/restablecer', [LoginController::class, 'restablecer']);
$router->post('/restablecer', [LoginController::class, 'restablecer']);

// Confirmacion de cuenta
$router->get('/mensaje', [LoginController::class, 'mensaje']);
$router->get('/confirmar', [LoginController::class, 'confirmar']);

$router->get('/logout',[LoginController::class,'logout']);


//ZONA DE PROYECTOS

$router->get('/dashboard', [DashboardController::class, 'index']);

$router->get("/proyecto",[DashboardController::class,"proyecto"]);

//Crear proyectos
$router->get('/crear-proyecto', [DashboardController::class, 'crear']);
$router->post('/crear-proyecto', [DashboardController::class, 'crear']);


//Perfil del usuario
$router->get('/perfil', [DashboardController::class, 'perfil']);
$router->post('/perfil', [DashboardController::class, 'perfil']);

// Cambiar contraseña

$router->get('/cambiar-password',[DashboardController::class,'cambiarPassword']);
$router->post('/cambiar-password',[DashboardController::class,'cambiarPassword']);


//Eliminar proyecto
$router->get('/eliminar', [DashboardController::class, 'delete']);

// API para las tareas

$router->get('/api/tareas', [TareaController::class,'index']);
$router->post('/api/tarea', [TareaController::class,'crear']);
$router->post('/api/tarea/actualizar', [TareaController::class,'actualizar']);
$router->post('/api/tarea/eliminar', [TareaController::class,'eliminar']);


// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();
