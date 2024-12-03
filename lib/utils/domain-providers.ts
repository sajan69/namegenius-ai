export interface DomainProvider {
  name: string;
  searchUrl: (domain: string) => string;
}

export const domainProviders: DomainProvider[] = [
  {
    name: 'GoDaddy',
    searchUrl: (domain: string) =>
      `https://www.godaddy.com/domainsearch/find?domainToCheck=${domain}`,
  },
  {
    name: 'Namecheap',
    searchUrl: (domain: string) =>
      `https://www.namecheap.com/domains/registration/results/?domain=${domain}`,
  },
  {
    name: 'Google Domains',
    searchUrl: (domain: string) =>
      `https://domains.google.com/registrar/search?searchTerm=${domain}`,
  },
];
