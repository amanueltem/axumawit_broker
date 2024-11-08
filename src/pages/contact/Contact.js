import { useRef,useState } from "react";
import Card from "../../components/card/Card";
import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaTelegram } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";  
import { selectEmail } from "../../redux/slice/authSlice";  
import Loader from "../../components/loader/Loader"
const Contact = () => {
  const form = useRef();
  const email = useSelector(selectEmail); // Get email from Redux state
  const [isLoading,setIsLoading]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
          e.target.reset(); // Reset form after successful submission
          setIsLoading(false);
        },
        (error) => {
          toast.error("Failed to send message: " + error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <section>
     {isLoading&&<Loader/>}
      <div className={`container ${styles.contact}`}>
        <h2>Contact Us</h2>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
           
              <label>From Email</label>
              <input
                type="text"
                name="from_name" // Field for sender's name
                placeholder="Your Name"
                value={email}
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject" // Field for the subject
                placeholder="Subject"
                required
              />
              <label>Message</label>
              <textarea
                name="message" // Field for the message
                cols="30"
                rows="10"
                placeholder="Your message here"
                required
              ></textarea>
              <button className="--btn --btn-primary" type="submit">
                Send Message
              </button>
            </Card>
          </form>

          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Our Contact Information</h3>
              <p>Fill the form or contact us via other channels listed below</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+251 940 96 91 72</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>amanueltemesgen62@gmail.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Mekelle, Ethiopia</p>
                </span>
                <span>
                  <FaTelegram />
                  <p>@Axumawit</p>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
