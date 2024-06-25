import './App.css'
import Logo from './assets/logo1.png'
import LogoIcc from "./assets/logoicc.png"
import { saveData } from "./helpers/Utillities";
import { IUtillities } from "./helpers/IUtillities";
import { ChangeEvent, useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';

interface IUserRegister {
  Nombre: string;
  Telefono: string;
  Nivel: string;
}

function App() {
  const utilities: IUtillities = { url: '' }
  const [onRedirect, setOnRedirect] = useState<boolean>(true)
  const [formData, updateFormData] = useState<IUserRegister>({ Nombre: "", Telefono: "", Nivel: "" });
  // const [saved, setSaved] = useState<boolean>(false);
  const handleChange = (prop: keyof IUserRegister) => (event: ChangeEvent<HTMLInputElement>) => {
    updateFormData({ ...formData, [prop]: event.target.value });
  };
  const handleSelectChange = (prop: keyof IUserRegister) => (event: ChangeEvent<HTMLSelectElement>) => {
    updateFormData({ ...formData, [prop]: event.target.value });
  };
  const handleSubmit = async (userAccount: IUserRegister) => {
    utilities.url = '/registros';
    utilities.data = userAccount;
    const result = await saveData(utilities);
    if (result === 200) {
      toast.success('🦄 Usted se ha suscrito al evento!', {
        position: "top-right",
        transition: Bounce,
        onClose: () => setOnRedirect(true)
      })
    } else {
      toast.error("Sucedio un error al suscribirse, contacte a soporte.")
    }
  }
  // setTimeout(function () { setSaved(false) }, 3600)
  return (
    <>

      {!onRedirect ? <div className="container">
        <h1 className="text-center p-3">TECNOFEST</h1>
        <div className="text-center">
          <img src={Logo} alt="Logo del Evento" style={{ width: "300px", height: "auto" }} />
        </div>
        <div className="row mb-3">
          <div className="col-12 text-center">
            <h2>Bienvenidos a TECNOFEST 2024</h2>
            <p className="lead">El evento de tecnología más esperado del año, donde innovación y creatividad se encuentran.</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="row mb-5 justify-content-center">
            <h3 className="text-center">Detalles del Evento</h3>
            <h3 className='text-center mt-2 mb-4'>Registro de Participantes</h3>
            <div className="row">
              <div className="col-md-12 col-lg-6 mb-4">
                <div className="container-registro">
                  <div className="row mt-5">
                    <div className="col-md-12">
                      <div className="card-registro">
                        <div className="card-body-registro">
                          <h1 className='h1-registro'>Inscríbete</h1>
                          <img src={LogoIcc} alt="Logo UNICAH" className="logo-registro" />
                          <div className="form-group-registro">
                            <input type="name" id="nombre" name="name" placeholder="Nombre Completo" className="form-control-registro" onChange={handleChange('Nombre')} />
                          </div>
                          <div className="form-group-registro">
                            <input type="number" id="telefono" name="phone" placeholder="Número de celular" className="form-control-registro" onChange={handleChange('Telefono')} />
                          </div>
                          <div className="form-group-registro">
                            <select onChange={handleSelectChange('Nivel')} id="nivel_participante" name="level" className="form-control-registro">
                              <option value="" disabled selected>Seleccionar una opción</option>
                              <option value="Superior">Superior</option>
                              <option value="Media">Media</option>
                              <option value="Ex-Alumno">Ex-Alumno</option>
                            </select>
                          </div>
                          <div className="form-group-registro text-center">
                            <button onClick={() => handleSubmit(formData)} className="btn btn-primary-registro">Guardar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ToastContainer theme="dark" transition={Bounce} />
              </div>
              <div className="col-md-12 col-lg-6 justify-content-between">
                <div className="col-md-12">
                  <div className="card mb-3" style={{ flex: 1 }}>
                    <div className="card-body text-center">
                      <i className="fa-solid fa-calendar-days fa-2x"></i>
                      <h4><strong>Fecha:</strong></h4>
                      <h5> 27 de Junio de 2024</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card mb-3" style={{ flex: 1 }}>
                    <div className="card-body text-center">
                      <i className="fa-solid fa-location-dot fa-2x"></i>
                      <h4><strong>Ubicación:</strong></h4>
                      <h5>Campus Santiago Apostol</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card mb-3" style={{ flex: 1 }}>
                    <div className="card-body text-center">
                      <i className="fa-solid fa-clock fa-2x"></i>
                      <h4><strong>Horarios:</strong></h4>
                      <h5>9:00 AM - 3:00 PM</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mt-4">
            <h3 className="text-center mb-3">Temas</h3>
            <div className="row justify-content-between">
              <div className="col-md-12 col-lg-3 px-0">
                <div className="p-0 card mb-3 me-3" style={{ flex: 1 }}>
                  <div className="card-body text-center temas">
                    <i className="fa-solid fa-shield-halved fa-2x"></i>
                    <h5 className='mb-3 tema-title pt-4'><strong>Datacenters Híbridos:</strong></h5>
                    <div>
                      Descubre cómo los datacenters híbridos combinan la infraestructura local y la nube para ofrecer flexibilidad, escalabilidad y seguridad, revolucionando la gestión de datos empresariales.</div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-3 px-0">
                <div className="p-0 card mb-3 me-3" style={{ flex: 1 }}>
                  <div className="card-body text-center temas">
                    <i className="fa-solid fa-user-shield fa-2x"></i>
                    <h5 className='mb-3 tema-title'><strong>Tendencias Emergentes en Tecnología y su Impacto en el Futuro del Trabajo:</strong></h5>
                    <div>Explora cómo la inteligencia artificial, el blockchain, la automatización y el IoT están transformando el entorno laboral y cómo puedes prepararte para adaptarte y prosperar en el futuro del trabajo.</div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-3 px-0">
                <div className="p-0 card mb-3 me-3" style={{ flex: 1 }}>
                  <div className="card-body text-center temas">
                    <i className="fa-solid fa-lock fa-2x"></i>
                    <h5 className='mb-3 tema-title'><strong>Tu Camino en el Desarrollo de Software: Lo Que Viene Después de la Universidad:</strong></h5>
                    <div>Conoce las diversas rutas profesionales que puedes tomar después de graduarte en desarrollo de software, desde trabajar en startups hasta grandes empresas, y aprende a avanzar en tu carrera y dominar nuevas habilidades.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <h3 className="text-center mb-3">Expositores</h3>
            <div className="row justify-content-between">
              <div className="col-md-12 col-lg-3 px-0">
                <div className="p-0 card mb-3 me-3" style={{ flex: 1 }}>
                  <div className="card-body text-center temas">
                    <i className="fa-solid fa-shield-halved fa-2x"></i>
                    <h5 className='mb-1 tema-title'><strong>Ing. Victor Hugo Almendares</strong></h5>
                    <div>
                      <p className='mb-0 w-100'>Gerente de TI Operaciones</p>
                      <p className='mb-0 w-100'>Banco Davivienda</p>
                      <p className='mb-0 w-100'>Tema: Datacenters Hibridos</p></div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-3 px-0">
                <div className="p-0 card mb-3 me-3" style={{ flex: 1 }}>
                  <div className="card-body text-center temas">
                    <i className="fa-solid fa-user-shield fa-2x"></i>
                    <h5 className='mb-1 tema-title'><strong>Ing. Heber Orlando Galindo</strong></h5>
                    <div>
                      <p className='mb-0 w-100'>Lider Tecnico Desarrollo</p>
                      <p className='mb-0 w-100'>Banco Davivienda</p>
                      <p className='mb-0 w-100'>Tema: Tendencias Emergentes en Tecnologia y su Impacto en el Futuro del Trabajo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-3 px-0">
                <div className="p-0 card mb-3 me-3" style={{ flex: 1 }}>
                  <div className="card-body text-center temas">
                    <i className="fa-solid fa-lock fa-2x"></i>
                    <h5 className='mb-1 tema-title'><strong>Ing. Arles Arnulfo Huete</strong></h5>
                    <div>
                      <p className='mb-0 w-100'>Desarrollador</p>
                      <p className='mb-0 w-100'>Quid Solutions</p>
                      <p className='mb-0 w-100'>Tema: Tu Camino en el Desarrollo de Software: Lo que Viene despues de la Universidad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div > : <div className="row justify-content-center fondo"><h1 className="text-center p-3">TECNOFEST</h1>
        <div className="text-center">
          <img src={Logo} alt="Logo del Evento" style={{ width: "300px", height: "auto" }} />
        </div>
      </div>}
    </>
  )
}

export default App
