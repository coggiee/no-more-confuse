'use client';

'use client';

import React, { useState, useEffect } from 'react';

interface TimingMetrics {
  // 상대적 시간 (performance.now() 기준)
  fetchStart: number | null;
  domainLookupStart: number | null;
  domainLookupEnd: number | null;
  connectStart: number | null;
  secureConnectionStart: number | null;
  connectEnd: number | null;
  requestStart: number | null;
  responseStart: number | null;
  responseEnd: number | null;
  name: string | null;
}

const DetailedQueryTiming = () => {
  const [timingMetrics, setTimingMetrics] = useState<TimingMetrics>({
    fetchStart: null,
    domainLookupStart: null,
    domainLookupEnd: null,
    connectStart: null,
    secureConnectionStart: null,
    connectEnd: null,
    requestStart: null,
    responseStart: null,
    responseEnd: null,
    name: null
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceResourceTiming;
      
      if (lastEntry.initiatorType === 'fetch') {
        // performance.timeOrigin을 기준으로 상대적인 시간으로 변환
        const timeOrigin = performance.timeOrigin;
        
        setTimingMetrics({
          fetchStart: lastEntry.fetchStart,
          domainLookupStart: lastEntry.domainLookupStart,
          domainLookupEnd: lastEntry.domainLookupEnd,
          connectStart: lastEntry.connectStart,
          secureConnectionStart: lastEntry.secureConnectionStart || null,
          connectEnd: lastEntry.connectEnd,
          requestStart: lastEntry.requestStart,
          responseStart: lastEntry.responseStart,
          responseEnd: lastEntry.responseEnd,
          name: lastEntry.name
        });
      }
    });

    observer.observe({ 
      entryTypes: ['resource'],
      buffered: true 
    });

    return () => observer.disconnect();
  }, []);

  const makeRequest = async () => {
    try {
      setIsLoading(true);
      setError(null);
      performance.clearResourceTimings();
      
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDuration = (start: number | null, end: number | null): string => {
    if (start === null || end === null) return '-';
    const duration = end - start;
    if (duration === 0) return '0ms';
    if (duration < 1) return '<1ms';
    return `${duration.toFixed(2)}ms`;
  };

  interface TimingRowProps {
    label: string;
    start: number | null;
    end: number | null;
    description: string;
  }

  const TimingRow: React.FC<TimingRowProps> = ({ label, start, end, description }) => {
    const duration = start !== null && end !== null ? end - start : null;
    const totalDuration = timingMetrics.responseEnd && timingMetrics.fetchStart 
      ? timingMetrics.responseEnd - timingMetrics.fetchStart 
      : 0;

    return (
      <tr className="border-b border-gray-100">
        <th className="text-left py-2 pr-4">
          <div>{label}</div>
          <div className="text-xs text-gray-500 font-normal">{description}</div>
        </th>
        <td className="font-mono py-2 text-right">
          {duration !== null && totalDuration > 0 ? (
            <div className="relative w-full">
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-2 bg-blue-200" 
                style={{ 
                  width: `${Math.min((duration / totalDuration) * 100, 100)}%`,
                  left: `${((start! - timingMetrics.fetchStart!) / totalDuration) * 100}%`
                }} 
              />
              <span className="relative z-10">{formatDuration(start, end)}</span>
            </div>
          ) : (
            formatDuration(start, end)
          )}
        </td>
      </tr>
    );
  };

  return (
    <section className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Request Timeline</h2>
      
      <table className="w-full mb-6">
        <tbody>
          <tr className="border-b border-gray-100">
            <th className="text-left py-2 pr-4">
              <div>Queued At</div>
              <div className="text-xs text-gray-500 font-normal">Request added to queue</div>
            </th>
            <td className="font-mono py-2 text-right">
              {timingMetrics.fetchStart ? `${timingMetrics.fetchStart.toFixed(2)}ms` : '-'}
            </td>
          </tr>
          <tr className="border-b border-gray-100">
            <th className="text-left py-2 pr-4">
              <div>Started At</div>
              <div className="text-xs text-gray-500 font-normal">Request started</div>
            </th>
            <td className="font-mono py-2 text-right">
              {timingMetrics.requestStart ? `${timingMetrics.requestStart.toFixed(2)}ms` : '-'}
            </td>
          </tr>
          <tr className="border-b border-gray-100">
            <th className="text-left py-2 pr-4">
              <div>Ended At</div>
              <div className="text-xs text-gray-500 font-normal">Response completed</div>
            </th>
            <td className="font-mono py-2 text-right">
              {timingMetrics.responseEnd ? `${timingMetrics.responseEnd.toFixed(2)}ms` : '-'}
            </td>
          </tr>
          <tr className="border-t-2 border-gray-300">
            <th className="text-left py-2 pr-4">
              <div>Total Duration</div>
              <div className="text-xs text-gray-500 font-normal">Complete request lifecycle</div>
            </th>
            <td className="font-mono py-2 font-bold text-right">
              {formatDuration(timingMetrics.fetchStart, timingMetrics.responseEnd)}
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-bold mb-4">Network Waterfall</h3>
      <table className="w-full">
        <tbody>
          <TimingRow 
            label="DNS Lookup" 
            start={timingMetrics.domainLookupStart}
            end={timingMetrics.domainLookupEnd}
            description="Domain name resolution"
          />
          <TimingRow 
            label="TCP Connection" 
            start={timingMetrics.connectStart}
            end={timingMetrics.secureConnectionStart || timingMetrics.connectEnd}
            description="Initial connection establishment"
          />
          <TimingRow 
            label="TLS Handshake" 
            start={timingMetrics.secureConnectionStart}
            end={timingMetrics.connectEnd}
            description="SSL/TLS negotiation"
          />
          <TimingRow 
            label="Request (TTFB)" 
            start={timingMetrics.requestStart}
            end={timingMetrics.responseStart}
            description="Time to first byte"
          />
          <TimingRow 
            label="Response" 
            start={timingMetrics.responseStart}
            end={timingMetrics.responseEnd}
            description="Content download"
          />
        </tbody>
      </table>

      {error && (
        <div className="mt-4 p-2 text-red-600 bg-red-50 rounded">
          {error}
        </div>
      )}

      <button
        onClick={makeRequest}
        disabled={isLoading}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {isLoading ? 'Loading...' : 'Make Request'}
      </button>
    </section>
  );
};

export default DetailedQueryTiming;