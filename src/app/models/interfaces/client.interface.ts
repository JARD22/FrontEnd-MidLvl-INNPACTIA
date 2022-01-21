export interface ClientResponse {
    ok:      boolean;
    clients: Client[];
}

export interface Client {
    nombre:          string;
    cliente_id:      number;
    numero_telefono: string;
    TOTAL:           number;
}