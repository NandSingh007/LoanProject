

// module.export const priceControllerOfGame = async (req, res, next) => {
//     try {
//       const {
//         username,
//         name,
//         usereffral,
//         verification,
//         wallet,
//         userphone,
//         img,
//         date,
//         reffralcode,
//         bonas,
//         userotp
//       } = req.body;
  
//       const newUser = new userloginDatas({
//         username,
//         name,
//         usereffral,
//         verification,
//         wallet,
//         img,
//         userphone,
//         date,
//         reffralcode,
//         bonas,
//         userotp
//       });
//       const savedUser = await newUser.save();
//       res.status(201).json(savedUser);
//     } catch (error) {
//       console.error(error);
//       if (error.name === "ValidationError") {
//         return res.status(400).json({ error: error.message });
//       }
//       res.status(500).json({ error: "Server error" });
//     }
//   };