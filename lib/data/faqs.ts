export interface FaqItem {
  id: string
  question: string
  answer: string
}

/**
 * Frequently Asked Questions
 * Update this array to modify FAQs shown on the site
 */
export const faqs: FaqItem[] = [
  {
    id: 'first-visit',
    question: 'What should I expect on my first visit?',
    answer:
      "Your initial evaluation includes a comprehensive assessment of your injury or condition, movement analysis, strength testing, and range of motion evaluation. We'll discuss your symptoms, medical history, and recovery goals, then develop a personalized treatment plan. The first visit typically lasts 60 minutes. Follow-up treatment sessions are 45 minutes.",
  },
  {
    id: 'insurance',
    question: 'Do you accept insurance?',
    answer:
      'Yes, we accept most major insurance plans including Blue Cross Blue Shield, Cigna, Aetna, and United Healthcare. We recommend verifying your physical therapy benefits before your first visit. Our staff can help you understand your coverage and handle all insurance paperwork.',
  },
  {
    id: 'painful',
    question: 'Will physical therapy hurt?',
    answer:
      "Physical therapy should not be painful. While you may experience some discomfort during certain exercises or manual therapy techniques, especially in the initial stages of recovery, treatment is designed to reduce pain, not increase it. We always work within your comfort level and adjust techniques as needed.",
  },
  {
    id: 'sessions',
    question: 'How many sessions will I need?',
    answer:
      "The number of sessions depends on your condition, severity, and individual progress. Most acute injuries improve within 4-8 weeks, while chronic conditions may require longer treatment. After your evaluation, we'll provide a treatment plan with expected timeline and modify it based on your response to therapy.",
  },
  {
    id: 'referral',
    question: 'Do I need a doctor referral?',
    answer:
      'Tennessee allows direct access to physical therapy, which means you can see us without a physician referral. However, some insurance plans may require a referral for coverage. Contact your insurance provider or call our office to verify your specific requirements.',
  },
  {
    id: 'sports-injuries',
    question: 'Do you treat sports injuries?',
    answer:
      'Yes! We specialize in sports rehabilitation for athletes of all levels. Our sports-specific programs address common injuries like ACL/MCL tears, rotator cuff injuries, tendinitis, sprains, and strains. We provide return-to-sport protocols and performance training to get you back in the game safely.',
  },
  {
    id: 'appointment',
    question: 'How do I book an appointment?',
    answer:
      'You can book online through our website, call us at (615) 555-0100, or email info@nashvillephysio.com. We offer flexible scheduling with early morning and evening appointments available Monday through Friday, plus Saturday morning hours.',
  },
  {
    id: 'what-to-wear',
    question: 'What should I wear to my appointment?',
    answer:
      'Wear comfortable athletic clothing that allows us to see and assess the affected area. Shorts and a t-shirt are ideal. For shoulder or upper body injuries, wear a tank top or sleeveless shirt. Athletic shoes are recommended for exercise portions of treatment.',
  },
]

/**
 * Get all FAQs
 */
export function getAllFaqs(): FaqItem[] {
  return faqs
}

/**
 * Get a single FAQ by ID
 */
export function getFaqById(id: string): FaqItem | undefined {
  return faqs.find((faq) => faq.id === id)
}
