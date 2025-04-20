import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormValues } from "../types/form";
import { useFormik } from "formik";
import axios from "axios";
import apiEndpoints from "../constants/apiEndpoints";
import toast from "react-hot-toast";


interface LocationState {
    id: number
}
const useCheckoutForm = (validationSchema : any) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate()
    const location = useLocation();
    const state = location.state as LocationState;

    const url = apiEndpoints.payment.payment

    const formik = useFormik<FormValues>({
        initialValues: {
            car_id: state.id || 0,
            name: '',
            phone: '',
            address: '',
            city: '',
            pickUpLocation: '',
            dropOffLocation: '',
            pickUpDate: '',
            dropOffDate: '',
            pickUpTime: '',
            dropOffTime: '',
            cardNumber: '',
            expiryDate: '',
            cardHolder: '',
            cvc: '',
            termsAccepted: false
        },
        validationSchema,
        onSubmit: async (values) => {
            const formattedValues = {
                ...values,
                cardNumber: Number(values.cardNumber),
                cvc: Number(values.cvc),
            }

            try {
                setIsLoading(true);
                const response = await axios.post(url, formattedValues);
                if (response.data.status === "success") {
                    toast.success(response.data.message, {
                        position: "bottom-right"
                    })
                    setTimeout(() => {
                        navigate('/');
                    }, 3000);
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    toast.error(error.message, {
                        position: "bottom-right"
                    })
                }
            } finally {
                setIsLoading(false);
            }

        }
    });

    return { formik, isLoading }
}

export default useCheckoutForm