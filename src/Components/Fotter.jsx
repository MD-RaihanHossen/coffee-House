import { Link } from "react-router-dom";
import coffeelogo from "../../../images/more/logo1.png"
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Fotter = () => {
    return (
        <div>
            <footer className="bg-white text-gray-800 py-10 px-5 border-t border-gray-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div>
                        <div className="flex items-center space-x-2">
                            <img src={coffeelogo} alt="Logo" className="w-15 h-15 object-cover" />
                            <Link to="/" className="text-xl font-bold font-cursive hover:text-[#6b4f37]">
                                Espresso Emporium
                            </Link>
                        </div>
                        <p className="mt-4 max-w-md text-sm">
                            Always ready to be your friend. Come & Contact with us to share your memorable moments,
                            to share with your best companion.
                        </p>
                        {/* Social Icons */}
                        <div className="flex space-x-4 mt-4 text-xl text-gray-600">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="hover:text-[#3b5998]" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="hover:text-[#00acee]" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="hover:text-[#e1306c]" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="hover:text-[#0072b1]" />
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-6 space-y-2 text-sm">
                            <p className="flex items-center gap-2">
                                <FaPhone /> +88 01533 333 333
                            </p>
                            <p className="flex items-center gap-2">
                                <FaEnvelope /> info@gmail.com
                            </p>
                            <p className="flex items-center gap-2">
                                <FaMapMarkerAlt /> 72, Wall street, King Road, Dhaka
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Connect with Us</h3>
                        <form className="space-y-3">
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full"
                            />
                            <textarea
                                placeholder="Message"
                                className="textarea textarea-bordered w-full"
                                rows="3"
                            ></textarea>
                            <button type="submit" className="btn btn-outline">Send Message</button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 text-center text-sm text-gray-500 border-t pt-5">
                    <p>Copyright ©
                        <Link to="/" className="hover:underline text-gray-700 mx-1">Espresso Emporium</Link>
                        | All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Fotter;