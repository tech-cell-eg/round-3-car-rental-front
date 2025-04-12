import { useFormik } from 'formik';
import validationSchema from '../validation/paymentvalid';
import BillingSection from '../components/BillingSection';
import RentalSection from '../components/RentalSection';
import PaymentSection from '../components/PaymentSection';
import ConfirmationSection from '../components/ConfirmationSection';
import SummarySection from '../components/SummarySection';


const MyForm = () => {
  const formik = useFormik({
    initialValues: {
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
      paymentMethod: '',
      termsAccepted: false
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    },
  });


  const billingFields = [
    {
      label: 'Name',
      id: 'name',
      name: 'name',
      value: formik.values.name,
      onChange: formik.handleChange,
      placeholder: 'Your name',
      error: formik.touched.name && formik.errors.name ? formik.errors.name : undefined,
    },
    {
      label: 'Phone Number',
      id: 'phone',
      name: 'phone',
      value: formik.values.phone,
      onChange: formik.handleChange,
      placeholder: 'Phone number',
      error: formik.touched.phone && formik.errors.phone ? formik.errors.phone : undefined,
    },
    {
      label: 'Address',
      id: 'address',
      name: 'address',
      value: formik.values.address,
      onChange: formik.handleChange,
      placeholder: 'Address',
      error: formik.touched.address && formik.errors.address ? formik.errors.address : undefined,
    },
    {
      label: 'Town/City',
      id: 'city',
      name: 'city',
      value: formik.values.city,
      onChange: formik.handleChange,
      placeholder: 'Town or city',
      error: formik.touched.city && formik.errors.city ? formik.errors.city : undefined,
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 w-full bg-gray-100 min-h-screen p-4">
      <div className="col-span-12 md:col-span-8 order-2 md:order-1">
        <form onSubmit={formik.handleSubmit}>
          <BillingSection title="Billing Info" fields={billingFields} />
          <RentalSection
            title="Rental Info"
            pickUpLocation={formik.values.pickUpLocation}
            dropOffLocation={formik.values.dropOffLocation}
            pickUpDate={formik.values.pickUpDate}
            dropOffDate={formik.values.dropOffDate}
            pickUpTime={formik.values.pickUpTime}
            dropOffTime={formik.values.dropOffTime}
            setPickUpLocation={(value: string) => formik.setFieldValue('pickUpLocation', value)}
            setDropOffLocation={(value: string) => formik.setFieldValue('dropOffLocation', value)}
            setPickUpDate={(value: string) => formik.setFieldValue('pickUpDate', value)}
            setDropOffDate={(value: string) => formik.setFieldValue('dropOffDate', value)}
            setPickUpTime={(value: string) => formik.setFieldValue('pickUpTime', value)}
            setDropOffTime={(value: string) => formik.setFieldValue('dropOffTime', value)}
            errors={{
              pickUpLocation: formik.touched.pickUpLocation && formik.errors.pickUpLocation ? formik.errors.pickUpLocation : undefined,
              dropOffLocation: formik.touched.dropOffLocation && formik.errors.dropOffLocation ? formik.errors.dropOffLocation : undefined,
              pickUpDate: formik.touched.pickUpDate && formik.errors.pickUpDate ? formik.errors.pickUpDate : undefined,
              dropOffDate: formik.touched.dropOffDate && formik.errors.dropOffDate ? formik.errors.dropOffDate : undefined,
              pickUpTime: formik.touched.pickUpTime && formik.errors.pickUpTime ? formik.errors.pickUpTime : undefined,
              dropOffTime: formik.touched.dropOffTime && formik.errors.dropOffTime ? formik.errors.dropOffTime : undefined,
            }}
          />

          <PaymentSection
            title="Payment Method"
            cardNumber={formik.values.cardNumber}
            expiryDate={formik.values.expiryDate}
            cardHolder={formik.values.cardHolder}
            cvc={formik.values.cvc}
            paymentMethod={formik.values.paymentMethod}
            setCardNumber={(value: string) => formik.setFieldValue('cardNumber', value)}
            setExpiryDate={(value: string) => formik.setFieldValue('expiryDate', value)}
            setCardHolder={(value: string) => formik.setFieldValue('cardHolder', value)}
            setCvc={(value: string) => formik.setFieldValue('cvc', value)}
            setPaymentMethod={(value: string) => formik.setFieldValue('paymentMethod', value)}
            errors={{
              cardNumber: formik.touched.cardNumber && formik.errors.cardNumber ? formik.errors.cardNumber : undefined,
              expiryDate: formik.touched.expiryDate && formik.errors.expiryDate ? formik.errors.expiryDate : undefined,
              cardHolder: formik.touched.cardHolder && formik.errors.cardHolder ? formik.errors.cardHolder : undefined,
              cvc: formik.touched.cvc && formik.errors.cvc ? formik.errors.cvc : undefined,
              paymentMethod: formik.touched.paymentMethod && formik.errors.paymentMethod ? formik.errors.paymentMethod : undefined,
            }}
          />

          <ConfirmationSection
            termsAccepted={formik.values.termsAccepted}
            setTermsAccepted={(value: boolean) => formik.setFieldValue('termsAccepted', value)}
            error={formik.touched.termsAccepted && formik.errors.termsAccepted ? formik.errors.termsAccepted : undefined}
          />
          
          <button type="submit" className=" mt-5 bg-blue-700 text-white py-2 px-6 rounded">
            Rent Now
          </button>
        </form>

      </div>

      <div className="col-span-12 md:col-span-4 order-1 md:order-2">
        <SummarySection subtotal={100} tax={10} total={110} />
      </div>
    </div>
  );
};

export default MyForm;