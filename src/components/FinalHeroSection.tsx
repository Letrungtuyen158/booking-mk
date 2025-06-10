import { Button } from "@/components/ui/button";

const FinalHeroSection = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555400081-2d1a8c8ba491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Cloud Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
          Start Your Vietnam Adventure
        </h2>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
          Experience the magic of Vietnam with our expert local guides
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90 text-white px-8 py-4 text-lg"
          >
            Book Your Tour Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
          >
            Contact Us
          </Button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[rgb(255,200,0)] mb-2">
              10+
            </div>
            <p className="text-lg">Years Experience</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[rgb(255,200,0)] mb-2">
              5,000+
            </div>
            <p className="text-lg">Happy Travelers</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[rgb(255,200,0)] mb-2">
              100+
            </div>
            <p className="text-lg">Tour Packages</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default FinalHeroSection;
