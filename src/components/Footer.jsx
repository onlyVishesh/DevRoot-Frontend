import { FileUser, Mail, MapPinHouse } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SocialLinks from "./SocialLinks";

const FOOTER_SECTIONS = {
  "About Us": [{ Home: "/" }, { "Meet the Team": "/team" }],
  "Our Services": [
    { Feed: "/feed" },
    { Network: "/networks" },
    { Profile: "/profile" },
  ],
  "Helpful Links": [
    { "Community in Numbers": "/#community" },
    { FAQs: "/#faqs" },
    { Support: "/#support" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-bgSecondary">
      <div className="container mx-auto px-4 pb-4 pt-6 sm:px-6 lg:px-8 lg:pt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex flex-col items-center justify-center gap-0 sm:justify-start">
              <div className="flex max-w-md items-center justify-center gap-2 sm:mx-0 sm:max-w-xs">
                <img src={logo} alt="" className="size-24" />
                Rooted in Development, Branching Out to Opportunities.
              </div>
              <p className="max-w-md text-justify leading-relaxed text-textMuted sm:mx-0 sm:max-w-xs">
                Discover like-minded professionals, build your network, and
                unlock new opportunities. Join a platform designed to foster
                meaningful connections and showcase your skills to the world!
              </p>
              <SocialLinks />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            {Object.keys(FOOTER_SECTIONS).map((section) => (
              <div className="text-center sm:text-left" key={section}>
                <p className="text-lg font-bold">{section}</p>
                <nav className="mt-4">
                  <ul className="space-y-4 text-sm">
                    {FOOTER_SECTIONS[section].map((link) => {
                      return Object.values(link)[0].includes("#") ? (
                        <li key={Object.values(link)[0]}>
                          <a
                            className="transition hover:text-textMuted"
                            href={Object.values(link)[0]}
                          >
                            {Object.keys(link)}
                          </a>
                        </li>
                      ) : (
                        <li key={Object.values(link)[0]}>
                          <Link
                            className="transition hover:text-textMuted"
                            to={Object.values(link)[0]}
                          >
                            {Object.keys(link)}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            ))}

            <div className="text-center sm:text-left">
              <p className="text-lg font-bold">Contact Us</p>
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <a
                    className="group flex items-center justify-center gap-1.5 sm:justify-start"
                    href="mailto:devroot@gmail.com"
                  >
                    <Mail className="size-6 group-hover:text-textMuted" />
                    <span className="transition group-hover:text-textMuted">
                      devroot@gmail.com
                    </span>
                  </a>
                </li>

                <li>
                  <Link
                    className="group flex items-center justify-center gap-1.5 sm:justify-start"
                    to="/contact-form"
                  >
                    <FileUser className="size-6 group-hover:text-textMuted" />
                    <span className="transition group-hover:text-textMuted">
                      Contact Form
                    </span>
                  </Link>
                </li>

                <li className="group flex items-start justify-center gap-1.5 sm:justify-start">
                  <MapPinHouse className="size-6 group-hover:text-textMuted" />
                  <address className="-mt-0.5 not-italic transition hover:cursor-pointer group-hover:text-textMuted">
                    Ghaziabad, Uttar Pradesh, India
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-800 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="space-x-2 text-sm text-gray-400">
              <span className="block sm:inline">All rights reserved.</span>
              <a
                className="inline-block text-hover underline transition hover:text-hover hover:opacity-75"
                href="#terms"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>
              <a
                className="inline-block text-hover underline transition hover:text-hover hover:opacity-75"
                href="#privacy"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} DevRoot
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
