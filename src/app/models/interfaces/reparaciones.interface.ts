export interface ReparacionesResp {
    ok:   boolean;
    data: Reparaciones[];
}

export interface Reparaciones {
    MARCA:              string;
    MODELO:             string;
    DESCRIPCION:        string;
    ESTADO:             number | null;
    FECHA_FINALIZACION: null;
    FECHA_INICIO:       Date;
    TOTAL_REPARACIONES: number;
}
