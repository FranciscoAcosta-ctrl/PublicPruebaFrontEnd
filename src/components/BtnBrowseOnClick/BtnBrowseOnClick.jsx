import React from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'

const BtnBrowseOnClick = () => {
    const OnMsgConsole = () =>{
      console.log("Navegar");
      Swal.fire(
        'Navegar',
        'Mensaje en consola...',
        'success'
      )
    }
    return(
      <>
      <button onClick={OnMsgConsole}>Es tiempo de recoger</button>
      </>
    )
  }

export default BtnBrowseOnClick