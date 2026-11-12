import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET || 'fallback_secret_key_change_in_prod', {
    expiresIn: '30d',
  });

  // In production the frontend (Vercel) and backend (Render) live on
  // different domains, so the browser needs sameSite:'none' + secure:true
  // to attach the cookie on cross-origin requests.
  const isProduction = process.env.NODE_ENV === 'production';

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: isProduction,                       // HTTPS only in production
    sameSite: isProduction ? 'none' : 'lax',    // cross-site in prod, lax in dev
    maxAge: 30 * 24 * 60 * 60 * 1000,           // 30 days
  });
};

export default generateToken;
