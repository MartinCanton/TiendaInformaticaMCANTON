# Informática Mcanton

Bienvenido/a a Informática Mcanton, un sitio web creado por Martín Cantón, en motivo de la cursada de JavaScript de CoderHouse.

## Funcionalidades

### 1. Agregar saldo a la billetera

- Al hacer clic en el botón "Añadir saldo a su billetera", se abrirá un cuadro de diálogo solicitando al usuario que ingrese el monto que desea agregar a su billetera.
- El usuario puede ingresar un monto válido y hacer clic en "Aceptar" para agregar el saldo a su billetera.
- Si el usuario agrega monto a su billetera, se verá reflejado dentro del carrito.
- Si el usuario cancela el cuadro de diálogo, no se realizará ninguna acción.

### 2. Carrito de compras

- Si el usuario desea agregar un producto a su carrito y no posee saldo disponible se mostrará un mensaje solicitando que agregue más saldo a su billetera
- El usuario puede ver los productos que ha seleccionado para comprar en el carrito.
- Cada producto en el carrito puede ser eliminado si se hace clic sobre su imagen
- El saldo disponible en la billetera del usuario se muestra en la parte inferior del carrito y se actualiza mediante vayamos agregando productos.


### 3. Comprar productos

- Si el carrito está vacío se mostrará un mensaje y no se podrá continuar con la compra.
- Una vez que el usuario ha seleccionado los productos que desea comprar, puede hacer clic en el botón "Comprar". 
- Si el usuario tiene suficiente saldo en su billetera para comprar los productos seleccionados, se completará la compra y se mostrará un mensaje de agradecimiento donde también se consultará si quiere realizar otra compra.
- En el mensaje de agradecimiento se mostrará si el usuario posee saldo disponible en su billetera que si no es utilizado en el momento se eliminará.
- Si en la solicitud de una nueva compra (si/no) el usuario selecciona si, el producto seleeccionado se borrará del carrito y el costo del mismo será descontado del saldo de la billetera.
-Si en la solicitud de una nueva compra (si/no) el usuario selecciona no, se mostrará un mensaje de despedida.
- Después de completar una compra, el carrito se vaciará y el saldo de la billetera se actualizará según sea necesario.

