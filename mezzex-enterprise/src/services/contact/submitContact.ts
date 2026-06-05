export interface ContactFormData {
  email: string;
  phone?: string;
  service: string;
  subject: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const USE_MOCK = !process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL === 'https://api.mezzex.com/api';
    if (USE_MOCK) {
      await new Promise((r) => setTimeout(r, 1000));
      return { success: true, message: 'Thank you! Your message has been sent successfully. We will get back to you soon.' };
    }
    const { default: apiClient } = await import('@/services/api/apiClient');
    const res = await apiClient.post('/contact', data);
    return res.data;
  } catch {
    return { success: false, message: 'Something went wrong. Please try again or contact us directly.' };
  }
}
