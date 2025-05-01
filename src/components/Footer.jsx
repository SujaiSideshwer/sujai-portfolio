import { Mail, Phone, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-100 dark:bg-gray-800 py-8 px-4 mt-12 text-center"
    >
      <div className="max-w-6xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <a
              href="mailto:sideshwersujai1999@gmail.com"
              className="hover:underline"
            >
              sideshwersujai1999@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <a href="tel:+918778949642" className="hover:underline">
              +91 87789 49642
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-5 h-5" />
            <a
              href="https://linkedin.com/in/sujai-sideshwer"
              target="_blank"
              className="hover:underline"
            >
              linkedin.com/in/sujai-sideshwer
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5" />
            <a
              href="https://github.com/SujaiSideshwer"
              target="_blank"
              className="hover:underline"
            >
              github.com/SujaiSideshwer
            </a>
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Sujai Sideshwer. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
