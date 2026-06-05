// Static markup for the Globe Consulting Services landing page.
// Rendered via dangerouslySetInnerHTML so the original SVG markup and the
// imperative globe builder in interactions.js work unchanged.
export const PAGE_HTML = `
<!-- ============================================================== NAV === -->
<header class="nav">
  <div class="nav__inner">
    <a class="brand" href="#top" aria-label="Globe Consulting Services home">
      <img class="logo" src="/assets/globe-logo.png" alt="Globe Consulting Services" />
    </a>
    <nav class="nav__links" aria-label="Primary">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#industries">Industries</a>
      <a href="#process">Process</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="nav__cta">
      <a href="#contact" class="btn">Hire Talent <span class="arr">→</span></a>
      <button class="nav__toggle" aria-label="Open menu">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
    </div>
  </div>
</header>

<!-- mobile drawer -->
<div class="drawer" aria-hidden="true">
  <div class="drawer__top">
    <span class="brand" style="color:#fff;font-family:var(--font-display);font-weight:700;font-size:20px">Globe Consulting</span>
    <button class="drawer__close" aria-label="Close menu">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
  </div>
  <nav>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#industries">Industries</a>
    <a href="#process">Process</a>
    <a href="#contact">Contact</a>
  </nav>
  <a href="#contact" class="btn">Hire Talent <span class="arr">→</span></a>
</div>

<main id="top">

<!-- ============================================================= HERO === -->
<section class="hero" data-hero="light" data-screen-label="Hero">
  <div class="wrap">
    <div class="hero__grid">
      <div class="hero__copy">
        <p class="eyebrow reveal">Recruitment &amp; Workforce Solutions</p>
        <h1 class="hero__title h-xl reveal" data-d="1">Connecting <span class="accentword">Talent</span> with Opportunity</h1>
        <p class="hero__sub reveal" data-d="2">Globe Consulting Services helps businesses hire top talent and helps professionals find rewarding careers across multiple industries.</p>
        <div class="hero__cta reveal" data-d="3">
          <a href="#contact" class="btn">Hire Talent <span class="arr">→</span></a>
          <a href="#services" class="btn btn--ghost">Find Jobs <span class="arr">→</span></a>
        </div>
        <div class="hero__meta reveal" data-d="4">
          <div class="m"><b><span data-count="5000" data-suffix="+">0</span></b><span>Candidates placed</span></div>
          <div class="m"><b><span data-count="300" data-suffix="+">0</span></b><span>Partner companies</span></div>
          <div class="m"><b><span data-count="10" data-suffix="+">0</span></b><span>Industries served</span></div>
        </div>
      </div>
      <div class="hero__visual reveal" data-d="2">
        <div class="globe" data-globe="hero">
          <div class="badge badge--1"><i></i> Talent matched</div>
          <div class="badge badge--2"><i></i> Global reach</div>
          <div class="badge badge--3"><i></i> Verified hires</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ ABOUT === -->
<section class="section" id="about" data-screen-label="About">
  <div class="wrap">
    <div class="section-head reveal" style="max-width:840px">
      <p class="eyebrow">About the firm</p>
      <h2 class="h-lg">About Globe Consulting Services</h2>
      <p class="lede" style="margin-top:22px">Globe Consulting Services is a trusted recruitment and workforce solutions company dedicated to connecting employers with skilled professionals. We provide end-to-end hiring support, talent acquisition, executive search, and workforce consulting services.</p>
    </div>
    <ul class="about__points reveal" data-d="1">
      <li><span class="tick">✓</span><div><b>End-to-end hiring support</b><p>From requirement analysis through onboarding, we manage the full hiring lifecycle.</p></div></li>
      <li><span class="tick">✓</span><div><b>Talent acquisition &amp; executive search</b><p>Specialist sourcing for niche roles and senior leadership positions.</p></div></li>
      <li><span class="tick">✓</span><div><b>Workforce consulting</b><p>Strategy, planning and process optimisation that scales with your organisation.</p></div></li>
    </ul>
  </div>
</section>

<!-- ============================================================ STATS === -->
<section class="section section--navy" data-screen-label="Stats">
  <div class="wrap">
    <div class="section-head center reveal" style="max-width:680px">
      <p class="eyebrow">By the numbers</p>
      <h2 class="h-md">A track record built on results</h2>
    </div>
    <div class="stats reveal" data-d="1">
      <div class="stat"><b><span data-count="5000" data-suffix="+">0</span></b><span>Candidates placed</span></div>
      <div class="stat"><b><span data-count="300" data-suffix="+">0</span></b><span>Partner companies</span></div>
      <div class="stat"><b><span data-count="10" data-suffix="+">0</span></b><span>Industries served</span></div>
      <div class="stat"><b><span data-count="95" data-suffix="%">0</span></b><span>Client satisfaction</span></div>
    </div>
  </div>
</section>

<!-- ========================================================= SERVICES === -->
<section class="section section--alt" id="services" data-screen-label="Services">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">What we do</p>
      <h2 class="h-lg">Recruitment services, end&#8209;to&#8209;end</h2>
      <p class="lede" style="margin-top:18px">Six core practices that cover every stage of building and scaling your workforce.</p>
    </div>
    <div class="cards">
      <article class="card reveal" data-d="1">
        <span class="card__num">01</span>
        <div class="card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg></div>
        <h3>Permanent Recruitment</h3>
        <p>Finding qualified professionals for long-term organizational growth.</p>
      </article>
      <article class="card reveal" data-d="2">
        <span class="card__num">02</span>
        <div class="card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3M7 9h6M7 13h4"/></svg></div>
        <h3>Contract Staffing</h3>
        <p>Flexible workforce solutions tailored to business needs.</p>
      </article>
      <article class="card reveal" data-d="3">
        <span class="card__num">03</span>
        <div class="card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m12 2 2.4 5 5.6.6-4 4 1 5.4-5-2.6-5 2.6 1-5.4-4-4 5.6-.6z"/></svg></div>
        <h3>Executive Search</h3>
        <p>Leadership hiring for senior and strategic positions.</p>
      </article>
      <article class="card reveal" data-d="1">
        <span class="card__num">04</span>
        <div class="card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m22 10-10-5L2 10l10 5 10-5Z"/><path d="M6 12v5c3 2.5 9 2.5 12 0v-5"/></svg></div>
        <h3>Campus Recruitment</h3>
        <p>Connecting fresh graduates with leading employers.</p>
      </article>
      <article class="card reveal" data-d="2">
        <span class="card__num">05</span>
        <div class="card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 20v-6M6 20v-3M18 20v-9"/><path d="M3 20h18"/><circle cx="12" cy="6" r="3"/></svg></div>
        <h3>HR Consulting</h3>
        <p>Talent strategy, workforce planning, and recruitment process optimization.</p>
      </article>
      <article class="card reveal" data-d="3">
        <span class="card__num">06</span>
        <div class="card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20Z"/></svg></div>
        <h3>International Recruitment</h3>
        <p>Global hiring solutions for organizations expanding worldwide.</p>
      </article>
    </div>
  </div>
</section>

<!-- ======================================================= INDUSTRIES === -->
<section class="section" id="industries" data-screen-label="Industries">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">Sector expertise</p>
      <h2 class="h-lg">Industries we serve</h2>
    </div>
    <div class="industries reveal" data-d="1">
      <div class="ind"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg><b>Information Technology</b></div>
      <div class="ind"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.4-7 10-7 10Z"/></svg><b>Healthcare</b></div>
      <div class="ind"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6"/></svg><b>Finance &amp; Banking</b></div>
      <div class="ind"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20V8l8-4 8 4v12M4 12h16M9 20v-4h6v4"/></svg><b>Manufacturing</b></div>
      <div class="ind"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h18l-2 5H5L3 6Z"/><path d="M5 11v8h14v-8M9 19v-4h6v4"/></svg><b>Retail &amp; E-Commerce</b></div>
      <div class="ind"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 9 12 4l9 5-9 5-9-5Z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/></svg><b>Education</b></div>
      <div class="ind"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="6" width="13" height="11" rx="1"/><path d="M14 9h4l3 3v5h-7M5.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/></svg><b>Logistics &amp; Supply Chain</b></div>
      <div class="ind"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2 2 6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3Z"/></svg><b>Engineering</b></div>
    </div>
  </div>
</section>

<!-- ===================================================== WHY CHOOSE US === -->
<section class="section section--navy" id="why" data-screen-label="Why Choose Us">
  <div class="wrap why__grid">
    <div class="why__intro reveal">
      <p class="eyebrow">Why choose us</p>
      <h2 class="h-lg">A recruitment partner you can trust</h2>
      <p class="lede" style="margin-top:20px">We combine a deep talent network with disciplined process and sector expertise to deliver the right people, faster.</p>
      <a href="#contact" class="btn" style="margin-top:32px">Start hiring <span class="arr">→</span></a>
    </div>
    <div class="why__list reveal" data-d="1">
      <div class="why__item"><span class="tick">✓</span><div><b>Extensive Talent Network</b><p>Access to thousands of pre-screened, active and passive candidates.</p></div></div>
      <div class="why__item"><span class="tick">✓</span><div><b>Fast Hiring Process</b><p>Shortlists delivered in days, not weeks, without compromising quality.</p></div></div>
      <div class="why__item"><span class="tick">✓</span><div><b>Industry Expertise</b><p>Specialist recruiters who understand your sector and roles.</p></div></div>
      <div class="why__item"><span class="tick">✓</span><div><b>Dedicated Recruitment Team</b><p>A single point of contact accountable for your success.</p></div></div>
      <div class="why__item"><span class="tick">✓</span><div><b>Quality Candidate Screening</b><p>Rigorous assessment, verification and reference checks.</p></div></div>
      <div class="why__item"><span class="tick">✓</span><div><b>Customized Hiring Solutions</b><p>Engagement models tailored to your scale and timeline.</p></div></div>
    </div>
  </div>
</section>

<!-- ========================================================== PROCESS === -->
<section class="section section--alt" id="process" data-screen-label="Process">
  <div class="wrap">
    <div class="section-head center reveal">
      <p class="eyebrow">How we work</p>
      <h2 class="h-lg">Our recruitment process</h2>
    </div>
    <div class="process reveal" data-d="1">
      <div class="step"><div class="step__dot">1</div><b>Requirement Analysis</b><p>Understand the role, team and culture fit.</p></div>
      <div class="step"><div class="step__dot">2</div><b>Candidate Sourcing</b><p>Tap our network and targeted search.</p></div>
      <div class="step"><div class="step__dot">3</div><b>Screening &amp; Assessment</b><p>Evaluate skills, experience and fit.</p></div>
      <div class="step"><div class="step__dot">4</div><b>Interview Coordination</b><p>Schedule and manage every round.</p></div>
      <div class="step"><div class="step__dot">5</div><b>Offer Management</b><p>Negotiate and close with confidence.</p></div>
      <div class="step"><div class="step__dot">6</div><b>Successful Placement</b><p>Onboard and follow through.</p></div>
    </div>
  </div>
</section>

<!-- ======================================================= TESTIMONIALS = -->
<section class="section" id="testimonials" data-screen-label="Testimonials">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">Client voices</p>
      <h2 class="h-lg">What our clients say</h2>
    </div>
    <div class="quotes">
      <figure class="quote reveal" data-d="1">
        <div class="qm">&#8220;</div>
        <p>Globe Consulting Services helped us fill critical positions quickly with highly qualified candidates.</p>
        <figcaption class="who"><span class="av">T</span><div><b>HR Director</b><span>Technology Company</span></div></figcaption>
      </figure>
      <figure class="quote reveal" data-d="2">
        <div class="qm">&#8220;</div>
        <p>Their recruitment team understood our requirements perfectly and delivered excellent talent.</p>
        <figcaption class="who"><span class="av">O</span><div><b>Operations Manager</b><span>Manufacturing Sector</span></div></figcaption>
      </figure>
    </div>
  </div>
</section>

<!-- ========================================================== CONTACT === -->
<section class="section section--navy" id="contact" data-screen-label="Contact">
  <div class="wrap contact__grid">
    <div class="contact__info reveal">
      <p class="eyebrow">Get in touch</p>
      <h2 class="h-lg">Let's build your team</h2>
      <p class="lede" style="margin-top:18px">Tell us about your hiring needs and a dedicated consultant will respond within one business day.</p>
      <div class="row">
        <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>
        <div><span>ADDRESS</span><b>New BEL Road, Bangalore, India</b></div>
      </div>
      <div class="row">
        <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg></div>
        <div><span>PHONE</span><b>+91 90363 44111</b></div>
      </div>
      <div class="row">
        <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg></div>
        <div><span>EMAIL</span><b>hr@gcshiring.com</b></div>
      </div>
    </div>
    <form class="form reveal" data-d="1">
      <div class="two">
        <div class="field"><label for="f-name">Name</label><input id="f-name" type="text" placeholder="Your full name" required /></div>
        <div class="field"><label for="f-email">Email</label><input id="f-email" type="email" placeholder="you@company.com" required /></div>
      </div>
      <div class="two">
        <div class="field"><label for="f-phone">Phone</label><input id="f-phone" type="tel" placeholder="+91 00000 00000" /></div>
        <div class="field"><label for="f-company">Company</label><input id="f-company" type="text" placeholder="Company name" /></div>
      </div>
      <div class="field"><label for="f-msg">Message</label><textarea id="f-msg" placeholder="Tell us about the roles you're hiring for…"></textarea></div>
      <button type="submit" class="btn">Send message <span class="arr">→</span></button>
    </form>
  </div>
</section>

</main>

<!-- =========================================================== FOOTER === -->
<footer class="footer" data-screen-label="Footer">
  <div class="wrap">
    <div class="footer__top">
      <div class="footer__brand">
        <span class="brand" style="color:#fff;font-family:var(--font-display);font-weight:700;font-size:22px">Globe Consulting Services</span>
        <p>A trusted recruitment and workforce solutions partner connecting employers with skilled professionals across industries worldwide.</p>
        <p class="footer__tag">Building Careers. Empowering Businesses.</p>
      </div>
      <div class="footer__col">
        <h4>Company</h4>
        <a href="#top">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#industries">Industries</a>
        <a href="#contact">Contact</a>
      </div>
      <div class="footer__col">
        <h4>Legal</h4>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#process">Our Process</a>
        <a href="#why">Why Choose Us</a>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2026 Globe Consulting Services. All rights reserved.</span>
      <span>Connecting Talent with Opportunity</span>
    </div>
  </div>
</footer>

<!-- ====================================================== switcher UI === -->
<div class="switcher" aria-label="Design controls">
  <div class="switcher__panel hidden">
    <div>
      <div class="lbl">Direction</div>
      <div class="seg" data-seg="dir">
        <button data-val="A" class="on">A · Editorial</button>
        <button data-val="B">B · Bold</button>
      </div>
    </div>
    <div>
      <div class="lbl">Accent</div>
      <div class="swatches">
        <span class="swatch on" data-val="royal" style="background:#2563EB" title="Royal Blue"></span>
        <span class="swatch" data-val="indigo" style="background:#4F46E5" title="Indigo"></span>
        <span class="swatch" data-val="teal" style="background:#0F8A8A" title="Teal"></span>
        <span class="swatch" data-val="gold" style="background:#B8862F" title="Gold"></span>
      </div>
    </div>
  </div>
  <button class="switcher__fab" aria-label="Toggle design controls">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/></svg>
  </button>
</div>
`;
