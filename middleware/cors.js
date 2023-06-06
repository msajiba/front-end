import Cors from 'cors';

// Initializing the Cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
});

// Helper function to apply the middleware to Next.js API routes
function applyCors(handler) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      cors(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(handler(req, res));
      });
    });
}

export default applyCors;
