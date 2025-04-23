# Sortlab - Sorting Algorithms Visualizer

Una aplicación web interactiva para visualizar y entender diferentes algoritmos de ordenamiento a través de animaciones y ejemplos de código.

## 🚀 Características

- Visualización en tiempo real de 15 algoritmos de ordenamiento diferentes
- Interfaz moderna y responsive usando Material-UI
- Animaciones suaves con Framer Motion
- Implementaciones en múltiples lenguajes de programación
- Control de velocidad y tamaño del array
- Diseño con efecto glassmorphism
- Tema oscuro moderno

## 📊 Algoritmos Implementados

1. **Bubble Sort**
2. **Quick Sort**
3. **Merge Sort**
4. **Insertion Sort**
5. **Selection Sort**
6. **Heap Sort**
7. **Shell Sort**
8. **Counting Sort**
9. **Radix Sort**
10. **Bucket Sort**
11. **Cocktail Sort**
12. **Gnome Sort**
13. **Comb Sort**
14. **Cycle Sort**
15. **Pancake Sort**

## 🛠️ Tecnologías Utilizadas

- **React**: Framework principal
- **TypeScript**: Tipado estático
- **Material-UI**: Componentes y estilos
- **Framer Motion**: Animaciones
- **React Router**: Navegación
- **Vite**: Bundler y desarrollo

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/sorting-visualizer.git
cd sorting-visualizer
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
├── data/          # Datos y configuraciones
│   └── algorithms.ts
├── pages/         # Páginas principales
│   ├── Home.tsx
│   └── AlgorithmDetail.tsx
├── types/         # Definiciones de tipos
│   └── index.ts
├── utils/         # Utilidades y funciones
│   └── sorting.ts
├── App.tsx        # Componente principal
└── main.tsx       # Punto de entrada
```

## 🎨 Diseño y UI

La aplicación utiliza un diseño moderno con:

- **Tema Oscuro**: Fondo oscuro con acentos de color
- **Glassmorphism**: Efectos de cristal en las tarjetas
- **Gradientes**: Títulos con gradientes de color
- **Animaciones**: Transiciones suaves y efectos hover
- **Responsive**: Diseño adaptable a diferentes tamaños de pantalla

## 🧮 Visualización

Cada algoritmo incluye:

- Visualización en tiempo real del proceso de ordenamiento
- Barras de colores que indican:
  - Estado normal (azul)
  - Elementos activos (rojo)
  - Elementos ordenados (verde)
- Controles para:
  - Ajustar la velocidad de visualización
  - Cambiar el tamaño del array
  - Generar nuevos arrays aleatorios
  - Iniciar/detener la visualización

## 📚 Documentación de Código

Cada algoritmo incluye:

- Descripción detallada
- Complejidad temporal (mejor, promedio y peor caso)
- Implementaciones en:
  - Java
  - Python
  - PHP
  - JavaScript
  - C#

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- Material-UI por los componentes y estilos
- Framer Motion por las animaciones
- La comunidad de React por el soporte y recursos
