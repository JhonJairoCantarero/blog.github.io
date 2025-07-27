# Aprendiendo entre techos de lámina y pupitres rotos

## 📚 Descripción

Este es un blog web interactivo que cuenta la historia inspiradora de la profesora Daysi, quien trabaja con niños de 4 y 5 años en condiciones de pobreza en un kínder de Tegucigalpa, Honduras. El proyecto aborda los cuatro pilares fundamentales del aprendizaje y cómo se pueden aplicar en contextos de escasos recursos.

## 🎯 Objetivos del Proyecto

- **Concienciar** sobre los desafíos de la educación en contextos vulnerables
- **Inspirar** a través de la historia de la profesora Daysi
- **Educar** sobre los cuatro pilares del aprendizaje
- **Motivar** a la acción social y el voluntariado

## 🌟 Características Principales

### Diseño y UX
- ✨ Diseño moderno y responsivo
- 🎨 Paleta de colores profesional y accesible
- 📱 Optimizado para dispositivos móviles
- ♿ Funcionalidades de accesibilidad integradas

### Contenido
- 📖 Historia completa de la profesora Daysi
- 🏛️ Los cuatro pilares del aprendizaje:
  - **Aprender a Conocer**: Estimulación de la imaginación
  - **Aprender a Hacer**: Desarrollo motriz y emocional
  - **Aprender a Convivir**: Empatía y resolución de conflictos
  - **Aprender a Ser**: Autoestima y expresión emocional
- 💭 Reflexiones y aprendizajes
- 📚 **Bibliografía y artículos académicos**
- 💬 **Sistema de comentarios interactivo**
- 📞 Sección de contacto y acción social

### Funcionalidades Técnicas
- 🎭 Animaciones suaves y efectos visuales
- 🔄 Navegación fluida con scroll suave
- 📱 Menú hamburguesa para móviles
- 🎯 Efectos de parallax y partículas flotantes
- 🔔 Sistema de notificaciones
- 🎨 Efectos de hover y transiciones
- 📊 Tooltips informativos
- 💬 **Formulario de comentarios con validación**
- 👍 **Sistema de likes y respuestas**
- 📚 **Biblioteca de recursos educativos**
- 🔍 **Paginación de comentarios**

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Variables CSS (Custom Properties)
  - Flexbox y Grid Layout
  - Animaciones y transiciones
  - Media queries para responsividad
- **JavaScript (ES6+)**:
  - Intersection Observer API
  - Event listeners y DOM manipulation
  - Animaciones personalizadas
  - Funciones asíncronas

## 📁 Estructura del Proyecto

```
blog/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentación del proyecto
```

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desarrollo)

### Instalación

1. **Clona o descarga el proyecto:**
   ```bash
   git clone [URL-del-repositorio]
   cd blog
   ```

2. **Abre el archivo principal:**
   - Navega a la carpeta del proyecto
   - Abre `index.html` en tu navegador web

### Desarrollo Local

Para desarrollo local con un servidor:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000` en tu navegador.

## 📱 Responsividad

El blog está completamente optimizado para:

- 📱 **Móviles** (320px - 768px)
- 📱 **Tablets** (768px - 1024px)
- 💻 **Escritorio** (1024px+)

## ♿ Accesibilidad

El proyecto incluye múltiples características de accesibilidad:

- ✅ Navegación por teclado
- ✅ Skip links para usuarios de lectores de pantalla
- ✅ Atributos ARIA apropiados
- ✅ Contraste de colores adecuado
- ✅ Textos alternativos para elementos visuales
- ✅ Soporte para `prefers-reduced-motion`

## 🎨 Personalización

### Colores
Los colores se pueden personalizar editando las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #2c5aa0;    /* Color principal */
    --secondary-color: #f39c12;  /* Color secundario */
    --accent-color: #e74c3c;     /* Color de acento */
    /* ... más variables */
}
```

### Contenido
- Edita `index.html` para modificar el contenido
- Actualiza las imágenes y textos según tus necesidades
- Personaliza los enlaces de redes sociales en el footer

## 🔧 Funcionalidades JavaScript

### Características Principales
- **Navegación móvil**: Menú hamburguesa funcional
- **Animaciones de scroll**: Elementos que aparecen al hacer scroll
- **Efectos visuales**: Partículas flotantes, efectos parallax
- **Interactividad**: Botones con efectos ripple
- **Notificaciones**: Sistema de alertas para acciones del usuario

### APIs Utilizadas
- `IntersectionObserver`: Para animaciones de scroll
- `matchMedia`: Para detectar preferencias del sistema
- `navigator.share`: Para compartir contenido (cuando está disponible)

## 📊 SEO y Metadatos

El proyecto incluye:
- Meta tags optimizados
- Estructura HTML semántica
- Títulos y descripciones apropiados
- Open Graph tags (preparados para redes sociales)

## 🌐 Despliegue

### Opciones de Hosting
- **GitHub Pages**: Gratuito y fácil de configurar
- **Netlify**: Despliegue automático desde Git
- **Vercel**: Optimizado para sitios estáticos
- **Cualquier servidor web**: Apache, Nginx, etc.

### Pasos para GitHub Pages
1. Sube el código a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama principal
4. Tu sitio estará disponible en `https://[usuario].github.io/[repositorio]`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Para preguntas o sugerencias sobre este proyecto:

- 📧 Email: info@educaciontransformadora.org
- 🌐 Sitio web: [URL del sitio]
- 📱 Teléfono: +504 1234-5678

## 🙏 Agradecimientos

- A la profesora Daysi por su inspiradora labor
- A todos los educadores que trabajan en contextos vulnerables
- A la comunidad de desarrolladores web por las herramientas y recursos

---

**Nota**: Este es un proyecto educativo y de concienciación social. La historia de la profesora Daysi es representativa de muchos educadores que trabajan en condiciones difíciles alrededor del mundo. 