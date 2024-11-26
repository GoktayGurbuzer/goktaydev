import nodemailer from "nodemailer";

async function verifyCaptcha(token) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success;
}

export async function POST(req) {
    try {
        const { name, email, message, captchaToken } = await req.json();

        if (!name || !email || !message || !captchaToken) {
            return new Response(JSON.stringify({ error: "Tüm alanlar gereklidir." }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const isHuman = await verifyCaptcha(captchaToken);

        if (!isHuman) {
            return new Response(
                JSON.stringify({ error: "reCAPTCHA doğrulaması başarısız." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.TO_EMAIL,
            subject: `Yeni İletişim Mesajı: ${name}`,
            html: `
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return new Response(
            JSON.stringify({ message: "E-posta başarıyla gönderildi." }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("E-posta gönderim hatası:", error);
        return new Response(
            JSON.stringify({ error: "E-posta gönderilemedi." }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
