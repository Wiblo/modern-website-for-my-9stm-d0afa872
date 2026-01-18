export interface FeatureBlock {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

/**
 * Features section content
 * Highlighting key features, benefits, or unique aspects of the practice
 */
export const featureBlocks: FeatureBlock[] = [
  {
    id: 'feature-1',
    title: 'Evidence-Based Physical Therapy',
    description:
      'Our comprehensive approach combines the latest research in physical therapy with hands-on manual techniques and therapeutic exercise. We focus on identifying and treating the root cause of your pain or dysfunction, not just managing symptoms.',
    image: '/spinal-adjustment-treatment.jpeg',
    imageAlt: 'Physical therapy treatment session',
    imagePosition: 'right',
  },
  {
    id: 'feature-2',
    title: 'Sports Injury Specialists',
    description:
      'We specialize in getting athletes back in the game. Our sports rehabilitation programs include biomechanical analysis, sport-specific training, and progressive return-to-sport protocols tailored to your activity level and competitive goals.',
    image: '/iastm-shoulder-treatment.jpeg',
    imageAlt: 'Sports rehabilitation treatment',
    imagePosition: 'left',
  },
  {
    id: 'feature-3',
    title: 'Personalized Recovery Plans',
    description:
      'Every patient receives a customized treatment plan based on their unique condition, movement patterns, and recovery goals. We combine manual therapy, therapeutic exercises, and education to empower you throughout your healing journey.',
    image: '/hip-adjustment-side-lying.jpeg',
    imageAlt: 'One-on-one physical therapy session',
    imagePosition: 'right',
  },
]
