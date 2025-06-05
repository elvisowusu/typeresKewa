export function ProductShowcase() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Product Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-500 rounded-lg p-8 text-white">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-500 font-bold">CAMP</span>
                  </div>
                  <div className="text-sm">PREMIUM QUALITY</div>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-8 flex items-center justify-center">
                <span className="text-green-400 font-bold text-lg">DESIGN</span>
              </div>
            </div>
            {/* Decorative green circle */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-400 rounded-full opacity-20"></div>
          </div>
          {/* Right Column - Product Description */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Achieve Flawless Products, Faster
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our advanced production process ensures that every product meets
              the highest quality standards while maintaining fast turnaround
              times.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-gray-700">
                  Manage your designs and track progress with real-time updates
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-gray-700">Cost-effective solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-gray-700">
                  Ensure high-quality designs and products with dedicated
                  quality control
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-gray-700">Fast turnaround times</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
