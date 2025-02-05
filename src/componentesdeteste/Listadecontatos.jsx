import React, { useState } from "react";


function Listadecontatos(){
    const [contatos, setContatos] = useState([
        {id: 1, nome:"Claudio"},
        {id: 2, nome:"Jertrudes"},
        {id: 3, nome:"Clara"},
        {id: 4, nome:"Ana"},
        {id: 5, nome:"Vitoria"},
        {id: 6, nome:"Beatriz"},
        {id: 5, nome:"Vivian"},
        {id: 6, nome:"Lola"},
    ])

    function removedor (contato){
        console.log(contato)
        setContatos(contatos.filter(pessoa=>pessoa != contato))
    }

    return(
        <div>
            {contatos.map((contato) =>(
                <div>{contato.nome} <input value='Remover' onClick={()=>removedor(contato)} type="button"/></div>
            ))}
        </div>
    )



}

export default Listadecontatos;




