import { useTop } from "@/contexts/TopContext";
import { DEFAULT_IMAGE, DEFAULT_IMAGE_ERROR } from "@/utils/constants";

const PartnersSection = () => {
  const { partnersList } = useTop();

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partnersList.list.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
            >
              <img
                src={partner.logo ?? DEFAULT_IMAGE}
                alt={partner.name}
                className="max-h-12 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = DEFAULT_IMAGE_ERROR;
                }}
              />
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[rgb(14,71,171)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[rgb(14,71,171)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Verified Reviews
            </h3>
            <p className="text-gray-600">
              All our tours are verified and reviewed on major travel platforms
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[rgb(14,71,171)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[rgb(14,71,171)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Secure Booking
            </h3>
            <p className="text-gray-600">
              Safe and secure payment processing through trusted partners
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[rgb(14,71,171)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[rgb(14,71,171)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Instant Confirmation
            </h3>
            <p className="text-gray-600">
              Get immediate booking confirmation and tour vouchers
            </p>
          </div>
        </div> */}

        {/* Awards and Certifications */}
        {/* <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Awards & Certifications
            </h3>
            <p className="text-gray-600">
              Recognized for excellence in Vietnamese tourism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-[rgb(255,200,0)] text-3xl mb-2">🏆</div>
              <h4 className="font-semibold text-gray-900">
                TripAdvisor Excellence
              </h4>
              <p className="text-sm text-gray-600">
                Certificate of Excellence 2024
              </p>
            </div>
            <div>
              <div className="text-[rgb(255,200,0)] text-3xl mb-2">⭐</div>
              <h4 className="font-semibold text-gray-900">5-Star Rating</h4>
              <p className="text-sm text-gray-600">
                Consistently rated 5 stars
              </p>
            </div>
            <div>
              <div className="text-[rgb(255,200,0)] text-3xl mb-2">🌱</div>
              <h4 className="font-semibold text-gray-900">
                Sustainable Tourism
              </h4>
              <p className="text-sm text-gray-600">Eco-friendly certified</p>
            </div>
            <div>
              <div className="text-[rgb(255,200,0)] text-3xl mb-2">🎖️</div>
              <h4 className="font-semibold text-gray-900">
                Local Tourism Board
              </h4>
              <p className="text-sm text-gray-600">Official recognition</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PartnersSection;
