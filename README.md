# SISCOT
Sistema de Control de Procesos para Torogoz

## Importante
Instalar node.js y composer
- [Node.js](https://nodejs.org/en)
- [Composer](https://getcomposer.org/download/)
- [XAMPP](https://www.apachefriends.org/es/index.html)

Instalar laravel con composer
```
composer global require laravel/installer
```

## Configuración general
Crear el .env
```
cp .env.example .env
```

Configuración de la conexiones en .env
```php
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pruebas_siscot
DB_USERNAME=root
DB_PASSWORD=
```

Confirguración de reactfront
```php
npm install axios bootstrap react-router-dom localforage match-sorter sort-by
```
## Overview
...
