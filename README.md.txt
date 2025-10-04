¿Qué significa className en React?
className es el atributo que se utiliza en React para asignar una clase CSS a un elemento HTML. No se utiliza el atributo class estándar de HTML porque class es una palabra reservada en JavaScript.

¿Las props tienen un límite?
No hay un límite estricto de cuántas props puedes pasar. Sin embargo, en la práctica, si un componente necesita más de cinco a siete props, es una señal de que el componente podría estar haciendo demasiadas cosas

¿Quién define las props?
Las props son definidas por el componente padre. Cuando un Componente Padre renderiza a un Componente Hijo, el padre es quien le asigna y pasa las props (datos). El Componente Hijo solo tiene la función de leer esas props; no puede modificarlas.