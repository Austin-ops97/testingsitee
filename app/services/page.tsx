import Image from 'next/image'
import { CheckCircle, Globe, Palette, Shield, ArrowRight, FileText } from 'lucide-react'
import { ProcessTimeline } from '@/components/sqyid-system'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-sqyid-bg">
      <style>{`
        @keyframes sqyid-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sqyid-fade-up { 
          animation: sqyid-fade-up 0.7s ease-out forwards; 
          opacity: 0; 
        }
        .sqyid-fade-up.delay-1 { animation-delay: 0.1s; }
        .sqyid-fade-up.delay-2 { animation-delay: 0.25s; }
        .sqyid-fade-up.delay-3 { animation-delay: 0.4s; }
        .sqyid-fade-up.delay-4 { animation-delay: 0.55s; }
        
        .project-overlay {
          opacity: 0;
          transition: opacity 0.2s ease;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
        }
        
        .project-card:hover .project-overlay {
          opacity: 0.95;
        }
        
        @media (prefers-reduced-motion: no-preference) {
          .service-icon {
            transition: transform 0.2s ease;
          }
          
          .service-card:hover .service-icon {
            transform: scale(1.05);
          }
          
          .service-card:hover .service-title {
            color: var(--color-accent);
            transition: color 0.2s ease;
          }
        }
      `}</style>

      {/* Hero Section - Split Right */}
      <section className="relative overflow-hidden bg-gradient-mesh py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Project Showcase */}
            <div className="relative sqyid-fade-up">
              <div className="grid grid-cols-2 gap-4">
                <div className="project-card relative overflow-hidden rounded-xl bg-sqyid-surface shadow-[var(--shadow-card)] aspect-[4/3] group">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200"></div>
                  <div className="project-overlay absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <Globe className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-display text-sm">Corporate Identity</p>
                    </div>
                  </div>
                </div>
                <div className="project-card relative overflow-hidden rounded-xl bg-sqyid-surface shadow-[var(--shadow-card)] aspect-[4/3] group mt-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100"></div>
                  <div className="project-overlay absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <Palette className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-display text-sm">Platform Renovation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-sqyid-surface rounded-full px-4 py-2 shadow-[var(--shadow-elevated)] border border-sqyid-border sqyid-fade-up delay-2">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-sqyid-accent" />
                  <span className="text-sm font-medium text-sqyid-primary">Licensed Professional</span>
                </div>
              </div>
            </div>

            {/* Right Column - Copy */}
            <div className="space-y-8">
              <div className="sqyid-fade-up delay-1">
                <div className="inline-flex items-center space-x-2 bg-sqyid-accent-light rounded-full px-4 py-2 mb-6">
                  <div className="w-2 h-2 bg-sqyid-accent rounded-full"></div>
                  <span className="text-sm font-medium text-sqyid-accent uppercase tracking-wide">Professional Consultancy</span>
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl text-sqyid-primary mb-6 leading-tight">
                  Licensed Web Development<br />
                  <span className="text-sqyid-accent">& Renovation Services</span>
                </h1>
                
                <p className="text-xl text-sqyid-secondary leading-relaxed mb-8">
                  Credentialed expertise in website development and strategic renovations for established businesses requiring professional oversight and complete project discretion.
                </p>
              </div>
              
              <div className="sqyid-fade-up delay-3">
                <button className="inline-flex items-center bg-sqyid-cta text-sqyid-cta-text px-8 py-4 rounded-xl font-medium shadow-[var(--shadow-glow)] hover:transform hover:scale-[1.02] transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sqyid-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sqyid-bg">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail - Ghost Cards */}
      <section className="py-24 bg-sqyid-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-sqyid-primary mb-6">
              Core Service Offerings
            </h2>
            <p className="text-lg text-sqyid-secondary leading-relaxed">
              Two focused practice areas delivering measurable outcomes through structured project oversight and professional accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Website Development */}
            <div className="service-card group">
              <div className="mb-8">
                <div className="service-icon w-16 h-16 bg-sqyid-accent-light rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-sqyid-accent" />
                </div>
                
                <h3 className="service-title font-display text-2xl text-sqyid-primary mb-4">
                  Website Development
                </h3>
                
                <p className="text-sqyid-secondary leading-relaxed mb-6">
                  Custom website architecture and implementation for organizations requiring professional-grade digital presence with ongoing technical support and maintenance planning.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-sqyid-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sqyid-secondary">Technical architecture and database design</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-sqyid-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sqyid-secondary">Performance optimization and security implementation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-sqyid-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sqyid-secondary">Content management and workflow integration</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-sqyid-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sqyid-secondary">Documentation and staff training protocols</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Website Renovations */}
            <div className="service-card group">
              <div className="mb-8">
                <div className="service-icon w-16 h-16 bg-sqyid-accent-light rounded-2xl flex items-center justify-center mb-6">
                  <Palette className="h-8 w-8 text-sqyid-accent" />
                </div>
                
                <h3 className="service-title font-display text-2xl text-sqyid-primary mb-4">
                  Website Renovations
                </h3>
                
                <p className="text-sqyid-secondary leading-relaxed mb-6">
                  Systematic updates and modernization of existing digital properties, including platform migrations, performance audits, and strategic redesign with minimal operational disruption.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-sqyid-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sqyid-secondary">Platform assessment and migration planning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-sqyid-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sqyid-secondary">Content preservation and structural optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-sqyid-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sqyid-secondary">Search ranking protection and enhancement</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-sqyid-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sqyid-secondary">Staff transition and operational continuity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-sqyid-bg">
        <div className="container mx-auto px-6">
          <ProcessTimeline 
            title="Professional Project Oversight"
            subtitle="Four-phase approach ensuring technical excellence and complete client confidentiality throughout engagement."
            steps={[
              {
                number: "1",
                title: "Initial Consultation",
                description: "Comprehensive project assessment including technical requirements, timeline establishment, and confidentiality protocols. All discussions remain strictly privileged."
              },
              {
                number: "2",
                title: "Detailed Proposal",
                description: "Written scope documentation with fixed-fee pricing, deliverable specifications, and project milestone schedule. No hidden costs or scope creep."
              },
              {
                number: "3",
                title: "Licensed Development",
                description: "Professional implementation with regular progress reporting, quality assurance testing, and client review checkpoints at predetermined intervals."
              },
              {
                number: "4",
                title: "Delivery & Support",
                description: "Complete project handoff including documentation, staff training, and ongoing technical support arrangements as specified in engagement terms."
              }
            ]}
          />
        </div>
      </section>

      {/* Editorial Split - Positioning Statement */}
      <section className="py-24 bg-sqyid-surface">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-start">
            {/* Wide Column - Pull Quote */}
            <div className="relative">
              <div className="border-l-4 border-sqyid-accent pl-8">
                <blockquote className="font-display text-3xl md:text-4xl italic text-sqyid-primary leading-tight mb-6">
                  "Professional web development requires licensed expertise, structured oversight, and complete discretion — standards that distinguish consultancy practice from commodity services."
                </blockquote>
                <div className="text-sm uppercase tracking-wider text-sqyid-secondary font-medium">
                  — SQYID Practice Philosophy
                </div>
              </div>
            </div>

            {/* Narrow Column - Credentials & Support */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl text-sqyid-primary mb-4">
                  Licensed Professional Practice
                </h3>
                <p className="text-sqyid-secondary leading-relaxed mb-6">
                  SQYID maintains active professional licensing and carries comprehensive liability coverage for all client engagements. Our practice adheres to strict confidentiality standards equivalent to attorney-client privilege.
                </p>
              </div>

              <div className="bg-sqyid-accent-light rounded-xl p-6">
                <h4 className="font-display text-lg text-sqyid-primary mb-3">
                  Engagement Standards
                </h4>
                <div className="space-y-2 text-sm text-sqyid-secondary">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-sqyid-accent" />
                    <span>Licensed professional oversight</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-sqyid-accent" />
                    <span>Written scope and timeline agreements</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-sqyid-accent" />
                    <span>Complete project confidentiality</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-sqyid-accent" />
                    <span>Comprehensive liability coverage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Split */}
      <section className="py-24 bg-sqyid-bg relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center relative">
            {/* Diagonal Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-sqyid-border transform -translate-x-0.5"></div>
            
            {/* Left Column - Copy */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl text-sqyid-primary mb-6">
                Schedule Professional Consultation
              </h2>
              
              <p className="text-lg text-sqyid-secondary leading-relaxed mb-8">
                Initial consultations are conducted under full confidentiality to assess project requirements and determine engagement feasibility. No obligation beyond professional courtesy.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sqyid-accent-light rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-sqyid-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sqyid-primary">Confidential Assessment</h4>
                    <p className="text-sm text-sqyid-secondary">All discussions remain privileged</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sqyid-accent-light rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-sqyid-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sqyid-primary">Written Proposals</h4>
                    <p className="text-sm text-sqyid-secondary">Fixed-fee pricing with detailed scope</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-sqyid-surface rounded-2xl p-8 shadow-[var(--shadow-card)]">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-sqyid-primary mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-sqyid-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sqyid-accent focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-sqyid-primary mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-sqyid-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sqyid-accent focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sqyid-primary mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-sqyid-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sqyid-accent focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-sqyid-primary mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 border border-sqyid-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sqyid-accent focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-sqyid-primary mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 border border-sqyid-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sqyid-accent focus:border-transparent"
                    required
                  >
                    <option value="">Select service type</option>
                    <option value="development">Website Development</option>
                    <option value="renovation">Website Renovation</option>
                    <option value="consultation">Initial Consultation Only</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sqyid-cta text-sqyid-cta-text py-4 px-6 rounded-xl font-medium shadow-[var(--shadow-glow)] hover:transform hover:scale-[1.02] transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sqyid-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sqyid-surface"
                >
                  Request Consultation
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-sqyid-border text-center">
                <p className="text-sm text-sqyid-secondary mb-2">
                  Direct Contact
                </p>
                <a 
                  href="mailto:aus.l.alexander@gmail.com"
                  className="text-sm text-sqyid-accent hover:underline"
                >
                  aus.l.alexander@gmail.com
                </a>
                <div className="text-sm text-sqyid-secondary mt-1">
                  <a 
                    href="tel:4095942170"
                    className="text-sqyid-accent hover:underline"
                  >
                    (409) 594-2170
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}