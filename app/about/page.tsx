import { Mail, Phone, Award, Shield, Target, Users, Clock, Zap } from 'lucide-react'

export default function AboutPage() {
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

        @keyframes timeline-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .timeline-dot {
          animation: timeline-pulse 2s ease-in-out infinite;
        }
        .timeline-dot.active {
          background: var(--color-accent);
          box-shadow: 0 0 16px var(--color-accent-glow);
        }

        @media (prefers-reduced-motion: reduce) {
          .sqyid-fade-up { 
            animation: none; 
            opacity: 1; 
            transform: none; 
          }
          .timeline-dot {
            animation: none;
          }
        }
      `}</style>

      <main className="min-h-screen bg-sqyid-bg">
        {/* Hero Section - Split Right */}
        <section className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-center">
            {/* Left: Credentials Visual */}
            <div className="relative sqyid-fade-up">
              <div 
                className="aspect-[4/3] rounded-2xl p-12 relative overflow-hidden"
                style={{ background: 'var(--color-surface)', boxShadow: 'var(--shadow-card)' }}
              >
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-primary)" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="400" height="300" fill="url(#grid)" />
                  </svg>
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <Award className="w-16 h-16 mx-auto mb-4" style={{ stroke: 'var(--color-accent)' }} strokeWidth={1.5} />
                    <h3 className="font-display text-2xl text-sqyid-primary mb-2">Licensed Professional</h3>
                    <p className="text-sqyid-secondary">Consultancy Services</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 rounded-lg" style={{ background: 'var(--color-surface-alt)' }}>
                      <Shield className="w-8 h-8 mx-auto mb-2" style={{ stroke: 'var(--color-accent)' }} strokeWidth={1.5} />
                      <p className="text-sm text-sqyid-secondary">Credentialed Expertise</p>
                    </div>
                    <div className="p-4 rounded-lg" style={{ background: 'var(--color-surface-alt)' }}>
                      <Target className="w-8 h-8 mx-auto mb-2" style={{ stroke: 'var(--color-accent)' }} strokeWidth={1.5} />
                      <p className="text-sm text-sqyid-secondary">Structured Oversight</p>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-xs font-medium" 
                     style={{ background: 'var(--color-accent)', color: 'var(--color-cta-text)', boxShadow: 'var(--shadow-elevated)' }}>
                  Since 2026
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full text-xs font-medium" 
                     style={{ background: 'var(--color-surface)', color: 'var(--color-primary)', boxShadow: 'var(--shadow-elevated)' }}>
                  Discrete • Professional
                </div>
              </div>
            </div>

            {/* Right: Mission Content */}
            <div className="sqyid-fade-up delay-2">
              <div className="mb-6">
                <span className="text-sm uppercase tracking-[0.25em] text-sqyid-secondary font-body">Our Purpose</span>
              </div>
              
              <h1 className="font-display text-5xl lg:text-6xl text-sqyid-primary mb-8 leading-[1.1]">
                Professional Excellence,<br />
                <em style={{ color: 'var(--color-accent)' }}>Delivered.</em>
              </h1>
              
              <div className="space-y-6 text-lg text-sqyid-secondary leading-relaxed mb-10">
                <p>
                  SQYID serves established businesses and organizations seeking licensed professional 
                  web development consultants who deliver credentialed expertise with complete discretion.
                </p>
                <p>
                  Our practice maintains strict confidentiality standards while providing structured 
                  project oversight that ensures institutional-grade results for every client engagement.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="px-8 py-4 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ 
                    background: 'var(--color-cta)', 
                    color: 'var(--color-cta-text)',
                    boxShadow: 'var(--shadow-glow)',
                    focusVisibleRingColor: 'var(--color-accent)',
                    focusVisibleRingOffsetColor: 'var(--color-bg)'
                  }}
                >
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 text-sqyid-primary hover:text-sqyid-accent transition-colors duration-200 font-medium">
                  View Our Services →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Editorial Split */}
        <section className="py-32 px-6 max-w-7xl mx-auto" style={{ background: 'var(--color-surface)' }}>
          <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-start">
            {/* Wide Column: Leadership Philosophy */}
            <div className="sqyid-fade-up">
              <div className="mb-8">
                <span className="text-sm uppercase tracking-[0.25em] text-sqyid-secondary font-body">Leadership</span>
              </div>
              
              <blockquote className="font-display italic text-4xl lg:text-5xl text-sqyid-primary leading-[1.2] mb-8">
                "Professional relationships are built on trust, maintained through competence, and measured by outcomes."
              </blockquote>
              
              <p className="text-xl text-sqyid-secondary leading-relaxed">
                Our leadership team brings combined expertise in enterprise-level web development, 
                with a shared commitment to client confidentiality and measurable project success.
              </p>
            </div>

            {/* Narrow Column: Team Members */}
            <div className="sqyid-fade-up delay-1">
              <div className="space-y-8">
                <div className="pb-6 border-b border-sqyid-border">
                  <h3 className="font-display text-2xl text-sqyid-primary mb-2">Austin</h3>
                  <p className="text-sqyid-secondary mb-3">Principal Consultant</p>
                  <p className="text-sm text-sqyid-secondary leading-relaxed">
                    Licensed professional overseeing client strategy and technical architecture decisions.
                  </p>
                </div>
                
                <div className="pb-6 border-b border-sqyid-border">
                  <h3 className="font-display text-2xl text-sqyid-primary mb-2">Jordan</h3>
                  <p className="text-sqyid-secondary mb-3">Senior Developer</p>
                  <p className="text-sm text-sqyid-secondary leading-relaxed">
                    Specialist in implementation oversight and quality assurance protocols.
                  </p>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-sqyid-secondary">
                    All client engagements are handled with institutional discretion and professional oversight.
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical divider - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-64 bg-sqyid-border"></div>
          </div>
        </section>

        {/* Values Grid - Ghost Cards */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-[0.25em] text-sqyid-secondary font-body">Core Principles</span>
            <h2 className="font-display text-4xl lg:text-5xl text-sqyid-primary mt-4 mb-6">
              How We Operate
            </h2>
            <p className="text-xl text-sqyid-secondary max-w-2xl mx-auto">
              Our approach combines institutional standards with personalized service delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: Shield,
                title: "Confidential Practice",
                description: "Complete discretion in all client communications and project documentation."
              },
              {
                icon: Award,
                title: "Licensed Expertise",
                description: "Credentialed professionals with verified competency in web development standards."
              },
              {
                icon: Clock,
                title: "Structured Process",
                description: "Systematic project oversight with clearly defined milestones and deliverables."
              },
              {
                icon: Target,
                title: "Measurable Results",
                description: "Outcome-focused delivery with quantifiable improvements to client digital presence."
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className={`text-center group cursor-default sqyid-fade-up delay-${index + 1} hover:transform hover:scale-[1.02] transition-transform duration-200`}
                style={{ padding: 'var(--space-lg)' }}
              >
                <div className="mb-6">
                  <value.icon 
                    className="w-12 h-12 mx-auto group-hover:scale-105 transition-transform duration-200" 
                    style={{ stroke: 'var(--color-accent)' }} 
                    strokeWidth={1.5} 
                  />
                </div>
                <h3 className="font-display text-2xl text-sqyid-primary mb-4 group-hover:text-sqyid-accent transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-sqyid-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-32 px-6 max-w-4xl mx-auto" style={{ background: 'var(--color-surface)' }}>
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-[0.25em] text-sqyid-secondary font-body">Our Journey</span>
            <h2 className="font-display text-4xl lg:text-5xl text-sqyid-primary mt-4 mb-6">
              Building Excellence
            </h2>
          </div>

          <div className="relative">
            {/* Vertical connecting line */}
            <div 
              className="absolute left-8 top-0 w-px h-full opacity-30" 
              style={{ background: 'var(--color-accent)' }}
            ></div>

            <div className="space-y-16">
              {[
                {
                  year: "2026",
                  title: "Practice Established",
                  description: "SQYID founded as a licensed professional consultancy focused on institutional-grade web development services."
                },
                {
                  year: "Early",
                  title: "Methodology Refined",
                  description: "Developed structured consultation process and confidentiality protocols for high-stakes client engagements."
                },
                {
                  year: "Current",
                  title: "Specialized Focus",
                  description: "Established reputation for discrete, professional web development consulting with measurable client outcomes."
                }
              ].map((milestone, index) => (
                <div key={index} className={`relative flex items-start gap-8 sqyid-fade-up delay-${index + 1}`}>
                  {/* Timeline dot */}
                  <div 
                    className="timeline-dot w-4 h-4 rounded-full border-2 flex-shrink-0 z-10"
                    style={{ 
                      borderColor: 'var(--color-accent)',
                      background: 'var(--color-surface)'
                    }}
                  ></div>

                  {/* Content */}
                  <div className="pb-8">
                    <div className="mb-2">
                      <span 
                        className="text-sm font-medium px-3 py-1 rounded-full"
                        style={{ 
                          background: 'var(--color-accent-light)', 
                          color: 'var(--color-accent)' 
                        }}
                      >
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl text-sqyid-primary mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-sqyid-secondary leading-relaxed max-w-2xl">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Split */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: Copy */}
            <div className="sqyid-fade-up">
              <h2 className="font-display text-4xl lg:text-5xl text-sqyid-primary mb-6">
                Schedule Your Professional Consultation
              </h2>
              <p className="text-xl text-sqyid-secondary leading-relaxed mb-8">
                Discuss your project requirements with licensed consultants who understand 
                the importance of discretion and structured delivery.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5" style={{ stroke: 'var(--color-accent)' }} strokeWidth={1.5} />
                  <span className="text-sqyid-secondary">(409) 594-2170</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5" style={{ stroke: 'var(--color-accent)' }} strokeWidth={1.5} />
                  <span className="text-sqyid-secondary">aus.l.alexander@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="sqyid-fade-up delay-1">
              <div 
                className="p-8 rounded-2xl"
                style={{ background: 'var(--color-surface)', boxShadow: 'var(--shadow-card)' }}
              >
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-sqyid-primary mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-sqyid-border bg-sqyid-bg text-sqyid-primary focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200"
                        style={{ 
                          focusRingColor: 'var(--color-accent)',
                          focusRingOffsetColor: 'var(--color-surface)'
                        }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-sqyid-primary mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-sqyid-border bg-sqyid-bg text-sqyid-primary focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200"
                        style={{ 
                          focusRingColor: 'var(--color-accent)',
                          focusRingOffsetColor: 'var(--color-surface)'
                        }}
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-sqyid-primary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-sqyid-border bg-sqyid-bg text-sqyid-primary focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200"
                      style={{ 
                        focusRingColor: 'var(--color-accent)',
                        focusRingOffsetColor: 'var(--color-surface)'
                      }}
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-sqyid-primary mb-2">
                      Project Scope
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-sqyid-border bg-sqyid-bg text-sqyid-primary focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200"
                      style={{ 
                        focusRingColor: 'var(--color-accent)',
                        focusRingOffsetColor: 'var(--color-surface)'
                      }}
                    >
                      <option>Select service type</option>
                      <option>Website Development</option>
                      <option>Website Renovations</option>
                      <option>Consultation Only</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    style={{ 
                      background: 'var(--color-cta)', 
                      color: 'var(--color-cta-text)',
                      boxShadow: 'var(--shadow-glow)',
                      focusVisibleRingColor: 'var(--color-accent)',
                      focusVisibleRingOffsetColor: 'var(--color-surface)'
                    }}
                  >
                    Request Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}