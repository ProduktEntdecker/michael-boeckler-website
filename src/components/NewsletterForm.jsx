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

    try {
      // TODO: Implement actual newsletter API call (Mailchimp/ConvertKit)
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, source })
      });

      if (!response.ok) throw new Error('Subscription failed');

      trackNewsletterSignup(source);
      setStatus('success');
      setMessage('Vielen Dank für Ihre Anmeldung! Sie erhalten in Kürze eine Bestätigungsmail.');
      setEmail('');
      setName('');
    } catch (error) {
      setStatus('error');
      setMessage('Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es später erneut.');
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