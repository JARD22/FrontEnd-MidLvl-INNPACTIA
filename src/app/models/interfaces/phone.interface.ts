export interface PhoneResponse {
    ok:     boolean;
    phones: Phone[];
}

export interface Phone {
    telefono_id:    number;
    cliente_id:     number;
    marca:          string;
    modelo:         string;
    IMEI:           string;
    fecha_registro: Date;
    usr_registro:   string;
}
