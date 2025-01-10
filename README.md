# Uso de Bootstrap en mi Proyecto
En este proyecto he utilizado **Bootstrap** para diseñar una página responsiva y visualmente atractiva. A continuación, detallo cómo lo he implementado:
## Inclusión de Bootstrap
He incluido Bootstrap en el proyecto mediante un CDN en el archivo `index.html`:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```
## Componentes y clases que he utilizado

### **Navbar**
Utilicé el componente de navegación de Bootstrap para crear una barra de navegación fija y responsiva en la parte superior de la página.
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Mi Proyecto</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#home">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```
### **Grid System**
Usé el sistema de rejilla de Bootstrap para estructurar el diseño responsivo:
```html
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h2>Sección 1</h2>
      <p>Contenido de la primera columna.</p>
    </div>
    <div class="col-md-6">
      <h2>Sección 2</h2>
      <p>Contenido de la segunda columna.</p>
    </div>
  </div>
</div>
```
### **Cards**
Implementé tarjetas para mostrar los proyectos de forma visual:
```html
<div class="card" style="width: 18rem;">
  <img src="proyecto1.png" class="card-img-top" alt="Imagen del proyecto">
  <div class="card-body">
    <h5 class="card-title">Proyecto 1</h5>
    <p class="card-text">Descripción breve del proyecto.</p>
    <a href="https://github.com" class="btn btn-primary">Ver más</a>
  </div>
</div>
```
### **Buttons**
Utilicé los botones predefinidos de Bootstrap para acciones importantes:
```html
<a href="#projects" class="btn btn-primary">Explorar proyectos</a>
```
### **Forms**
Creé el formulario de contacto utilizando las clases de formulario de Bootstrap:
```html
<form>
  <div class="mb-3">
    <label for="name" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="name" placeholder="Tu nombre">
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Correo electrónico</label>
    <input type="email" class="form-control" id="email" placeholder="Tu correo">
  </div>
  <div class="mb-3">
    <label for="message" class="form-label">Mensaje</label>
    <textarea class="form-control" id="message" rows="3" placeholder="Tu mensaje"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```
### **Utilities**
Aproveché las clases de utilidad para ajustes rápidos:

- **Espaciado**:
```html
<div class="mb-4 py-5">Contenido con márgenes y padding.</div>
```
- **Texto**:
```html
<p class="text-center">Texto centrado.</p>
```
- **Fondo**:
```html
<div class="bg-light">Sección con fondo claro.</div>
```
- **Flexbox**:
```html
<div class="d-flex justify-content-between">
  <span>Elemento 1</span>
  <span>Elemento 2</span>
</div>
```
### **Responsive Breakpoints**
Usé las clases responsivas de Bootstrap para adaptar el diseño a diferentes pantallas:
```html
<div class="row">
  <div class="col-12 col-md-6">Columna 1</div>
  <div class="col-12 col-md-6">Columna 2</div>
</div>
```
## Personalización
Aunque he utilizado Bootstrap como base, añadí estilos personalizados en `styles.css` para adaptar el diseño a las necesidades específicas del proyecto:
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}

body {
  font-family: 'Arial', sans-serif;
}

.navbar {
  background-color: var(--primary-color);
}

.card {
  border: 2px solid var(--secondary-color);
}
```
## Conclusión
Gracias al uso de **Bootstrap**, he podido desarrollar un diseño funcional, responsivo y visualmente atractivo. Además, los estilos personalizados me permitieron aportar un toque único que refleja mi trabajo y creatividad. Este enfoque combina lo mejor de ambas herramientas para lograr un resultado profesional y eficiente.
