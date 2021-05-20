import React from 'react';
import './Hablemos.css';
import emailjs from 'emailjs-com';
emailjs.init("user_1gJ8Iv73RTUK5kuyME28W");



class Hablemos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: "",
            eMail: "",
            motivoDeContacto:'',
            detalleDeContacto:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`Muchas gracias por tu interes ${this.state.nombre} pronto te contactaremos`);

        const templateParams = {
            from_name: this.state.nombre,
            from_email: this.state.eMail,
            to_name: "franciscovergaracr@gmail.com",
            motivo: this.state.motivoDeContacto,
            message: this.state.detalleDeContacto
        };
        emailjs
      .send("contact_service", "contact_form", templateParams)
      .then(
        function(response) {
            alert("Your message has successfully sent!");
        },
        function(err) {
            alert("Your message was not able to be sent");
        }
        );
        this.setState({
            name: "",
            email: "",
            feedback: ""
        });
    }

    render(){
        return (
            <div >
                <div className="intro-hablemos">
                    <p>Gracias por tu interes en Meditec, por favor llena nuestro formulario y pronto entraremos en contacto</p>
                </div>

                <div className="parentFormulario" >

                    <form onSubmit={this.handleSubmit} className="formulario-contacto"  >
                   
                    <ul className="form-style-1">
                        <li><label>Full Name <span className="required">*</span></label><input type="text" name="nombre" className="field-divided" placeholder="First" value={this.state.value} onChange={this.handleInputChange} /> <input type="text" name="field2" className="field-divided" placeholder="Last" /></li>
                        <li>
                            <label>Email <span className="required">*</span></label>
                            <input type="email" name="eMail" className="field-long" value={this.state.value} onChange={this.handleInputChange} />
                        </li>
                        <li>
                            <label>Motivo de contacto</label>
                            <select name="motivoDeContacto" className="field-select" value={this.state.value} onChange={this.handleInputChange}>
                            <option value="Adquirir productos">Adquirir productos</option>
                            <option value="Invertir">Invertir en Meditec</option>
                            <option value="Trabajar con nosotros">Trabajar con nosotros</option>
                            </select>
                        </li>
                        <li>
                            <label>Your Message <span className="required">*</span></label>
                            <textarea name="detalleDeContacto" id="field5" className="field-long field-textarea" value={this.state.value} onChange={this.handleInputChange}></textarea>
                        </li>
                        <li>
                            <input type="submit" value="Enviar" onClick={this.handleSubmit.bind(this)} />
                        </li>
                    </ul>

                    </form>
                </div>
            </div>
        )
    }
}

export default Hablemos;