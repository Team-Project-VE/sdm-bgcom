export interface TranslationData {
  welcomeText: string;
  welcomeLink: string;
  addressTitle: string;
  address: string;
  phoneTitle: string; // Add the phoneTitle property
  phoneNumbers: PhoneNumber[];
  emailTitle: string;
  emailAddresses: EmailAddress[];
  socialMedia: SocialMedia[];
}

export interface PhoneNumber {
  phone: string;
}

export interface EmailAddress {
  email: string;
}

export interface SocialMedia {
  icon: string;
}