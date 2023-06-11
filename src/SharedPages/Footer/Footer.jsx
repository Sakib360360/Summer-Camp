import React from 'react';
import { FaSchool } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer  p-10 bg-base-200 text-base-content">
                <div>
                    <FaSchool className=' text-4xl'></FaSchool><br />
                    <p>Language-Camp<br />Providing Different Language Courses</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link hover:text-blue-400 no-underline hover:underline">Online Courses</a>
                    <a className="link hover:text-blue-400 no-underline hover:underline">Off-line Courses</a>
                    <a className="link hover:text-blue-400 no-underline hover:underline">Part Time</a>
                    <a className="link hover:text-blue-400 no-underline hover:underline">Full-Time</a>
                </div>
                <div>
                    <span className="footer-title">Camp</span>
                    <a className="link hover:text-blue-400 no-underline hover:underline">About us</a>
                    <a className="link hover:text-blue-400 no-underline hover:underline">Contact</a>
                    <a className="link hover:text-blue-400 no-underline hover:underline">Jobs</a>

                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link hover:text-blue-400 no-underline hover:underline">Terms of use</a>
                    <a className="link hover:text-blue-400 no-underline hover:underline">Privacy policy</a>
                    <a className="link hover:text-blue-400 no-underline hover:underline">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Head Office</span>
                    <p>Jashore,Noapara</p>
                    <p>Bangladesh</p>
                    <p>Mobile: +8817205400000</p>
                </div>
            </footer>
            <footer className="footer bg-base-200 footer-center p-4 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;