# Legend Player: Modo Carrera

**Legend Player** es un juego interactivo de simulación de carrera futbolística. Eliges a tu jugador, seleccionas tu posición, dorsal y nacionalidad, y vives toda una trayectoria profesional desde los 16 hasta los 40 años compitiendo por llevar a tu jugador a lo más alto del fútbol mundial.

## ¿Qué incluye el juego?

- **Evolución y Simulación de Temporadas**: Tu rendimiento, el prestigio del club y tu posición influyen directamente en la mejora de OVR, la valoración de mercado y la conquista de títulos.
- **Eventos y Decisiones de Carrera**: Dilemas con ruleta de riesgo que ponen a prueba tu disciplina, forma física y relación con la directiva o la prensa.
- **Equipos y Selecciones Reales**: Compite en ligas de primera, segunda y tercera división de España, Inglaterra, Italia, Alemania, Francia y América, e integra la Selección Nacional de tu país.
- **Palmarés y Galardones**: Colecciona títulos de club, torneos internacionales y premios individuales como el Balón de Oro, Golden Boy, Bota de Oro o Trofeo Zamora.
- **Control por Teclado**: Diseñado para jugar de forma fluida mediante atajos rápidos (`1`, `2`, `3`, `R`, `ESC`).

## Tecnologías y Arquitectura Web

- **Angular 21**
- **Peticiones y Carga de Imágenes**:
  - **Escudos de Equipos**: Peticiones a `football-data.org`, `footylogos.com` y `bibliotecariodelfutbol.com`.
  - **Banderas**: Integración con `flagcdn.com`.
  - **Sistema de Fallback**: Función `handleBadgeError` para manejar fallos de carga solicitando escudos alternativos (SVG, WebP, PNG) o banderas.
- **Despliegue y Métricas**: `@vercel/analytics` para obtener analíticas del juego.

## Cómo jugarlo localmente

```bash
npm install
ng serve
```

Abre `http://localhost:4200/` en tu navegador.
