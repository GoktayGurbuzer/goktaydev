import { BsTwitterX, BsLinkedin, BsGithub, BsEnvelopeAt } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-[#1F262D] text-white py-6 mt-4 rounded-xl">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Copyright */}
                <div className="mb-4 md:mb-0">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Göktay Gürbüzer. Tüm Hakları Saklıdır.
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4">
                    <a href="https://twitter.com/GoktayGurbuzer" target="_blank" rel="noopener noreferrer"
                       className="hover:text-green-500">
                        <BsTwitterX />
                    </a>
                    <a href="https://www.linkedin.com/in/goktaygurbuzer/" target="_blank" rel="noopener noreferrer"
                       className="hover:text-green-500">
                        <BsLinkedin />
                    </a>
                    <a href="https://github.com/goktaygurbuzer" target="_blank" rel="noopener noreferrer"
                       className="hover:text-green-500">
                        <BsGithub />
                    </a>
                    <a
                        href="mailto:goktaygurbuzer@gmail.com?subject=İletişim&body=Merhaba Göktay, web sitesine ihtiyacım var."
                        rel="noopener noreferrer"
                        className="hover:text-green-500"
                    >
                        <BsEnvelopeAt />
                    </a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
