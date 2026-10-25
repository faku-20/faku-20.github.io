# Facundo Pérez — Portfolio profesional

Sitio personal: **https://faku-20.github.io/**

Portfolio estático de infraestructura IT, redes y desarrollo de sistemas, publicado con GitHub Pages.

## Secciones

- [Inicio](https://faku-20.github.io/) — presentación y cuatro proyectos.
- [Proyectos](https://faku-20.github.io/proyectos.html) — Ltecobike, Homelab, S.I.G.T.O. y Proyecto STEAM.
- [Homelab](https://faku-20.github.io/homelab.html) — Proxmox, Linux, contenedores, redes y diagnóstico.
- [Sobre mí](https://faku-20.github.io/sobre-mi.html) — perfil, estudios, conocimientos y experiencia.
- [Contacto](https://faku-20.github.io/formulario.html) — correo y formulario.

## Tecnología del sitio

HTML semántico, CSS responsive y JavaScript sin dependencias de compilación. No requiere backend propio. Los videos se sirven como MP4 y las imágenes utilizadas en la portada están optimizadas a WebP.

## Desarrollar y validar localmente

```bash
python3 -m http.server 8000
# Abrir http://localhost:8000
```

Ejecutar la comprobación de archivos, enlaces internos, anclas, metadatos e imágenes:

```bash
python3 scripts/validate_portfolio.py
```

El workflow [Validar portfolio](.github/workflows/validate-portfolio.yml) ejecuta esa comprobación al actualizar `main` o abrir un pull request. **La validación es estática**: no sustituye pruebas visuales en navegadores ni una comprobación real del formulario o del contenido audiovisual.

## Material del portfolio

- Ltecobike: la documentación pública y el repositorio de código genérico no deben interpretarse como un volcado fiel de producción.
- S.I.G.T.O.: trabajo académico de equipo; el repositorio principal permanece privado. La página diferencia la participación personal del alcance del producto.
- Proyecto STEAM: se separan explícitamente el ESP32 físico, el simulador Node.js y la integración hidráulica pendiente.
- Homelab: las fotografías generadas son conceptuales. Para documentar instalaciones reales se deben usar capturas propias anonimizadas.

## Reglas editoriales y seguridad

- No publicar direcciones IP privadas, credenciales, tokens, contraseñas ni datos de clientes.
- No presentar simulaciones como ejecuciones reales, ni avances pendientes como funcionalidades verificadas.
- Distinguir los proyectos de equipo de las contribuciones individuales.
- Comprobar los videos y el PDF del CV antes de sustituirlos.
- Evitar subir archivos multimedia de gran tamaño al repositorio si existe una opción de hospedaje apropiada.

## Próximas mejoras dependientes de evidencia

- Capturas anonimizadas del homelab real.
- Video abreviado de S.I.G.T.O. con interacción real verificada y su versión completa mejorada.
- Confirmación visual del despliegue en distintos navegadores y tamaños de pantalla.
- Comparación del PDF de CV publicado con la última versión aprobada.
