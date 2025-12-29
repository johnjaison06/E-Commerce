
// add products to user cart

import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    if (!userId || !itemId || !size) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};

    // Initialize nested structures safely
    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Added to Cart" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// import userModel from "../models/userModel.js"

// const addToCart = async (req, res) => {

//     try {

//         const { userId, itemId, size } = req.body

//         const userData = await userModel.findById(userId)
//         // let cartData = await userData.cartData;
//         let cartData = userData.cartData || {};


//         // Initialize cartData[itemId] if it doesn't exist
//     if (!cartData[itemId]) {
//       cartData[itemId] = {};
//     }
//         if (cartData) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1
//             }
//             else {
//                 cartData[itemId][size] = 1
//             }
//         }
//         else {
//             cartData[itemId] = {}
//             cartData[itemId][size] = 1

//         }

//         await userModel.findByIdAndUpdate(userId, { cartData })

//         res.json({ success: true, message: "Added to Cart" })

//     } catch (error) {
//         console.log(error);
//         res.json({ success: true, message: error.message })

//     }

// }

// update user cart

const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    if (!userId || !itemId || !size || quantity == null) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Cart Updated" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// const updateCart = async (req, res) => {

//     try {
//         const { userId, itemId, size, quantity } = req.body
//         const userData = await userModel.findById(userId)
//         // let cartData = await userData.cartData;
//          let cartData = userData.cartData || {};

//          if (!cartData[itemId]) {
//       cartData[itemId] = {};
//     }

//         cartData[itemId][size] = quantity;

//         await userModel.findByIdAndUpdate(userId, { cartData })
//         res.json({ success: true, message: "Cart Upadated" })

//     }
//     catch (error) {
//         console.log(error);
//         res.json({ success: true, message: error.message })

//     }

// }

// get user cart data
const getUserCart = async (req, res) => {

    try {
        const {userId} = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json({success:true, cartData})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message })
    }

}

export { addToCart, updateCart, getUserCart } 