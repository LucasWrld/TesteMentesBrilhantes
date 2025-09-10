/**
 * Crie API Route protegida por token JWT

 */
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'minha_chave_secreta';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (username === 'Lucas' && password === '1234') {
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }
  }

  if (req.method === 'GET') {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      return res.status(200).json({ message: 'Acesso permitido', user: decoded });
    } catch (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }
  }

  res.setHeader('Allow', ['POST', 'GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
