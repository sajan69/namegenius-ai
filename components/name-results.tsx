'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { BusinessNameWithDomains } from '@/lib/types/business-names';
import { domainProviders } from '@/lib/utils/domain-providers';

interface NameResultsProps {
  results: BusinessNameWithDomains[];
}

export function NameResults({ results }: NameResultsProps) {
  if (!results.length) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {results.map((result, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl font-bold">{result.name}</CardTitle>
            <CardDescription>{result.explanation}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Domain Options:</h4>
              {result.domains.map((domain, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{domain}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domainProviders.map(provider => (
                      <a
                        key={provider.name}
                        href={provider.searchUrl(domain)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          {provider.name}
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Button>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
