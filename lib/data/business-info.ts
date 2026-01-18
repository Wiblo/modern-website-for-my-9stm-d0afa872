export const businessInfo = {
  // Core business details
  name: "Nashville Physiotherapy",
  tagline: "Expert physical therapy care in Nashville",
  logo: "/logo.png",

  // Contact information
  phone: "(615) 555-0100",
  phoneSecondary: "(615) 555-0101", // Optional second phone number
  email: "info@nashvillephysio.com",

  // Location
  address: {
    street: "2100 West End Avenue",
    area: "Suite 200", // Optional (e.g., "Building Name" or "Suite 100")
    city: "Nashville",
    state: "TN",
    zip: "37203",
    country: "US",
  },

  // Optional: Coordinates for map and LocalBusiness schema
  geo: {
    latitude: 36.1627,
    longitude: -86.7816,
  },

  // Business hours
  hours: {
    monday: "7:00am - 6:00pm",
    tuesday: "7:00am - 6:00pm",
    wednesday: "7:00am - 6:00pm",
    thursday: "7:00am - 6:00pm",
    friday: "7:00am - 5:00pm",
    saturday: "8:00am - 12:00pm",
    sunday: "Closed",
  },

  // Social media profiles
  social: {
    facebook: "https://facebook.com/nashvillephysio",
    instagram: "https://instagram.com/nashvillephysio",
    whatsapp: "https://wa.me/16155550100", // WhatsApp link with number
    // twitter: "https://twitter.com/nashvillephysio",
    // linkedin: "https://linkedin.com/company/nashvillephysio",
  },

  // Site metadata
  url: "https://nashvillephysio.com",
  description: "Professional physiotherapy and physical rehabilitation services in Nashville, TN. Expert care for sports injuries, chronic pain, and post-surgical recovery.",
  priceRange: "$$", // $, $$, $$$, or $$$$

  // Schema.org types for JSON-LD structured data
  // Customize based on your business type. Common combinations:
  // - Chiropractor: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness']
  // - Physical Therapist: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness']
  // - Massage Spa: ['LocalBusiness', 'HealthAndBeautyBusiness', 'DaySpa']
  // - General Wellness: ['LocalBusiness', 'HealthAndBeautyBusiness']
  // - Acupuncture: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness']
  schemaTypes: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'] as const,

  // Booking/appointment URL
  bookingUrl: "https://nashvillephysio.com/book",

  // Google Maps configuration
  maps: {
    apiKey: "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    // Location name for Google Maps searches
    locationName: "Nashville Physiotherapy",
  },
}

// Helper function to get formatted address for Google Maps
export function getGoogleMapsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const query = encodeURIComponent(`${street}, ${city}, ${state} ${zip}`)
  return `https://maps.google.com/?q=${query}`
}

// Helper function to get tel: link
export function getPhoneLink(phoneNumber: string = businessInfo.phone) {
  return `tel:${phoneNumber.replace(/[^0-9+]/g, "")}`
}

// Helper function to get mailto: link
export function getEmailLink() {
  return `mailto:${businessInfo.email}`
}

// Helper function to get Google Maps embed URL
export function getGoogleMapsEmbedUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { apiKey, locationName } = businessInfo.maps
  const query = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}&zoom=15`
}

// Helper function to get Google Maps directions URL
export function getGoogleMapsDirectionsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { locationName } = businessInfo.maps
  const destination = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}
