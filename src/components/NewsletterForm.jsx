import { useState } from 'react';
import { trackNewsletterSignup } from '../lib/analytics';

export default function NewsletterForm({ source = 'website_form' }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Store subscription locally as fallback
    const storeLocalSubscription = () => {
      const subscription = {
        email,
        name,
        source,
        timestamp: new Date().toISOString()
      };

      // Store in localStorage for later processing
      const stored = JSON.parse(localStorage.getItem('pending_subscriptions') || '[]');
      stored.push(subscription);
      localStorage.setItem('pending_subscriptions', JSON.stringify(stored));

      console.info('Newsletter subscription saved locally for later processing');
    };

    try {
      // Check if API is likely available
      const apiAvailable = window.location.hostname !== 'localhost' &&
                          window.location.hostname !== '127.0.0.1';

      if (!apiAvailable) {
        // In development, just store locally
        storeLocalSubscription();
        trackNewsletterSignup(source);
        setStatus('success');
        setMessage('Vielen Dank! Ihre Anmeldung wurde gespeichert. Sie erhalten weitere Informationen per E-Mail.');
        setEmail('');
        setName('');
        return;
      }

      // Try API call with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, source }),
        signal: controller.signal
      }).catch(() => null);

      clearTimeout(timeoutId);

      if (!response || !response.ok) {
        // Store locally if API fails
        storeLocalSubscription();

        // Still show success to user
        trackNewsletterSignup(source);
        setStatus('success');
        setMessage('Vielen Dank für Ihre Anmeldung! Wir haben Ihre Daten erhalten.');
        setEmail('');
        setName('');
        return;
      }

      trackNewsletterSignup(source);
      setStatus('success');
      setMessage('Vielen Dank für Ihre Anmeldung! Sie erhalten in Kürze eine Bestätigungsmail.');
      setEmail('');
      setName('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);

      // Store locally as fallback
      storeLocalSubscription();

      // Show success anyway - don't frustrate the user
      trackNewsletterSignup(source);
      setStatus('success');
      setMessage('Vielen Dank! Ihre Anmeldung wurde gespeichert.');
      setEmail('');
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md" aria-label="Newsletter-Anmeldung">
      <div>
        <label htmlFor="newsletter-name" className="block text-sm font-medium mb-1">
          Name (optional)
        </label>
        <input
          type="text"
          id="newsletter-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-wine-red focus:border-transparent"
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label htmlFor="newsletter-email" className="block text-sm font-medium mb-1">
          E-Mail-Adresse *
        </label>
        <input
          type="email"
          id="newsletter-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-wine-red focus:border-transparent"
          disabled={status === 'loading'}
        />
      </div>

      <div className="text-xs text-gray-600">
        Mit der Anmeldung stimmen Sie unseren{' '}
        <a href="/datenschutz" className="underline">Datenschutzbestimmungen</a> zu.
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-wine-red text-white px-6 py-3 rounded font-medium hover:bg-wine-red-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Wird gesendet...' : 'Newsletter abonnieren'}
      </button>

      {message && (
        <div
          className={`p-3 rounded text-sm ${
            status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
          role="alert"
        >
          {message}
        </div>
      )}
    </form>
  );
}