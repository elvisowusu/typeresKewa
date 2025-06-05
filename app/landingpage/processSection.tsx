import Image from "next/image";

export function Process() {
  const steps = [
    {
      number: 1,
      title: "Upload Design",
      description:
        "Simply upload your design files and let our system analyze the requirements for production.",
    },
    {
      number: 2,
      title: "Customization & Production",
      description:
        "Choose your materials, colors, and specifications. Our team will prepare everything for production.",
    },
    {
      number: 3,
      title: "Vendor Processing & Production",
      description:
        "Our trusted vendor network handles the manufacturing process with quality assurance at every step.",
    },
    {
      number: 4,
      title: "Delivery",
      description:
        "Receive your finished products with fast and reliable shipping directly to your doorstep.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-[5rem]">
        <div className="text-center mb-12 flex flex-col items-center md:mb-16">
          {/* Replaced Badge with a div */}
          <div className="bg-[rgba(76,171,81,0.22)] text-black font-normal lg:text-md rounded-full px-3 py-1.5 lg:w-[200px]">
            How it works
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We provide simplified process to get you started
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Process Steps */}
          <div className="space-y-8 lg:w-[570px]">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E6E6E6] text-black flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Production Preview */}
          <div className="flex justify-center">
            <Image
              src="/process-preview.png"
              alt="Production Process Preview"
              width={571}
              height={443}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
