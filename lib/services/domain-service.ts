import { DomainAvailability } from '../types/business-names';

export class DomainService {
  public async checkDomainAvailability(domain: string): Promise<DomainAvailability> {
    // Simulated domain check since we can't make real DNS queries
    const available = Math.random() > 0.5;
    return {
      domain,
      available,
      price: available ? Math.floor(Math.random() * 20) + 10 : undefined,
    };
  }

  public async checkMultipleDomains(domains: string[]): Promise<DomainAvailability[]> {
    return Promise.all(domains.map(domain => this.checkDomainAvailability(domain)));
  }
}
