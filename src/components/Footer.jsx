import { resourcesLinks, platformLinks, communityLinks } from "../constants";

function Footer() {
  return (
    <footer className="bg-gray-900 text-neutral-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-neutral-400 hover:text-white transition duration-300"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Platform Links
            </h3>
            <ul className="space-y-3">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-neutral-400 hover:text-white transition duration-300"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Community</h3>
            <ul className="space-y-3">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-neutral-400 hover:text-white transition duration-300"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-700 pt-6 text-center text-sm text-neutral-500">
          <p>© 2024 Rustam Tech Realm. All rights reserved.</p>
          <p className="mt-2">
            Designed with ❤️ by{" "}
            <a href="#" className="text-white hover:underline">
              Rustam Khan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
