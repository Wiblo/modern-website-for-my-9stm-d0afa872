import { Activity, Zap, Heart, Dumbbell } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  slug: string
  name: string
  description: string
  duration: string
  price: string
  image: string
  imageAlt: string
  icon: LucideIcon
  benefits?: string[]
  featured?: boolean
  // Full treatment details for dedicated pages
  shortDescription?: string
  fullDescription?: string
  idealFor?: string[]
}

/**
 * All services offered by the practice
 * Update this array to add/modify services shown throughout the site
 */
export const services: Service[] = [
  {
    id: 'initial-evaluation',
    slug: 'initial-consultation',
    name: 'Initial Evaluation',
    description:
      'Comprehensive physical therapy assessment including detailed movement analysis, strength testing, and personalized treatment plan development tailored to your recovery goals.',
    duration: '60 min',
    price: '$150',
    image: '/arm-mobility-assessment.jpeg',
    imageAlt: 'Professional mobility assessment during physiotherapy evaluation',
    icon: Activity,
    benefits: [
      'Complete movement assessment',
      'Diagnosis and explanation',
      'Personalized treatment plan',
      'Pain management strategies',
    ],
    featured: true,
    shortDescription:
      'Your recovery journey begins with a thorough physical therapy evaluation',
    fullDescription:
      'During your initial evaluation, our licensed physical therapist conducts a comprehensive assessment of your condition, movement patterns, strength, flexibility, and functional abilities. This includes a detailed review of your medical history, injury mechanism, and recovery goals.\n\nUsing evidence-based diagnostic techniques and movement analysis, we identify the root cause of your dysfunction and develop a personalized treatment plan. Your first session may include manual therapy, therapeutic exercises, and education on your condition.',
    idealFor: [
      'New patients',
      'Sports injuries',
      'Post-surgical recovery',
      'Chronic pain',
      'Movement dysfunction',
      'Injury prevention',
    ],
  },
  {
    id: 'follow-up-treatment',
    slug: 'follow-up-consultation',
    name: 'Physical Therapy Session',
    description:
      'Focused treatment sessions including manual therapy, therapeutic exercises, and modalities to accelerate healing and restore optimal function.',
    duration: '45 min',
    price: '$120',
    image: '/spinal-adjustment-treatment.jpeg',
    imageAlt: 'Physical therapy treatment session',
    icon: Zap,
    benefits: [
      'Progress tracking',
      'Manual therapy techniques',
      'Therapeutic exercises',
      'Home exercise program updates',
    ],
    featured: true,
    shortDescription:
      'Hands-on treatment to restore movement and reduce pain',
    fullDescription:
      'Follow-up treatment sessions focus on implementing your personalized therapy plan. Each session includes manual therapy techniques such as joint mobilization, soft tissue work, and neuromuscular re-education.\n\nOur therapist will guide you through targeted therapeutic exercises, modify your treatment plan based on progress, and provide updated home exercise programs. We utilize evidence-based modalities when appropriate to accelerate healing and manage pain.',
    idealFor: [
      'Active treatment phase',
      'Recovery progression',
      'Strength building',
      'Pain management',
      'Return to sport/activity',
    ],
  },
  {
    id: 'sports-rehab',
    slug: 'sports-rehabilitation',
    name: 'Sports Rehabilitation',
    description:
      'Specialized sports-specific physical therapy for athletes recovering from injuries or looking to enhance performance and prevent future injuries.',
    duration: '45 min',
    price: '$130',
    image: '/arm-mobility-assessment.jpeg',
    imageAlt: 'Sports rehabilitation therapy session',
    icon: Dumbbell,
    benefits: [
      'Sport-specific training',
      'Performance optimization',
      'Injury prevention strategies',
      'Return-to-sport protocols',
    ],
    featured: true,
    shortDescription:
      'Get back in the game with specialized sports rehabilitation',
    fullDescription:
      'Our sports rehabilitation program is designed specifically for athletes of all levels. We focus on not just recovering from injury, but optimizing movement patterns, building resilience, and enhancing athletic performance.\n\nTreatment includes advanced manual therapy, sport-specific functional training, biomechanical analysis, and progressive return-to-sport protocols. We work closely with coaches and trainers to ensure safe and effective return to competition.',
    idealFor: [
      'Athletes',
      'Sports injuries',
      'ACL/MCL recovery',
      'Rotator cuff injuries',
      'Running injuries',
      'Performance enhancement',
    ],
  },
  {
    id: 'dry-needling',
    slug: 'dry-needling',
    name: 'Dry Needling Therapy',
    description:
      'Advanced technique using thin needles to release muscle tension, reduce pain, and improve tissue healing for chronic pain and muscle dysfunction.',
    duration: '30 min',
    price: '$80',
    image: '/spinal-adjustment-treatment.jpeg',
    imageAlt: 'Dry needling treatment',
    icon: Heart,
    benefits: [
      'Rapid pain relief',
      'Muscle tension release',
      'Improved range of motion',
      'Enhanced tissue healing',
    ],
    featured: false,
    shortDescription:
      'Targeted pain relief through advanced dry needling techniques',
    fullDescription:
      'Dry needling is an effective treatment for releasing trigger points, reducing muscle tension, and accelerating healing. Our therapists use thin filament needles to target specific muscle bands and trigger points that contribute to pain and dysfunction.\n\nThis technique can provide rapid relief from acute and chronic pain conditions, improve range of motion, and enhance the effectiveness of your overall treatment plan. Often combined with other manual therapy techniques for optimal results.',
    idealFor: [
      'Chronic pain',
      'Muscle tension',
      'Trigger points',
      'Headaches/migraines',
      'Tendinitis',
      'Muscle strains',
    ],
  },
]

/**
 * Get all services
 */
export function getAllServices(): Service[] {
  return services
}

/**
 * Get featured services only
 */
export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured)
}

/**
 * Get a single service by slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

/**
 * Get a single service by ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id)
}
