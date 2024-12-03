export interface BusinessName {
  name: string;
  explanation: string;
  domains: string[];
}

export interface DomainAvailability {
  domain: string;
  available: boolean;
  price?: number;
  error?: string;
}

export interface BusinessNameWithDomains extends BusinessName {
  domainAvailability: DomainAvailability[];
}

export interface GenerateNamesResponse {
  names: BusinessNameWithDomains[];
}

export interface GenerateNamesError {
  error: string;
  details?: unknown;
}
