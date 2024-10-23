import React from 'react'; 

export default function TSDV({setShow}) {
    const handleMdEClick = () => {
        setShow(prevShow => prevShow === 'MdE' ? '' : 'MdE');
    };
    return (
        
        <pre className='article_text'>
            En <span className='remarc'>Libreria Rigoberto Maldonado</span>, nos comprometemos a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información personal cuando visitas nuestro sitio web <span className='remarc'>www.TuSitioWeb.com</span>.

            <p className='remarc'>1. Información que Recopilamos</p>
            <p>Recopilamos información personal que tú nos proporcionas, como:</p>
            <ul>
                <li>Nombre.</li>
                <li>Dirección de correo electrónico.</li>
                <li>Dirección de envío.</li>
                <li>Información de pago.</li>
                <li>Número de teléfono.</li>
            </ul>
            También podemos recopilar información automáticamente, como:
            <ul>
                <li>Dirección IP.</li>
                <li>Tipo de navegador.</li>
                <li>Páginas visitadas.</li>
                <li>Tiempo de acceso.</li>
            </ul>

            <p className='remarc'>2. Uso de la Información</p>
            <p>Utilizamos tu información para:</p>
            <ul>
                <li>Procesar y enviar tus pedidos.</li>
                <li>Comunicarnos contigo sobre tus pedidos y cuenta.</li>
                <li>Mejorar nuestro sitio y servicios</li>
                <li>Enviar promociones y noticias. (puedes optar por no recibir estas comunicaciones)</li>
            </ul>

            <p className='remarc'>3. Métodos de Pago</p>
            <p>Utilizamos <span className='remarc'>PayPal</span> y <span className='remarc'>MercadoPago</span> para procesar las transacciones en línea en nuestro sitio web. Ambas plataformas son seguras y cifradas, protegiendo la confidencialidad de tu información de pago.</p>
            <p>En determinadas situaciones, como entregas locales, también aceptamos <span className='remarc'>pago en persona</span>.</p>
            <p className='remarc'>No almacenamos tu información de pago directamente en nuestro sistema.</p>

            <p className='remarc'>4. Política de Devoluciones y Reembolsos</p>
            <p>Las devoluciones se pueden solicitar dentro de un plazo de 19 días naturales desde la fecha de compra. Para ser elegible para un reembolso, el libro debe estar en su empaque original (En caso de incluir) y no mostrar signos de uso.</p>
            <p>Los libros digitales no son elegibles para devolución una vez descargados.</p>
            <p>Para los productos entregados en persona, se te solicitará revisar el estado del libro al momento de la entrega. Una vez que confirmes la recepción del producto en buen estado, no se aceptarán devoluciones posteriores, salvo por defectos no evidentes al momento de la entrega.</p>
            <p className='remarc'>Nos reservamos el derecho de verificar las condiciones antes de procesar cualquier reembolso.</p>
            <p className='remarc'>Para saber mas sobre los envios consulte: <a onClick={handleMdEClick} className="to_point" href="#MdE">Metodos de entrega</a>.</p>

            <p className='remarc'>5. Compartición de Información</p>
            <p>No vendemos ni alquilamos tu información personal a terceros, pero podemos compartir tu información con:</p>
            <ul>
                <li>Proveedores de servicios que nos ayudan a operar nuestro sitio. (como procesadores de pagos y servicios de envío)</li>
                <li>Autoridades legales si es necesario para cumplir con la ley.</li>
            </ul>

            <p className='remarc'>6. Seguridad de la Información</p>
            <p>Tomamos medidas razonables para proteger tu información personal, incluyendo el uso de cifrado SSL para transacciones en línea. Sin embargo, ninguna transmisión de datos por Internet o almacenamiento electrónico es completamente segura. Por lo tanto, no podemos garantizar su seguridad absoluta.</p>

            <p className='remarc'>7. Resolución de Conflictos</p>
            <p>En caso de disputas, nos comprometemos a resolver los conflictos a través de los Medios Alternativos de Solución de Conflictos (MASC), de acuerdo con las normativas del Código de Ética en materia de Comercio Electrónico en México.</p>

            <p className='remarc'>8. Publicidad y Promociones</p>
            <p>Toda la publicidad y promociones que se encuentren en nuestro sitio estarán claramente identificadas y no inducirán a error o confusión.</p> 
            <p className='remarc'>Seguimos los lineamientos establecidos por la Ley Federal de Protección al Consumidor.</p>

            <p className='remarc'>9. Cambios a esta Política</p>
            <p>Podemos actualizar esta Política de Privacidad de vez en cuando, te notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio. </p>
            <p className='remarc'>Te recomendamos revisar esta política periódicamente para mantenerte informado sobre cualquier cambio.</p>

            <p className='remarc'>10. Tus Derechos</p>
            <p>Tienes derecho a:</p>
            <ul>
                <li>Acceder a tu información personal</li>
                <li>Solicitar la corrección de información inexacta</li>
                <li>Solicitar la eliminación de tu información personal (bajo ciertas condiciones)</li>
            </ul>

            <p className='remarc'>11. Contacto</p>
            <p>Si tienes preguntas o inquietudes sobre esta Política de Privacidad, contáctanos a:</p>
            <ul>
                <li>[Correo de la empresa]</li>
                <li>[Teléfono de contacto]</li>
                <li>[Dirección física de la empresa]</li>
            </ul>
        </pre>                  
    );
}