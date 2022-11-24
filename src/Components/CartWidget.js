import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./CustomProvider"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const CartWidget = () => {

    const valorDelContexto = useContext(contexto)

    const [estado, setEstado] = useState(false)

    const abrirModal = () => {
    setEstado(estado = true)
    }
    const cerrarModal = () => {
    setEstado(estado = false)
    }
    return (
        <>
            <Button className="material-icons" onClick={abrirModal}>shopping_cart_checkout</Button>
            <span className="items_cantidad">{valorDelContexto.cantidadTotal}</span>

      <Modal isOpen={estado}>
        <ModalHeader>
          Iniciar Sesión
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="usuario">Usuario</Label>
            <Input type="text" id="usuario"/> 
          </FormGroup>
          <FormGroup>
            <Label for="password">Contraseña</Label>
            <Input type="text" id="password"/> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button color="primary">Iniciar Sesión</Button>
            <Button color="secondary" onClick={cerrarModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
        </>
           
    )
}

export default CartWidget

// function CartWidget (){
//     return(
//         <>
//             <Link to="/cart"><span className="material-icons">shopping_cart_checkout</span></Link>
//         </>
//     )
// }

// export default CartWidget;