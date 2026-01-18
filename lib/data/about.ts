export interface AboutPreview {
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface AboutFull {
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
}

/**
 * About section preview for homepage
 * Brief introduction with link to full about page
 */
export const aboutPreview: AboutPreview = {
  title: 'About Our Practice',
  description:
    'Nashville Physiotherapy provides evidence-based physical therapy and rehabilitation services to help you recover from injury, manage pain, and optimize performance. Our experienced therapists combine manual therapy, therapeutic exercise, and advanced techniques to get you back to doing what you love.',
  image: '/dr-kamilah-professional-portrait.jpeg',
  imageAlt: 'Physical therapist working with patient',
}

/**
 * Full about content for dedicated about page
 * Comprehensive information about the practice
 */
export const aboutFull: AboutFull = {
  title: 'About Nashville Physiotherapy',
  paragraphs: [
    'Nashville Physiotherapy is dedicated to providing exceptional physical therapy services to the Nashville community. Our licensed physical therapists bring years of experience in sports rehabilitation, orthopedic recovery, and chronic pain management.',
    'We specialize in evidence-based treatment approaches that address the root cause of your condition, not just the symptoms. Whether recovering from surgery, managing a sports injury, or seeking to improve mobility and function, our team creates personalized treatment plans tailored to your specific goals.',
    'At Nashville Physiotherapy, we combine hands-on manual therapy with therapeutic exercise, patient education, and advanced modalities to accelerate healing and prevent future injuries. Our goal is to empower you with the tools and knowledge needed for long-term health and optimal performance.',
  ],
  image: '/dr-kamilah-professional-portrait.jpeg',
  imageAlt: 'Nashville Physiotherapy clinic',
}
