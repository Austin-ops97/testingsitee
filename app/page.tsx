import { Calendar, Shield, FileText, Users, Award, Clock } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main>
      <style jsx>{`
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

        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
        }
        .marquee-content {
          display: inline-block;
          animation: marquee-scroll 40s linear infinite;
          animation-play-state: running;
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .sqyid-fade-up { opacity: 1; animation: none; }
          .marquee-content { animation: none; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-mesh min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Column - Left */}
            <div className="relative sqyid-fade-up">
              <div 
                className="aspect-square bg-sqyid-surface rounded-2xl shadow-elevated relative overflow-hidden"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    90deg,
                    var(--color-border) 0px,
                    var(--color-border) 1px,
                    transparent 1px,
                    transparent 60px
                  ),
                  repeating-linear-gradient(
                    0deg,
                    var(--color-border) 0px,
                    var(--color-border) 1px,
                    transparent 1px,
                    transparent 60px
                  )`
                }}
              >
                <div className="absolute top-8 left-8 bg-sqyid-accent text-sqyid-cta-text px-4 py-2 rounded-full text-sm font-medium transform -rotate-3">
                  Licensed Professional
                </div>
                <div className="absolute bottom-8 right-8 bg-sqyid-surface shadow-card px-4 py-3 rounded-xl transform rotate-2">
                  <div className="text-2xl font-display text-sqyid-primary font-semibold">2026</div>
                  <div className="text-sm text-sqyid-secondary">Est. Founded</div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div 
                    className="text-[120px] font-display text-sqyid-primary opacity-5 leading-none"
                    style={{ fontWeight: 400 }}
                  >
                    SQ
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column - Right */}
            <div className="space-y-6">
              <div className="sqyid-fade-up delay-1">
                <div className="inline-flex items-center gap-2 text-sm text-sqyid-secondary uppercase tracking-wider mb-4">
                  <Award className="w-4 h-4" />
                  Professional Consultancy
                </div>
              </div>
              
              <h1 className="font-display text-5xl lg:text-6xl text-sqyid-primary leading-tight sqyid-fade-up delay-2">
                Professional Excellence, 
                <span className="block">Delivered.</span>
              </h1>
              
              <p className="text-xl text-sqyid-secondary leading-relaxed max-w-lg sqyid-fade-up delay-3">
                Licensed consultancy specializing in website development and renovations. 
                We maintain strict discretion standards while delivering credentialed expertise 
                for established businesses and organizations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sqyid-fade-up delay-4">
                <a 
                  href="#consultation" 
                  className="bg-sqyid-cta hover:shadow-glow text-sqyid-cta-text px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sqyid-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sqyid-bg"
                >
                  Schedule Consultation
                </a>
                <a 
                  href="#services" 
                  className="text-sqyid-accent hover:text-sqyid-primary border border-sqyid-border hover:border-sqyid-accent px-8 py-3 rounded-xl font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sqyid-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sqyid-bg"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Bar */}
      <section className="border-t border-b border-sqyid-border bg-sqyid-surface py-4">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="font-display text-4xl text-sqyid-secondary tracking-wider">
              LICENSED PROFESSIONAL ✦ CONFIDENTIAL ENGAGEMENTS ✦ CREDENTIALED EXPERTISE ✦ STRUCTURED PROJECT OVERSIGHT ✦ LICENSED PROFESSIONAL ✦ CONFIDENTIAL ENGAGEMENTS ✦ CREDENTIALED EXPERTISE ✦ STRUCTURED PROJECT OVERSIGHT ✦ 
            </span>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="py-24 bg-sqyid-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-sqyid-primary mb-4">
              Professional Services
            </h2>
            <p className="text-xl text-sqyid-secondary max-w-2xl mx-auto">
              Structured expertise across website development and renovation projects, 
              delivered with institutional discretion and professional oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Anchor Cell - Website Development */}
            <div 
              className="md:col-span-2 md:row-span-2 bg-sqyid-surface rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-200"
              style={{ gridArea: 'anchor' }}
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <FileText className="w-8 h-8 text-sqyid-accent mb-6" />
                  <h3 className="font-display text-2xl text-sqyid-primary mb-4">
                    Website Development
                  </h3>
                  <p className="text-sqyid-secondary leading-relaxed">
                    Full-scale web development projects from initial consultation through 
                    deployment. Licensed professional oversight ensures structured delivery 
                    and complete confidentiality throughout the engagement.
                  </p>
                </div>
                <div className="pt-6">
                  <a 
                    href="#consultation" 
                    className="text-sqyid-accent hover:text-sqyid-primary font-medium inline-flex items-center gap-2 transition-colors duration-200"
                  >
                    Discuss Project Requirements
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Supporting Cells */}
            <div className="bg-sqyid-surface-alt rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-200">
              <Shield className="w-6 h-6 text-sqyid-accent mb-4" />
              <h4 className="font-display text-lg text-sqyid-primary mb-2">
                Website Renovations
              </h4>
              <p className="text-sm text-sqyid-secondary">
                Professional updates and modernization of existing digital properties.
              </p>
            </div>

            <div 
              className="bg-sqyid-accent-light rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-200"
              style={{ backgroundColor: 'var(--color-accent-light)' }}
            >
              <Users className="w-6 h-6 text-sqyid-accent mb-4" />
              <h4 className="font-display text-lg text-sqyid-primary mb-2">
                Consultation Services
              </h4>
              <p className="text-sm text-sqyid-secondary">
                Strategic guidance and technical assessment for digital initiatives.
              </p>
            </div>

            <div className="md:col-span-2 bg-sqyid-surface rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-200">
              <Clock className="w-6 h-6 text-sqyid-accent mb-4" />
              <h4 className="font-display text-lg text-sqyid-primary mb-2">
                Project Oversight
              </h4>
              <p className="text-sm text-sqyid-secondary">
                Licensed professional management ensures structured delivery timelines and maintains confidential client engagement standards throughout all development phases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 bg-sqyid-surface border-t border-sqyid-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-display text-4xl text-sqyid-primary mb-2">
                2026
              </div>
              <div className="text-sqyid-secondary font-medium">
                Year Founded
              </div>
            </div>
            <div>
              <div className="font-display text-4xl text-sqyid-primary mb-2">
                2
              </div>
              <div className="text-sqyid-secondary font-medium">
                Professional Staff
              </div>
            </div>
            <div>
              <div className="font-display text-4xl text-sqyid-primary mb-2">
                100%
              </div>
              <div className="text-sqyid-secondary font-medium">
                Licensed & Credentialed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Editorial Split */}
      <section className="py-24 bg-sqyid-surface-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
            {/* Narrow Column - Credentials */}
            <div>
              <div className="inline-flex items-center gap-2 text-sm text-sqyid-secondary uppercase tracking-wider mb-6">
                <Award className="w-4 h-4" />
                Professional Standards
              </div>
              <h2 className="font-display text-3xl text-sqyid-primary mb-6">
                Licensed Professional Consultancy
              </h2>
              <p className="text-sqyid-secondary leading-relaxed mb-8">
                SQYID maintains the highest professional standards through licensed 
                consultancy practices and credentialed expertise. Our structured 
                approach ensures complete discretion for client engagements.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sqyid-accent rounded-full"></div>
                  <span className="text-sqyid-secondary">Licensed Professional Practice</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sqyid-accent rounded-full"></div>
                  <span className="text-sqyid-secondary">Confidential Client Standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sqyid-accent rounded-full"></div>
                  <span className="text-sqyid-secondary">Structured Project Oversight</span>
                </div>
              </div>
            </div>

            {/* Wide Column - Pull Quote */}
            <div className="relative">
              <div 
                className="border-l-4 pl-8 py-4"
                style={{ borderColor: 'var(--color-accent)' }}
              >
                <blockquote className="font-display text-3xl lg:text-4xl text-sqyid-primary italic leading-tight">
                  "Professional web development requires more than technical skill—it demands 
                  licensed expertise, structured oversight, and absolute discretion in client relationships."
                </blockquote>
                <cite className="block mt-6 text-sm text-sqyid-secondary uppercase tracking-wider not-italic">
                  SQYID Professional Standards
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Split */}
      <section id="consultation" className="py-24 bg-sqyid-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            {/* Left Column - Copy */}
            <div>
              <h2 className="font-display text-4xl text-sqyid-primary mb-6">
                Schedule Professional Consultation
              </h2>
              <p className="text-xl text-sqyid-secondary leading-relaxed mb-8">
                Qualified consultation calls lead to structured on-site project estimates. 
                Our licensed consultants maintain complete confidentiality throughout the 
                engagement process.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-sqyid-accent" />
                  <span className="text-sqyid-secondary">Licensed professional consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-sqyid-accent" />
                  <span className="text-sqyid-secondary">Complete project confidentiality</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-sqyid-accent" />
                  <span className="text-sqyid-secondary">Structured estimate process</span>
                </div>
              </div>
            </div>

            {/* Right Column - Contact */}
            <div className="bg-sqyid-surface rounded-2xl p-8 shadow-card">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sqyid-primary mb-2">
                    Contact Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full px-4 py-3 bg-sqyid-bg border border-sqyid-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sqyid-accent focus:border-transparent transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sqyid-primary mb-2">
                    Business Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-4 py-3 bg-sqyid-bg border border-sqyid-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sqyid-accent focus:border-transparent transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-sqyid-primary mb-2">
                    Project Overview
                  </label>
                  <textarea 
                    id="project" 
                    name="project" 
                    rows={4}
                    className="w-full px-4 py-3 bg-sqyid-bg border border-sqyid-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sqyid-accent focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Brief description of your website development or renovation needs"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-sqyid-cta hover:shadow-glow text-sqyid-cta-text px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sqyid-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sqyid-surface"
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
                  className="text-sqyid-accent hover:text-sqyid-primary transition-colors duration-200"
                >
                  aus.l.alexander@gmail.com
                </a>
                <br />
                <a 
                  href="tel:4095942170" 
                  className="text-sqyid-accent hover:text-sqyid-primary transition-colors duration-200"
                >
                  (409) 594-2170
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}