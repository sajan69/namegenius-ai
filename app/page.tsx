'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { NameGeneratorForm } from '@/components/name-generator-form';
import { NameResults } from '@/components/name-results';
import { GeminiService } from '@/lib/services/gemini-service';
import { DomainService } from '@/lib/services/domain-service';
import { BusinessNameWithDomains } from '@/lib/types/business-names';

export default function Home() {
  const [results, setResults] = useState<BusinessNameWithDomains[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (description: string, industry: string) => {
    setIsLoading(true);
    try {
      const geminiService = new GeminiService();
      const domainService = new DomainService();

      const names = await geminiService.generateNames(description, industry);

      // Check domain availability for each name
      const resultsWithDomains = await Promise.all(
        names.map(async name => {
          const domainAvailability = await domainService.checkMultipleDomains(name.domains);
          return {
            ...name,
            domainAvailability,
          };
        })
      );

      setResults(resultsWithDomains);
    } catch (error) {
      console.error('Generation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-2xl text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-8 w-8 text-primary mr-2" />
          <h1 className="text-4xl font-bold">NameGenius</h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Generate unique and available business names powered by AI
        </p>
      </div>

      <div className="mx-auto max-w-xl mb-12">
        <NameGeneratorForm onGenerate={handleGenerate} isLoading={isLoading} />
      </div>

      <div className="mt-12">
        <NameResults results={results} />
      </div>
      <div className="mt-12 text-center text-muted-foreground">
        <p>
          Made with ❤️ by{' '}
          <a
            href="https://twitter.com/sajanadhikari_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            Sajan Adhikari
          </a>
        </p>
      </div>  
    </main>
  );
}
