// // // server/routes/auth.js (or wherever your authentication routes are)
// // const express = require('express');
// // const router = express.Router();

// // // router.post('/logout', (req, res) => {
// // //     // console.log('Received logout request'); // Add this line for debugging
// // //     req.session.destroy((err) => {
// // //         if (err) {
// // //             console.error('Error destroying session:', err);
// // //             res.status(500).json({ error: 'Server error' });
// // //         } else {
// // //             // Respond with JSON instead of rendering a view
// // //             res.json({ message: 'Logout successful' });
// // //         }
// // //     });
// // // });

// // module.exports = router;
// // server/routes/auth.js (or wherever your authentication routes are)
// const express = require('express');
// const router = express.Router();

// router.get('/check-session', (req, res) => {
//     if (req.session) {
//         // Session is set
//         res.json({ message: 'Session is set', user: req.session});
//     } else {
//         // Session is not set
//         res.json({ message: 'Session is not set' });
//     }
// });

// module.exports = router;
