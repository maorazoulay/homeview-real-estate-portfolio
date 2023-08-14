export default function handler(req, res) {
    if(req.method === 'GET'){
        // Get the assets for current user
    } else if(req.method === 'POST'){
        // Add a new asset for current user
    } else if(req.method === 'UPDATE'){
        // Edit the asset for current user
    }
    res.status(200).json({ name: 'John Doe' })
  }