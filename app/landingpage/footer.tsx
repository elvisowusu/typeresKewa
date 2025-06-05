import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <Link
              href="#"
              className="flex items-center font-semibold text-xl text-gray-900"
            >
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-2">
                <span className="text-white">T</span>
              </div>
              typeres
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Simplifying your design-to-product journey with quality and speed.
            </p>
            <div className="text-sm text-gray-500">
              © 2024 typeres. All rights reserved.
            </div>
          </div>

          {/* Column 2: About Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">About</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>
                <Link href="#" className="hover:text-gray-900">
                  Company
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-gray-900">
                  Team
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-gray-900">
                  Careers
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-gray-900">
                  News
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3: Community Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Community</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>
                <Link href="#" className="hover:text-gray-900">
                  Discord
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-gray-900">
                  Twitter
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-gray-900">
                  GitHub
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-gray-900">
                  Blog
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4: Socials Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Socials</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>
                <Link href="#" className="hover:text-gray-900">
                  Twitter
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-gray-900">
                  LinkedIn
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-gray-900">
                  Instagram
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-gray-900">
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-gray-100 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <div>Privacy Policy</div>
          <div>Terms & Conditions</div>
        </div>
      </div>
    </footer>
  );
}
