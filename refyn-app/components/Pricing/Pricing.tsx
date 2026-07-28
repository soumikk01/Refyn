import React from 'react';
import styles from './Pricing.module.scss';

const PLANS = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for individual developers exploring AI code review.',
    highlight: false,
    cta: 'Get started free',
    ctaHref: '#get-started',
    features: [
      '50 reviews per month',
      'Up to 200 lines per review',
      '10 languages supported',
      'Bug detection & explanation',
      'Basic fix suggestions',
      'Web UI only',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'For professional developers who need unlimited, deep analysis.',
    highlight: true,
    badge: 'Most popular',
    cta: 'Start 14-day free trial',
    ctaHref: '#get-started',
    features: [
      'Unlimited reviews',
      'Up to 5,000 lines per review',
      '30+ languages supported',
      'Full bug detection suite',
      'Security vulnerability scanning',
      'GitHub / GitLab PR integration',
      'VS Code extension',
      'Priority email support',
    ],
  },
  {
    name: 'Team',
    price: '$49',
    period: '/month',
    description: 'Shared workspace for engineering teams, with admin controls.',
    highlight: false,
    cta: 'Start team trial',
    ctaHref: '#get-started',
    features: [
      'Everything in Pro',
      'Up to 10 seats included',
      'Shared review history',
      'Team analytics dashboard',
      'Custom rule configuration',
      'SAML SSO',
      'CI/CD pipeline webhook',
      'Dedicated Slack support',
    ],
  },
];

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.label}>PRICING</div>
          <h2 className={styles.heading} id="pricing-heading">
            Transparent pricing,<br />
            <span className={styles.accent}>no surprises</span>
          </h2>
          <p className={styles.subheading}>
            Start free. Upgrade when you need more. Cancel any time.
          </p>
        </div>

        <div className={styles.plans}>
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={`${styles.plan} ${plan.highlight ? styles.highlighted : ''}`}
            >
              {plan.badge && (
                <div className={styles.badge}>{plan.badge}</div>
              )}

              <div className={styles.planHeader}>
                <div className={styles.planName}>{plan.name}</div>
                <div className={styles.planPrice}>
                  <span className={styles.price}>{plan.price}</span>
                  {plan.period && (
                    <span className={styles.period}>{plan.period}</span>
                  )}
                </div>
                <p className={styles.planDesc}>{plan.description}</p>
              </div>

              <a
                href={plan.ctaHref}
                className={`${styles.planCta} ${plan.highlight ? styles.ctaPrimary : styles.ctaOutline}`}
              >
                {plan.cta}
              </a>

              <ul className={styles.featureList} aria-label={`${plan.name} plan features`}>
                {plan.features.map((f, j) => (
                  <li key={j} className={styles.feature}>
                    <span className={styles.check} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={styles.enterpriseNote}>
          Need custom limits, on-prem deployment, or a dedicated SLA?{' '}
          <a href="#company" className={styles.link}>Talk to our enterprise team →</a>
        </p>
      </div>
    </section>
  );
}
