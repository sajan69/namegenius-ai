export async function checkDomainAvailability(domain: string) {
  // For demo purposes, return mock data since we're running on the edge
  return {
    domain,
    available: Math.random() > 0.5,
    price: Math.floor(Math.random() * 20) + 10,
  };
}
