import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const footerSections = [
    {
      title: "About",
      links: ["How it works", "Featured", "Partnership", "Bussiness Relation"],
    },
    {
      title: "Community",
      links: ["Events", "Blog", "Podcast", "Invite a Friend"],
    },
    {
      title: "Socials",
      links: ["Discord", "Instagram", "Twitter", "Facebook"],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-[5rem]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left: Logo and Description */}
          <div className="space-y-4 md:w-[200px]">
            <Link
              href="#"
              className="flex items-center font-semibold text-xl text-gray-900"
            >
              <Image
                src="/Trlogo.png"
                alt="Typeres Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              typeres
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Simplifying Your Design-to-Product Journey
            </p>
          </div>

          {/* Right: Footer Sections */}
          <div className="flex flex-wrap gap-20 md:ml-auto">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-gray-900 mb-6">
                  {section.title}
                </h4>
                <div className="space-y-4 text-sm text-gray-600">
                  {section.links.map((link) => (
                    <div key={link}>
                      <Link href="#" className="hover:text-gray-900">
                        {link}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t font-bold border-gray-100 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <div>© 2024 typeres. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
