import React, { useEffect } from "react";
import $ from "jquery";

function App() {
    useEffect(() => {
        $.ajax({
            url: "http://localhost:8080/test",
            method: "GET",
            success: (data) => {
                console.log("Respuesta del backend:", data);
            },
            error: (jqXHR, textStatus, errorThrown) => {
                console.error("Error al conectar con el backend:", textStatus);
            },
        });
    }, []);

    return (
        <div>
            <h1>Sistema de Estacionamientos</h1>
        </div>
    );
}

export default App;
