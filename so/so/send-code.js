const codes = globalThis.kawrexCodes || (globalThis.kawrexCodes = new Map());
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const { email } = req.body || {};
  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }
  const code = String(Math.floor(100000 + Math.random() * 900000));
  codes.set(email, { code, createdAt: Date.now() });
  const apiKey = process.env.RESENDAPIKEY;
  const fromEmail = process.env.RESENDFROMEMAIL;
  if (!apiKey || !fromEmail) {
    return res.status(500).json({ message: 'Email service is not configured yet.' });
  }
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': Bearer ${apiKey},
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [email],
        subject: 'Your KAWREX verification code',
        html: <div style="font-family:Arial,sans-serif"><h2>KΛWRΞX Login Code</h2><p>Your verification code is:</p><p style="font-size:32px;font-weight:700;letter-spacing:4px">${code}</p><p>This code expires soon.</p></div>
      })
    });
    if (!response.ok) {
      const errorText = await response.text();
      return res.status(500).json({ message: 'Failed to send code.', error: errorText });
    }
    return res.status(200).json({ message: 'Verification code sent to your email.' });
  } catch (error) {
    return res.status(500).json({ message: 'Could not send code right now.' });
  }
}
