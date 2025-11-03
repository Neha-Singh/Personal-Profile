import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center py-6 px-8 border-t border-gray-200 text-gray-700 text-sm">
      {/* Left side */}
      <p>
        © {new Date().getFullYear()} <strong>Neha</strong>. Built with{" "}
        <span className="font-semibold">Next.js</span>.
      </p>

      {/* Right side — icons */}
      <div className="flex gap-5">
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-700 hover:text-gray-900 transition"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/your-linkedin-profile/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-700 hover:text-[#0077B5] transition"
        >
          <FaLinkedin size={22} />
        </a>
      </div>
    </footer>
  );
}
