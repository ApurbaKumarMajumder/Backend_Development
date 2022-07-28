module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b3ed0873998a8932958a6bf1ecee6102'),
  },
});
