import nodemailer from 'nodemailer';
import { jsPDF } from "jspdf";

export const helpMail = async (req, res) => {
    const { email } = req.body; 

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: 'gmail',
        port: 465,
        secure: true, 
        auth: {
            user: 'librosmaldonado68@gmail.com',       
            pass: 'xzym wpfq kwms gbdj'     
        }
    });


    const mailOptions = {
        from: {
            name: 'Libros Maldonado',
            address: 'librosmaldonado68@gmail.com',
        },
        to: email,
        subject: `Sistema de registro Libros Maldonado`,
        html: `
        <article style="display: flex; flex-direction: column; align-items: center; font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <div style="border: solid #000; padding: 0.5em;">
                <header style="border-bottom: 0.2em solid #ddd; margin: 0; padding: 0;">
                    <h1 style="color: #042479; border-bottom: 0.2em solid #ddd; margin-bottom: 0.5em;">
                        El equipo técnico de <a title="librosmaldonado.shop" href="librosmaldonado.shop" style="color: #042479;">Libros Maldonado</a> le manda un cordial saludo.
                    </h1>
                    <h2 style="margin: 0; margin-bottom: 0.5em; padding: 0; color: #999;">
                        Asunto: <p style="margin: 0; padding: 0; color: #000; text-indent: 2em;">Solicitud de ayuda mediante correo electrónico</p>
                    </h2>
                </header>
                <main style="margin: 0; padding: 0.3em; font-size: 1.5em; color: #000; border-bottom: 0.2em solid #ddd; margin-bottom: 0.5em;">
                    <p>Desde <strong><a title="librosmaldonado.shop" href="librosmaldonado.shop" style="color: #042479;">Libros Maldonado</a></strong> esperamos que te encuentres bien.</p>
                    <p>Hemos recibido tu solicitud de ayuda y estamos aquí para asistirte. Si no solicitaste ayuda, ignora este correo.</p>
                    <p>Por lo tanto, requerimos una descripción detallada de la problemática con la que te estás enfrentando.</p>
                    <p>Atentamente, <strong>El equipo de atención al cliente de <a title="librosmaldonado.shop" href="librosmaldonado.shop" style="color: #042479;">Libros Maldonado</a>.</strong></p>
                </main>
                <footer style="border: 0.2em solid #ddd;">
                    <p style="margin: 0.3em; width: fit-content; font-size: 1.3em; color: #555;">Este es un mensaje automático.</p>
                    <p style="margin: 0.3em; width: fit-content; font-size: 1.3em; color: #555;">Responde a este mismo correo para recibir una respuesta.</p>
                </footer>
            </div>
        </article>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Correo enviado exitosamente, esperamos su respuesta." });
    } catch (error) {
        res.status(500).json({ message: "Error al enviar el correo", error });
    }
};

export const AlterUser = async (req, res) => {
    const { email } = req.body; 

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: 'gmail',
        port: 465,
        secure: true, 
        auth: {
            user: 'librosmaldonado68@gmail.com',       
            pass: 'xzym wpfq kwms gbdj'     
        }
    });


    const mailOptions = {
        from: {
            name: 'Libros Maldonado',
            address: 'librosmaldonado68@gmail.com',
        },
        to: email,
        subject: `Libros Maldonado: Actualización de su cuenta`,
        html: `
        <article style="display: flex; flex-direction: column; align-items: center; font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <div style="border: solid #000; padding: 0.5em;">
                <header style="border-bottom: 0.2em solid #ddd; margin: 0; padding: 0;">
                    <h1 style="color: #042479; border-bottom: 0.2em solid #ddd; margin-bottom: 0.5em;">
                        El equipo técnico de <a title="librosmaldonado.shop" href="librosmaldonado.shop" style="color: #042479;">Libros Maldonado</a> le manda un cordial saludo.
                    </h1>
                    <h2 style="margin: 0; margin-bottom: 0.5em; padding: 0; color: #999;">
                        Asunto: <p style="margin: 0; padding: 0; color: #000; text-indent: 2em;">Se hizo un cambio en la informacion de su cuenta</p>
                    </h2>
                </header>
                <main style="margin: 0; padding: 0.3em; font-size: 1.5em; color: #000; border-bottom: 0.2em solid #ddd; margin-bottom: 0.5em;">
                    <p>Desde <strong><a title="librosmaldonado.shop" href="librosmaldonado.shop" style="color: #042479;">Libros Maldonado</a></strong> esperamos que te encuentres bien.</p>
                    <p>Hemos actualizado la información de su cuenta. Si usted no hizo este cambio comuniquese con nosotros, delo contrario puede ignorar este correo.</p>
                    <p>Atentamente, <strong>El equipo de atención al cliente de <a title="librosmaldonado.shop" href="librosmaldonado.shop" style="color: #042479;">Libros Maldonado</a>.</strong></p>
                </main>
                <footer style="border: 0.2em solid #ddd;">
                    <p style="margin: 0.3em; width: fit-content; font-size: 1.3em; color: #555;">Este es un mensaje automático.</p>
                    <p style="margin: 0.3em; width: fit-content; font-size: 1.3em; color: #555;">Responde a este mismo correo para recibir una respuesta.</p>
                </footer>
            </div>
        </article>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Correo enviado exitosamente, esperamos su respuesta." });
    } catch (error) {
        res.status(500).json({ message: "Error al enviar el correo", error });
    }
};

export const sendPurchaseReceipt = async (req, res) => {
    const { email, paymentData } = req.body;
  
    if (!email || !paymentData) {
      return res.status(400).json({ message: "Faltan datos necesarios (email o paymentData)." });
    }
  
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: "librosmaldonado68@gmail.com",
        pass: "xzym wpfq kwms gbdj",
      },
    });
  
    // Generar el PDF
    const generatePDF = (paymentData) => {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text("Recibo de Compra", 20, 20);
  
      const purchaseUnit = paymentData.purchase_units[0];
      let yPosition = 40;
  
      doc.setFontSize(12);
      doc.text(`Referencia: ${purchaseUnit.reference_id}`, 20, yPosition);
      yPosition += 10;
  
      doc.text("Detalles de la Compra:", 20, yPosition);
      yPosition += 10;
  
      purchaseUnit.items.forEach((item) => {
        doc.text(`${item.name}`, 20, yPosition);
        doc.text(`Cantidad: ${item.quantity}`, 140, yPosition);
        doc.text(`Precio: ${item.unit_amount.currency_code} ${item.unit_amount.value}`, 200, yPosition);
        yPosition += 10;
  
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
      });
  
      yPosition += 10;
      doc.text(`Total: ${purchaseUnit.amount.currency_code} ${purchaseUnit.amount.value}`, 20, yPosition);
  
      return doc.output("arraybuffer"); // Cambiar a arraybuffer
    };
  
    try {
      const pdfBuffer = Buffer.from(generatePDF(paymentData)); // Convertir a Buffer
  
      // Opciones del correo
      const mailOptions = {
        from: {
          name: "Libros Maldonado",
          address: "librosmaldonado68@gmail.com",
        },
        to: email,
        subject: "Recibo de su compra en Libros Maldonado",
        html: `
          <p>Gracias por su compra en <strong>Libros Maldonado</strong>.</p>
          <p>Adjunto encontrará su recibo de compra. Si tiene alguna pregunta, no dude en ponerse en contacto con nosotros.</p>
        `,
        attachments: [
          {
            filename: "voucher-compra.pdf",
            content: pdfBuffer,
            contentType: "application/pdf",
          },
        ],
      };
  
      // Enviar el correo
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Recibo enviado exitosamente por correo." });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      res.status(500).json({ message: "Error al enviar el recibo.", error });
    }  
};
  