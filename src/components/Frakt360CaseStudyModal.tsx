import React, { useState, useEffect } from 'react';
import {
  X,
  Package,
  Truck,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  ShoppingBag,
  Printer,
  Compass,
  RotateCcw,
  Warehouse,
  Receipt,
  Users,
  Smartphone,
  ChevronRight,
  ShieldCheck,
  Zap,
  Sparkles,
  BarChart3,
  QrCode,
  Sliders,
  Check,
} from 'lucide-react';

interface Frakt360CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGetStarted: () => void;
}

export const Frakt360CaseStudyModal: React.FC<Frakt360CaseStudyModalProps> = ({
  isOpen,
  onClose,
  onGetStarted,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'workflow' | 'integrations' | 'built' | 'tech'>('overview');
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  // Automated workflow pulse every 2.5s if in workflow tab
  useEffect(() => {
    if (activeTab !== 'workflow') return;
    const interval = setInterval(() => {
      setActiveWorkflowStep((prev) => (prev + 1) % 8);
    }, 2500);
    return () => clearInterval(interval);
  }, [activeTab]);

  if (!isOpen) return null;

  const workflowSteps = [
    { title: 'Order', desc: 'Ordre opprettes i nettbutikk (Shopify, WooCommerce, Mystore)', icon: ShoppingBag },
    { title: 'Freight option', desc: 'Beregner automatisk beste fraktvalg og priser', icon: Compass },
    { title: 'Booking', desc: 'Direkte booking via PostNord og Bring API', icon: Truck },
    { title: 'Label', desc: 'Automatisk generering av fraktetiketter for Zebra-skrivere', icon: Printer },
    { title: 'Shipment', desc: 'Pakken klargjøres på lager (Ongoing WMS integrasjon)', icon: Package },
    { title: 'Tracking', desc: 'Sanntids sporing og push-oppdateringer til kunde', icon: BarChart3 },
    { title: 'Delivery', desc: 'Sikker overlevering til mottaker eller pakkeautomat', icon: CheckCircle2 },
    { title: 'Invoice', desc: 'Automatisk fraktavstemming og fakturagrunnlag', icon: Receipt },
  ];

  const whatWeBuiltList = [
    {
      title: 'Shipping platform',
      desc: 'Create, book and manage shipments from one unified interface with real-time rate comparison.',
      icon: Package,
      badge: 'Core Engine',
    },
    {
      title: 'E-commerce integrations',
      desc: 'Connect Shopify, WooCommerce and Mystore with the logistics workflow for zero manual entry.',
      icon: ShoppingBag,
      badge: 'E-Commerce',
    },
    {
      title: 'Carrier APIs',
      desc: 'Direct integration with carrier infrastructure including PostNord and Bring.',
      icon: Truck,
      badge: 'Logistics API',
    },
    {
      title: 'Shipping labels',
      desc: 'Automatic label generation with direct native support for industrial Zebra thermal printers.',
      icon: Printer,
      badge: 'Hardware Sync',
    },
    {
      title: 'Real-time tracking',
      desc: 'Follow shipments through every stage: Created → In transit → Terminal → Out for delivery → Delivered.',
      icon: Compass,
      badge: 'Live Telemetry',
    },
    {
      title: 'Returns workflow',
      desc: 'Digital return workflows with support for instant QR-based customer return labels.',
      icon: RotateCcw,
      badge: 'Reverse Logistics',
    },
    {
      title: 'Warehouse connectivity',
      desc: 'Full synchronization with warehouse management infrastructure such as Ongoing WMS.',
      icon: Warehouse,
      badge: 'WMS Bridge',
    },
    {
      title: 'Customer & admin portals',
      desc: 'Tiered access for business clients, warehouse operators, and global platform administrators.',
      icon: Users,
      badge: 'Multi-Tenant',
    },
    {
      title: 'Freight invoicing',
      desc: 'Reconcile carrier invoices with shipments, generating automated billing data for accounting.',
      icon: Receipt,
      badge: 'FinTech',
    },
    {
      title: 'Mobile experience',
      desc: 'High-performance mobile application for tracking and managing shipments on the go.',
      icon: Smartphone,
      badge: 'Cross-Platform',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl my-auto rounded-[28px] sm:rounded-[36px] bg-[#070d1e] text-slate-100 border border-cyan-500/30 shadow-[0_0_80px_rgba(6,182,212,0.25)] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header / Close Button Bar */}
        <div className="sticky top-0 z-40 bg-[#070d1e]/90 backdrop-blur-md px-6 py-4 border-b border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Frakt360 Isometric Logo Mark */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 flex items-center justify-center text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-base sm:text-lg text-white tracking-wide">Frakt360</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-400/40 font-bold uppercase">
                  Flagship Case Study
                </span>
              </div>
              <span className="text-xs text-slate-400 hidden sm:block">A complete digital logistics platform for modern businesses</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onGetStarted();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white btn-cyan-gradient shadow-sm hover:scale-105 transition-transform"
            >
              <span>Bygg lignende løsning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Lukk"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 space-y-8 scrollbar-thin scrollbar-thumb-cyan-500/20">

          {/* 1. HERO BANNER WITH THE UPLOADED HIGH-RES GRAPHIC */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl group bg-slate-950">
            <img
              src="/assets/aistudio/Frakt360__Komplett_norsk_fraktplattform_6546bb91.png"
              alt="Frakt360 Komplett Norsk Fraktplattform"
              className="w-full h-auto object-cover max-h-[460px] transform group-hover:scale-[1.01] transition-transform duration-700"
            />
            {/* Subtle bottom gradient to merge into dark container */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-transparent to-transparent opacity-40 pointer-events-none" />
          </div>

          {/* 2. PROJECT METADATA CARD (4-Column Spec Matrix) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-cyan-500/20 backdrop-blur-md">
            <div>
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">Industry</div>
              <div className="text-sm font-semibold text-white">Logistics & E-commerce</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">Platform</div>
              <div className="text-sm font-semibold text-white">Web & Mobile (SaaS)</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">Developed by</div>
              <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Geton AS</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">Carriers & Systems</div>
              <div className="text-sm font-semibold text-cyan-200">PostNord · Bring · Ongoing</div>
            </div>
          </div>

          {/* 3. INTERACTIVE SECTION TABS */}
          <div className="flex items-center gap-2 border-b border-white/10 pb-2 overflow-x-auto scrollbar-none">
            {[
              { id: 'overview', label: '1. Oversikt & Prosjekt' },
              { id: 'workflow', label: '2. Arbeidsflyt (Order → Levert)' },
              { id: 'integrations', label: '3. Nettbutikker & Transportører' },
              { id: 'built', label: '4. Hva vi bygget (10 søyler)' },
              { id: 'tech', label: '5. Teknologi & Resultat' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: OVERVIEW & THE CHALLENGE */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              {/* Executive Summary */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0b1736] to-[#071026] border border-cyan-400/30">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                  THE PROJECT // DET DIGITALE FRAKTLØFTET
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4">
                  En komplett digital fraktplattform for moderne bedrifter
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  Frakt360 is a Norwegian logistics platform designed to make shipping simpler, more automated and more cost-effective for businesses.
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  Instead of managing freight bookings, labels, tracking, returns and invoices across several different systems, Frakt360 brings the logistics workflow together in one digital platform.
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Businesses can create shipments, compare available freight options, generate shipping labels, follow deliveries and manage their logistics from one place. For e-commerce businesses, Frakt360 can also connect directly to the online store, helping automate the flow from an incoming order to a shipment ready for the carrier.
                </p>
              </div>

              {/* Challenge vs Solution Dual Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* The Challenge */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-rose-500/30 relative overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">The Challenge</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    Shipping can quickly become complicated as a business grows. Orders may originate in one system, warehouse operations happen in another, shipping is booked through carrier portals, labels are printed separately, and invoices have to be reconciled afterwards.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    The goal with Frakt360 was therefore bigger than building another booking interface: We needed to create an infrastructure that could connect <strong>e-commerce, warehouse operations, carriers, shipping labels, tracking, returns and financial processes</strong> into one coherent workflow.
                  </p>
                </div>

                {/* The Solution */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-cyan-400/40 relative overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">The Solution by Geton</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    Geton designed and developed Frakt360 as a modular logistics platform where businesses can manage the entire shipping process from a single interface. A user can enter shipment information and retrieve relevant freight options before booking the shipment.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Once booked, Frakt360 communicates with carrier systems, creates the shipment and generates the required shipping label. The platform then follows the shipment through its lifecycle and makes tracking information available to the user.
                  </p>
                </div>

              </div>

              {/* Value Highlight Pill */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/80 via-cyan-950/80 to-blue-950/80 border border-cyan-400/40 text-center">
                <span className="text-cyan-300 font-bold text-sm sm:text-base">
                  «Koble din nettbutikk til Frakt360 og få billigere fraktpriser og helautomatisk ordrehåndtering»
                </span>
              </div>

            </div>
          )}

          {/* TAB 2: INTERACTIVE WORKFLOW PIPELINE */}
          {activeTab === 'workflow' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  SEAMLESS LOGISTICS PIPELINE
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Order → Freight option → Booking → Label → Shipment → Tracking → Delivery → Invoice
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Klikk på hvert steg for å utforske hvordan Frakt360 fjerner manuelle flaskehalser fra første ordre til endelig fakturering.
                </p>
              </div>

              {/* Interactive Visual 8-Step Timeline */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {workflowSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isSelected = activeWorkflowStep === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveWorkflowStep(idx)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-b from-blue-900/90 to-cyan-950/90 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-102 ring-1 ring-cyan-300'
                          : 'bg-white/[0.03] border-white/10 hover:border-cyan-400/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-cyan-400 font-bold">STEG 0{idx + 1}</span>
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`} />
                      </div>
                      <div className="text-sm font-bold text-white mb-1">{step.title}</div>
                      <div className="text-[11px] text-slate-300 leading-snug line-clamp-2">{step.desc}</div>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Deep-Dive Card */}
              <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-400/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shrink-0">
                    {React.createElement(workflowSteps[activeWorkflowStep].icon, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-cyan-400 font-bold uppercase">
                      Steg 0{activeWorkflowStep + 1} i Frakt360-kjeden
                    </div>
                    <h4 className="text-lg font-bold text-white">{workflowSteps[activeWorkflowStep].title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300">{workflowSteps[activeWorkflowStep].desc}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-slate-400">Automatisk prosessert på under 300ms</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Tracking Status Pipeline (from image: Utsendt -> Under transport -> Terminal -> Ute for levering -> Levert) */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase">
                    Sporingshendelser (Live Carrier Telemetry)
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">PN123456789NO</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[
                    { label: 'Utsendt', time: '12. okt 10:24', active: true },
                    { label: 'Under transport', time: '13. okt 08:15', active: true },
                    { label: 'Ankommet terminal', time: '14. okt 06:32', active: true },
                    { label: 'Ute for levering', time: '14. okt 09:20', active: true },
                    { label: 'Levert', time: '14. okt 11:05', active: true },
                  ].map((evt, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-400/25 flex flex-col items-start">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mb-1.5 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                      <span className="text-xs font-bold text-white">{evt.label}</span>
                      <span className="text-[10px] text-slate-400 font-mono mt-0.5">{evt.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: INTEGRATIONS */}
          {activeTab === 'integrations' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  ECOSYSTEM & ARCHITECTURE
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  E-Commerce, Transportører, Lager & Maskinvare
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Frakt360 er bygget som en åpen integrasjonsplattform som kobler sammen nettbutikker, transportselskaper og fysiske lagerterminaler.
                </p>
              </div>

              {/* 4 Deep-dive integration cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* 1. Connect online store */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-cyan-500/25 hover:border-cyan-400/60 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-cyan-300 flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-400/30">Shopify</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-950 text-purple-300 border border-purple-400/30">WooCommerce</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-400/30">Mystore</span>
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Connect Your Online Store</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Orders flow into the logistics platform automatically instead of employees having to manually recreate shipment information. Frakt360 prepares shipments, retrieves available rates, and auto-dispatches.
                  </p>
                  <div className="text-[11px] font-semibold text-cyan-300">
                    «Connect your store. Automate shipping. Access better freight rates.»
                  </div>
                </div>

                {/* 2. Carrier integrations */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-cyan-500/25 hover:border-cyan-400/60 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-950 text-blue-300 border border-blue-400/30">PostNord API</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-400/30">Bring API</span>
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Carrier API Integrations</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Frakt360 integrates directly with carrier infrastructure: <strong>Freight booking · Delivery options · Shipping labels · Tracking · Transit information</strong>. Designed for plug-and-play addition of new transport carriers.
                  </p>
                  <div className="text-[11px] font-semibold text-cyan-300">
                    Multi-carrier rate negotiation & fallback resilience
                  </div>
                </div>

                {/* 3. Automated shipping labels & Zebra Hardware */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-cyan-500/25 hover:border-cyan-400/60 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
                      <Printer className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-400/30">Zebra Thermal Print</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Automated Shipping Labels & Hardware</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Frakt360 receives label data from the carrier and prepares it for instant physical printing. Direct native integration with <strong>Zebra label printers</strong> connects the digital booking process directly with physical warehouse operations.
                  </p>
                  <div className="text-[11px] font-semibold text-cyan-300">
                    Zero-click warehouse printing & ZPL stream formatting
                  </div>
                </div>

                {/* 4. Warehouse & WMS + Returns & Invoicing */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-cyan-500/25 hover:border-cyan-400/60 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
                      <Warehouse className="w-5 h-5" />
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-950 text-purple-300 border border-purple-400/30">Ongoing WMS</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-950 text-blue-300 border border-blue-400/30">QR Returns</span>
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Warehouse (WMS) & Return Infrastructure</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Seamless bridge between <strong>Online store → Warehouse → Carrier</strong>. Integrated with Ongoing WMS, customer QR-based return flows, and carrier invoice reconciliation for complete financial control.
                  </p>
                  <div className="text-[11px] font-semibold text-cyan-300">
                    Automated freight cost reconciliation & customer billing
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: WHAT WE BUILT (10 Pillars) */}
          {activeTab === 'built' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  CORE DELIVERABLES
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Hva vi bygget i Frakt360 (10 Nøkkelkomponenter)
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Geton leverte en helhetlig arkitektur fra frontend-design til dype bakkonfigurasjoner og hardware-broer.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whatWeBuiltList.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-white/[0.04] transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-xl bg-cyan-950/70 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-400/30">
                            {item.badge}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-cyan-400 font-mono">
                        <span>FULLT OPERATIV // PROD</span>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 5: TECHNOLOGY & THE RESULT */}
          {activeTab === 'tech' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              {/* Technology Behind Frakt360 */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c193c] to-[#070f24] border border-cyan-400/40">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                  THE TECHNOLOGY BEHIND FRAKT360
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4">
                  Mer enn et tradisjonelt nettsted: Et skalerbart logistikk-økosystem
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  Frakt360 required much more than building a traditional website. The project combines modern web development with external APIs, carrier infrastructure, warehouse systems, printing technology, e-commerce platforms and financial workflows.
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  The architecture was therefore built around integrations and modular services, allowing new carriers, stores and business systems to be added without redesigning the entire platform. This turns Frakt360 into an expandable logistics ecosystem rather than a single-purpose shipping application.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {['React 19', 'Next.js 15', 'TypeScript', 'Node.js Microservices', 'PostgreSQL', 'Redis Queue', 'PostNord REST API', 'Bring Shipping API', 'Zebra ZPL Driver', 'Shopify Webhooks', 'WooCommerce REST', 'Ongoing WMS XML/REST'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* The Result */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-cyan-900/40 to-blue-950/50 border border-cyan-400/50 backdrop-blur-xl">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest block mb-2">
                  THE RESULT // RESULTATET
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-3">
                  One platform. From order to delivery.
                </h3>
                <div className="p-4 rounded-xl bg-black/40 border border-cyan-400/30 font-mono text-cyan-300 text-xs sm:text-sm mb-4">
                  Connect your store → Find the right freight option → Book → Print → Track → Deliver
                </div>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4">
                  Frakt360 brings the most important parts of business shipping into one connected platform. Companies can move from an online order to a booked and trackable shipment with significantly fewer manual steps.
                </p>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  For Geton, the project demonstrates our ability to take responsibility for a complex digital product across <strong>product design, frontend, backend, integrations, mobile development and real-world logistics infrastructure</strong>.
                </p>
              </div>

            </div>
          )}

          {/* 4. BOTTOM ACTION CTA BAR */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 border border-cyan-400/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-white">Klar til å bygge en lignende løsning for din bedrift?</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Geton designer, koder og integrerer skalerbare digitale produkter med sub-sekund respons.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onGetStarted();
              }}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white btn-cyan-gradient shadow-[0_0_25px_rgba(6,182,212,0.5)] cursor-pointer hover:scale-105 transition-transform flex items-center gap-2 shrink-0"
            >
              <span>Start Prosjekt med Geton</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
