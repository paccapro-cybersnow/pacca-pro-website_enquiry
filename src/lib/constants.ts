export const WHATSAPP_CONFIG = {
  phoneNumber: '918768786878',
  defaultMessage: 'WEBSITE_ENQUIRY',
} as const;

export const COMPANY_INFO = {
  name: 'Pacca Pro',
  tagline: 'Premium Paint Solutions',
  stats: {
    litersDistributed: '10,000+',
  },
} as const;

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}`,
} as const;
