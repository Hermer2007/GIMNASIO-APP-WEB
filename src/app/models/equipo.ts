export interface Equipo {
  id: number;
  nombre: string;
  imagen: string;
  categoria: string;
  descripcion: string;
  musculos: string;
  uso: string;
  nivel: string;
  disponible: boolean;
}

export interface RespuestaEquipos {
  equipos: Equipo[];
}