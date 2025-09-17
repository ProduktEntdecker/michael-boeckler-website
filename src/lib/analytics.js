/**
 * Analytics helpers for Plausible tracking
 * Cookieless, privacy-first analytics
 */

export function trackBookLinkClick(bookTitle) {
  if (window.plausible) {
    window.plausible('book_link_click', {
      props: {
        book_title: bookTitle,
        external_link: 'hugendubel'
      }
    });
  }
}

export function trackNewsletterSignup(method) {
  if (window.plausible) {
    window.plausible('newsletter_signup', {
      props: {
        method: method || 'website_form'
      }
    });
  }
}

export function trackContactFormSubmit() {
  if (window.plausible) {
    window.plausible('contact_form_submit');
  }
}

export function trackPageView(page) {
  if (window.plausible) {
    window.plausible('pageview', {
      u: window.location.href,
      props: {
        page
      }
    });
  }
}