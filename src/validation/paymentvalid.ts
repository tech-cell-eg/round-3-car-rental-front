import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
        .required("Phone number is required")
        .matches(/^\d+$/, "Phone number must contain only digits")
        .matches(
            /^(02)?01[0125][0-9]{8}$/,
            "Please enter a valid Egyptian phone number"
        ),
    address: Yup.string().required("Address is required"),
    city: Yup.string().trim().required("City is required"),
    pickUpLocation: Yup.string().trim().required("Pick-up location is required"),
    dropOffLocation: Yup.string()
        .trim()
        .required("Drop-off location is required"),
    pickUpDate: Yup.string().trim().required("Pick-up date is required"),
    dropOffDate: Yup.string().trim().required("Drop-off date is required"),
    pickUpTime: Yup.string().trim().required("Pick-up time is required"),
    dropOffTime: Yup.string().trim().required("Drop-off time is required"),
    cardNumber: Yup.string()
        .required("Card number is required")
        .matches(/^\d+$/, "Card number must contain only digits")
        .matches(/^\d{16}$/, "Card number must be 16 digits"),
    expiryDate: Yup.string()
        .required("Expiry date is required")
        .matches(
            /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
            "Expiry date must be in MM/YY format"
        )
        .test("not-expired", "Expiry date cannot be in the past", (value) => {
            if (!value) return false;
            const [month, year] = value.split("/").map(Number);
            const currentYear = new Date().getFullYear() % 100;
            const currentMonth = new Date().getMonth() + 1;
            return (
                year > currentYear || (year === currentYear && month >= currentMonth)
            );
        }),
    cardHolder: Yup.string()
        .trim()
        .required("Cardholder name is required")
        .matches(
            /^[a-zA-Z\s]+$/,
            "Cardholder name must contain only letters and spaces"
        ),
    cvc: Yup.string()
        .required("CVC is required")
        .matches(/^\d+$/, "CVC must contain only digits")
        .matches(/^\d{3}$/, "CVC must be 3 digits"),
        
    termsAccepted: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
        .required("You must accept the terms and conditions"),
});

export default validationSchema;
