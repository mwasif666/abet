import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { toast } from "react-toastify";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    department: "",
    subject: "",
    name: "",
    email: "",
    message: "",
    attachment: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      attachment: e.target.files[0],
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.department)
      newErrors.department = "Please select a department";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("department", formData.department);
      data.append("subject", formData.subject);
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);
      if (formData.attachment) {
        data.append("attachment", formData.attachment);
      }

      const response = await axios.post("https://api.leosagitrades.com/public/save_contact_form",data);
      if(response){
        toast.success("Form submitted successfully!");
        setFormData({
          department: "",
          subject: "",
          name: "",
          email: "",
          message: "",
          attachment: null,
        });
      }
    } catch (error) {
      toast.error("Submission failed. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // const postContactForm = async(data)=>{
  //   try {
     
  //   } catch (error) {
  //     toast.error("Failed to submit the form, Please try again...")
  //   }
  // }

  return (
    <div className={`${styles.contactFormSection} container-fluid`}>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className={styles.contactFormWrapper}>
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block">
                <div className={styles.formImage}>
                  <img
                    src="https://abet.leosagitrades.com/wp-content/uploads/2024/10/Forex-Icons-68-852x1024.png"
                    alt="Contact us"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.formContent}>
                  <h2 className={styles.formTitle}>Send us an inquiry</h2>
                  <p className={styles.formSubtitle}>
                    A question? An inquiry? Drop us a line and we'll see how we
                    can help.
                  </p>

                  {submitSuccess ? (
                    <div
                      className={`alert alert-success ${styles.successMessage}`}
                    >
                      Thank you! Your message has been sent successfully.
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className={styles.contactForm}
                    >
                      <div className={`mb-3 ${styles.formGroup}`}>
                        <label
                          htmlFor="department"
                          className={styles.formLabel}
                        >
                          Department <span className={styles.required}>*</span>
                        </label>
                        <select
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          className={`form-select ${
                            errors.department ? "is-invalid" : ""
                          }`}
                        >
                          <option value="">Select option</option>
                          <option value="Account">Account</option>
                          <option value="Support">Support</option>
                          <option value="Information">Information</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.department && (
                          <div className={styles.errorMessage}>
                            {errors.department}
                          </div>
                        )}
                      </div> 

                      <div className={`mb-3 ${styles.formGroup}`}>
                        <label htmlFor="subject" className={styles.formLabel}>
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                          className="form-control"
                        />
                      </div>

                      <div className="row">
                        <div className={`col-md-6 mb-3 ${styles.formGroup}`}>
                          <label htmlFor="name" className={styles.formLabel}>
                            Your Name <span className={styles.required}>*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`form-control ${
                              errors.name ? "is-invalid" : ""
                            }`}
                          />
                          {errors.name && (
                            <div className={styles.errorMessage}>
                              {errors.name}
                            </div>
                          )}
                        </div>

                        <div className={`col-md-6 mb-3 ${styles.formGroup}`}>
                          <label htmlFor="email" className={styles.formLabel}>
                            Your Email{" "}
                            <span className={styles.required}>*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-control ${
                              errors.email ? "is-invalid" : ""
                            }`}
                          />
                          {errors.email && (
                            <div className={styles.errorMessage}>
                              {errors.email}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className={`mb-3 ${styles.formGroup}`}>
                        <label htmlFor="message" className={styles.formLabel}>
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="2"
                          className="form-control"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className={`btn ${styles.submitButton}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
