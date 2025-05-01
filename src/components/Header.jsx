export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold">L.S. Sujai Sideshwer</h1>
        <nav className="flex gap-4">
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#experience" className="hover:underline">
            Experience
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#education" className="hover:underline">
            Education
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
