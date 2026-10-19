const nodemailer = require('nodemailer');
const logger = require('./logger');

const transport = process.env.SMTP_HOST
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  : null;

const escape = (text) => String(text).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const layout = (title, body) => `
  <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#111">
    <h2 style="margin-bottom:16px">${title}</h2>
    ${body}
    <p style="margin-top:32px;color:#888;font-size:13px">Pixential · hello@pixential.in</p>
  </div>`;

const send = async ({ to, subject, title, body, replyTo }) => {
  if (!to) return;
  if (!transport) {
    if (process.env.NODE_ENV !== 'test') logger.info(`Email (SMTP not set) to ${to}: ${subject}`);
    return;
  }
  try {
    await transport.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to,
      replyTo,
      subject,
      html: layout(title || subject, body),
    });
  } catch (err) {
    logger.error(`Email to ${to} failed: ${err.message}`);
  }
};

module.exports = { send, escape };
