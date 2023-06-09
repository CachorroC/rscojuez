// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface BancolombiaBase {
  carpeta: number;
  deudor: Deudor;
  etapaprocesal: Etapaprocesal;
  juzgado: Juzgado;
  medidascautelares: Medidascautelares;
  notificaciones: Notificaciones;
  secuestro?: Secuestro;
  secuestros?: Secuestros;
  codeudor?: Codeudor;
  avaluo?: Avaluo;
  terminacion?: Terminacion;
  fecha?: BancolombiaBaseFecha;
}

export interface Avaluo {
  valoravaluo: string;
}

export interface Codeudor {
  id: number | string;
  name: string;
  direccion?: string;
  tel?: CodeudorTel;
}

export interface CodeudorTel {
  fijo: number | string;
}

export interface Deudor {
  direccion: string;
  email?: string;
  id: number;
  name: string;
  tel?: DeudorTel;
}

export interface DeudorTel {
  celular: number;
}

export interface Etapaprocesal {
  etapaprocesal: string;
  fecha?: EtapaprocesalFecha;
}

export interface EtapaprocesalFecha {
  mandamientodepago?: number | string;
  presentaciondemanda: number | string;
}

export interface BancolombiaBaseFecha {
  suspencionproceso: string;
}

export interface Juzgado {
  idProceso: number;
  capitaladeudado: string;
  ciudadjuzgado: string;
  depto: string;
  expediente: string;
  fecha: JuzgadoFecha;
  locationjuzgado: string;
  obligacion: {
    [key: string]: number | string;
  };
  origen: string;
  procesotype: string;
  radicado: string;
  ejecucion?: string;
}

export interface JuzgadoFecha {
  entregagarantiasabogado: string;
  vencimientopagare?: string;
}

export interface Medidascautelares {
  bienes?: string;
  descripmedida?: string;
  fecha?: MedidascautelaresFecha;
  medidasolicita?: string;
  oficio?: Oficio;
  placas?: string;
  respuesta?: Respuesta;
}

export interface MedidascautelaresFecha {
  decretosecuestro?: string;
  radicacion?: string;
  retirooficios?: number | string;
  ordenamedidascautelares?: string;
  solicitudcaptura?: string;
}

export interface Oficio {
  fecha: TypeClass;
  id: number | string;
}

export interface TypeClass {
  ""?: string;
}

export interface Respuesta {
  embargo: boolean | string;
}

export interface Notificaciones {
  "291": The291;
  "292": The292;
  fecha?: NotificacionesFecha;
  type: TypeClass | string;
  certimail?: boolean;
  fisico?: boolean;
}

export interface The291 {
  fecha?: The291_Fecha;
  resultado?: boolean | string;
}

export interface The291_Fecha {
  aportanotif?: string;
  recibido?: string;
  aportonotif?: string;
}

export interface The292 {
  fecha?: The292_Fecha;
  resultado?: boolean | string;
}

export interface The292_Fecha {
  aportanotif: string;
  reciboaviso?: string;
}

export interface NotificacionesFecha {
  autonotificado: string;
}

export interface Secuestro {
  extra: string;
}

export interface Secuestros {
  fecha: SecuestrosFecha;
}

export interface SecuestrosFecha {
  captura: number;
  secuestro: string;
}

export interface Terminacion {
  fecha: TerminacionFecha;
  valorliquidacioncredito?: number;
  valorcostas?: number;
}

export interface TerminacionFecha {
  presentacionliquidacion?: string;
  solicitudliquidacion?: string;
  aprobracionliquidacion?: string;
  sentencia?: string;
  aprovacioncostsas?: number | string;
}
