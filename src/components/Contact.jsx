import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from './Footer';

// Validation Schema
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]+$/, 'Must be only digits').min(10, 'Too short').required('Phone is required'),
  budget: Yup.string(),
  message: Yup.string().required('Message is required').min(10, 'Message too short')
});

const ContactInfo = ({ icon: Icon, title, detail }) => (
  <div className="flex items-center space-x-4">
    <div className="bg-purple-500 p-4 rounded-full">
      <Icon className="text-white w-6 h-6" />
    </div>
    <div>
      <p className="text-lg font-medium text-purple-500">{title}</p>
      <p className="text-white">{detail}</p>
    </div>
  </div>
);

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      budget: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // Initialize EmailJS (replace with your own credentials)
        emailjs.init('n67hA2hez0mYr1VzH');
        
        const response = await emailjs.send(
          'service_j79woum',
          'template_u3qhh14',
          values,
          'n67hA2hez0mYr1VzH'
        );
        
        if (response.status === 200) {
          setSubmitStatus({ success: true, message: 'Message sent successfully!' });
          resetForm();
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
      }
    }
  });

  return (
    <div id='contact'>
      <div className="mx-w-7xl mx-auto px-4 sm:px-6 text-center py-12">
        <h2 className="text-4xl font-bold text-white">
          Let's Discuss Your <span className="text-purple-500">Project</span>
        </h2>
        <p className="text-slate-400 mt-4">
          Get in touch for collaborations or inquiries. I'll respond promptly.
        </p>
      </div>

      <div className="mx-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Section */}
        <div className="space-y-6 md:pl-12 lg:pl-16">
          <ContactInfo
            icon={FaPhone}
            title="Call Me"
            detail="+880 1540347261"
          />
          <ContactInfo
            icon={FaEnvelope}
            title="Email"
            detail="sakibuddessho89@gmail.com"
          />
          <ContactInfo
            icon={FaMapMarkerAlt}
            title="Address"
            detail="Adarsha Sadar, Cumilla"
          />
        </div>

        {/* Form Section */}
        <form 
          onSubmit={formik.handleSubmit}
          className="space-y-6 text-white p-6 bg-gray-800 rounded-lg shadow-lg"
        >
          {submitStatus && (
            <div className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-500' : 'bg-red-500'}`}>
              {submitStatus.message}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                className={`border ${formik.errors.fullName && formik.touched.fullName ? 'border-red-500' : 'border-purple-500'} bg-gray-900 rounded-md w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
              {formik.errors.fullName && formik.touched.fullName && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.fullName}</p>
              )}
            </div>

            <div>
              <input
                className={`border ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-purple-500'} bg-gray-900 rounded-md w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                className={`border ${formik.errors.phone && formik.touched.phone ? 'border-red-500' : 'border-purple-500'} bg-gray-900 rounded-md w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.errors.phone && formik.touched.phone && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
              )}
            </div>

            <div>
              <input
                className="border border-purple-500 bg-gray-900 rounded-md w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                name="budget"
                placeholder="Budget"
                onChange={formik.handleChange}
                value={formik.values.budget}
              />
            </div>
          </div>

          <div>
            <textarea
              className={`border ${formik.errors.message && formik.touched.message ? 'border-red-500' : 'border-purple-500'} bg-gray-900 rounded-md w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500`}
              placeholder="Message"
              name="message"
              rows="5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.errors.message && formik.touched.message && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
            )}
          </div>

          <button
            className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-300 w-full md:w-auto disabled:opacity-50"
            type="submit"
            disabled={formik.isSubmitting || !formik.isValid}
          >
            {formik.isSubmitting ? 'Sending...' : 'Submit Message'}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;