import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "../hooks/use-language";
import ErsaLogo from "../Ersa-logo.svg";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const languageLabels = {
    tr: "TR",
    en: "EN",
    ar: "AR",
  };

  const languageNames = {
    tr: "Türkçe",
    en: "English",
    ar: "العربية",
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: "0%" }} id="progress-bar" />

      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/95 backdrop-blur-md"
        } border-b border-gray-200`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src={ErsaLogo}
                  alt="ERSA Logo"
                  className="h-8 w-auto mr-2"
                />
                <span className="text-xl font-bold text-ersa-blue">ERSA</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="nav-item text-gray-700 hover:text-ersa-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {t("home")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="nav-item text-gray-700 hover:text-ersa-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {t("about")}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="nav-item text-gray-700 hover:text-ersa-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {t("services")}
              </button>
              <button
                onClick={() => scrollToSection("values")}
                className="nav-item text-gray-700 hover:text-ersa-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {t("values")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-item text-gray-700 hover:text-ersa-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {t("contact")}
              </button>
              <Link href="/sikayet-formu" className="nav-item text-gray-700 hover:text-ersa-blue px-3 py-2 text-sm font-medium transition-colors">
                {t("complaintForm")}
              </Link>
              <a
                href="/ErsaUlasim-Katalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item text-white bg-ersa-blue hover:bg-ersa-light-blue px-4 py-2 text-sm font-medium transition-colors rounded-lg inline-flex items-center space-x-2"
              >
                <i className="fas fa-book text-sm"></i>
                <span>{t("digitalCatalog")}</span>
              </a>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="language-switcher flex items-center space-x-2 px-3 py-2 bg-ersa-blue text-white rounded-lg hover:bg-ersa-light-blue transition-colors"
                >
                  <i className="fas fa-globe text-sm"></i>
                  <span className="text-sm font-medium">
                    {languageLabels[language]}
                  </span>
                  <i className="fas fa-chevron-down text-xs"></i>
                </button>
                <div
                  className={`absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 transform ${
                    isLanguageMenuOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  <button
                    onClick={() => {
                      setLanguage("tr");
                      setIsLanguageMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                  >
                    {languageNames.tr}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setIsLanguageMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    {languageNames.en}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("ar");
                      setIsLanguageMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-b-lg"
                  >
                    {languageNames.ar}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-ersa-blue p-2"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
              md:hidden
              absolute inset-x-0 top-0
              bg-white border-t border-gray-200
              overflow-hidden
              transform transition-[transform,opacity] duration-300
              ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100 pointer-events-auto"
                  : "-translate-y-full opacity-0 pointer-events-none"
              }
            `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-ersa-blue hover:bg-gray-50 rounded-md"
            >
              {t("home")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-ersa-blue hover:bg-gray-50 rounded-md"
            >
              {t("about")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-ersa-blue hover:bg-gray-50 rounded-md"
            >
              {t("services")}
            </button>
            <button
              onClick={() => scrollToSection("values")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-ersa-blue hover:bg-gray-50 rounded-md"
            >
              {t("values")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-ersa-blue hover:bg-gray-50 rounded-md"
            >
              {t("contact")}
            </button>
            <Link 
              href="/sikayet-formu" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-ersa-blue hover:bg-gray-50 rounded-md"
            >
              {t("complaintForm")}
            </Link>
            <a
              href="/ErsaUlasim-Katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-3 py-2 text-base font-medium text-white bg-ersa-blue hover:bg-ersa-light-blue rounded-md inline-flex items-center space-x-2"
            >
              <i className="fas fa-book text-sm"></i>
              <span>{t("digitalCatalog")}</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
