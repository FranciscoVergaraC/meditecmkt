import React from 'react';
import './Productos.css';

class Productos extends React.Component {
    render(){
        return (
            <div className="prodDiv" >
                <ul>
                    <li>
                        <div className="liLogo">
                            <p className="fab fa-periscope"/>
                        </div>
                        <div className="liText">
                            <p><strong>Smart Track:</strong> Porque sabemos cuanto quieres a tus seres queridos, hemos desarrollado tecnologia que te permite cuidarlos de la mejor manera, monitoreando cada instante y alertando cuando hay problemas</p>
                        </div>
                    </li>
                    <li>
                        <div className="liLogo">
                            <p className="fas fa-notes-medical"/>
                        </div>
                        <div className="liText">
                            <p><strong>LifeCycle:</strong> Toda tu informacion medica en un solo lugar, permitiendo a los profesionales de salud ayudarte conociendo todo tu historial</p>
                        </div>
                    </li>
                    <li>
                        <div className="liLogo">
                            <p className="fas fa-laptop-house"/>
                        </div>
                        <div className="liText">
                            <p><strong>Remote:</strong> El mundo esta cambiando y Meditec esta presente para ayudarte, con Remote podras crear tu consulta online y antender desde cualquier parte del mundo</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Productos;