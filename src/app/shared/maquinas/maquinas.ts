import { Component } from '@angular/core';

@Component({
  selector: 'app-maquinas',
  imports: [],
  templateUrl: './maquinas.html',
  styleUrl: './maquinas.css',
})
export class Maquinas {

  maquinas = [
    {
      id: 1,
      nombre: 'Caminadora',
      imagen: 'https://activelife.ec/wp-content/uploads/2024/08/x8200_Web-1.png',
      descripcion: 'Máquina utilizada para realizar ejercicio cardiovascular.',
      musculos: 'Piernas',
      disponible: true
    },
    {
      id: 2,
      nombre: 'Bicicleta estática',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_776665-MLA99479806848_112025-O.webp',
      descripcion: 'Máquina para mejorar la resistencia y trabajar las piernas.',
      musculos: 'Piernas',
      disponible: true
    },
    {
      id: 3,
      nombre: 'Prensa de piernas',
      imagen: 'https://d38xrv9kw7sg9s.cloudfront.net/products/58738.97741.jpg',
      descripcion: 'Máquina utilizada para fortalecer piernas y glúteos.',
      musculos: 'Piernas y glúteos',
      disponible: false
    },
    {
      id: 4,
      nombre: 'Press de pecho',
      imagen: 'https://cdn.etenonfitness.com/assets/products/PL2543/PL2543%20-%20Etenon%20Press%20inclinado%20con%20carga-full.jpg?v=1',
      descripcion: 'Máquina utilizada para trabajar el pecho y los brazos.',
      musculos: 'Pecho y tríceps',
      disponible: false
    },
    {
      id: 5,
      nombre: 'Polea',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6a9X3Q5K6_MsvApuuCIH7ZJFndcERFM5atK7YZ_TXETmjX28ACubMMA&s=10',
      descripcion: 'Máquina que permite realizar diferentes ejercicios de fuerza.',
      musculos: 'Espalda y brazos',
      disponible: true
    },
    {
      id: 6,
      nombre: 'Remo',
      imagen: 'https://d38xrv9kw7sg9s.cloudfront.net/products/58742.97744.jpg',
      descripcion: 'Máquina utilizada para fortalecer la espalda y mejorar la resistencia.',
      musculos: 'Espalda y brazos',
      disponible: true
    },
    {
    id: 7,
    nombre: 'Máquina de abdominales',
    imagen: 'https://activelife.ec/wp-content/uploads/2026/01/ab-coster-u3082.jpg',
    descripcion: 'Máquina diseñada para fortalecer y trabajar la zona abdominal.',
    musculos: 'Abdomen',
    disponible: true
  },
  {
    id: 8,
    nombre: 'Extensión de piernas',
    imagen: 'https://truefitness.com/wp-content/uploads/2025/05/SPL-0100-35-A-Cadet-1.png',
    descripcion: 'Máquina utilizada para fortalecer principalmente los cuádriceps.',
    musculos: 'Cuádriceps',
    disponible: true
  },
  {
    id: 9,
    nombre: 'Curl de piernas',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMU-mfzQfWnPP2WKfxWk_xUaax9srQXdtGfOQZBhI6tRFc3gwUvmLoB98A&s=10',
    descripcion: 'Máquina utilizada para trabajar y fortalecer la parte posterior de las piernas.',
    musculos: 'Isquiotibiales',
    disponible: false
  },
  {
    id: 10,
    nombre: 'Máquina de hombros',
    imagen: 'https://activelife.ec/wp-content/uploads/2024/08/PRO-003_WEB.jpg',
    descripcion: 'Máquina diseñada para realizar ejercicios de empuje y fortalecer los hombros.',
    musculos: 'Hombros y tríceps',
    disponible: true
  },
  {
    id: 11,
    nombre: 'Jalón al pecho',
    imagen: 'https://cdn.etenonfitness.com/assets/products/PC0107/PC0107%20-%20Etenon%20Jalon%20con%20Barra-full.jpg?v=1',
    descripcion: 'Máquina utilizada para fortalecer principalmente la espalda mediante ejercicios de jalón.',
    musculos: 'Espalda y bíceps',
    disponible: false
  },
  {
    id: 12,
    nombre: 'Máquina de gemelos',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwvnHAyBcjLO6Yu9K4bav8pPEYHuiO7lGnKCZGDcxaXPv4_Pa4Z7aSpmA&s=10',
    descripcion: 'Máquina diseñada para fortalecer los músculos de la parte inferior de las piernas.',
    musculos: 'Pantorrillas',
    disponible: true
  }
  ];

  maquinaSeleccionada: any = null;

  verDetalle(maquina: any) {
    this.maquinaSeleccionada = maquina;
  }

  cerrarModal() {
    this.maquinaSeleccionada = null;
  }
}