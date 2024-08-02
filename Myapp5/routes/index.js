const express = require("express");
const {
  sendotp,
  updateProcessingFeeStatus,
  PackageDataController,
  updateSecurityFeeStatus,
  getProcessingFeeDataWithStatusZero,
  securityAmount,
  getProcessingFeeDataWithStatusOne,
  CompanyProfileScn,
  getSecurityFeeDataWithStatusOneFront,
  // AddAdmin,
  // GetAdminUser,
  // UpdateAdmin,
  updateCompanyProfile,
  getSecurityFeeDataWithStatusZero,
  personalDetailsOfUser,
  getProcessingFeeDataWithStatus,
  step3Details,
  getSecurityFeeDataWithStatusOne,
  stepfourdetails,
  getAllInformation,
  getSecurityFeeDataWithStatusTwo,
  step1Details,
  updateotp,
  deleteloan,
  processFeeData,
  editlontype,
  LoanTypes,
  Statusendpoint,
  updatePackage,
  fetchCompanyProfile,
  processingFeeDataFetchStatus,
  changePassword,
  userDetailData,
  loginNumber,
  GetLoanTypes,
  FetchPackageDataController,

  DeletePackage,
  // ChangeAdminPassword,
  // UploadImgMulter,
  // DeleteAdminImg,
  EditName,
  step2Details,
  getProcessingFeeDataWithStatusTwo,
  changePasswordfirst,
  login,
  ChangeAdminPassword
} = require("../controller/User/UserLofinController");
const { default: axios } = require("axios");
const multer = require("multer");
const authMiddleware = require("./authMiddleware");
const router = express.Router();

router.get("/home", authMiddleware, (req, res) => {
  res.render("index", { title: "Dashboard", currentRoute: req.url });
});

router.get("/admin_role", authMiddleware, (req, res) => {
  res.render("admin_role", { title: "Admin Role", currentRoute: req.url });
});

router.get("/player", authMiddleware, async (req, res) => {
  try {
    const profileResponse = await fetch("http://localhost:8000/userDetailData");

    // Check if the response is JSON
    const contentType = profileResponse.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Received non-JSON response");
    }

    const profile = await profileResponse.json();

    res.render("player", {
      profile,
      title: "Player Master",
      currentRoute: req.url
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.render("errorPage"); // Handle error appropriately
  }
});
router.post("/login", login);

// Route to fetch user data and render the user page
router.get("/user/:userId", authMiddleware, async (req, res) => {
  try {
    const userId = req.params.userId;
    const apiResponse = await fetch(
      `http://localhost:8000/personalDetailsOfUser/${userId}`
    );

    // Check if the response is okay and content is JSON
    if (!apiResponse.ok) {
      throw new Error(`Server responded with ${apiResponse.status}`);
    }

    const userData = await apiResponse.json();
    if (!userData || userData.error) {
      res.render("user", {
        title: "User Details",
        currentRoute: req.url,
        user: null,
        error: "User not found"
      });
    } else {
      res.render("user", {
        title: "User Details",
        currentRoute: req.url,
        user: userData,
        error: null
      });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.render("errorPage", {
      error: "An error occurred while fetching user data."
    });
  }
});
router.get("/users-profile", authMiddleware, (req, res) => {
  res.render("users-profile", {
    title: "Users Profile",
    currentRoute: req.url
  });
});
router.get("/with_re", async (req, res) => {
  try {
    const profileResponse = await fetch(
      "http://localhost:8000/getProcessingFeeDataWithStatusZero"
    );
    const profile = await profileResponse.json();
    res.render("with_re", {
      profile,
      currentRoute: "/with_re"
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.render("errorPage"); // Handle error appropriately
  }
  // res.render("with_re", { title: "with_re", currentRoute: req.url });
});

router.get("/with_app", authMiddleware, async (req, res) => {
  try {
    const profileResponse = await fetch(
      "http://localhost:8000/getProcessingFeeDataWithStatusOne"
    );
    const profile = await profileResponse.json();
    console.log(profile, "profile  1");
    res.render("with_app", {
      profile,
      currentRoute: "/with_app"
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.render("errorPage"); // Handle error appropriately
  }
  // res.render("with_re", { title: "with_re", currentRoute: req.url });
});

router.get("/with_rej", authMiddleware, async (req, res) => {
  try {
    const profileResponse = await fetch(
      "http://localhost:8000/getProcessingFeeDataWithStatusTwo"
    );
    const profile = await profileResponse.json();
    console.log(profile, "profile  2");
    res.render("with_rej", {
      profile,
      currentRoute: "/with_rej"
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.render("errorPage"); // Handle error appropriately
  }
  // res.render("with_re", { title: "with_re", currentRoute: req.url });
});
router.post("/updateProcessingFeeStatus", updateProcessingFeeStatus);
router.get("/chatbox", authMiddleware, (req, res) => {
  res.render("chatbox", { title: "chatbox", currentRoute: req.url });
});

router.get("/pages-login", authMiddleware, (req, res) => {
  res.render("pages-login", { title: "pages-login", currentRoute: req.url });
});

router.get("/pages-register", authMiddleware, (req, res) => {
  res.render("pages-register", {
    title: "pages-register",
    currentRoute: req.url
  });
});

router.get("/pages-contact", (req, res) => {
  res.render("pages-contact", { title: "Bonus", currentRoute: req.url });
});

router.get("/Bonus", async (req, res) => {
  // res.render("bonus", { title: "Bonus", currentRoute: req.url });
  try {
    const response = await axios.get("http://localhost:8000/GetLoanTypes"); // Replace with your API endpoint
    const data = response.data;
    // console.log(data);
    res.render("Bonus", {
      title: "Bonus",
      currentRoute: req.url,
      GetLoanTypes: data // Passing data to the view
    });
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.render("error", { error: "Failed to fetch data from API" });
  }
});
router.post("/LoanTypes", LoanTypes);
router.put("/editlontype/:id", editlontype);
router.delete("/deleteloan/:id", deleteloan);
router.get("/GetLoanTypes", GetLoanTypes);
router.get("/Refer", async (req, res) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/FetchPackageDataController"
    ); // Replace with your API endpoint
    const data = response.data;

    res.render("refer", {
      title: "Approval",
      currentRoute: req.url,
      packageData: data // Passing data to the view
    });
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.render("error", { error: "Failed to fetch data from API" });
  }
});

router.delete("/DeletePackage/:id", DeletePackage);

router.get("/rech_pe", async (req, res) => {
  try {
    const profileResponse = await fetch(
      "http://localhost:8000/fetchCompanyProfile"
    );
    const profileData = await profileResponse.json();

    res.render("rech_pe", {
      profile: profileData.data,
      currentRoute: "/rech_pe"
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.render("errorPage"); // Handle error appropriately
  }
});

// router.post("/AddAdmin", AddAdmin);
// router.post("/users-profile", UploadImgMulter, UpdateAdmin);
// router.get("/AdminData", GetAdminUser);
// router.post("/ChangeAdminPassword", ChangeAdminPassword);
// router.post("/DeleteAdminImg", DeleteAdminImg);
router.post("/sendotp", sendotp);
router.post("/step2Details", step2Details);
router.post("/update-otp", updateotp);
router.post("/logout", (req, res) => {
  res.clearCookie("token"); // Clear the authentication cookie
  res.json({ message: "Logged out successfully" });
});
router.post("/loginNumber", loginNumber);
router.post(
  "/getProcessingFeeDataWithStatus/:id",
  getProcessingFeeDataWithStatus
);
// Set up multer for file handling
const storage = multer.memoryStorage();

const upload = multer({ storage });

router.post(
  "/step3Details",
  upload.fields([
    { name: "adhaarFront", maxCount: 1 },
    { name: "adhaarBack", maxCount: 1 },
    { name: "panFront", maxCount: 1 },
    { name: "userPhoto", maxCount: 1 },
    { name: "Signature", maxCount: 1 }
  ]),
  step3Details
);

router.get("/sec_re", async (req, res) => {
  try {
    const profileResponse = await fetch(
      "http://localhost:8000/getSecurityFeeDataWithStatusZero"
    );
    const profile = await profileResponse.json();
    res.render("security_req", {
      profile,
      currentRoute: "/sec_re"
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.render("errorPage"); // Handle error appropriately
  }
  // res.render("with_re", { title: "with_re", currentRoute: req.url });
});

router.get("/sec_app", async (req, res) => {
  try {
    const profileResponse = await fetch(
      "http://localhost:8000/getSecurityFeeDataWithStatusOne"
    );
    const profile = await profileResponse.json();
    console.log(profile, "profile  1");
    res.render("security_app", {
      profile,
      currentRoute: "/sec_app"
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.render("errorPage"); // Handle error appropriately
  }
  // res.render("with_re", { title: "with_re", currentRoute: req.url });
});

router.get("/sec_rej", async (req, res) => {
  try {
    const profileResponse = await fetch(
      "http://localhost:8000/getSecurityFeeDataWithStatusTwo"
    );
    const profile = await profileResponse.json();
    console.log(profile, "profile  2");
    res.render("security_rej", {
      profile,
      currentRoute: "/sec_rej"
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.render("errorPage"); // Handle error appropriately
  }
  // res.render("with_re", { title: "with_re", currentRoute: req.url });
});

router.get("/getAllInformation/:id", getAllInformation);
router.post("/step1Details", step1Details);
router.post("/editname", EditName);
router.post("/stepfourdetails", stepfourdetails);
router.put("/updatePackage/:id", updatePackage);
router.get("/FetchPackageDataController", FetchPackageDataController);
router.post("/PackageDataController", PackageDataController);
router.get("/fetchCompanyProfile", fetchCompanyProfile);
router.post("/processingFeeDataFetchStatus", processingFeeDataFetchStatus);
router.get(
  "/getProcessingFeeDataWithStatusTwo",
  getProcessingFeeDataWithStatusTwo
);
router.post("/updateSecurityFeeStatus", updateSecurityFeeStatus);
router.post("/securityAmount", securityAmount);
router.get(
  "/getProcessingFeeDataWithStatusOne",
  getProcessingFeeDataWithStatusOne
);
router.get(
  "/getProcessingFeeDataWithStatusZero",
  getProcessingFeeDataWithStatusZero
);
router.get("/CompanyProfileScn", CompanyProfileScn);
router.get("/Statusendpoint/:userId", Statusendpoint);
router.get("/getSecurityFeeDataWithStatusOne", getSecurityFeeDataWithStatusOne);
router.get(
  "/getSecurityFeeDataWithStatusOneFront/:userId",
  getSecurityFeeDataWithStatusOneFront
);
// router.post("/securityAmount", securityAmount);
router.get("/getSecurityFeeDataWithStatusTwo", getSecurityFeeDataWithStatusTwo);
router.get(
  "/getSecurityFeeDataWithStatusZero",
  getSecurityFeeDataWithStatusZero
);
router.get("/userDetailData", userDetailData);
router.post("/changePasswordfirst", changePasswordfirst);
router.post("/ChangeAdminPassword", ChangeAdminPassword);
// router.post("/UpdateCompanyProfile", UpdateCompanyProfile);
router.get("/personalDetailsOfUser/:userId", personalDetailsOfUser);
// Route to update company profile

const uploadMiddleware = upload.fields([
  { name: "paymentQRCharges1", maxCount: 1 },
  { name: "paymentQRCharges2", maxCount: 1 },
  { name: "Signature", maxCount: 1 },
  {
    name: "logo",
    maxCount: 1
  }
]);

// Apply the middleware to the route
router.post("/UpdateCompanyProfile", uploadMiddleware, updateCompanyProfile);

module.exports = router;
