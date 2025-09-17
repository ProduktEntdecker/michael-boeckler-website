import { useState } from 'react';
import { trackContactFormSubmit } from '../lib/analytics';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // TODO: Implement actual contact form API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send message');

      trackContactFormSubmit();
      setStatus('success');
      setStatusMessage('Vielen Dank für Ihre Nachricht! Ich werde mich so bald wie möglich bei Ihnen melden.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      setStatusMessage('Entschuldigung, beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="heading-xl text-center mb-12">Kontakt</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="heading-md mb-6">Nehmen Sie Kontakt auf</h2>
          <p className="text-gray-700 mb-6">
            Ich freue mich über Ihre Nachrichten, sei es für Lesungen,
            Interviews, Kooperationen oder einfach nur Feedback zu meinen Büchern.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Für Veranstaltungsanfragen:</h3>
              <p className="text-gray-700 text-sm">
                Bitte nutzen Sie das Kontaktformular und geben Sie Datum,
                Ort und Art der Veranstaltung an.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Für Presseanfragen:</h3>
              <p className="text-gray-700 text-sm">
                Pressefotos und Biografien stehen auf Anfrage zur Verfügung.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Für signierte Exemplare:</h3>
              <p className="text-gray-700 text-sm">
                Gerne signiere ich Ihre Bücher. Bitte kontaktieren Sie mich
                für Details zum Versand.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Literarische Agentur:</h3>
              <p className="text-gray-700 text-sm">
                Agentur Literar<br />
                Max Mustermann<br />
                E-Mail: agentur@beispiel.de
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Kontaktformular">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-wine-red focus:border-transparent"
                disabled={status === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-wine-red focus:border-transparent"
                disabled={status === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Betreff *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-wine-red focus:border-transparent"
                disabled={status === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Nachricht *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-wine-red focus:border-transparent resize-none"
                disabled={status === 'loading'}
              />
            </div>

            <div className="text-xs text-gray-600">
              * Pflichtfelder. Ihre Daten werden gemäß unserer{' '}
              <a href="/datenschutz" className="underline">Datenschutzerklärung</a> verarbeitet.
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-wine-red text-white px-6 py-3 rounded font-medium hover:bg-wine-red-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
            </button>

            {statusMessage && (
              <div
                className={`p-3 rounded text-sm ${
                  status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}
                role="alert"
              >
                {statusMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}