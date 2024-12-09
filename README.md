# **Wishcart**  
¡Descubre productos, agrégalos a tu lista de deseos y organiza tus favoritos de forma sencilla!

## **Descripción**
Wishcart es una aplicación móvil desarrollada con **Ionic** y **React** que permite a los usuarios explorar productos de una tienda en línea utilizando la API pública de [Platzi Fake Store API](https://fakeapi.platzi.com/). 
Los usuarios pueden buscar productos, agregarlos a su lista de deseos y organizarlos según sus preferencias. 

### **Características principales**
- Buscar productos en una tienda en línea.
- Guardar productos como "deseados" para una fácil referencia.
- Visualizar la lista de deseos con opciones de:
  - Ordenar productos por nombre, precio o fecha de adición.
  - Eliminar productos de la lista.
- Manejo de errores con mensajes personalizados.
- Persistencia local para mantener la lista de deseos incluso después de cerrar la aplicación.
- Diseño responsivo para una experiencia óptima en distintos dispositivos.
- Paginación y disposición en cuadrícula para mostrar productos.

---

## **Requisitos**
- Node.js (v16 o superior)
- npm o yarn (última versión)
- Ionic CLI (instalable con `npm install -g @ionic/cli`)

---

## **Instalación**
1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/koko112189/wishcart.git
   cd Wishcart

2. Instala las dependencias:

  ´´´bash
  npm install

3.Ejecuta la aplicación:

´´´bash
ionic serve

4.Abrir en un dispositivo físico o emulador: Si deseas probar la aplicación en un dispositivo móvil:

´´´bash
ionic capacitor add android
ionic capacitor run android


Estructura del proyecto

src/
├── application/
│   ├── hooks/
│   │   └── useWishlist.ts
│   └── services/
├── components/
│   └── common/
│       └── ProductCard.tsx
├── data/
│   ├── api/
│   │   └── productApi.ts
├── domain/
│   └── models/
│       └── Product.ts
├── pages/
│   ├── SearchPage/
│   │   ├── SearchPage.tsx
│   │   ├── SearchPage.css
│   ├── WishlistPage/
│       ├── WishlistPage.tsx
│       ├── WishlistPage.css
└── App.tsx


# **Uso**

## **Buscar productos**

Navega a la página principal.
Escribe un término de búsqueda o visualiza la lista completa de productos con paginación.
Agregar productos a la lista de deseos
En la lista de productos, haz clic en "Add to Wishlist".
El producto se guardará en tu lista de deseos.


## **Administrar tu lista de deseos**

Accede a la página "Wishlist" desde el menú de navegación.
Ordena los productos por nombre, precio o fecha de adición.
Elimina productos de la lista si ya no los necesitas.

API utilizada
La aplicación consume datos de la API pública de Platzi:

Base URL: https://fakeapi.platzi.com/
Endpoints:
/products: Obtiene la lista de productos.

# **To-Do y mejoras**
 - Implementar búsqueda avanzada por categorías.
 - Permitir al usuario registrar cuentas y sincronizar la lista de deseos en la nube.
 - Mejorar la experiencia en dispositivos de pantalla pequeña.
 - Soporte multilenguaje

# **Decisiones de diseño y arquitectura**

División en capas utilizando una arquitectura limpia
Opté por estructurar la aplicación siguiendo principios de Clean Architecture para separar claramente las responsabilidades:

Domain: Define los modelos de datos (Product) y las reglas de negocio. Esto asegura que la lógica esencial esté aislada de frameworks o librerías específicas.
Application: Contiene los hooks y servicios que orquestan la lógica, como el manejo de la lista de deseos con useWishlist.
Data: Maneja las interacciones con la API (productApi.ts), manteniendo las dependencias externas encapsuladas.
UI: Incluye las páginas (SearchPage, WishlistPage) y componentes reutilizables (ProductCard).
Esta estructura hace que el proyecto sea más escalable y fácil de mantener.

Persistencia local con localStorage
 Usé localStorage para almacenar la lista de deseos, priorizando la simplicidad y el rendimiento. Esto permite que los datos sean accesibles incluso después de recargar la página o cerrar la aplicación. Aunque localStorage tiene limitaciones, fue suficiente para este caso de uso.

Gestión de estado con hooks personalizados
Usé un hook personalizado (useWishlist) para manejar el estado de los productos deseados. Esto simplificó la implementación sin sacrificar flexibilidad, ya que Ionic React ya proporciona herramientas eficientes para la gestión del estado local.

## **Desafíos significativos y cómo se abordaron**

Problema: Inicialmente, al recargar la página, la lista de deseos se borraba debido a un mal manejo del estado inicial.
Solución: Implementé un useEffect para cargar los datos desde localStorage al inicio, y aseguramos que cualquier cambio en el estado de wishlist se guardara automáticamente. También usamos validaciones para evitar sobrescribir accidentalmente el estado con datos vacíos.
Manejo de datos de la API y paginación

Problema: La API no proporcionaba soporte directo para paginación, y cargar todos los productos al mismo tiempo afectaba el rendimiento en dispositivos más lentos.
Solución: Creé una paginación a nivel de cliente usando slice para limitar el número de productos visibles por página. Esto mejoró significativamente la experiencia de navegación.

Desarrollado por John Edison Upegui Acevedo
