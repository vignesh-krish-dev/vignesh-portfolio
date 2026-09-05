// ─── EXPERIENCE TIMELINE (data-driven, expand-to-preview cards) ───
const PROJECTS = [
{
  n:'01', accent:'#2dd4bf', icon:'bi-chat-dots-fill',
  title:'Internal Radiology Chat System',
  lead:"Independently built a real-time chat system for an entire facility's radiology workflow using Vue 3, Node.js, and PostgreSQL.",
  hl:['Instant real-time chat','On-device smart-reply engine','Role-based access control','Communication support for the radiology workflow'],
  tags:['Vue 3','Node.js','PostgreSQL','RBAC'],
  detail:[
    {h:'Overview', p:'Full-stack real-time communication platform integrated into an enterprise radiology workflow, enabling users to communicate directly within the existing radiology application instead of relying on separate communication tools.'},
    {h:'Interfaces', li:['Floating chat widget','Maximized panel','Standalone browser experience','All three from a single codebase']},
    {h:'Messaging', li:['One-to-one, group and department-based real-time conversations','Replies, editing, forwarding and pinning','Urgent messages, mentions and soft deletion']},
    {h:'Real-Time', li:['Socket.IO for instant message delivery','Typing indicators and unread updates','Read receipts per message','Room-scoped events so clients only receive what is relevant']},
    {h:'File Sharing', p:'Images, video, audio, PDF, <b>DICOM</b>, documents and archives, with in-app previews and authenticated attachment access.'},
    {h:'Search &amp; Notifications', li:['Conversation and message search with filters','Shared-file access across a conversation','In-app notification centre']},
    {h:'Support Workflow', p:'Structured communication between referring physicians and the internal admin team, with ticket status and assignment handling.'},
    {h:'Smart Reply', p:'On-device NLP engine generating contextual response suggestions. Processing stays <b>entirely in the browser</b>, so patient-adjacent message content never leaves the device.'},
    {h:'Architecture', li:['Vue 3, TypeScript, Vite and Vue Router on the frontend','Node.js, TypeScript and Fastify with a modular API','PostgreSQL with multi-schema, multi-tenant integration','Session integrated with the host app via Redis rather than a separate auth system']},
    {h:'Security', li:['Server-side authorization on every scoped request','Role-based confidentiality controls','Request validation and rate limiting','Authenticated attachment access']},
    {h:'Engineering Challenges', li:['Resolved internal/external identity collisions where the same numeric ID represented different users across separate tables','Implemented transactional frozen group snapshots so removed members retain the correct historical group state']},
    {h:'Technology', stack:['Vue 3','TypeScript','Node.js','Fastify','PostgreSQL','Socket.IO','Redis','nginx']}
  ]
},
{
  n:'02', accent:'#a78bfa', icon:'bi-telephone-outbound-fill',
  title:'Communication Outbound Service',
  lead:'Engineered a C++-based communication service designed to automate report-related communication to doctors and patients — approximately <span class="count-up" data-target="50000">0</span>+ communications per month.',
  hl:['Email, SMS &amp; fax delivery','Multi-tenancy','Per-customer credential isolation','Automated notification delivery'],
  tags:['C++','Multi-tenancy','Automation','Enterprise'],
  detail:[
    {h:'Overview', p:'C++ background service for automated report-related notifications across the enterprise radiology platform, delivering approved report notifications to doctors and patients <b>without blocking the main application workflow</b>.'},
    {h:'Scale', p:'Handles approximately <b>50,000+</b> email, SMS and fax communications per month.'},
    {h:'Multi-Channel', p:'Unified Email, SMS and Fax behind a common queue-driven notification architecture.'},
    {h:'Multi-Tenancy', li:['Customer-isolated communication workflows','Dedicated provider credentials per customer',"One customer's flow can never reach another's credentials"]},
    {h:'Queue Processing', li:['PostgreSQL-backed notification queues','Batch processing','Background worker threads']},
    {h:'Integrations', li:['SendGrid for transactional email, including approved report PDF attachments','Twilio for SMS','eFax for automated fax, customer-specific']},
    {h:'Delivery Tracking', li:['Captured provider commitment IDs','Maintained notification and delivery status across the lifecycle','HTTPS webhook processing for real-time delivery events']},
    {h:'Reliability', p:'Validation, structured error handling, and recovery for notifications that become stuck mid-processing.'},
    {h:'Performance', li:['Optimized Base64 conversion, attachment processing, TLS connections, API handling and parallel processing','100 emails <b>with</b> attachments: 115.29s → <b>15.38s</b> (87% faster, 7.5&times; speedup)','100 emails <b>without</b> attachments: 49.03s → <b>6.13s</b> (87% faster, 8&times; speedup)','Throughput raised to ~<b>6.5 mails/sec</b>; 6 workers chosen as the production configuration']},
    {h:'Database', p:'PostgreSQL JSONB data and stored procedures managing the notification lifecycle.'},
    {h:'Third-Party Ownership', p:'Managed the Twilio, SendGrid and eFax accounts — provider setup, configuration, testing and client-machine deployment.'},
    {h:'Testing', p:'End-to-end coverage across email, SMS, fax, attachments, provider errors, webhooks and batch processing.'},
    {h:'Technology', stack:['C++','PostgreSQL','SendGrid','Twilio','eFax','HTTPS','JSON','REST APIs','Multithreading']}
  ]
},
{
  n:'03', accent:'#fbbf24', icon:'bi-terminal-fill',
  title:'Ubuntu Installer &amp; Deployment Automation',
  lead:'Developed a Shell Script-based Ubuntu installer for client demonstrations and internal deployments, reducing setup from ~6 hours to a single 45-minute run.',
  hl:['Dependency resolution','Configuration','Database population','Service provisioning'],
  tags:['Shell Script','Linux','Automation','Deployment'],
  detail:[
    {h:'Overview', p:'Developed a Shell Script-based Ubuntu Installer to automate complete environment setup, used across multiple client machine setups and internal deployment environments.'},
    {h:'Infrastructure Setup', li:['Automated installation of required application prerequisites and dependencies','Installed and configured PostgreSQL, Redis, Nginx, Node.js, Kafka, and other required components','Automated OpenResty setup as part of the deployment environment','Handled installation and configuration of required runtime and infrastructure components']},
    {h:'Database &amp; Services', li:['Automated setup of the enterprise database environment','Populated the enterprise database with required schemas, data, and application setup','Automated installation and setup of application services required by the enterprise platform','Handled installation and startup of Node.js-based services and API services','Automated service provisioning and ensured required services were started as part of installation']},
    {h:'Configuration Management', li:['Managed application environment variables required across the deployment','Automated configuration setup for installed services and application components','Handled service-specific configuration files and deployment parameters']},
    {h:'Workflow &amp; Impact', li:['Coordinated the setup of databases, dependencies, configurations, and services as a single installation workflow','Reduced the need for repeated manual configuration across different machines','Made the deployment process more consistent across client and internal environments',"Simplified preparing a machine from a fresh Ubuntu environment to a ready-to-run application environment"]},
    {h:'Outcome', p:'Reduced overall deployment effort from approximately <b>6 hours</b> of manual setup to around <b>45 minutes</b> — a reusable solution that streamlined client demonstrations, internal setups, and enterprise application provisioning.'},
    {h:'Technology', stack:['Shell Script','Linux','PostgreSQL','Redis','Nginx','Node.js','Kafka','OpenResty']}
  ]
},
{
  n:'04', accent:'#fb7185', icon:'bi-cpu-fill',
  title:'Medical Image Enhancement with C++',
  lead:'Built a C++-based medical image enhancement module using the CLAHE algorithm.',
  hl:['Improving image quality','Improving output accuracy','Expanding supported image formats','Improving processing performance'],
  tags:['C++','CLAHE','Image Processing','R&amp;D'],
  detail:[
    {h:'Overview', p:'Worked on improving contrast enhancement for medical and radiology images using C++, evaluating the limitations of the existing implementation.'},
    {h:'Existing Limitations', li:['Previous approach produced inconsistent and lower-quality results across different images','Existing processing was relatively slow for practical radiology workflows']},
    {h:'New Approach', li:['Developed a new contrast enhancement approach focused on stability and output quality','Improved processing speed to make image enhancement more efficient','Expanded support for a wider range of medical image types and formats','Improved consistency of enhancement across different image characteristics','Focused on preserving important image details while improving visual contrast','Improved the visibility of relevant structures in radiology images']},
    {h:'Testing &amp; Evaluation', li:['Tested the enhancement approach across multiple medical image samples','Evaluated output quality against the existing implementation','Compared the new implementation with OpenCV-based image enhancement','Produced better output quality than the OpenCV comparison in the evaluated cases']},
    {h:'Integration', li:['Made the enhancement suitable for integration into the existing radiology workflow','Considered different image bit depths and pixel-data representations during implementation','Integrated the enhancement process with the existing medical image processing pipeline','Worked with radiology image data including DICOM-based image processing']},
    {h:'Outcome', p:'Balanced image quality, stability, format support, and processing performance — delivering a faster and more reliable contrast enhancement solution with improved image quality and broader image support.'},
    {h:'Technology', stack:['C++','DICOM','OpenCV','CLAHE','Image Processing']}
  ]
}
];

(function initTimeline(){
  const tl = document.getElementById('tl');
  const modal = document.getElementById('tlModal');
  const modalPanel = modal ? modal.querySelector('.tl-modal-panel') : null;
  const modalClose = document.getElementById('tlModalClose');
  const modalIcon = document.getElementById('tlModalIcon');
  const modalTitle = document.getElementById('tlModalTitle');
  const modalScroll = document.getElementById('tlModalScroll');
  const modalWrap = document.getElementById('tlModalWrap');
  const modalDetail = document.getElementById('tlModalDetail');
  if(!tl || !modal) return;

  tl.innerHTML = PROJECTS.map((pr, pi) => (
    '<div class="tl-row reveal-r" id="tlRow' + pi + '" style="--a:' + pr.accent + '">' +
      '<div class="tl-spine"><span class="tl-stub"></span><span class="tl-dot"></span></div>' +
      '<article class="tl-card" id="tlCard' + pi + '" tabindex="0" role="button" aria-haspopup="dialog" aria-label="View full details: ' + pr.title.replace(/&amp;/g, '&') + '">' +
        '<span class="tl-num">' + pr.n + '</span>' +
        '<div class="tl-main">' +
          '<div class="tl-icon"><i class="bi ' + pr.icon + '"></i></div>' +
          '<div>' +
            '<h3 class="work-title">' + pr.title + '</h3>' +
            '<p class="work-desc">' + pr.lead + '</p>' +
            '<ul class="work-list">' + pr.hl.map(h => '<li>' + h + '</li>').join('') + '</ul>' +
            '<div class="tl-footrow">' +
              '<div class="work-tags">' + pr.tags.map(t => '<span>' + t + '</span>').join('') + '</div>' +
              '<button class="tl-cue" id="tlCue' + pi + '" aria-haspopup="dialog">' +
                '<span class="tl-cue-text">Click for full details</span> <span class="tl-chev">↗</span>' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</article>' +
    '</div>'
  )).join('');

  let lastFocused = null;

  function checkEnd(){
    modalWrap.classList.toggle('at-end', modalScroll.scrollTop + modalScroll.clientHeight >= modalScroll.scrollHeight - 4);
  }

  // A viewport resize/rotation reflows the page and fires a scroll event, and that
  // scroll can arrive BEFORE the resize event — so a timer-based guard is unreliable.
  // Compare the viewport box instead: if it changed, this scroll came from the resize.
  let openW = 0, openH = 0, openY = 0;
  function closeOnScroll(){
    if(window.innerWidth !== openW || window.innerHeight !== openH){
      openW = window.innerWidth; openH = window.innerHeight; openY = window.scrollY;
      return;                       // reflow, not a real scroll — keep the card open
    }
    if(Math.abs(window.scrollY - openY) < 4) return;
    closeModal();
  }

  function openModal(pi){
    const pr = PROJECTS[pi];
    lastFocused = document.activeElement;

    modal.style.setProperty('--a', pr.accent);
    modalIcon.innerHTML = '<i class="bi ' + pr.icon + '"></i>';
    modalTitle.textContent = pr.title.replace(/&amp;/g, '&');

    const detail = pr.detail.map((s, i) => {
      const d = (0.1 + i * 0.045).toFixed(2);
      let inner = '<h4>' + s.h + '</h4>';
      if(s.p) inner += '<p>' + s.p + '</p>';
      if(s.li) inner += '<ul>' + s.li.map(l => '<li>' + l + '</li>').join('') + '</ul>';
      if(s.stack) inner += '<div class="tl-stack">' + s.stack.map(t => '<span>' + t + '</span>').join('') + '</div>';
      return '<div class="tl-blk" style="transition-delay:' + d + 's;opacity:1;transform:none">' + inner + '</div>';
    }).join('');
    modalDetail.innerHTML = detail;

    modal.classList.add('active');
    modalScroll.scrollTop = 0;
    setTimeout(checkEnd, 50);
    modalClose.focus();

    // page scroll stays live on purpose: scrolling the page while the modal is open closes it
    openW = window.innerWidth; openH = window.innerHeight; openY = window.scrollY;
    setTimeout(() => window.addEventListener('scroll', closeOnScroll, { passive:true }), 0);
  }

  function closeModal(){
    modal.classList.remove('active');
    window.removeEventListener('scroll', closeOnScroll);
    if(lastFocused) lastFocused.focus();
  }

  PROJECTS.forEach((_, i) => {
    const card = document.getElementById('tlCard' + i);
    card.addEventListener('click', () => openModal(i));
    card.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        openModal(i);
      }
    });
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if(!e.target.closest('.tl-modal-panel')) closeModal();
  });
  modalScroll.addEventListener('scroll', checkEnd);
  // a resize/rotate while the modal is open changes how much content fits,
  // so the cached end-of-scroll state must be recomputed
  let modalRt;
  const modalRemeasure = ()=>{
    openW = window.innerWidth; openH = window.innerHeight; openY = window.scrollY;
    if(!modal.classList.contains('active')) return;
    clearTimeout(modalRt); modalRt = setTimeout(checkEnd, 150);
  };
  window.addEventListener('resize', modalRemeasure);
  window.addEventListener('orientationchange', modalRemeasure);
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
})();
