export const routeProductoCreateMultiple = {
    route: '[POST].../v1/producto/multiple',
    title: 'Agregar Producto Multiples'
};

export const routeProductoCreate = {
    route: '[POST].../v1/producto',
    title: 'Agregar Producto'
};

export const routeProductoFindAll = {
    route: '[POST].../v1/producto',
    title: 'Lista Producto'
};

export const routeProductoFindBy = {
    route: '[POST].../v1/producto',
    title: 'Busqueda Producto'
};

export const routeProductoAttribute = {
    route: '[POST].../v1/producto/busqueda/:attribute/:value',
    title: 'Busqueda Producto por Atributo y Valor.'
};

export const routeProductoNotIntockGeneral = {
    route: '[POST].../v1/producto/not-in-stock-general',
    title: 'Productos que no están en la tabla de stock general.'
};

export const routeProductoUpdate = {
    route: '[POST].../v1/producto',
    title: 'Actualizar Producto'
};

export const routeProductoRemove = {
    route: '[POST].../v1/producto',
    title: 'Eliminar Producto'
};