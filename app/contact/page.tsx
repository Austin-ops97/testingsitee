"use client"

import { useState, useRef, useEffect } from 'react'
import { Phone, Mail, MapPin, Calendar, Shield, Award, Users } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectScope: ''
  })
  const [progressWidth, setProgressWidth] = useState(0)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const filledFields = Object.values(formData).filter(value => value.trim() !== '').length
    const totalFields = Object.keys(formData).length
    const newWidth = (filledFields / totalFields) * 100
    setProgressWidth(newWidth)
  }, [formData])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <style jsx>{`
        @keyframes sqyid-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .sqyid-fade-up { 
          animation: sqyid-fade-up 0.7s ease-out forwards; 
          opacity: 0; 
        }
        .sqyid-fade-up.delay-1 { animation-delay: 0.1s; }
        .sqyid-fade-up.delay-2 { animation-delay: 0.25s; }
        .sqyid-fade-up.delay-3 { animation-delay: 0.4s; }
        .sqyid-fade-up.delay-4 { animation-delay: 0.55s; }

        @keyframes progress-fill {
          from { width: 0%; }
          to { width: var(--target-width); }
        }

        .progress-bar {
          transition: width 0.3s ease-out;
        }

        @media (prefers-reduced-motion: no-preference) {
          .form-field {
            transition: border-color 0.2s ease-out, box-shadow 0.2s ease-out;
          }
          .cta-button {
            transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out, transform 0.15s ease-out;
          }
          .cta-button:hover {
            transform: translateY(-1px);
          }
          .contact-item {
            transition: transform 0.2s ease-out;
          }
          .contact-item:hover {
            transform: translateX(4px);
          }
        }
      `}</style>

      <main>
        {/* Hero Section */}
        <section className="bg-sqyid-bg py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Visual Left */}
              <div className="relative sqyid-fade-up">
                <div className="bg-sqyid-surface rounded-2xl p-8 shadow-[var(--shadow-card)]">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-sqyid-accent" />
                      <span className="font-body text-sqyid-secondary text-sm uppercase tracking-wider">
                        Licensed Professional Consultancy
                      </span>
                    </div>
                    <div className="h-2 bg-sqyid-surface-alt rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-sqyid-accent rounded-full progress-bar"
                        style={{ width: `${progressWidth}%` }}
                      />
                    </div>
                    <div className="text-sqyid-secondary text-sm">
                      Consultation intake in progress...
                    </div>
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-sqyid-surface rounded-full px-4 py-2 shadow-[var(--shadow-elevated)] sqyid-fade-up delay-2">
                  <span className="text-sqyid-primary font-body text-sm font-semibold">Austin & Jordan</span>
                </div>
                <div className="absolute -bottom-4 left-8 bg-sqyid-accent text-sqyid-cta-text rounded-full px-4 py-2 shadow-[var(--shadow-glow)] sqyid-fade-up delay-3">
                  <span className="font-body text-sm font-medium">Est. 2026</span>
                </div>
              </div>

              {/* Content Right */}
              <div className="sqyid-fade-up delay-1">
                <div className="inline-block bg-sqyid-accent-light rounded-full px-4 py-2 mb-6">
                  <span className="font-body text-sqyid-accent text-sm font-medium uppercase tracking-wider">
                    Professional Consultation
                  </span>
                </div>
                <h1 className="font-display text-5xl lg:text-6xl text-sqyid-primary mb-6 leading-tight">
                  Schedule Your <br />
                  Project Assessment
                </h1>
                <p className="font-body text-xl text-sqyid-secondary mb-8 leading-relaxed">
                  Licensed consultants providing discrete evaluation of your digital infrastructure requirements with structured project oversight.
                </p>
                <div className="flex items-center gap-6 text-sqyid-secondary font-body">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-sqyid-accent" />
                    <span>24-hour response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-sqyid-accent" />
                    <span>Confidential handling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="bg-sqyid-surface py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-start">
              {/* Form Column */}
              <div className="sqyid-fade-up">
                <div className="mb-8">
                  <h2 className="font-display text-4xl text-sqyid-primary mb-4">
                    Consultation Request
                  </h2>
                  <p className="font-body text-sqyid-secondary text-lg">
                    Complete the intake form below. All information is handled with strict confidentiality protocols.
                  </p>
                </div>

                <form className="space-y-6">
                  {/* Progress Indicator */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-sm text-sqyid-secondary">Intake Progress</span>
                      <span className="font-body text-sm text-sqyid-accent font-medium">{Math.round(progressWidth)}%</span>
                    </div>
                    <div className="h-1 bg-sqyid-border rounded-full overflow-hidden">
                      <div 
                        ref={progressRef}
                        className="h-full bg-sqyid-accent rounded-full progress-bar"
                        style={{ width: `${progressWidth}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-sqyid-primary font-medium mb-2">
                        Principal Contact
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="form-field w-full px-4 py-3 bg-sqyid-surface border border-sqyid-border rounded-lg font-body text-sqyid-primary placeholder-sqyid-secondary focus-visible:outline-none focus-visible:border-sqyid-accent focus-visible:ring-2 focus-visible:ring-sqyid-accent focus-visible:ring-opacity-20"
                        placeholder="Full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-body text-sqyid-primary font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="form-field w-full px-4 py-3 bg-sqyid-surface border border-sqyid-border rounded-lg font-body text-sqyid-primary placeholder-sqyid-secondary focus-visible:outline-none focus-visible:border-sqyid-accent focus-visible:ring-2 focus-visible:ring-sqyid-accent focus-visible:ring-opacity-20"
                        placeholder="professional@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sqyid-primary font-medium mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="form-field w-full px-4 py-3 bg-sqyid-surface border border-sqyid-border rounded-lg font-body text-sqyid-primary placeholder-sqyid-secondary focus-visible:outline-none focus-visible:border-sqyid-accent focus-visible:ring-2 focus-visible:ring-sqyid-accent focus-visible:ring-opacity-20"
                      placeholder="Company or organization name"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-sqyid-primary font-medium mb-2">
                      Project Scope
                    </label>
                    <textarea
                      value={formData.projectScope}
                      onChange={(e) => handleInputChange('projectScope', e.target.value)}
                      rows={4}
                      className="form-field w-full px-4 py-3 bg-sqyid-surface border border-sqyid-border rounded-lg font-body text-sqyid-primary placeholder-sqyid-secondary focus-visible:outline-none focus-visible:border-sqyid-accent focus-visible:ring-2 focus-visible:ring-sqyid-accent focus-visible:ring-opacity-20 resize-none"
                      placeholder="Brief description of your website development or renovation requirements"
                    />
                  </div>

                  <button
                    type="submit"
                    className="cta-button w-full px-8 py-4 bg-sqyid-cta text-sqyid-cta-text font-body font-medium rounded-lg shadow-[var(--shadow-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sqyid-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sqyid-surface"
                  >
                    Submit Consultation Request
                  </button>

                  <p className="font-body text-sm text-sqyid-secondary text-center">
                    Submissions reviewed within 24 hours during business days
                  </p>
                </form>
              </div>

              {/* Contact Info Panel */}
              <div className="sqyid-fade-up delay-2">
                <div className="bg-sqyid-surface-alt rounded-2xl p-8 shadow-[var(--shadow-card)]">
                  <h3 className="font-display text-2xl text-sqyid-primary mb-6">
                    Direct Contact
                  </h3>

                  <div className="space-y-6">
                    <div className="contact-item flex items-start gap-4">
                      <Mail className="w-5 h-5 text-sqyid-accent mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-body text-sqyid-primary font-medium">Email</div>
                        <a 
                          href="mailto:aus.l.alexander@gmail.com"
                          className="font-body text-sqyid-secondary hover:text-sqyid-accent transition-colors"
                        >
                          aus.l.alexander@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="contact-item flex items-start gap-4">
                      <Phone className="w-5 h-5 text-sqyid-accent mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-body text-sqyid-primary font-medium">Phone</div>
                        <a 
                          href="tel:4095942170"
                          className="font-body text-sqyid-secondary hover:text-sqyid-accent transition-colors"
                        >
                          (409) 594-2170
                        </a>
                      </div>
                    </div>

                    <div className="contact-item flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-sqyid-accent mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-body text-sqyid-primary font-medium">Address</div>
                        <div className="font-body text-sqyid-secondary">
                          123 find me
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-sqyid-border">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-5 h-5 text-sqyid-accent" />
                      <span className="font-body text-sqyid-primary font-medium">Professional Standards</span>
                    </div>
                    <p className="font-body text-sm text-sqyid-secondary leading-relaxed">
                      All consultations conducted under professional licensing requirements with complete client discretion protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="bg-sqyid-bg py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 sqyid-fade-up">
              <h2 className="font-display text-4xl text-sqyid-primary mb-4">
                Licensed Professional Practice
              </h2>
              <p className="font-body text-xl text-sqyid-secondary max-w-2xl mx-auto">
                Credentialed consultancy maintaining strict professional standards for all client engagements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 sqyid-fade-up delay-1" style={{ gridTemplateAreas: '"license license services team"' }}>
              {/* Main credentials cell */}
              <div 
                className="bg-sqyid-surface rounded-2xl p-8 shadow-[var(--shadow-card)] md:col-span-2"
                style={{ gridArea: 'license' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sqyid-accent-light rounded-xl">
                    <Award className="w-8 h-8 text-sqyid-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-sqyid-primary mb-2">
                      Professional Licensing
                    </h3>
                    <p className="font-body text-sqyid-secondary mb-4">
                      Licensed professional consultancy operating under established industry regulations and ethical guidelines.
                    </p>
                    <div className="font-body text-sm text-sqyid-accent font-medium">
                      Active Professional Status
                    </div>
                  </div>
                </div>
              </div>

              {/* Services cell */}
              <div className="bg-sqyid-surface-alt rounded-2xl p-6 shadow-[var(--shadow-card)]">
                <h4 className="font-display text-lg text-sqyid-primary mb-3">Services</h4>
                <ul className="space-y-2 font-body text-sqyid-secondary text-sm">
                  <li>Website Development</li>
                  <li>Website Renovations</li>
                </ul>
              </div>

              {/* Team cell */}
              <div className="bg-sqyid-surface rounded-2xl p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-3 mb-3">
                  <Users className="w-5 h-5 text-sqyid-accent mt-0.5" />
                  <h4 className="font-display text-lg text-sqyid-primary">Principals</h4>
                </div>
                <div className="space-y-1 font-body text-sqyid-secondary text-sm">
                  <div>Austin</div>
                  <div>Jordan</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-sqyid-surface border-t border-sqyid-border py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="font-display text-2xl text-sqyid-primary mb-4">SQYID</h3>
                <p className="font-body text-sqyid-secondary mb-6">
                  Licensed professional consultancy focused on website development and renovations.
                </p>
                <div className="space-y-2 font-body text-sm text-sqyid-secondary">
                  <div>Professional. Discrete. Credentialed.</div>
                </div>
              </div>

              <div>
                <h4 className="font-body font-semibold text-sqyid-primary mb-4 uppercase tracking-wider text-sm">
                  Services
                </h4>
                <ul className="space-y-2 font-body text-sqyid-secondary">
                  <li>Website Development</li>
                  <li>Website Renovations</li>
                  <li>Professional Consultation</li>
                </ul>
              </div>

              <div>
                <h4 className="font-body font-semibold text-sqyid-primary mb-4 uppercase tracking-wider text-sm">
                  Contact
                </h4>
                <div className="space-y-2 font-body text-sqyid-secondary">
                  <div>aus.l.alexander@gmail.com</div>
                  <div>(409) 594-2170</div>
                  <div>123 find me</div>
                </div>
              </div>
            </div>

            <div className="border-t border-sqyid-border mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="font-body text-sqyid-secondary text-sm">
                  © 2026 SQYID. Licensed Professional Consultancy.
                </div>
                <div className="font-body text-sqyid-secondary text-sm">
                  Professional standards maintained under industry regulations.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}