import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { first_name, last_name, user_email, message } = req.body;

  // Server-side validation
  if (!first_name?.trim() || !user_email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(user_email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Read configuration from environment variables (with Ethereal SMTP fallbacks)
  const host = process.env.MAIL_HOST || 'smtp.ethereal.email';
  const port = parseInt(process.env.MAIL_PORT || '587', 10);
  const user = process.env.MAIL_USERNAME || 'maye.armstrong24@ethereal.email';
  const pass = process.env.MAIL_PASSWORD || 'abRJQDhNBdgKgtyPaf';
  const fromEmail = process.env.MAIL_FROM_ADDRESS || 'hello@example.com';
  const adminEmail = process.env.CONTACT_ADMIN_EMAIL || 'saurabhsin6294@gmail.com';

  // Create Node.js SMTP transporter
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for 587
    auth: {
      user,
      pass,
    },
  });

  // Construct email details
  const mailOptions = {
    from: `"Portfolio System" <${fromEmail}>`,
    to: adminEmail,
    replyTo: `"${first_name} ${last_name || ''}" <${user_email}>`,
    subject: `📩 New Portfolio Message from ${first_name} ${last_name || ''}`,
    text: `New contact message from ${first_name} ${last_name || ''} (${user_email}):\n\n${message}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: #0a0a0a;
            color: #ffffff;
            margin: 0;
            padding: 40px 20px;
          }
          .card {
            background-color: #111111;
            border: 1px solid #ff2a2a;
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            margin: 0 auto;
            box-shadow: 0 20px 50px rgba(255, 42, 42, 0.15);
          }
          .header {
            border-bottom: 1px solid #222222;
            padding-bottom: 25px;
            margin-bottom: 30px;
            text-align: center;
          }
          .title {
            color: #ff2a2a;
            font-size: 24px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 3px;
          }
          .label {
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            color: #888888;
            letter-spacing: 1px;
            margin-bottom: 6px;
          }
          .value {
            font-size: 16px;
            color: #e5e5e5;
            margin-bottom: 24px;
            font-weight: 600;
          }
          .message-box {
            background-color: #181818;
            border-left: 4px solid #ff2a2a;
            padding: 20px;
            border-radius: 8px;
            font-size: 15px;
            line-height: 1.6;
            color: #d4d4d4;
            white-space: pre-wrap;
            margin-bottom: 24px;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
          }
          .footer {
            border-top: 1px solid #222222;
            padding-top: 25px;
            margin-top: 35px;
            font-size: 11px;
            color: #555555;
            text-align: center;
            font-family: monospace;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <div class="title">New Message Received</div>
          </div>
          
          <div class="label">Sender Name</div>
          <div class="value">${first_name} ${last_name || ''}</div>
          
          <div class="label">Email Address</div>
          <div class="value">
            <a href="mailto:${user_email}" style="color: #ff2a2a; text-decoration: none; border-bottom: 1px dashed #ff2a2a;">
              ${user_email}
            </a>
          </div>
          
          <div class="label">Message Content</div>
          <div class="message-box">${message}</div>
          
          <div class="footer">
            Sent from Saurabh Pratap Singh's Portfolio System • ${new Date().toLocaleString()}
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('SMTP Send Error:', error);
    return res.status(500).json({ error: 'Failed to send email via SMTP' });
  }
}
