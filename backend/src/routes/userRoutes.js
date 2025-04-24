import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import { check } from "express-validator";

const router = express.Router();

const registerValidation = [
  check("firstname").trim().notEmpty().withMessage("Firstname is required"),
  check("lastname").trim().notEmpty().withMessage("Lastname is required"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Enter a valid email address"),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number"),
  check("confirmPassword")
    .notEmpty()
    .withMessage("Confirm Password is required"),
];

const loginValidation = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Enter valid email address"),
  ,
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

router.post("/register", registerValidation, registerUser);

router.post("/login", loginValidation, loginUser);

export default router;
