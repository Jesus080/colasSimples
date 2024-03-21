class ColaSimple {
  constructor() {
    this.items = [];
  }

  estaVacia() {
    return this.items.length === 0;
  }

  agregar(elemento) {
    this.items.push(elemento);
  }

  eliminar() {
    if (!this.estaVacia()) {
      return this.items.shift();
    } else {
      alert("La cola está vacía.");
    }
  }

  tamano() {
    return this.items.length;
  }
}

const cola = new ColaSimple();

function actualizarUI() {
  document.getElementById('elementosCola').textContent = cola.items.toString();
  document.getElementById('tamanoCola').textContent = cola.tamano();
}

function agregarElemento() {
  const elemento = document.getElementById('elemento').value;
  cola.agregar(elemento);
  actualizarUI();
}

function eliminarElemento() {
  cola.eliminar();
  actualizarUI();
}
    