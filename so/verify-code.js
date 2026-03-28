const codes = globalThis.kawrexCodes || (globalThis.kawrexCodes = new Map());
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
  const { email, code } = req.body || {};
  if (!email || !code) {
    return res.status(400).json({ success: false, message: 'Email and code are required.' });
  }
  const saved = codes.get(email);
  if (!saved) {
    return res.status(400).json({ success: false, message: 'No code found for this email.' });
  }
  const expired = Date.now() - saved.createdAt > 10 * 60 * 1000;
  if (expired) {
    codes.delete(email);
    return res.status(400).json({ success: false, message: 'Code expired. Request a new one.' });
  }
  if (saved.code !== code) {
    return res.status(400).json({ success: false, message: 'Invalid verification code.' });
  }
  codes.delete(email);
  return res.status(200).json({ success: true, message: 'Verification successful.' });
}
