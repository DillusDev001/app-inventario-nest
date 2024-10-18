export const routeClienteCreate = {
    route: '[POST].../v1/cliente',
    title: 'Agregar Cliente'
};

export const routeClienteFindAll = {
    route: '[POST].../v1/ucliente',
    title: 'Lista Cliente'
};

export const routeClienteFindBy = {
    route: '[POST].../v1/cliente',
    title: 'Busqueda Cliente'
};

export const routeClienteAttribute = {
    route: '[POST].../v1/cliente/busqueda/:attribute/:value',
    title: 'Busqueda Cliente por Atributo y Valor.'
};

export const routeClienteUpdate = {
    route: '[POST].../v1/cliente',
    title: 'Actualizar Cliente'
};

export const routeClienteRemove = {
    route: '[POST].../v1/cliente',
    title: 'Eliminar Cliente'
};