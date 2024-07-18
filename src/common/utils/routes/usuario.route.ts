export const routeUsuarioCreate = {
    route: '[POST].../v1/usuario',
    title: 'Agregar Usuario'
};

export const routeUsuarioFindAll = {
    route: '[POST].../v1/usuario',
    title: 'Lista Usuario'
};

export const routeUsuarioFindBy = {
    route: '[POST].../v1/usuario',
    title: 'Busqueda Usuario'
};

export const routeUsuarioAttribute = {
    route: '[POST].../v1/usuario/busqueda/:attribute/:value',
    title: 'Busqueda Usuario por Atributo y Valor.'
};

export const routeUsuarioLogin = {
    route: '[POST].../v1/usuario/:usuario/:password',
    title: 'Login Usuario'
};

export const routeUsuarioUpdate = {
    route: '[POST].../v1/usuario',
    title: 'Actualizar Usuario'
};

export const routeUsuarioRemove = {
    route: '[POST].../v1/usuario',
    title: 'Eliminar Usuario'
};