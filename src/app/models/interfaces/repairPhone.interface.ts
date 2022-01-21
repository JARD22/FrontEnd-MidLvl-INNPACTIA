export interface RepairsPerPhone {
    ok:   boolean;
    data: RepairPhone[];
}

export interface RepairPhone {
    reparacion_id:      number;
    telefono_id:        number;
    descripcion:        string;
    fecha_inicio:       Date;
    estado:             number | null;
    fecha_finalizacion: null;
    fecha_registro:     Date;
    usr_registro:       string;
}
