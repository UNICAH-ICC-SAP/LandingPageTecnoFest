import './App.css'
import Logo from './assets/logo1.png'
import LogoIcc from "./assets/logoicc.png"

function App() {


  return (
    <>
      <h1 className="text-center p-3">TECNOFEST</h1>
      <div className="text-center">
        <img src={Logo} alt="Logo del Evento" style={{ width: "300px", height: "auto" }} />
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Bienvenidos a TECNOFEST 2024</h2>
            <p className="lead">El evento de tecnología más esperado del año, donde innovación y creatividad se encuentran.</p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="row">
            <h3 className="text-center">Detalles del Evento</h3>
            <div className="row mt-5">
              <div className="col-12 text-center">
                <h3>Registro de Participantes</h3>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="container-registro">
                <div className="row mt-5">
                  <div className="col-md-12">
                    <div className="card-registro">
                      <div className="card-body-registro">
                        <h1 className='h1-registro'>Inscríbete</h1>
                        <img src={LogoIcc} alt="Logo UNICAH" className="logo-registro" />
                        <form id="registroForm" action="/add" method="post">
                          <div className="form-group-registro">
                            <input type="text" id="nombre" name="name" placeholder="Nombre Completo" className="form-control-registro" />
                          </div>
                          <div className="form-group-registro">
                            <input type="text" id="telefono" name="phone" placeholder="Número de celular" className="form-control-registro" />
                          </div>
                          <div className="form-group-registro">
                            <select id="nivel_participante" name="level" className="form-control-registro">
                              <option value="" disabled selected>Seleccionar una opción</option>
                              <option value="Superior">Superior</option>
                              <option value="Media">Media</option>
                            </select>
                          </div>
                          <div className="form-group-registro text-center">
                            <button type="submit" className="btn btn-primary-registro">Guardar</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 justify-content-between">
              <div className="col-md-12">
                <div className="card mb-3 me-3" style={{ flex: 1 }}>
                  <div className="card-body text-center">
                    <i className="fa-solid fa-calendar-days fa-2x"></i>
                    <div><strong>Fecha:</strong> 27 de Junio de 2024</div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card mb-3 me-3" style={{ flex: 1 }}>
                  <div className="card-body text-center">
                    <i className="fa-solid fa-location-dot fa-2x"></i>
                    <div><strong>Ubicación:</strong> Campus Santiago Apostol</div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card mb-3" style={{ flex: 1 }}>
                  <div className="card-body text-center">
                    <i className="fa-solid fa-clock fa-2x"></i>
                    <div><strong>Horarios:</strong> 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mt-4">
            <h3 className="text-center">Temas</h3>
            <div className="row justify-content-between">
              <div className="col-md-12 col-lg-3">
                <div className="p-0 card mb-3 me-3" style={{ flex: 1 }}>
                  <div className="card-body text-center">
                    <i className="fa-solid fa-shield-halved fa-2x"></i>
                    <div><strong>Protección de Datos:</strong>
                      Prácticas y tecnologías para asegurar la información personal y sensible contra accesos no autorizados, uso indebido y pérdida. Incluye cifrado, control de acceso y cumplimiento normativo.</div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-3">
                <div className="p-0 card mb-3 me-3" style={{ flex: 1 }}>
                  <div className="card-body text-center">
                    <i className="fa-solid fa-user-shield fa-2x"></i>
                    <div><strong>Seguridad en Redes:</strong> Proteger la integridad, confidencialidad y disponibilidad de la información transmitida por redes de computadoras. Incluye firewalls, sistemas de detección de intrusos (IDS) y segmentación de redes.</div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-3">
                <div className="p-0 card mb-3 me-3" style={{ flex: 1 }}>
                  <div className="card-body text-center">
                    <i className="fa-solid fa-lock fa-2x"></i>
                    <div><strong>Autenticación y Autorización:</strong> Procesos para verificar la identidad del usuario y determinar sus permisos de acceso a los recursos. Incluye contraseñas, biometría y niveles de acceso basados en roles.</div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-3">
                <div className="p-0 card mb-3" style={{ flex: 1 }}>
                  <div className="card-body text-center">
                    <i className="fa-solid fa-virus fa-2x"></i>
                    <div><strong>Defensa contra Malware:</strong> Estrategias y tecnologías para detectar, prevenir y eliminar software malicioso. Incluye antivirus, actualizaciones de software y educación de usuarios.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <h3>Registro de Participantes</h3>
          </div>
        </div>
        {/* <div className="container-registro">
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="card-registro">
                <div className="card-body-registro">
                  <h1 className='h1-registro'>Inscríbete</h1>
                  <img src={LogoIcc} alt="Logo UNICAH" className="logo-registro" />
                  <form id="registroForm" action="/add" method="post">
                    <div className="form-group-registro">
                      <input type="text" id="nombre" name="name" placeholder="Nombre Completo" className="form-control-registro" />
                    </div>
                    <div className="form-group-registro">
                      <input type="text" id="telefono" name="phone" placeholder="Número de celular" className="form-control-registro" />
                    </div>
                    <div className="form-group-registro">
                      <select id="nivel_participante" name="level" className="form-control-registro">
                        <option value="" disabled selected>Seleccionar una opción</option>
                        <option value="Superior">Superior</option>
                        <option value="Media">Media</option>
                      </select>
                    </div>
                    <div className="form-group-registro text-center">
                      <button type="submit" className="btn btn-primary-registro">Guardar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="row justify-content-center">
          <div className="col-md-6">
            <form method="POST">
              <h4 className="text-center text-secondary">Registro de personas</h4>
              <?php
              include "modelo/conexion.php";
              include "controlador/registropersonas.php";
                        ?>
              <div className="mb-3">
                <label for="nombre" className="form-label">Nombre de la persona</label>
                <input type="text" className="form-control" name="nombre" id="nombre">
              </div>
              <div className="mb-3">
                <label for="apellido" className="form-label">Apellido de la persona</label>
                <input type="text" className="form-control" name="apellido" id="apellido">
              </div>
              <div className="mb-3">
                <label for="telefono" className="form-label">Teléfono de la persona</label>
                <input type="text" className="form-control" name="telefono" id="telefono">
              </div>
              <div className="mb-3">
                <label for="nivel" className="form-label">Nivel</label>
                <select className="form-control" name="nivel" id="nivel">
                  <option value="1">Superior</option>
                  <option value="2">Media</option>
                  <option value="3">Egresado</option>
                </select>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary" name="btnregistrar" value="ok">Registrar</button>
              </div>
            </form>
          </div>
        </div> */}
      </div >
    </>
  )
}

export default App
