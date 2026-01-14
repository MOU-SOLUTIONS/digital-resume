/**
 * Editor / Developer: Mohamed Dhaoui
 * Project: Digital Resume
 * Date: 2025-01-27
 */

// ============================================================================
// Imports
// ============================================================================
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// ============================================================================
// Type Definitions
// ============================================================================
export type Language = 'en' | 'fr' | 'ar' | 'es';

export interface Translations {
  [key: string]: {
    en: string;
    fr: string;
    ar: string;
    es: string;
  };
}

// ============================================================================
// Injectable Decorator
// ============================================================================
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // ============================================================================
  // Properties
  // ============================================================================
  private currentLanguageSubject = new BehaviorSubject<Language>('en');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  // ============================================================================
  // Translations
  // ============================================================================
  private translations: Translations = {
    // Navigation
    'nav.home': {
      en: 'Home',
      fr: 'Accueil',
      ar: 'الرئيسية',
      es: 'Inicio'
    },
    'nav.about': {
      en: 'About',
      fr: 'À propos',
      ar: 'حول',
      es: 'Acerca de'
    },
    'nav.experience': {
      en: 'Experience',
      fr: 'Expérience',
      ar: 'الخبرة',
      es: 'Experiencia'
    },
    'nav.skills': {
      en: 'Skills',
      fr: 'Compétences',
      ar: 'المهارات',
      es: 'Habilidades'
    },
    'nav.projects': {
      en: 'Projects',
      fr: 'Projets',
      ar: 'المشاريع',
      es: 'Proyectos'
    },
    'nav.education': {
      en: 'Education',
      fr: 'Éducation',
      ar: 'التعليم',
      es: 'Educación'
    },
    'nav.certifications': {
      en: 'Certifications',
      fr: 'Certifications',
      ar: 'الشهادات',
      es: 'Certificaciones'
    },
    'nav.contact': {
      en: 'Contact',
      fr: 'Contact',
      ar: 'اتصل',
      es: 'Contacto'
    },

    // Home Section
    'home.greeting': {
      en: 'Hello, I\'m',
      fr: 'Bonjour, je suis',
      ar: 'مرحباً، أنا',
      es: 'Hola, soy'
    },
    'home.name': {
      en: 'Mohamed Amine Dhaoui',
      fr: 'Mohamed Amine Dhaoui',
      ar: 'محمد أمين دحوي',
      es: 'Mohamed Amine Dhaoui'
    },
    'home.title': {
      en: 'Full-Stack Developer',
      fr: 'Développeur Full Stack',
      ar: 'مطور ويب شامل',
      es: 'Desarrollador Full Stack'
    },
    'home.subtitle': {
      en: 'Angular & Spring Boot | Master\'s in IT',
      fr: 'Angular & Spring Boot | Master en Informatique',
      ar: 'Angular & Spring Boot | ماجستير في تكنولوجيا المعلومات',
      es: 'Angular & Spring Boot | Máster en TI'
    },
    'home.description': {
      en: 'I design and build scalable, secure web applications with real-world project experience. Authorized to work in the U.S. under OPT with STEM OPT eligibility.',
      fr: 'Je conçois et construis des applications web évolutives et sécurisées avec une expérience de projets réels. Autorisé à travailler aux États-Unis sous OPT avec éligibilité STEM OPT.',
      ar: 'أصمم وأبني تطبيقات ويب قابلة للتطوير وآمنة مع خبرة في مشاريع حقيقية. مخول للعمل في الولايات المتحدة تحت OPT مع أهلية STEM OPT.',
      es: 'Diseño y construyo aplicaciones web escalables y seguras con experiencia en proyectos del mundo real. Autorizado para trabajar en EE.UU. bajo OPT con elegibilidad STEM OPT.'
    },
    'home.cta': {
      en: 'Contact Me',
      fr: 'Me Contacter',
      ar: 'اتصل بي',
      es: 'Contáctame'
    },
    'home.downloadCV': {
      en: 'Download Resume',
      fr: 'Télécharger CV',
      ar: 'تحميل السيرة الذاتية',
      es: 'Descargar CV'
    },
    'home.viewProjects': {
      en: 'View Projects',
      fr: 'Voir Projets',
      ar: 'عرض المشاريع',
      es: 'Ver Proyectos'
    },
    'home.scrollToExplore': {
      en: 'Scroll to explore my work',
      fr: 'Faites défiler pour explorer mon travail',
      ar: 'انتقل لاستكشاف أعمالي',
      es: 'Desplázate para explorar mi trabajo'
    },

    // Stats Section
    'stats.title': {
      en: 'Statistics / At a Glance',
      fr: 'Statistiques / Aperçu',
      ar: 'الإحصائيات / نظرة عامة',
      es: 'Estadísticas / Resumen'
    },
    'stats.yearsExperience': {
      en: 'Years — Professional & Academic Full-Stack Development Experience',
      fr: 'Années — Expérience en Développement Full-Stack Professionnel & Académique',
      ar: 'سنوات — خبرة في تطوير Full-Stack المهنية والأكاديمية',
      es: 'Años — Experiencia en Desarrollo Full-Stack Profesional y Académico'
    },
    'stats.projectsCompleted': {
      en: 'Production-Ready Applications — Delivered real-world projects across multiple domains',
      fr: 'Applications Prêtes pour la Production — Projets réels livrés dans plusieurs domaines',
      ar: 'تطبيقات جاهزة للإنتاج — مشاريع حقيقية تم تسليمها عبر مجالات متعددة',
      es: 'Aplicaciones Listas para Producción — Proyectos reales entregados en múltiples dominios'
    },
    'stats.happyClients': {
      en: 'Happy Clients',
      fr: 'Clients Satisfaits',
      ar: 'عملاء سعداء',
      es: 'Clientes Satisfechos'
    },
    'stats.technologies': {
      en: 'Core Technologies — Angular, Spring Boot, PostgreSQL, RxJS, Chart.js, etc.',
      fr: 'Technologies Principales — Angular, Spring Boot, PostgreSQL, RxJS, Chart.js, etc.',
      ar: 'التقنيات الأساسية — Angular، Spring Boot، PostgreSQL، RxJS، Chart.js، إلخ',
      es: 'Tecnologías Principales — Angular, Spring Boot, PostgreSQL, RxJS, Chart.js, etc.'
    },
    'stats.hours': {
      en: 'Hours — Hands-on coding, project development, and production work',
      fr: 'Heures — Codage pratique, développement de projets et travail en production',
      ar: 'ساعة — البرمجة العملية وتطوير المشاريع والعمل في الإنتاج',
      es: 'Horas — Codificación práctica, desarrollo de proyectos y trabajo en producción'
    },

    // About Section
    'about.title': {
      en: 'About Me',
      fr: 'À Propos de Moi',
      ar: 'عني',
      es: 'Sobre Mí'
    },
    'about.subtitle': {
      en: '2+ Years | Angular & Spring Boot | Leadership & Impact',
      fr: '2+ Ans | Angular & Spring Boot | Leadership & Impact',
      ar: '2+ سنوات | Angular & Spring Boot | القيادة والتأثير',
      es: '2+ Años | Angular & Spring Boot | Liderazgo e Impacto'
    },
    'about.description': {
      en: 'Full-Stack Developer with 2+ years of experience building scalable web applications using Angular and Spring Boot. Authorized to work in the U.S. under OPT with STEM OPT eligibility.\n\nProven leader in technical projects and volunteer initiatives (Tunisian Red Crescent, Scouts), fluent in five languages, skilled in cross-cultural collaboration and problem-solving.',
      fr: 'Développeur Full-Stack avec plus de 2 ans d\'expérience dans la construction d\'applications web évolutives utilisant Angular et Spring Boot. Autorisé à travailler aux États-Unis sous OPT avec éligibilité STEM OPT.\n\nLeader éprouvé dans des projets techniques et des initiatives bénévoles (Croissant-Rouge Tunisien, Scouts), parlant couramment cinq langues, compétent en collaboration interculturelle et résolution de problèmes.',
      ar: 'مطور Full-Stack مع أكثر من عامين من الخبرة في بناء تطبيقات ويب قابلة للتطوير باستخدام Angular و Spring Boot. مصرح لي بالعمل في الولايات المتحدة بموجب OPT مع أهلية STEM OPT.\n\nقائد مثبت في المشاريع التقنية والمبادرات التطوعية (الهلال الأحمر التونسي، الكشافة)، أتقن خمس لغات، ماهر في التعاون بين الثقافات وحل المشكلات.',
      es: 'Desarrollador Full-Stack con más de 2 años de experiencia construyendo aplicaciones web escalables usando Angular y Spring Boot. Autorizado para trabajar en EE. UU. bajo OPT con elegibilidad STEM OPT.\n\nLíder probado en proyectos técnicos e iniciativas voluntarias (Media Luna Roja Tunecina, Scouts), habla con fluidez cinco idiomas, hábil en colaboración intercultural y resolución de problemas.'
    },
    'about.philosophy': {
      en: 'My Philosophy: Organize the workflow, simplify the problem, and lead the team to excellence.',
      fr: 'Ma Philosophie : Organiser le flux de travail, simplifier le problème et mener l\'équipe vers l\'excellence.',
      ar: 'فلسفتي: تنظيم سير العمل، تبسيط المشكلة، وقيادة الفريق نحو التميز.',
      es: 'Mi Filosofía: Organizar el flujo de trabajo, simplificar el problema y liderar el equipo hacia la excelencia.'
    },

    // Experience Section
    'experience.title': {
      en: 'Work Experience',
      fr: 'Expérience Professionnelle',
      ar: 'الخبرة العملية',
      es: 'Experiencia Laboral'
    },
    'experience.present': {
      en: 'Present',
      fr: 'Présent',
      ar: 'الحالي',
      es: 'Presente'
    },
    'experience.clickForDetails': {
      en: 'Click for more details',
      fr: 'Cliquez pour plus de détails',
      ar: 'انقر للمزيد من التفاصيل',
      es: 'Haz clic para más detalles'
    },
    'experience.details': {
      en: 'details',
      fr: 'détails',
      ar: 'التفاصيل',
      es: 'detalles'
    },
    'experience.visitWebsite': {
      en: 'Visit official website',
      fr: 'Visiter le site officiel',
      ar: 'زيارة الموقع الرسمي',
      es: 'Visitar sitio web oficial'
    },
    'experience.marker': {
      en: 'marker',
      fr: 'marqueur',
      ar: 'علامة',
      es: 'marcador'
    },
    'experience.position': {
      en: 'position',
      fr: 'poste',
      ar: 'منصب',
      es: 'posición'
    },
    'experience.positions': {
      en: 'positions',
      fr: 'postes',
      ar: 'مناصب',
      es: 'posiciones'
    },
    'experience.company': {
      en: 'company',
      fr: 'entreprise',
      ar: 'شركة',
      es: 'empresa'
    },
    'experience.companies': {
      en: 'companies',
      fr: 'entreprises',
      ar: 'شركات',
      es: 'empresas'
    },
    'experience.andMore': {
      en: ' and more',
      fr: ' et plus',
      ar: ' والمزيد',
      es: ' y más'
    },
    'experience.professionalExperience': {
      en: 'Professional experience with',
      fr: 'Expérience professionnelle avec',
      ar: 'خبرة مهنية مع',
      es: 'Experiencia profesional con'
    },
    'experience.digitalResume': {
      en: 'Digital Resume',
      fr: 'CV Numérique',
      ar: 'السيرة الذاتية الرقمية',
      es: 'Currículum Digital'
    },
    'experience.logo': {
      en: 'logo',
      fr: 'logo',
      ar: 'شعار',
      es: 'logo'
    },
    'experience.dateSeparator': {
      en: ' - ',
      fr: ' - ',
      ar: ' - ',
      es: ' - '
    },
    'experience.colon': {
      en: ': ',
      fr: ' : ',
      ar: ': ',
      es: ': '
    },
    'experience.titleSeparator': {
      en: ' - ',
      fr: ' - ',
      ar: ' - ',
      es: ' - '
    },
    'experience.pipeSeparator': {
      en: ' | ',
      fr: ' | ',
      ar: ' | ',
      es: ' | '
    },
    'experience.commaSeparator': {
      en: ', ',
      fr: ', ',
      ar: '، ',
      es: ', '
    },
    'experience.position.fullStackDeveloper': {
      en: 'Full-Stack Developer',
      fr: 'Développeur Full Stack',
      ar: 'مطور ويب شامل',
      es: 'Desarrollador Full Stack'
    },
    'experience.position.webDeveloper': {
      en: 'Web Developer',
      fr: 'Développeur Web',
      ar: 'مطور ويب',
      es: 'Desarrollador Web'
    },
    'experience.position.softwareEngineeringIntern': {
      en: 'Software Engineering Intern',
      fr: 'Stagiaire en Ingénierie Logicielle',
      ar: 'متدرب في هندسة البرمجيات',
      es: 'Pasante de Ingeniería de Software'
    },
    'experience.position.softwareDevelopmentIntern': {
      en: 'Software Development Intern',
      fr: 'Stagiaire en Développement Logiciel',
      ar: 'متدرب في تطوير البرمجيات',
      es: 'Pasante de Desarrollo de Software'
    },
    'experience.company.auraxSolutions': {
      en: 'AuraX Solutions',
      fr: 'AuraX Solutions',
      ar: 'AuraX Solutions',
      es: 'AuraX Solutions'
    },
    'experience.company.polyTelLtd': {
      en: 'Poly-Tel Ltd',
      fr: 'Poly-Tel Ltd',
      ar: 'Poly-Tel Ltd',
      es: 'Poly-Tel Ltd'
    },
    'experience.company.addixoGroup': {
      en: 'ADDIXO Group',
      fr: 'Groupe ADDIXO',
      ar: 'مجموعة ADDIXO',
      es: 'Grupo ADDIXO'
    },
    'experience.company.centreSectoriel': {
      en: 'Centre Sectoriel de Formation et Techniques Appliquées en Cuir',
      fr: 'Centre Sectoriel de Formation et Techniques Appliquées en Cuir',
      ar: 'المركز القطاعي للتدريب والتقنيات التطبيقية في الجلود',
      es: 'Centro Sectorial de Formación y Técnicas Aplicadas en Cuero'
    },
    'experience.location.usa': {
      en: 'USA',
      fr: 'États-Unis',
      ar: 'الولايات المتحدة',
      es: 'EE.UU.'
    },
    'experience.location.uk': {
      en: 'UK',
      fr: 'Royaume-Uni',
      ar: 'المملكة المتحدة',
      es: 'Reino Unido'
    },
    'experience.location.france': {
      en: 'France',
      fr: 'France',
      ar: 'فرنسا',
      es: 'Francia'
    },
    'experience.location.tunisia': {
      en: 'Tunisia',
      fr: 'Tunisie',
      ar: 'تونس',
      es: 'Túnez'
    },
    'experience.description.aurax.1': {
      en: 'Working as a Full-Stack Developer delivering solutions for clients facing complex IT system, application, and infrastructure issues',
      fr: 'Travail en tant que développeur Full Stack, fournissant des solutions pour des clients confrontés à des problèmes complexes de systèmes informatiques, d\'applications et d\'infrastructure',
      ar: 'العمل كمطور ويب شامل لتقديم حلول للعملاء الذين يواجهون مشاكل معقدة في أنظمة تكنولوجيا المعلومات والتطبيقات والبنية التحتية',
      es: 'Trabajando como Desarrollador Full Stack entregando soluciones para clientes que enfrentan problemas complejos de sistemas, aplicaciones e infraestructura de TI'
    },
    'experience.description.aurax.2': {
      en: 'Designing, developing, and maintaining web applications and internal tools to diagnose, fix, and optimize client systems',
      fr: 'Conception, développement et maintenance d\'applications web et d\'outils internes pour diagnostiquer, corriger et optimiser les systèmes clients',
      ar: 'تصميم وتطوير وصيانة تطبيقات الويب والأدوات الداخلية لتشخيص وإصلاح وتحسين أنظمة العملاء',
      es: 'Diseñando, desarrollando y manteniendo aplicaciones web y herramientas internas para diagnosticar, corregir y optimizar los sistemas de los clientes'
    },
    'experience.description.aurax.3': {
      en: 'Contributing across the full stack, from front-end interfaces to back-end logic and integrations',
      fr: 'Contribuant sur toute la pile, des interfaces front-end à la logique back-end et aux intégrations',
      ar: 'المساهمة عبر المكدس الكامل، من واجهات الواجهة الأمامية إلى منطق الخلفية والتكاملات',
      es: 'Contribuyendo en toda la pila, desde interfaces front-end hasta lógica back-end e integraciones'
    },
    'experience.description.aurax.4': {
      en: 'Actively involved in troubleshooting, performance improvements, and system hardening to ensure reliability and scalability',
      fr: 'Participation active au dépannage, aux améliorations de performance et au durcissement des systèmes pour assurer la fiabilité et l\'évolutivité',
      ar: 'المشاركة النشطة في استكشاف الأخطاء وإصلاحها وتحسينات الأداء وتقوية النظام لضمان الموثوقية والقابلية للتوسع',
      es: 'Participación activa en resolución de problemas, mejoras de rendimiento y fortalecimiento de sistemas para garantizar confiabilidad y escalabilidad'
    },
    'experience.description.aurax.5': {
      en: 'Operating in a fast-paced environment requiring ownership, adaptability, and production-ready delivery',
      fr: 'Opération dans un environnement rapide nécessitant la propriété, l\'adaptabilité et la livraison prête pour la production',
      ar: 'العمل في بيئة سريعة الخطى تتطلب الملكية والتكيف والتسليم الجاهز للإنتاج',
      es: 'Operando en un entorno acelerado que requiere propiedad, adaptabilidad y entrega lista para producción'
    },
    'experience.description.polytel.1': {
      en: 'Contributed to the development and enhancement of Smart Roaster, a large-scale web application used to monitor and manage 300+ active sites across the UK',
      fr: 'Contribué au développement et à l\'amélioration de Smart Roaster, une application web à grande échelle utilisée pour surveiller et gérer plus de 300 sites actifs au Royaume-Uni',
      ar: 'المساهمة في تطوير وتحسين Smart Roaster، تطبيق ويب واسع النطاق يستخدم لمراقبة وإدارة أكثر من 300 موقع نشط في المملكة المتحدة',
      es: 'Contribuí al desarrollo y mejora de Smart Roaster, una aplicación web a gran escala utilizada para monitorear y gestionar más de 300 sitios activos en el Reino Unido'
    },
    'experience.description.polytel.2': {
      en: 'Worked on features related to site access control, gate code management, CCTV monitoring, and workforce data tracking',
      fr: 'Travail sur des fonctionnalités liées au contrôle d\'accès aux sites, à la gestion des codes de porte, à la surveillance CCTV et au suivi des données de la main-d\'œuvre',
      ar: 'العمل على ميزات تتعلق بمراقبة الوصول إلى المواقع وإدارة رموز البوابات ومراقبة كاميرات الدوائر التلفزيونية المغلقة وتتبع بيانات القوى العاملة',
      es: 'Trabajé en funciones relacionadas con el control de acceso al sitio, gestión de códigos de puerta, monitoreo CCTV y seguimiento de datos de la fuerza laboral'
    },
    'experience.description.polytel.3': {
      en: 'Implemented new functionalities and improved existing modules to enhance system reliability, usability, and operational visibility',
      fr: 'Implémentation de nouvelles fonctionnalités et amélioration des modules existants pour améliorer la fiabilité, la convivialité et la visibilité opérationnelle du système',
      ar: 'تنفيذ وظائف جديدة وتحسين الوحدات الموجودة لتعزيز موثوقية النظام وقابلية الاستخدام والرؤية التشغيلية',
      es: 'Implementé nuevas funcionalidades y mejoré módulos existentes para mejorar la confiabilidad, usabilidad y visibilidad operativa del sistema'
    },
    'experience.description.polytel.4': {
      en: 'Collaborated on a production system handling real-world infrastructure data, requiring high availability and accuracy',
      fr: 'Collaboration sur un système de production gérant des données d\'infrastructure du monde réel, nécessitant une haute disponibilité et une précision',
      ar: 'التعاون في نظام إنتاج يتعامل مع بيانات البنية التحتية في العالم الحقيقي، مما يتطلب توفرًا عاليًا ودقة',
      es: 'Colaboré en un sistema de producción que maneja datos de infraestructura del mundo real, requiriendo alta disponibilidad y precisión'
    },
    'experience.description.polytel.5': {
      en: 'Participated in maintaining and evolving a platform critical to day-to-day operational decision-making',
      fr: 'Participation à la maintenance et à l\'évolution d\'une plateforme critique pour la prise de décision opérationnelle quotidienne',
      ar: 'المشاركة في صيانة وتطوير منصة حاسمة لاتخاذ القرارات التشغيلية اليومية',
      es: 'Participé en el mantenimiento y evolución de una plataforma crítica para la toma de decisiones operativas diarias'
    },
    'experience.description.addixo.1': {
      en: 'Contributed to ADDIXO Smart Factory, an enterprise MOM/MES solution designed to digitize and optimize manufacturing processes',
      fr: 'Contribué à ADDIXO Smart Factory, une solution MOM/MES d\'entreprise conçue pour numériser et optimiser les processus de fabrication',
      ar: 'المساهمة في ADDIXO Smart Factory، حل MOM/MES للمؤسسات مصمم لرقمنة وتحسين عمليات التصنيع',
      es: 'Contribuí a ADDIXO Smart Factory, una solución MOM/MES empresarial diseñada para digitalizar y optimizar procesos de fabricación'
    },
    'experience.description.addixo.2': {
      en: 'Worked on systems that aggregate real-time shop floor data from multiple sources to provide production KPIs, quality metrics, and operational visibility',
      fr: 'Travail sur des systèmes qui agrègent les données en temps réel de l\'atelier provenant de plusieurs sources pour fournir des KPI de production, des métriques de qualité et une visibilité opérationnelle',
      ar: 'العمل على أنظمة تجمع بيانات أرضية المتجر في الوقت الفعلي من مصادر متعددة لتوفير مؤشرات الأداء الرئيسية للإنتاج ومقاييس الجودة والرؤية التشغيلية',
      es: 'Trabajé en sistemas que agregan datos en tiempo real del piso de producción de múltiples fuentes para proporcionar KPI de producción, métricas de calidad y visibilidad operativa'
    },
    'experience.description.addixo.3': {
      en: 'Designed and implemented a new E-Kanban module, supporting lean "zero-paper" manufacturing workflows',
      fr: 'Conception et implémentation d\'un nouveau module E-Kanban, supportant les flux de travail de fabrication lean "zéro papier"',
      ar: 'تصميم وتنفيذ وحدة E-Kanban جديدة، تدعم سير عمل التصنيع الهزيل "خالي من الورق"',
      es: 'Diseñé e implementé un nuevo módulo E-Kanban, apoyando flujos de trabajo de fabricación lean "sin papel"'
    },
    'experience.description.addixo.4': {
      en: 'Helped integrate production stakeholders, equipment, and information systems into a unified digital platform',
      fr: 'Aide à l\'intégration des parties prenantes de la production, des équipements et des systèmes d\'information dans une plateforme numérique unifiée',
      ar: 'المساعدة في دمج أصحاب المصلحة في الإنتاج والمعدات وأنظمة المعلومات في منصة رقمية موحدة',
      es: 'Ayudé a integrar partes interesadas de producción, equipos y sistemas de información en una plataforma digital unificada'
    },
    'experience.description.addixo.5': {
      en: 'Gained hands-on experience with industrial-scale applications, real-time data flows, and manufacturing process digitization',
      fr: 'Acquisition d\'une expérience pratique avec des applications à l\'échelle industrielle, des flux de données en temps réel et la numérisation des processus de fabrication',
      ar: 'اكتساب خبرة عملية مع تطبيقات على نطاق صناعي وتدفقات البيانات في الوقت الفعلي ورقمنة عمليات التصنيع',
      es: 'Obtuve experiencia práctica con aplicaciones a escala industrial, flujos de datos en tiempo real y digitalización de procesos de fabricación'
    },
    'experience.description.atfp.1': {
      en: 'Designed and developed a desktop-based management application to digitize internship and intern administration, replacing manual paper-based processes',
      fr: 'Conception et développement d\'une application de gestion basée sur le bureau pour numériser l\'administration des stages et des stagiaires, remplaçant les processus manuels basés sur le papier',
      ar: 'تصميم وتطوير تطبيق إدارة قائم على سطح المكتب لرقمنة إدارة التدريب والمتدربين، ليحل محل العمليات اليدوية القائمة على الورق',
      es: 'Diseñé y desarrollé una aplicación de gestión basada en escritorio para digitalizar la administración de pasantías y pasantes, reemplazando procesos manuales basados en papel'
    },
    'experience.description.atfp.2': {
      en: 'Centralized intern records, internship tracking, and archival data into a single digital system, improving data accessibility and organization',
      fr: 'Centralisation des dossiers des stagiaires, du suivi des stages et des données d\'archives dans un système numérique unique, améliorant l\'accessibilité et l\'organisation des données',
      ar: 'تجميع سجلات المتدربين وتتبع التدريب والبيانات الأرشيفية في نظام رقمي واحد، مما يحسن إمكانية الوصول إلى البيانات وتنظيمها',
      es: 'Centralicé registros de pasantes, seguimiento de pasantías y datos de archivo en un sistema digital único, mejorando la accesibilidad y organización de datos'
    },
    'experience.description.atfp.3': {
      en: 'Implemented the application using HTML, CSS, JavaScript, and PHP, covering UI, business logic, and data handling',
      fr: 'Implémentation de l\'application en utilisant HTML, CSS, JavaScript et PHP, couvrant l\'interface utilisateur, la logique métier et la gestion des données',
      ar: 'تنفيذ التطبيق باستخدام HTML و CSS و JavaScript و PHP، يغطي واجهة المستخدم والمنطق التجاري ومعالجة البيانات',
      es: 'Implementé la aplicación usando HTML, CSS, JavaScript y PHP, cubriendo UI, lógica de negocio y manejo de datos'
    },
    'experience.description.atfp.4': {
      en: 'Delivered an end-to-end solution used internally, eliminating reliance on physical archives and reducing administrative overhead',
      fr: 'Livraison d\'une solution de bout en bout utilisée en interne, éliminant la dépendance aux archives physiques et réduisant la charge administrative',
      ar: 'تقديم حل شامل مستخدم داخليًا، مما يلغي الاعتماد على الأرشيفات المادية ويقلل من النفقات الإدارية',
      es: 'Entregué una solución de extremo a extremo utilizada internamente, eliminando la dependencia de archivos físicos y reduciendo la sobrecarga administrativa'
    },
    'experience.technology.fullStackDevelopment': {
      en: 'Full-Stack Development',
      fr: 'Développement Full Stack',
      ar: 'تطوير الويب الشامل',
      es: 'Desarrollo Full Stack'
    },
    'experience.technology.systemFixes': {
      en: 'System Fixes',
      fr: 'Corrections Système',
      ar: 'إصلاحات النظام',
      es: 'Correcciones de Sistema'
    },
    'experience.technology.performanceOptimization': {
      en: 'Performance Optimization',
      fr: 'Optimisation des Performances',
      ar: 'تحسين الأداء',
      es: 'Optimización de Rendimiento'
    },
    'experience.technology.clientSolutions': {
      en: 'Client Solutions',
      fr: 'Solutions Client',
      ar: 'حلول العملاء',
      es: 'Soluciones para Clientes'
    },
    'experience.technology.siteMonitoringSystems': {
      en: 'Site Monitoring Systems',
      fr: 'Systèmes de Surveillance de Sites',
      ar: 'أنظمة مراقبة المواقع',
      es: 'Sistemas de Monitoreo de Sitios'
    },
    'experience.technology.accessControl': {
      en: 'Access Control',
      fr: 'Contrôle d\'Accès',
      ar: 'التحكم في الوصول',
      es: 'Control de Acceso'
    },
    'experience.technology.cctv': {
      en: 'CCTV',
      fr: 'Vidéosurveillance',
      ar: 'كاميرات المراقبة',
      es: 'Videovigilancia'
    },
    'experience.technology.workforceManagement': {
      en: 'Workforce Management',
      fr: 'Gestion de la Main-d\'œuvre',
      ar: 'إدارة القوى العاملة',
      es: 'Gestión de la Fuerza Laboral'
    },
    'experience.technology.mesMom': {
      en: 'MES/MOM',
      fr: 'MES/MOM',
      ar: 'MES/MOM',
      es: 'MES/MOM'
    },
    'experience.technology.smartFactory': {
      en: 'Smart Factory',
      fr: 'Usine Intelligente',
      ar: 'المصنع الذكي',
      es: 'Fábrica Inteligente'
    },
    'experience.technology.leanManufacturing': {
      en: 'Lean Manufacturing',
      fr: 'Fabrication Lean',
      ar: 'التصنيع الهزيل',
      es: 'Fabricación Lean'
    },
    'experience.technology.angular': {
      en: 'Angular',
      fr: 'Angular',
      ar: 'Angular',
      es: 'Angular'
    },
    'experience.technology.springBoot': {
      en: 'Spring Boot',
      fr: 'Spring Boot',
      ar: 'Spring Boot',
      es: 'Spring Boot'
    },
    'experience.technology.html': {
      en: 'HTML',
      fr: 'HTML',
      ar: 'HTML',
      es: 'HTML'
    },
    'experience.technology.css': {
      en: 'CSS',
      fr: 'CSS',
      ar: 'CSS',
      es: 'CSS'
    },
    'experience.technology.javascript': {
      en: 'JavaScript',
      fr: 'JavaScript',
      ar: 'JavaScript',
      es: 'JavaScript'
    },
    'experience.technology.php': {
      en: 'PHP',
      fr: 'PHP',
      ar: 'PHP',
      es: 'PHP'
    },

    // Skills Section
    'skills.title': {
      en: 'Core Technical Skills & Expertise',
      fr: 'Compétences Techniques Essentielles & Expertise',
      ar: 'المهارات التقنية الأساسية والخبرة',
      es: 'Habilidades Técnicas Fundamentales y Experiencia'
    },
    'skills.subtitle': {
      en: 'Core technical competencies and professional expertise',
      fr: 'Compétences techniques fondamentales et expertise professionnelle',
      ar: 'الكفاءات التقنية الأساسية والخبرة المهنية',
      es: 'Competencias técnicas fundamentales y experiencia profesional'
    },
    'skills.frontend': {
      en: 'Front-End / Angular',
      fr: 'Front-End / Angular',
      ar: 'الواجهة الأمامية / Angular',
      es: 'Front-End / Angular'
    },
    'skills.backend': {
      en: 'Back-End / Spring Boot',
      fr: 'Back-End / Spring Boot',
      ar: 'الخلفية / Spring Boot',
      es: 'Back-End / Spring Boot'
    },
    'skills.databases': {
      en: 'Databases',
      fr: 'Bases de Données',
      ar: 'قواعد البيانات',
      es: 'Bases de Datos'
    },
    'skills.architecture': {
      en: 'Architecture & Systems',
      fr: 'Architecture & Systèmes',
      ar: 'الهندسة المعمارية والأنظمة',
      es: 'Arquitectura y Sistemas'
    },
    'skills.devops': {
      en: 'DevOps & Production',
      fr: 'DevOps & Production',
      ar: 'DevOps والإنتاج',
      es: 'DevOps y Producción'
    },
    'skills.security': {
      en: 'Security',
      fr: 'Sécurité',
      ar: 'الأمان',
      es: 'Seguridad'
    },
    'skills.testing': {
      en: 'Testing & Quality',
      fr: 'Tests & Qualité',
      ar: 'الاختبار والجودة',
      es: 'Pruebas y Calidad'
    },
    'skills.product': {
      en: 'UX & Product',
      fr: 'UX & Produit',
      ar: 'UX والمنتج',
      es: 'UX y Producto'
    },
    'skills.professional': {
      en: 'Professional Skills',
      fr: 'Compétences Professionnelles',
      ar: 'المهارات المهنية',
      es: 'Habilidades Profesionales'
    },
    'skills.creative': {
      en: 'Creative / Media Skills',
      fr: 'Compétences Créatives / Médias',
      ar: 'المهارات الإبداعية / الوسائط',
      es: 'Habilidades Creativas / Medios'
    },
    // Frontend Skills
    'skills.frontend.standalone': {
      en: 'Angular Standalone Components, Guards & Interceptors',
      fr: 'Composants Angular Autonomes, Guards et Intercepteurs',
      ar: 'مكونات Angular المستقلة، Guards و Interceptors',
      es: 'Componentes Angular Independientes, Guards e Interceptores'
    },
    'skills.frontend.forms': {
      en: 'Reactive Forms, RxJS (Observables, Operators)',
      fr: 'Formulaires Réactifs, RxJS (Observables, Opérateurs)',
      ar: 'النماذج التفاعلية، RxJS (Observables، المشغلين)',
      es: 'Formularios Reactivos, RxJS (Observables, Operadores)'
    },
    'skills.frontend.detection': {
      en: 'Change Detection (OnPush), Lazy Loading Modules',
      fr: 'Détection de Changement (OnPush), Modules de Chargement Différé',
      ar: 'اكتشاف التغيير (OnPush)، وحدات التحميل المؤجل',
      es: 'Detección de Cambios (OnPush), Módulos de Carga Diferida'
    },
    'skills.frontend.i18n': {
      en: 'Internationalization (i18n), Accessibility (ARIA basics)',
      fr: 'Internationalisation (i18n), Accessibilité (Bases ARIA)',
      ar: 'التدويل (i18n)، إمكانية الوصول (أساسيات ARIA)',
      es: 'Internacionalización (i18n), Accesibilidad (Básicos ARIA)'
    },
    // Backend Skills
    'skills.backend.controllers': {
      en: 'Spring Boot REST Controllers',
      fr: 'Contrôleurs REST Spring Boot',
      ar: 'وحدات تحكم REST Spring Boot',
      es: 'Controladores REST Spring Boot'
    },
    'skills.backend.jpa': {
      en: 'Spring Data JPA',
      fr: 'Spring Data JPA',
      ar: 'Spring Data JPA',
      es: 'Spring Data JPA'
    },
    'skills.backend.exception': {
      en: 'Exception Handling',
      fr: 'Gestion des Exceptions',
      ar: 'معالجة الاستثناءات',
      es: 'Manejo de Excepciones'
    },
    'skills.backend.dto': {
      en: 'DTOs & Validation',
      fr: 'DTOs et Validation',
      ar: 'DTOs والتحقق',
      es: 'DTOs y Validación'
    },
    'skills.backend.security': {
      en: 'Security Concepts (JWT, Roles)',
      fr: 'Concepts de Sécurité (JWT, Rôles)',
      ar: 'مفاهيم الأمان (JWT، الأدوار)',
      es: 'Conceptos de Seguridad (JWT, Roles)'
    },
    'skills.backend.config': {
      en: 'Application Configuration (Profiles)',
      fr: 'Configuration d\'Application (Profils)',
      ar: 'تكوين التطبيق (الملفات الشخصية)',
      es: 'Configuración de Aplicación (Perfiles)'
    },
    // Database Skills
    'skills.databases.mysql': {
      en: 'MySQL',
      fr: 'MySQL',
      ar: 'MySQL',
      es: 'MySQL'
    },
    'skills.databases.postgresql': {
      en: 'PostgreSQL',
      fr: 'PostgreSQL',
      ar: 'PostgreSQL',
      es: 'PostgreSQL'
    },
    'skills.databases.indexing': {
      en: 'Indexing & Basic Query Optimization',
      fr: 'Indexation et Optimisation de Requêtes de Base',
      ar: 'الفهرسة وتحسين الاستعلامات الأساسي',
      es: 'Indexación y Optimización Básica de Consultas'
    },
    'skills.databases.optimization': {
      en: 'Indexing & Basic Query Optimization',
      fr: 'Indexation et Optimisation de Requêtes de Base',
      ar: 'الفهرسة وتحسين الاستعلامات الأساسي',
      es: 'Indexación y Optimización Básica de Consultas'
    },
    'skills.databases.migrations': {
      en: 'Database Migrations (Flyway / Liquibase exposure)',
      fr: 'Migrations de Base de Données (exposition Flyway / Liquibase)',
      ar: 'هجرات قاعدة البيانات (تعرض Flyway / Liquibase)',
      es: 'Migraciones de Base de Datos (exposición Flyway / Liquibase)'
    },
    // Architecture Skills
    'skills.architecture.mvc': {
      en: 'MVC / Layered Architecture',
      fr: 'Architecture MVC / En Couches',
      ar: 'MVC / الهندسة المعمارية ذات الطبقات',
      es: 'Arquitectura MVC / Por Capas'
    },
    'skills.architecture.client': {
      en: 'Client–Server Architecture',
      fr: 'Architecture Client–Serveur',
      ar: 'هندسة العميل والخادم',
      es: 'Arquitectura Cliente–Servidor'
    },
    'skills.architecture.rest': {
      en: 'REST API Design Principles',
      fr: 'Principes de Conception d\'API REST',
      ar: 'مبادئ تصميم REST API',
      es: 'Principios de Diseño de API REST'
    },
    'skills.architecture.modular': {
      en: 'Modular Code Organization',
      fr: 'Organisation de Code Modulaire',
      ar: 'تنظيم الكود المعياري',
      es: 'Organización de Código Modular'
    },
    'skills.architecture.separation': {
      en: 'Separation of Concerns',
      fr: 'Séparation des Préoccupations',
      ar: 'فصل الاهتمامات',
      es: 'Separación de Responsabilidades'
    },
    // DevOps Skills
    'skills.devops.linux': {
      en: 'Linux CLI basics',
      fr: 'Bases de la Ligne de Commande Linux',
      ar: 'أساسيات سطر أوامر Linux',
      es: 'Básicos de CLI Linux'
    },
    'skills.devops.config': {
      en: 'Environment-based configuration',
      fr: 'Configuration basée sur l\'environnement',
      ar: 'التكوين القائم على البيئة',
      es: 'Configuración basada en entorno'
    },
    'skills.devops.pipelines': {
      en: 'Build & Deployment Pipelines (CI/CD exposure)',
      fr: 'Pipelines de Build et Déploiement (exposition CI/CD)',
      ar: 'خطوط أنابيب البناء والنشر (تعرض CI/CD)',
      es: 'Pipelines de Build y Despliegue (exposición CI/CD)'
    },
    'skills.devops.debugging': {
      en: 'Production debugging & log analysis',
      fr: 'Débogage en Production et Analyse de Logs',
      ar: 'تصحيح الأخطاء في الإنتاج وتحليل السجلات',
      es: 'Depuración en Producción y Análisis de Logs'
    },
    // Security Skills
    'skills.security.cors': {
      en: 'CORS & CSRF awareness',
      fr: 'Conscience CORS & CSRF',
      ar: 'الوعي بـ CORS و CSRF',
      es: 'Conciencia CORS y CSRF'
    },
    'skills.security.csrf': {
      en: 'CORS & CSRF awareness',
      fr: 'Conscience CORS & CSRF',
      ar: 'الوعي بـ CORS و CSRF',
      es: 'Conciencia CORS y CSRF'
    },
    'skills.security.auth': {
      en: 'Secure authentication flows, password hashing concepts',
      fr: 'Flux d\'Authentification Sécurisés, concepts de hachage de mots de passe',
      ar: 'تدفقات المصادقة الآمنة، مفاهيم تجزئة كلمات المرور',
      es: 'Flujos de autenticación seguros, conceptos de hash de contraseñas'
    },
    'skills.security.hashing': {
      en: 'Secure authentication flows, password hashing concepts',
      fr: 'Flux d\'Authentification Sécurisés, concepts de hachage de mots de passe',
      ar: 'تدفقات المصادقة الآمنة، مفاهيم تجزئة كلمات المرور',
      es: 'Flujos de autenticación seguros, conceptos de hash de contraseñas'
    },
    'skills.security.owasp': {
      en: 'OWASP Top 10 awareness',
      fr: 'Conscience OWASP Top 10',
      ar: 'الوعي بـ OWASP Top 10',
      es: 'Conciencia OWASP Top 10'
    },
    // Testing Skills
    'skills.testing.unit': {
      en: 'Unit Testing',
      fr: 'Tests Unitaires',
      ar: 'اختبار الوحدة',
      es: 'Pruebas Unitarias'
    },
    'skills.testing.integration': {
      en: 'Integration Testing awareness',
      fr: 'Conscience des Tests d\'Intégration',
      ar: 'الوعي باختبار التكامل',
      es: 'Conciencia de Pruebas de Integración'
    },
    'skills.testing.debugging': {
      en: 'Debugging with browser dev tools',
      fr: 'Débogage avec les Outils de Développement du Navigateur',
      ar: 'التصحيح باستخدام أدوات مطور المتصفح',
      es: 'Depuración con Herramientas de Desarrollo del Navegador'
    },
    'skills.testing.reviews': {
      en: 'Code reviews',
      fr: 'Revues de Code',
      ar: 'مراجعات الكود',
      es: 'Revisiones de Código'
    },
    'skills.testing.refactoring': {
      en: 'Refactoring legacy systems',
      fr: 'Refactorisation de Systèmes Hérités',
      ar: 'إعادة هيكلة الأنظمة القديمة',
      es: 'Refactorización de Sistemas Legacy'
    },
    // Product Skills
    'skills.product.ux': {
      en: 'UX-oriented UI structuring',
      fr: 'Structuration d\'Interface Orientée UX',
      ar: 'هيكلة واجهة المستخدم الموجهة نحو UX',
      es: 'Estructuración de UI Orientada a UX'
    },
    'skills.product.performance': {
      en: 'Performance-first UI design',
      fr: 'Conception d\'Interface Prioritaire en Performance',
      ar: 'تصميم واجهة المستخدم ذات الأولوية للأداء',
      es: 'Diseño de UI con Prioridad en Rendimiento'
    },
    'skills.product.workflow': {
      en: 'User workflow optimization',
      fr: 'Optimisation du Flux de Travail Utilisateur',
      ar: 'تحسين سير عمل المستخدم',
      es: 'Optimización del Flujo de Trabajo del Usuario'
    },
    // Professional Skills
    'skills.professional.documentation': {
      en: 'Technical Documentation',
      fr: 'Documentation Technique',
      ar: 'التوثيق التقني',
      es: 'Documentación Técnica'
    },
    'skills.professional.codebases': {
      en: 'Reading & understanding large codebases',
      fr: 'Lecture et Compréhension de Grandes Bases de Code',
      ar: 'قراءة وفهم قواعد الكود الكبيرة',
      es: 'Lectura y Comprensión de Grandes Bases de Código'
    },
    'skills.professional.refactoring': {
      en: 'Refactoring legacy systems',
      fr: 'Refactorisation de Systèmes Hérités',
      ar: 'إعادة هيكلة الأنظمة القديمة',
      es: 'Refactorización de Sistemas Legacy'
    },
    'skills.professional.production': {
      en: 'Working with real production constraints',
      fr: 'Travail avec les Contraintes de Production Réelles',
      ar: 'العمل مع قيود الإنتاج الحقيقية',
      es: 'Trabajar con Restricciones de Producción Reales'
    },
    // Creative Skills
    'skills.creative.illustrator': {
      en: 'Adobe Illustrator',
      fr: 'Adobe Illustrator',
      ar: 'Adobe Illustrator',
      es: 'Adobe Illustrator'
    },
    'skills.creative.image': {
      en: 'Image Processing & Retouching',
      fr: 'Traitement et Retouche d\'Images',
      ar: 'معالجة الصور والتنميق',
      es: 'Procesamiento y Retoque de Imágenes'
    },
    'skills.creative.video': {
      en: 'Adobe Premiere Pro, After Effects, Filmora',
      fr: 'Adobe Premiere Pro, After Effects, Filmora',
      ar: 'Adobe Premiere Pro، After Effects، Filmora',
      es: 'Adobe Premiere Pro, After Effects, Filmora'
    },
    'skills.creative.animation': {
      en: 'Cartoon Animator / Motion Graphics',
      fr: 'Cartoon Animator / Graphismes Animés',
      ar: 'Cartoon Animator / الرسوم المتحركة',
      es: 'Cartoon Animator / Gráficos en Movimiento'
    },

    // Projects Section
    // Soft Skills Section
    'softSkills.title': {
      en: 'Leadership, Communication & Professional Competencies',
      fr: 'Leadership, Communication & Compétences Professionnelles',
      ar: 'القيادة والتواصل والكفاءات المهنية',
      es: 'Liderazgo, Comunicación y Competencias Profesionales'
    },
    'softSkills.subtitle': {
      en: '',
      fr: '',
      ar: '',
      es: ''
    },
    'softSkills.leadership': {
      en: 'Leadership & Responsibility',
      fr: 'Leadership & Responsabilité',
      ar: 'القيادة والمسؤولية',
      es: 'Liderazgo y Responsabilidad'
    },
    'softSkills.leadership.teamLeadership': {
      en: 'Led diverse teams in technical and volunteer projects, coordinating tasks and delivering results on time',
      fr: 'Dirigé des équipes diversifiées dans des projets techniques et bénévoles, coordonné les tâches et livré des résultats dans les délais',
      ar: 'قادت فرق متنوعة في المشاريع التقنية والتطوعية، وتنسيق المهام وتسليم النتائج في الوقت المحدد',
      es: 'Lideré equipos diversos en proyectos técnicos y voluntarios, coordinando tareas y entregando resultados a tiempo'
    },
    'softSkills.leadership.decisionMaking': {
      en: 'Made decisions under pressure and assumed accountability for outcomes',
      fr: 'Pris des décisions sous pression et assumé la responsabilité des résultats',
      ar: 'اتخذت قرارات تحت الضغط وتحملت المسؤولية عن النتائج',
      es: 'Tomé decisiones bajo presión y asumí la responsabilidad de los resultados'
    },
    'softSkills.leadership.diverseTeams': {
      en: 'Mentored junior developers and team members, supporting skill growth and knowledge transfer',
      fr: 'Mentoré des développeurs juniors et des membres d\'équipe, soutenu la croissance des compétences et le transfert de connaissances',
      ar: 'أرشدت المطورين المبتدئين وأعضاء الفريق، ودعمت نمو المهارات ونقل المعرفة',
      es: 'Mentoricé desarrolladores junior y miembros del equipo, apoyando el crecimiento de habilidades y la transferencia de conocimientos'
    },
    'softSkills.communication': {
      en: 'Communication & Collaboration',
      fr: 'Communication & Collaboration',
      ar: 'التواصل والتعاون',
      es: 'Comunicación y Colaboración'
    },
    'softSkills.communication.clearCommunication': {
      en: 'Effectively communicated complex technical concepts to non-technical stakeholders',
      fr: 'Communiqué efficacement des concepts techniques complexes aux parties prenantes non techniques',
      ar: 'تواصلت بفعالية مع المفاهيم التقنية المعقدة لأصحاب المصلحة غير التقنيين',
      es: 'Comuniqué efectivamente conceptos técnicos complejos a partes interesadas no técnicas'
    },
    'softSkills.communication.technicalTranslation': {
      en: 'Collaborated in cross-cultural, multilingual environments',
      fr: 'Collaboré dans des environnements interculturels et multilingues',
      ar: 'تعاونت في بيئات متعددة الثقافات واللغات',
      es: 'Colaboré en entornos interculturales y multilingües'
    },
    'softSkills.communication.crossCultural': {
      en: 'Facilitated structured discussions and team meetings to drive project alignment',
      fr: 'Facilité des discussions structurées et des réunions d\'équipe pour favoriser l\'alignement des projets',
      ar: 'سهلت المناقشات المنظمة واجتماعات الفريق لدفع محاذاة المشروع',
      es: 'Facilitado discusiones estructuradas y reuniones de equipo para impulsar la alineación del proyecto'
    },
    'softSkills.dialogue': {
      en: 'Conflict Resolution & Problem-Solving',
      fr: 'Résolution de Conflits & Résolution de Problèmes',
      ar: 'حل النزاعات وحل المشكلات',
      es: 'Resolución de Conflictos y Resolución de Problemas'
    },
    'softSkills.dialogue.facilitation': {
      en: 'Mediated conflicts and built consensus in team and project settings',
      fr: 'Médié des conflits et construit un consensus dans les contextes d\'équipe et de projet',
      ar: 'وسطت في النزاعات وبنيت إجماعاً في إعدادات الفريق والمشروع',
      es: 'Medié conflictos y construí consenso en entornos de equipo y proyecto'
    },
    'softSkills.dialogue.conflictResolution': {
      en: 'Practiced active listening to ensure understanding and resolution of issues',
      fr: 'Pratiqué l\'écoute active pour assurer la compréhension et la résolution des problèmes',
      ar: 'مارست الاستماع النشط لضمان الفهم وحل المشكلات',
      es: 'Practiqué la escucha activa para asegurar la comprensión y resolución de problemas'
    },
    'softSkills.dialogue.activeListening': {
      en: '',
      fr: '',
      ar: '',
      es: ''
    },
    'softSkills.execution': {
      en: 'Operational & Execution Skills',
      fr: 'Compétences Opérationnelles & d\'Exécution',
      ar: 'المهارات التشغيلية والتنفيذية',
      es: 'Habilidades Operacionales y de Ejecución'
    },
    'softSkills.execution.timeManagement': {
      en: 'Managed time and prioritized tasks in fast-paced, production-focused environments',
      fr: 'Géré le temps et priorisé les tâches dans des environnements rapides axés sur la production',
      ar: 'أدارت الوقت وأولت المهام في بيئات سريعة الخطى تركز على الإنتاج',
      es: 'Gestioné el tiempo y prioricé tareas en entornos rápidos centrados en la producción'
    },
    'softSkills.execution.adaptability': {
      en: 'Adapted to changing requirements while maintaining high-quality output',
      fr: 'Adapté aux exigences changeantes tout en maintenant une production de haute qualité',
      ar: 'تكيفت مع المتطلبات المتغيرة مع الحفاظ على إنتاج عالي الجودة',
      es: 'Adaptado a requisitos cambiantes mientras se mantiene una salida de alta calidad'
    },
    'softSkills.execution.productionConstraints': {
      en: 'Applied crisis management techniques to maintain project continuity',
      fr: 'Appliqué des techniques de gestion de crise pour maintenir la continuité du projet',
      ar: 'طبقت تقنيات إدارة الأزمات للحفاظ على استمرارية المشروع',
      es: 'Aplicado técnicas de gestión de crisis para mantener la continuidad del proyecto'
    },
    'softSkills.ethics': {
      en: 'Ethics & Community Leadership',
      fr: 'Éthique & Leadership Communautaire',
      ar: 'الأخلاق والقيادة المجتمعية',
      es: 'Ética y Liderazgo Comunitario'
    },
    'softSkills.ethics.humanitarian': {
      en: 'Led humanitarian initiatives with Tunisian Red Crescent, coordinating volunteers and community programs',
      fr: 'Dirigé des initiatives humanitaires avec le Croissant-Rouge Tunisien, coordonné des bénévoles et des programmes communautaires',
      ar: 'قادت المبادرات الإنسانية مع الهلال الأحمر التونسي، وتنسيق المتطوعين والبرامج المجتمعية',
      es: 'Lideré iniciativas humanitarias con la Media Luna Roja Tunecina, coordinando voluntarios y programas comunitarios'
    },
    'softSkills.ethics.youthLeadership': {
      en: 'Mentored youth in Scout leadership roles, promoting teamwork and personal development',
      fr: 'Mentoré des jeunes dans des rôles de leadership scout, promu le travail d\'équipe et le développement personnel',
      ar: 'أرشدت الشباب في أدوار القيادة الكشفية، وتعزيز العمل الجماعي والتطوير الشخصي',
      es: 'Mentoricé jóvenes en roles de liderazgo scout, promoviendo el trabajo en equipo y el desarrollo personal'
    },
    'softSkills.category': {
      en: 'skill category',
      fr: 'catégorie de compétences',
      ar: 'فئة مهارات',
      es: 'categoría de habilidades'
    },
    'softSkills.categories': {
      en: 'skill categories',
      fr: 'catégories de compétences',
      ar: 'فئات المهارات',
      es: 'categorías de habilidades'
    },
    'softSkills.competency': {
      en: 'competency',
      fr: 'compétence',
      ar: 'كفاءة',
      es: 'competencia'
    },
    'softSkills.competencies': {
      en: 'competencies',
      fr: 'compétences',
      ar: 'الكفاءات',
      es: 'competencias'
    },
    'softSkills.with': {
      en: 'with',
      fr: 'avec',
      ar: 'مع',
      es: 'con'
    },
    'softSkills.colon': {
      en: ':',
      fr: ' :',
      ar: ':',
      es: ':'
    },
    'softSkills.commaSeparator': {
      en: ', ',
      fr: ', ',
      ar: '، ',
      es: ', '
    },

    // Projects Section
    'projects.title': {
      en: 'Featured Projects',
      fr: 'Projets Principaux',
      ar: 'المشاريع المميزة',
      es: 'Proyectos Destacados'
    },
    'projects.view': {
      en: 'View Project',
      fr: 'Voir le Projet',
      ar: 'عرض المشروع',
      es: 'Ver Proyecto'
    },
    'projects.private': {
      en: 'Private Project',
      fr: 'Projet Privé',
      ar: 'مشروع خاص',
      es: 'Proyecto Privado'
    },
    'projects.privateMessage': {
      en: 'For security reasons, this application is private',
      fr: 'Pour des raisons de sécurité, cette application est privée',
      ar: 'لأسباب أمنية، هذا التطبيق خاص',
      es: 'Por razones de seguridad, esta aplicación es privada'
    },
    'projects.liveDemo': {
      en: 'Live Demo',
      fr: 'Démo Live',
      ar: 'عرض مباشر',
      es: 'Demo en Vivo'
    },
    'projects.github': {
      en: 'GitHub',
      fr: 'GitHub',
      ar: 'جيثب',
      es: 'GitHub'
    },
    'projects.features': {
      en: 'Key Features',
      fr: 'Fonctionnalités Clés',
      ar: 'الميزات الرئيسية',
      es: 'Características Principales'
    },
    'projects.technologies': {
      en: 'Technologies',
      fr: 'Technologies',
      ar: 'التقنيات',
      es: 'Tecnologías'
    },
    'projects.public': {
      en: 'Public Project',
      fr: 'Projet Public',
      ar: 'مشروع عام',
      es: 'Proyecto Público'
    },
    'projects.flipHint': {
      en: 'Click to see features',
      fr: 'Cliquez pour voir les fonctionnalités',
      ar: 'انقر لرؤية الميزات',
      es: 'Haz clic para ver las características'
    },
    'projects.flipBackHint': {
      en: 'Click to go back',
      fr: 'Cliquez pour revenir',
      ar: 'انقر للعودة',
      es: 'Haz clic para volver'
    },
    'projects.cardLabel': {
      en: 'Project Card',
      fr: 'Carte de Projet',
      ar: 'بطاقة المشروع',
      es: 'Tarjeta de Proyecto'
    },
    'projects.present': {
      en: 'Present',
      fr: 'Présent',
      ar: 'الحالي',
      es: 'Presente'
    },
    'projects.keyFeatures': {
      en: 'Key Features',
      fr: 'Fonctionnalités Clés',
      ar: 'الميزات الرئيسية',
      es: 'Características Principales'
    },
    'projects.viewCode': {
      en: 'View Code',
      fr: 'Voir le Code',
      ar: 'عرض الكود',
      es: 'Ver Código'
    },
    'projects.viewLive': {
      en: 'View Live',
      fr: 'Voir en Direct',
      ar: 'عرض مباشر',
      es: 'Ver en Vivo'
    },
    'projects.githubLink': {
      en: 'GitHub Repository',
      fr: 'Dépôt GitHub',
      ar: 'مستودع جيثب',
      es: 'Repositorio GitHub'
    },
    'projects.liveLink': {
      en: 'Live Demo',
      fr: 'Démo Live',
      ar: 'عرض مباشر',
      es: 'Demo en Vivo'
    },
    'projects.types.private': {
      en: 'Private Project',
      fr: 'Projet Privé',
      ar: 'مشروع خاص',
      es: 'Proyecto Privado'
    },
    'projects.types.full': {
      en: 'Full Project',
      fr: 'Projet Complet',
      ar: 'مشروع كامل',
      es: 'Proyecto Completo'
    },
    'projects.types.code': {
      en: 'Code Only',
      fr: 'Code Seulement',
      ar: 'الكود فقط',
      es: 'Solo Código'
    },
    'projects.types.demo': {
      en: 'Demo Only',
      fr: 'Démo Seulement',
      ar: 'العرض فقط',
      es: 'Solo Demo'
    },
    'projects.masterProject': {
      en: 'Master Project',
      fr: 'Projet Principal',
      ar: 'المشروع الرئيسي',
      es: 'Proyecto Principal'
    },
    'projects.masterProjectLabel': {
      en: 'Master Project Card',
      fr: 'Carte du Projet Principal',
      ar: 'بطاقة المشروع الرئيسي',
      es: 'Tarjeta del Proyecto Principal'
    },
    'projects.masterSubtitle': {
      en: 'Personal Finance Platform',
      fr: 'Plateforme de Finance Personnelle',
      ar: 'منصة التمويل الشخصي',
      es: 'Plataforma de Finanzas Personales'
    },
    'projects.otherProjects': {
      en: 'Other Projects',
      fr: 'Autres Projets',
      ar: 'مشاريع أخرى',
      es: 'Otros Proyectos'
    },
    'projects.project': {
      en: 'project',
      fr: 'projet',
      ar: 'مشروع',
      es: 'proyecto'
    },
    'projects.projects': {
      en: 'projects',
      fr: 'projets',
      ar: 'مشاريع',
      es: 'proyectos'
    },
    'projects.portfolioDescription': {
      en: 'Portfolio featuring',
      fr: 'Portfolio présentant',
      ar: 'محفظة تعرض',
      es: 'Portafolio que presenta'
    },
    'projects.and': {
      en: 'and',
      fr: 'et',
      ar: 'و',
      es: 'y'
    },
    'projects.technologiesUsed': {
      en: 'Technologies used',
      fr: 'Technologies utilisées',
      ar: 'التقنيات المستخدمة',
      es: 'Tecnologías utilizadas'
    },
    'projects.securityTitle': {
      en: 'Company Security Policy',
      fr: 'Politique de Sécurité de l\'Entreprise',
      ar: 'سياسة أمن الشركة',
      es: 'Política de Seguridad de la Empresa'
    },
    'projects.securityMessage': {
      en: 'Due to company security policies, the source code for this project cannot be shared publicly.',
      fr: 'En raison des politiques de sécurité de l\'entreprise, le code source de ce projet ne peut pas être partagé publiquement.',
      ar: 'بسبب سياسات أمن الشركة، لا يمكن مشاركة الكود المصدري لهذا المشروع علناً.',
      es: 'Debido a las políticas de seguridad de la empresa, el código fuente de este proyecto no puede ser compartido públicamente.'
    },
    'projects.screenshot': {
      en: 'screenshot',
      fr: 'capture d\'écran',
      ar: 'لقطة شاشة',
      es: 'captura de pantalla'
    },
    'projects.ekanban.title': {
      en: 'E-Kanban Integration',
      fr: 'Intégration E-Kanban',
      ar: 'تكامل إي-كانبان',
      es: 'Integración E-Kanban'
    },
    'projects.ekanban.description': {
      en: 'Developed and integrated E-Kanban module for enterprise Smart Factory platform. Defined requirements, wireframes, RESTful Spring Boot services, and Angular components with reactive forms, data tables, modals, and real-time charts. Delivered production-ready module for lean "zero-paper" manufacturing workflows.',
      fr: 'Développé et intégré le module E-Kanban pour la plateforme Smart Factory d\'entreprise. Défini les exigences, les maquettes, les services RESTful Spring Boot et les composants Angular avec formulaires réactifs, tableaux de données, modales et graphiques en temps réel. Livré un module prêt pour la production pour des flux de travail de fabrication lean "zéro papier".',
      ar: 'طورت ودمجت وحدة إي-كانبان لمنصة Smart Factory المؤسسية. حددت المتطلبات والرسوم البيانية وخدمات RESTful Spring Boot ومكونات Angular مع النماذج التفاعلية وجداول البيانات والنوافذ المنبثقة والرسوم البيانية في الوقت الفعلي. تم تسليم وحدة جاهزة للإنتاج لتدفقات عمل التصنيع الرشيق "صفر ورق".',
      es: 'Desarrollé e integré el módulo E-Kanban para la plataforma Smart Factory empresarial. Definí requisitos, wireframes, servicios RESTful Spring Boot y componentes Angular con formularios reactivos, tablas de datos, modales y gráficos en tiempo real. Entregué un módulo listo para producción para flujos de trabajo de fabricación lean "cero papel".'
    },
    'projects.alphavault.title': {
      en: 'Alpha Vault',
      fr: 'Alpha Vault',
      ar: 'ألفا فولت',
      es: 'Alpha Vault'
    },
    'projects.alphavault.description': {
      en: 'Lead full-stack developer: implemented core Spring Boot modules (Income, Expense, Savings, Debt, Investments) with JWT security and PostgreSQL. Built Angular standalone components for dashboards, charts, and responsive UX. Designed and deployed production-ready architecture supporting secure financial data management.',
      fr: 'Développeur full-stack principal : implémenté les modules Spring Boot principaux (Revenus, Dépenses, Épargne, Dette, Investissements) avec sécurité JWT et PostgreSQL. Construit des composants Angular autonomes pour les tableaux de bord, graphiques et UX responsive. Conçu et déployé une architecture prête pour la production supportant la gestion sécurisée des données financières.',
      ar: 'مطور ويب شامل رئيسي: نفذت وحدات سبرينج بوت الأساسية (الدخل، المصروفات، الادخار، الديون، الاستثمارات) مع أمان JWT وبوستجري إس كيو إل. بنيت مكونات أنجولار مستقلة للوحات التحكم والرسوم البيانية وتجربة المستخدم المتجاوبة. صممت ونشرت هندسة معمارية جاهزة للإنتاج تدعم إدارة آمنة للبيانات المالية.',
      es: 'Desarrollador full-stack principal: implementé módulos Spring Boot principales (Ingresos, Gastos, Ahorros, Deudas, Inversiones) con seguridad JWT y PostgreSQL. Construí componentes Angular independientes para dashboards, gráficos y UX responsive. Diseñé y desplegué una arquitectura lista para producción que soporta la gestión segura de datos financieros.'
    },
    'projects.climapulse.title': {
      en: 'ClimaPulse',
      fr: 'ClimaPulse',
      ar: 'كليما بولس',
      es: 'ClimaPulse'
    },
    'projects.climapulse.description': {
      en: 'Real-time weather insights: Spring Boot proxy with cached OpenWeatherMap integration; Angular standalone UI offering reactive city search, current conditions display and 72-hour forecast charts with dynamic theming.',
      fr: 'Aperçus météorologiques en temps réel : proxy Spring Boot avec intégration OpenWeatherMap en cache ; interface Angular autonome offrant une recherche de ville réactive, un affichage des conditions actuelles et des graphiques de prévisions sur 72 heures avec thème dynamique.',
      ar: 'رؤى الطقس في الوقت الفعلي: وكيل سبرينج بوت مع تكامل أوبن ويذر ماب المخزن مؤقتاً؛ واجهة أنجولار مستقلة تقدم بحث تفاعلي للمدن وعرض الظروف الحالية ورسوم بيانية للتنبؤات لمدة 72 ساعة مع تخصيص ديناميكي.',
      es: 'Información meteorológica en tiempo real: proxy Spring Boot con integración OpenWeatherMap en caché; UI Angular independiente que ofrece búsqueda reactiva de ciudades, visualización de condiciones actuales y gráficos de pronóstico de 72 horas con temática dinámica.'
    },
    'projects.warzone.title': {
      en: 'War Zone',
      fr: 'Zone de Guerre',
      ar: 'منطقة الحرب',
      es: 'Zona de Guerra'
    },
    'projects.warzone.description': {
      en: 'Built a Battleship-style engagement game in Angular: RxJS-powered turn management, randomized ship placement, hit/miss SCSS animations, shot counter, timer and win/lose modal.',
      fr: 'Construit un jeu d\'engagement style Bataille Navale en Angular : gestion des tours alimentée par RxJS, placement aléatoire des navires, animations SCSS hit/miss, compteur de tirs, minuteur et modal gagner/perdre.',
      ar: 'بنيت لعبة اشتباك على طراز معركة السفن في أنجولار: إدارة الأدوار المدعومة بـ RxJS، وضع السفن العشوائي، رسوم متحركة SCSS للضرب/الفقدان، عداد الطلقات، مؤقت ونافذة منبثقة للفوز/الخسارة.',
      es: 'Construí un juego de batalla estilo Batalla Naval en Angular: gestión de turnos impulsada por RxJS, colocación aleatoria de barcos, animaciones SCSS de acierto/fallo, contador de disparos, temporizador y modal de ganar/perder.'
    },
    'projects.auracast.title': {
      en: 'AuraCast',
      fr: 'AuraCast',
      ar: 'أوراكاست',
      es: 'AuraCast'
    },
    'projects.auracast.description': {
      en: 'Built a high-performance, real-time weather analytics platform using Angular 20. Implemented interactive maps, charts, and advanced meteorological analytics with responsive UI.',
      fr: 'Construit une plateforme d\'analyse météorologique haute performance en temps réel utilisant Angular 20. Implémenté des cartes interactives, des graphiques et des analyses météorologiques avancées avec une interface utilisateur responsive.',
      ar: 'بنيت منصة تحليل الطقس عالية الأداء في الوقت الفعلي باستخدام Angular 20. نفذت خرائط تفاعلية ورسوم بيانية وتحليلات أرصاد جوية متقدمة مع واجهة مستخدم متجاوبة.',
      es: 'Construí una plataforma de análisis meteorológico de alto rendimiento en tiempo real usando Angular 20. Implementé mapas interactivos, gráficos y análisis meteorológicos avanzados con interfaz de usuario responsive.'
    },
    'projects.aurafx.title': {
      en: 'AuraFX',
      fr: 'AuraFX',
      ar: 'أورا إف إكس',
      es: 'AuraFX'
    },
    'projects.aurafx.description': {
      en: 'Developed a real-time forex analytics platform providing multi-currency conversion, historical charts, and market insights. Built responsive UI components and integrated data visualization with Angular Material and Chart.js.',
      fr: 'Développé une plateforme d\'analyse forex en temps réel fournissant la conversion multi-devises, des graphiques historiques et des informations de marché. Construit des composants d\'interface utilisateur responsive et intégré la visualisation de données avec Angular Material et Chart.js.',
      ar: 'طورت منصة تحليل فوركس في الوقت الفعلي توفر تحويل العملات المتعددة والرسوم البيانية التاريخية ورؤى السوق. بنيت مكونات واجهة مستخدم متجاوبة ودمجت تصور البيانات مع Angular Material و Chart.js.',
      es: 'Desarrollé una plataforma de análisis de forex en tiempo real que proporciona conversión multi-moneda, gráficos históricos e información de mercado. Construí componentes de interfaz de usuario responsive e integré visualización de datos con Angular Material y Chart.js.'
    },
    'projects.introMaster': {
      en: 'Master Project — Alpha Vault | Personal Finance Platform',
      fr: 'Projet Principal — Alpha Vault | Plateforme de Finance Personnelle',
      ar: 'المشروع الرئيسي — Alpha Vault | منصة التمويل الشخصي',
      es: 'Proyecto Principal — Alpha Vault | Plataforma de Finanzas Personales'
    },
    'projects.introSecondary': {
      en: '',
      fr: '',
      ar: '',
      es: ''
    },
    'projects.technologies.Java': {
      en: 'Java',
      fr: 'Java',
      ar: 'جافا',
      es: 'Java'
    },
    'projects.technologies.SpringBoot': {
      en: 'Spring Boot',
      fr: 'Spring Boot',
      ar: 'سبرينج بوت',
      es: 'Spring Boot'
    },
    'projects.technologies.JPAHibernate': {
      en: 'JPA/Hibernate',
      fr: 'JPA/Hibernate',
      ar: 'JPA/Hibernate',
      es: 'JPA/Hibernate'
    },
    'projects.technologies.Angular': {
      en: 'Angular',
      fr: 'Angular',
      ar: 'أنجولار',
      es: 'Angular'
    },
    'projects.technologies.Swagger': {
      en: 'Swagger',
      fr: 'Swagger',
      ar: 'سواجر',
      es: 'Swagger'
    },
    'projects.technologies.GitLabCICD': {
      en: 'GitLab CI/CD',
      fr: 'GitLab CI/CD',
      ar: 'جيت لاب CI/CD',
      es: 'GitLab CI/CD'
    },
    'projects.technologies.JWT': {
      en: 'JWT',
      fr: 'JWT',
      ar: 'JWT',
      es: 'JWT'
    },
    'projects.technologies.PostgreSQL': {
      en: 'PostgreSQL',
      fr: 'PostgreSQL',
      ar: 'بوستجري إس كيو إل',
      es: 'PostgreSQL'
    },
    'projects.technologies.Chartjs': {
      en: 'Chart.js',
      fr: 'Chart.js',
      ar: 'شارت جي إس',
      es: 'Chart.js'
    },
    'projects.technologies.TypeScript': {
      en: 'TypeScript',
      fr: 'TypeScript',
      ar: 'تايب سكريبت',
      es: 'TypeScript'
    },
    'projects.technologies.Vercel': {
      en: 'Vercel',
      fr: 'Vercel',
      ar: 'فيرسيل',
      es: 'Vercel'
    },
    'projects.technologies.RxJS': {
      en: 'RxJS',
      fr: 'RxJS',
      ar: 'RxJS',
      es: 'RxJS'
    },
    'projects.technologies.ng2charts': {
      en: 'ng2-charts',
      fr: 'ng2-charts',
      ar: 'ng2-charts',
      es: 'ng2-charts'
    },
    'projects.technologies.Leafletjs': {
      en: 'Leaflet.js',
      fr: 'Leaflet.js',
      ar: 'ليفلت جي إس',
      es: 'Leaflet.js'
    },
    'projects.technologies.SCSS': {
      en: 'SCSS',
      fr: 'SCSS',
      ar: 'SCSS',
      es: 'SCSS'
    },
    'projects.technologies.ngxtranslatecore': {
      en: '@ngx-translate/core',
      fr: '@ngx-translate/core',
      ar: '@ngx-translate/core',
      es: '@ngx-translate/core'
    },
    'projects.technologies.AngularMaterial': {
      en: 'Angular Material',
      fr: 'Angular Material',
      ar: 'أنجولار ماتيريال',
      es: 'Angular Material'
    },
    'projects.technologies.Vitest': {
      en: 'Vitest',
      fr: 'Vitest',
      ar: 'فاي تست',
      es: 'Vitest'
    },

    // Education Section
    'education.title': {
      en: 'Education',
      fr: 'Éducation',
      ar: 'التعليم',
      es: 'Educación'
    },
    'education.gpa': {
      en: 'GPA',
      fr: 'Moyenne',
      ar: 'المعدل',
      es: 'Promedio'
    },
    'education.flipHint': {
      en: 'Click to see courses',
      fr: 'Cliquez pour voir les cours',
      ar: 'انقر لرؤية المواد',
      es: 'Haz clic para ver los cursos'
    },
    'education.keyCourses': {
      en: 'Key Courses',
      fr: 'Cours Principaux',
      ar: 'المواد الأساسية',
      es: 'Cursos Clave'
    },
    'education.flipBackHint': {
      en: 'Click to go back',
      fr: 'Cliquez pour revenir',
      ar: 'انقر للعودة',
      es: 'Haz clic para volver'
    },
    'education.bachelorDegree': {
      en: 'Bachelor of Science in Computer Science',
      fr: 'Licence en Informatique',
      ar: 'بكالوريوس في علوم الحاسوب',
      es: 'Licenciatura en Ciencias de la Computación'
    },
    'education.masterDegree': {
      en: 'Master of Science in Information Technology',
      fr: 'Master en Technologies de l\'Information',
      ar: 'ماجستير في تقنية المعلومات',
      es: 'Maestría en Tecnología de la Información'
    },
    'education.atlantisUniversity': {
      en: 'Atlantis University',
      fr: 'Université Atlantis',
      ar: 'جامعة أتلانتس',
      es: 'Universidad Atlantis'
    },
    'education.istic': {
      en: 'The Higher Institute of IT & Communication',
      fr: 'L\'Institut Supérieur des Technologies de l\'Information et de la Communication',
      ar: 'المعهد العالي لتكنولوجيا المعلومات والاتصالات',
      es: 'El Instituto Superior de Tecnologías de la Información y Comunicación'
    },
    'education.miami': {
      en: 'Miami, FL',
      fr: 'Miami, FL',
      ar: 'ميامي، فلوريدا',
      es: 'Miami, FL'
    },
    'education.tunis': {
      en: 'Tunis, Tunisia',
      fr: 'Tunis, Tunisie',
      ar: 'تونس، تونس',
      es: 'Túnez, Túnez'
    },

    // Education Descriptions
    'education.description.master': {
      en: 'Elevated to architecting safe, scalable cloud and networking environments under real demands.',
      fr: 'Élevé à l\'architecture d\'environnements cloud et réseau sécurisés et évolutifs sous des demandes réelles.',
      ar: 'تم الارتقاء إلى تصميم بيئات سحابية وشبكية آمنة وقابلة للتطوير تحت متطلبات حقيقية.',
      es: 'Elevado a la arquitectura de entornos cloud y de red seguros y escalables bajo demandas reales.'
    },
    'education.description.bachelor': {
      en: 'Gained hands-on experience delivering end-to-end software solutions with clean, maintainable code.',
      fr: 'Acquis une expérience pratique dans la livraison de solutions logicielles de bout en bout avec un code propre et maintenable.',
      ar: 'اكتسبت خبرة عملية في تقديم حلول برمجية شاملة مع كود نظيف وقابل للصيانة.',
      es: 'Adquirí experiencia práctica entregando soluciones de software de extremo a extremo con código limpio y mantenible.'
    },

    // Course Translations
    'education.course.networkArchitecture': {
      en: 'Network Architecture & Protocols',
      fr: 'Architecture Réseau & Protocoles',
      ar: 'هندسة الشبكات والبروتوكولات',
      es: 'Arquitectura de Redes y Protocolos'
    },
    'education.course.cloudInfrastructure': {
      en: 'Cloud Infrastructure & DevSecOps',
      fr: 'Infrastructure Cloud & DevSecOps',
      ar: 'البنية التحتية السحابية و DevSecOps',
      es: 'Infraestructura Cloud y DevSecOps'
    },
    'education.course.securityEngineering': {
      en: 'Security Engineering & Incident Response',
      fr: 'Ingénierie de Sécurité & Réponse aux Incidents',
      ar: 'هندسة الأمان والاستجابة للحوادث',
      es: 'Ingeniería de Seguridad y Respuesta a Incidentes'
    },
    'education.course.systemArchitecture': {
      en: 'System Architecture & Scalability',
      fr: 'Architecture Système & Évolutivité',
      ar: 'هندسة الأنظمة وقابلية التطوير',
      es: 'Arquitectura de Sistemas y Escalabilidad'
    },
    'education.course.virtualization': {
      en: 'Virtualization & Container Orchestration',
      fr: 'Virtualisation & Orchestration de Conteneurs',
      ar: 'التقنيات الافتراضية وتنسيق الحاويات',
      es: 'Virtualización y Orquestación de Contenedores'
    },
    'education.course.emergingTechnologies': {
      en: 'Emerging Technologies & Digital Transformation',
      fr: 'Technologies Émergentes & Transformation Numérique',
      ar: 'التقنيات الناشئة والتحول الرقمي',
      es: 'Tecnologías Emergentes y Transformación Digital'
    },
    'education.course.dataStructures': {
      en: 'Data Structures & Algorithms',
      fr: 'Structures de Données & Algorithmes',
      ar: 'هياكل البيانات والخوارزميات',
      es: 'Estructuras de Datos y Algoritmos'
    },
    'education.course.webDevelopment': {
      en: 'Advanced Web Development',
      fr: 'Développement Web Avancé',
      ar: 'تطوير الويب المتقدم',
      es: 'Desarrollo Web Avanzado'
    },
    'education.course.softwareQuality': {
      en: 'Software Quality Assurance',
      fr: 'Assurance Qualité Logicielle',
      ar: 'ضمان جودة البرمجيات',
      es: 'Aseguramiento de Calidad de Software'
    },
    'education.course.cloudComputing': {
      en: 'Cloud Computing Fundamentals',
      fr: 'Fondamentaux du Cloud Computing',
      ar: 'أساسيات الحوسبة السحابية',
      es: 'Fundamentos de Computación en la Nube'
    },
    'education.course.devops': {
      en: 'DevOps & CI/CD Practices',
      fr: 'DevOps & Pratiques CI/CD',
      ar: 'DevOps وممارسات CI/CD',
      es: 'DevOps y Prácticas CI/CD'
    },

    // Certifications Section
    'certifications.title': {
      en: 'Certifications',
      fr: 'Certifications',
      ar: 'الشهادات',
      es: 'Certificaciones'
    },
    'certifications.issueDate': {
      en: 'Issued',
      fr: 'Délivré',
      ar: 'تاريخ الإصدار',
      es: 'Emitido'
    },
    'certifications.expiryDate': {
      en: 'Expires',
      fr: 'Expire',
      ar: 'تاريخ الانتهاء',
      es: 'Expira'
    },
    'certifications.credentialId': {
      en: 'Credential ID',
      fr: 'ID de Crédential',
      ar: 'معرف الشهادة',
      es: 'ID de Credencial'
    },
    'certifications.view': {
      en: 'View Certificate',
      fr: 'Voir le Certificat',
      ar: 'عرض الشهادة',
      es: 'Ver Certificado'
    },
    'certifications.professionalTraining': {
      en: 'Professional Training',
      fr: 'Formation Professionnelle',
      ar: 'التدريب المهني',
      es: 'Formación Profesional'
    },
    // Certification Categories
    'certifications.category.projectManagement': {
      en: 'Project Management & Leadership',
      fr: 'Gestion de Projet & Leadership',
      ar: 'إدارة المشاريع والقيادة',
      es: 'Gestión de Proyectos y Liderazgo'
    },
    'certifications.category.softwareEngineering': {
      en: 'Software Engineering & Data',
      fr: 'Ingénierie Logicielle & Données',
      ar: 'هندسة البرمجيات والبيانات',
      es: 'Ingeniería de Software y Datos'
    },
    'certifications.category.cloudSecurity': {
      en: 'Cloud, Security & Risk',
      fr: 'Cloud, Sécurité & Risque',
      ar: 'الحوسبة السحابية والأمن والمخاطر',
      es: 'Nube, Seguridad y Riesgo'
    },
    'certifications.category.strategy': {
      en: 'Strategy & IT Governance',
      fr: 'Stratégie & Gouvernance IT',
      ar: 'الاستراتيجية وحوكمة تكنولوجيا المعلومات',
      es: 'Estrategia y Gobernanza de TI'
    },
    'certifications.category.leadership': {
      en: 'Leadership, Humanitarian & Field Certifications',
      fr: 'Leadership, Humanitaire & Certifications de Terrain',
      ar: 'القيادة والإنسانية والشهادات الميدانية',
      es: 'Liderazgo, Humanitario y Certificaciones de Campo'
    },
    // Certification Names
    'certifications.name.projectManagement': {
      en: 'Project Management',
      fr: 'Gestion de Projet',
      ar: 'إدارة المشاريع',
      es: 'Gestión de Proyectos'
    },
    'certifications.name.agileFoundations': {
      en: 'Agile Foundations',
      fr: 'Fondements Agiles',
      ar: 'أساسيات أجايل',
      es: 'Fundamentos Ágiles'
    },
    'certifications.name.agileSoftwareDevelopment': {
      en: 'Agile Software Development',
      fr: 'Développement Logiciel Agile',
      ar: 'تطوير البرمجيات الرشيقة',
      es: 'Desarrollo de Software Ágil'
    },
    'certifications.name.designThinking': {
      en: 'Design Thinking',
      fr: 'Pensée Design',
      ar: 'التفكير التصميمي',
      es: 'Pensamiento de Diseño'
    },
    'certifications.name.softwareDesign': {
      en: 'Software Design: Developing Effective Requirements',
      fr: 'Conception Logicielle: Développement d\'Exigences Efficaces',
      ar: 'تصميم البرمجيات: تطوير المتطلبات الفعالة',
      es: 'Diseño de Software: Desarrollo de Requisitos Efectivos'
    },
    'certifications.name.pythonOOP': {
      en: 'Python Object-Oriented Programming',
      fr: 'Programmation Orientée Objet Python',
      ar: 'البرمجة الشيئية بلغة Python',
      es: 'Programación Orientada a Objetos en Python'
    },
    'certifications.name.advancedSQL': {
      en: 'Advanced SQL for Data Scientists',
      fr: 'SQL Avancé pour les Scientifiques de Données',
      ar: 'SQL المتقدم لعلماء البيانات',
      es: 'SQL Avanzado para Científicos de Datos'
    },
    'certifications.name.sqlProgramming': {
      en: 'SQL Programming',
      fr: 'Programmation SQL',
      ar: 'برمجة SQL',
      es: 'Programación SQL'
    },
    'certifications.name.cloudComputing': {
      en: 'Cloud Computing: Core Concepts',
      fr: 'Cloud Computing: Concepts Fondamentaux',
      ar: 'الحوسبة السحابية: المفاهيم الأساسية',
      es: 'Computación en la Nube: Conceptos Fundamentales'
    },
    'certifications.name.cybersecurityFoundations': {
      en: 'Cybersecurity Foundations',
      fr: 'Fondements de la Cybersécurité',
      ar: 'أساسيات الأمن السيبراني',
      es: 'Fundamentos de Ciberseguridad'
    },
    'certifications.name.securityTesting': {
      en: 'Security Testing',
      fr: 'Tests de Sécurité',
      ar: 'اختبار الأمان',
      es: 'Pruebas de Seguridad'
    },
    'certifications.name.itRiskManagement': {
      en: 'IT & Cybersecurity Risk Management',
      fr: 'Gestion des Risques IT & Cybersécurité',
      ar: 'إدارة مخاطر تكنولوجيا المعلومات والأمن السيبراني',
      es: 'Gestión de Riesgos de TI y Ciberseguridad'
    },
    'certifications.name.itStrategy': {
      en: 'Creating Your IT Strategy',
      fr: 'Créer Votre Stratégie IT',
      ar: 'إنشاء استراتيجية تكنولوجيا المعلومات',
      es: 'Crear tu Estrategia de TI'
    },
    'certifications.name.leadershipCertificate': {
      en: 'Leadership Certificate',
      fr: 'Certificat de Leadership',
      ar: 'شهادة القيادة',
      es: 'Certificado de Liderazgo'
    },
    'certifications.name.firstAid': {
      en: 'First Aid Certificate (Second Degree)',
      fr: 'Certificat de Premiers Secours (Deuxième Degré)',
      ar: 'شهادة الإسعافات الأولية (الدرجة الثانية)',
      es: 'Certificado de Primeros Auxilios (Segundo Grado)'
    },
    'certifications.name.familyLinks': {
      en: 'Family Links Restoration',
      fr: 'Restauration des Liens Familiaux',
      ar: 'استعادة الروابط العائلية',
      es: 'Restauración de Vínculos Familiares'
    },
    // Certification Descriptions
    'certifications.description.projectManagement': {
      en: 'Software Project Management, Project Leadership',
      fr: 'Gestion de Projet Logiciel, Leadership de Projet',
      ar: 'إدارة مشاريع البرمجيات، قيادة المشاريع',
      es: 'Gestión de Proyectos de Software, Liderazgo de Proyectos'
    },
    'certifications.description.agileFoundations': {
      en: 'Agile Methodologies, Agile Project Management',
      fr: 'Méthodologies Agiles, Gestion de Projet Agile',
      ar: 'منهجيات أجايل، إدارة المشاريع الرشيقة',
      es: 'Metodologías Ágiles, Gestión de Proyectos Ágiles'
    },
    'certifications.description.designThinking': {
      en: 'Human-centered problem solving & innovation',
      fr: 'Résolution de problèmes centrée sur l\'humain et innovation',
      ar: 'حل المشكلات المتمحور حول الإنسان والابتكار',
      es: 'Resolución de problemas centrada en el ser humano e innovación'
    },
    'certifications.description.cloudComputing': {
      en: 'Cloud administration, system migration',
      fr: 'Administration cloud, migration de systèmes',
      ar: 'إدارة السحابة، هجرة الأنظمة',
      es: 'Administración en la nube, migración de sistemas'
    },
    'certifications.description.itRiskManagement': {
      en: 'GRC, IT risk, compliance frameworks',
      fr: 'GRC, risques IT, cadres de conformité',
      ar: 'GRC، مخاطر تكنولوجيا المعلومات، أطر الامتثال',
      es: 'GRC, riesgos de TI, marcos de cumplimiento'
    },
    'certifications.description.itStrategy': {
      en: 'IT strategic planning & alignment',
      fr: 'Planification stratégique IT et alignement',
      ar: 'التخطيط الاستراتيجي لتكنولوجيا المعلومات والمحاذاة',
      es: 'Planificación estratégica de TI y alineación'
    },
    'certifications.description.familyLinks': {
      en: 'Humanitarian response & crisis coordination',
      fr: 'Réponse humanitaire et coordination de crise',
      ar: 'الاستجابة الإنسانية وتنسيق الأزمات',
      es: 'Respuesta humanitaria y coordinación de crisis'
    },
    // Issuers
    'certifications.issuer.pmi': {
      en: 'Project Management Institute (PMI)',
      fr: 'Institut de Gestion de Projet (PMI)',
      ar: 'معهد إدارة المشاريع (PMI)',
      es: 'Instituto de Gestión de Proyectos (PMI)'
    },
    'certifications.issuer.qaa': {
      en: 'QA Advisory Services',
      fr: 'Services Consultatifs QA',
      ar: 'خدمات الاستشارات QA',
      es: 'Servicios de Asesoría QA'
    },
    'certifications.issuer.linkedin': {
      en: 'LinkedIn Learning',
      fr: 'LinkedIn Learning',
      ar: 'LinkedIn Learning',
      es: 'LinkedIn Learning'
    },
    'certifications.issuer.comptia': {
      en: 'CompTIA',
      fr: 'CompTIA',
      ar: 'CompTIA',
      es: 'CompTIA'
    },
    'certifications.issuer.iiba': {
      en: 'IIBA',
      fr: 'IIBA',
      ar: 'IIBA',
      es: 'IIBA'
    },
    'certifications.issuer.scouts': {
      en: 'Les Scouts Tunisiens',
      fr: 'Les Scouts Tunisiens',
      ar: 'الكشافة التونسية',
      es: 'Los Scouts Tunecinos'
    },
    'certifications.issuer.redCrescent': {
      en: 'Tunisian Red Crescent',
      fr: 'Croissant-Rouge Tunisien',
      ar: 'الهلال الأحمر التونسي',
      es: 'Media Luna Roja Tunecina'
    },
    'certifications.issuer.icrc': {
      en: 'International Committee of the Red Cross (ICRC), Geneva',
      fr: 'Comité International de la Croix-Rouge (CICR), Genève',
      ar: 'اللجنة الدولية للصليب الأحمر (CICR)، جنيف',
      es: 'Comité Internacional de la Cruz Roja (CICR), Ginebra'
    },

    // Contact Section
    'contact.title': {
      en: 'Contact',
      fr: 'Contact',
      ar: 'اتصل',
      es: 'Contacto'
    },
    'contact.description': {
      en: 'I\'m always interested in new opportunities and exciting projects. Feel free to reach out!',
      fr: 'Je suis toujours intéressé par de nouvelles opportunités et des projets passionnants. N\'hésitez pas à me contacter !',
      ar: 'أنا مهتم دائماً بالفرص الجديدة والمشاريع المثيرة. لا تتردد في التواصل معي!',
      es: 'Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. ¡No dudes en contactarme!'
    },
    'contact.email': {
      en: 'Email',
      fr: 'Email',
      ar: 'البريد الإلكتروني',
      es: 'Correo Electrónico'
    },
    'contact.phone': {
      en: 'Phone',
      fr: 'Téléphone',
      ar: 'الهاتف',
      es: 'Teléfono'
    },
    'contact.location': {
      en: 'Location',
      fr: 'Localisation',
      ar: 'الموقع',
      es: 'Ubicación'
    },
    'contact.send': {
      en: 'Send Message',
      fr: 'Envoyer le Message',
      ar: 'إرسال الرسالة',
      es: 'Enviar Mensaje'
    },

    // Community Engagement Section
    'community.title': {
      en: 'Community Engagement',
      fr: 'Engagement Communautaire',
      ar: 'المشاركة المجتمعية',
      es: 'Compromiso Comunitario'
    },
    'community.subtitle': {
      en: 'Active involvement in community organizations and initiatives',
      fr: 'Implication active dans les organisations et initiatives communautaires',
      ar: 'المشاركة النشطة في المنظمات والمبادرات المجتمعية',
      es: 'Participación activa en organizaciones e iniciativas comunitarias'
    },
    'community.flipHint': {
      en: 'Click to view description',
      fr: 'Cliquez pour voir la description',
      ar: 'انقر لعرض الوصف',
      es: 'Haz clic para ver la descripción'
    },
    'community.flipBackHint': {
      en: 'Click to go back',
      fr: 'Cliquez pour revenir',
      ar: 'انقر للعودة',
      es: 'Haz clic para volver'
    },
    'community.description': {
      en: 'Description',
      fr: 'Description',
      ar: 'الوصف',
      es: 'Descripción'
    },
    'community.organization.tunisianScouts': {
      en: 'Tunisian Scouts',
      fr: 'Scouts Tunisiens',
      ar: 'الكشافة التونسية',
      es: 'Scouts Tunecinos'
    },
    'community.organization.tunisianRedCrescent': {
      en: 'Tunisian Red Crescent',
      fr: 'Croissant-Rouge Tunisien',
      ar: 'الهلال الأحمر التونسي',
      es: 'Media Luna Roja Tunecina'
    },
    'community.organization.ambassadorOfDialogue': {
      en: 'Ambassador of Dialogue',
      fr: 'Ambassadeur du Dialogue',
      ar: 'سفير الحوار',
      es: 'Embajador del Diálogo'
    },
    'community.role.member': {
      en: 'Member',
      fr: 'Membre',
      ar: 'عضو',
      es: 'Miembro'
    },
    'community.role.scoutLeader': {
      en: 'Scout Leader',
      fr: 'Chef Scout',
      ar: 'قائد كشفي',
      es: 'Líder Scout'
    },
    'community.role.volunteer': {
      en: 'Volunteer',
      fr: 'Bénévole',
      ar: 'متطوع',
      es: 'Voluntario'
    },
    'community.role.president': {
      en: 'President',
      fr: 'Président',
      ar: 'رئيس',
      es: 'Presidente'
    },
    'community.role.dialogueFacilitator': {
      en: 'Dialogue Facilitator',
      fr: 'Facilitateur de Dialogue',
      ar: 'ميسر الحوار',
      es: 'Facilitador de Diálogo'
    },
    'community.tunisianScouts.description': {
      en: 'Active member of the Tunisian Scouts since 2012, progressing into a leadership role in 2019. Participated in 300+ local and international activities, including educational programs, community initiatives, leadership camps, and international exchanges. As a Scout Leader, contributed to team coordination, youth mentoring, and activity organization, fostering responsibility, discipline, and collaboration. Developed strong skills in leadership, organization, communication, and teamwork within diverse and multicultural environments.',
      fr: 'Membre actif des Scouts Tunisiens depuis 2012, évoluant vers un rôle de leadership en 2019. Participé à plus de 300 activités locales et internationales, notamment des programmes éducatifs, des initiatives communautaires, des camps de leadership et des échanges internationaux. En tant que Chef Scout, contribué à la coordination d\'équipe, au mentorat des jeunes et à l\'organisation d\'activités, favorisant la responsabilité, la discipline et la collaboration. Développé de solides compétences en leadership, organisation, communication et travail d\'équipe dans des environnements divers et multiculturels.',
      ar: 'عضو نشط في الكشافة التونسية منذ عام 2012، وتطور إلى دور قيادي في عام 2019. شارك في أكثر من 300 نشاط محلي ودولي، بما في ذلك البرامج التعليمية والمبادرات المجتمعية ومعسكرات القيادة والتبادلات الدولية. كقائد كشفي، ساهم في تنسيق الفريق وإرشاد الشباب وتنظيم الأنشطة، وتعزيز المسؤولية والانضباط والتعاون. طور مهارات قوية في القيادة والتنظيم والتواصل والعمل الجماعي في بيئات متنوعة ومتعددة الثقافات.',
      es: 'Miembro activo de los Scouts Tunecinos desde 2012, progresando a un rol de liderazgo en 2019. Participó en más de 300 actividades locales e internacionales, incluyendo programas educativos, iniciativas comunitarias, campamentos de liderazgo e intercambios internacionales. Como Líder Scout, contribuyó a la coordinación de equipos, mentoría de jóvenes y organización de actividades, fomentando la responsabilidad, disciplina y colaboración. Desarrolló fuertes habilidades en liderazgo, organización, comunicación y trabajo en equipo en entornos diversos y multiculturales.'
    },
    'community.tunisianScouts.highlight1': {
      en: 'Participated in 300+ local and international activities',
      fr: 'Participé à plus de 300 activités locales et internationales',
      ar: 'شارك في أكثر من 300 نشاط محلي ودولي',
      es: 'Participó en más de 300 actividades locales e internacionales'
    },
    'community.tunisianScouts.highlight2': {
      en: 'Educational programs, community initiatives, and leadership camps',
      fr: 'Programmes éducatifs, initiatives communautaires et camps de leadership',
      ar: 'البرامج التعليمية والمبادرات المجتمعية ومعسكرات القيادة',
      es: 'Programas educativos, iniciativas comunitarias y campamentos de liderazgo'
    },
    'community.tunisianScouts.highlight3': {
      en: 'Team coordination, youth mentoring, and activity organization',
      fr: 'Coordination d\'équipe, mentorat des jeunes et organisation d\'activités',
      ar: 'تنسيق الفريق وإرشاد الشباب وتنظيم الأنشطة',
      es: 'Coordinación de equipos, mentoría de jóvenes y organización de actividades'
    },
    'community.tunisianScouts.highlight4': {
      en: 'Developed leadership, organization, and communication skills',
      fr: 'Développé des compétences en leadership, organisation et communication',
      ar: 'طور مهارات القيادة والتنظيم والتواصل',
      es: 'Desarrolló habilidades de liderazgo, organización y comunicación'
    },
    'community.tunisianRedCrescent.description': {
      en: 'Volunteered with the Tunisian Red Crescent starting in 2018, supporting humanitarian and community-focused initiatives. Served as President (2022–2023), leading volunteer teams and coordinating humanitarian activities at the local level. Participated in 100+ humanitarian activities, including community support, emergency response, and public awareness initiatives. Certified First Aid Responder – Second Degree, with hands-on experience in emergency preparedness and crisis situations. Strengthened competencies in crisis management, decision-making under pressure, leadership, and ethical responsibility.',
      fr: 'Bénévole au Croissant-Rouge Tunisien à partir de 2018, soutenant des initiatives humanitaires et communautaires. Servi en tant que Président (2022–2023), dirigeant des équipes de bénévoles et coordonnant des activités humanitaires au niveau local. Participé à plus de 100 activités humanitaires, notamment le soutien communautaire, la réponse d\'urgence et les initiatives de sensibilisation publique. Secouriste Certifié – Deuxième Degré, avec une expérience pratique en préparation aux urgences et situations de crise. Renforcé les compétences en gestion de crise, prise de décision sous pression, leadership et responsabilité éthique.',
      ar: 'تطوع مع الهلال الأحمر التونسي بدءاً من عام 2018، داعماً المبادرات الإنسانية والمرتكزة على المجتمع. شغل منصب الرئيس (2022–2023)، قائداً فرق المتطوعين ومنسقاً الأنشطة الإنسانية على المستوى المحلي. شارك في أكثر من 100 نشاط إنساني، بما في ذلك الدعم المجتمعي والاستجابة للطوارئ ومبادرات التوعية العامة. معتمد كمسعف إسعافات أولية – الدرجة الثانية، مع خبرة عملية في التأهب للطوارئ وحالات الأزمات. عزز الكفاءات في إدارة الأزمات واتخاذ القرارات تحت الضغط والقيادة والمسؤولية الأخلاقية.',
      es: 'Voluntario en la Media Luna Roja Tunecina desde 2018, apoyando iniciativas humanitarias y centradas en la comunidad. Se desempeñó como Presidente (2022–2023), liderando equipos de voluntarios y coordinando actividades humanitarias a nivel local. Participó en más de 100 actividades humanitarias, incluyendo apoyo comunitario, respuesta de emergencia e iniciativas de concienciación pública. Certificado como Respondedor de Primeros Auxilios – Segundo Grado, con experiencia práctica en preparación para emergencias y situaciones de crisis. Fortaleció competencias en gestión de crisis, toma de decisiones bajo presión, liderazgo y responsabilidad ética.'
    },
    'community.tunisianRedCrescent.highlight1': {
      en: 'Participated in 100+ humanitarian activities',
      fr: 'Participé à plus de 100 activités humanitaires',
      ar: 'شارك في أكثر من 100 نشاط إنساني',
      es: 'Participó en más de 100 actividades humanitarias'
    },
    'community.tunisianRedCrescent.highlight2': {
      en: 'Community support, emergency response, and public awareness',
      fr: 'Soutien communautaire, réponse d\'urgence et sensibilisation publique',
      ar: 'الدعم المجتمعي والاستجابة للطوارئ والتوعية العامة',
      es: 'Apoyo comunitario, respuesta de emergencia y concienciación pública'
    },
    'community.tunisianRedCrescent.highlight3': {
      en: 'Certified First Aid Responder – Second Degree',
      fr: 'Secouriste Certifié – Deuxième Degré',
      ar: 'معتمد كمسعف إسعافات أولية – الدرجة الثانية',
      es: 'Certificado como Respondedor de Primeros Auxilios – Segundo Grado'
    },
    'community.tunisianRedCrescent.highlight4': {
      en: 'Experience in emergency preparedness and crisis situations',
      fr: 'Expérience en préparation aux urgences et situations de crise',
      ar: 'خبرة في التأهب للطوارئ وحالات الأزمات',
      es: 'Experiencia en preparación para emergencias y situaciones de crisis'
    },
    'community.tunisianRedCrescent.highlight5': {
      en: 'Crisis management and decision-making under pressure',
      fr: 'Gestion de crise et prise de décision sous pression',
      ar: 'إدارة الأزمات واتخاذ القرارات تحت الضغط',
      es: 'Gestión de crisis y toma de decisiones bajo presión'
    },
    'community.ambassadorOfDialogue.description': {
      en: 'Acted as a Dialogue Facilitator within the Ambassador of Dialogue initiative. Facilitated and contributed to 30+ structured dialogue sessions, promoting communication, understanding, and conflict resolution. Participated in an international seminar in Jordan (2023) focused on dialogue, mediation, and intercultural exchange. Gained practical experience in dialogue facilitation, mediation, active listening, and consensus building in diverse social and cultural contexts.',
      fr: 'Agit en tant que Facilitateur de Dialogue dans l\'initiative Ambassadeur du Dialogue. Facilité et contribué à plus de 30 sessions de dialogue structurées, promouvant la communication, la compréhension et la résolution de conflits. Participé à un séminaire international en Jordanie (2023) axé sur le dialogue, la médiation et l\'échange interculturel. Acquis une expérience pratique en facilitation de dialogue, médiation, écoute active et construction de consensus dans des contextes sociaux et culturels divers.',
      ar: 'عمل كميسر حوار في مبادرة سفير الحوار. سهل وساهم في أكثر من 30 جلسة حوار منظمة، معززاً التواصل والتفاهم وحل النزاعات. شارك في ندوة دولية في الأردن (2023) تركز على الحوار والوساطة والتبادل الثقافي. اكتسب خبرة عملية في تسهيل الحوار والوساطة والاستماع النشط وبناء الإجماع في سياقات اجتماعية وثقافية متنوعة.',
      es: 'Actuó como Facilitador de Diálogo en la iniciativa Embajador del Diálogo. Facilitó y contribuyó a más de 30 sesiones de diálogo estructuradas, promoviendo la comunicación, comprensión y resolución de conflictos. Participó en un seminario internacional en Jordania (2023) centrado en diálogo, mediación e intercambio intercultural. Adquirió experiencia práctica en facilitación de diálogo, mediación, escucha activa y construcción de consenso en contextos sociales y culturales diversos.'
    },
    'community.ambassadorOfDialogue.highlight1': {
      en: 'Facilitated 30+ structured dialogue sessions',
      fr: 'Facilité plus de 30 sessions de dialogue structurées',
      ar: 'سهل أكثر من 30 جلسة حوار منظمة',
      es: 'Facilitó más de 30 sesiones de diálogo estructuradas'
    },
    'community.ambassadorOfDialogue.highlight2': {
      en: 'Promoted communication, understanding, and conflict resolution',
      fr: 'Promu la communication, la compréhension et la résolution de conflits',
      ar: 'عزز التواصل والتفاهم وحل النزاعات',
      es: 'Promovió la comunicación, comprensión y resolución de conflictos'
    },
    'community.ambassadorOfDialogue.highlight3': {
      en: 'International seminar in Jordan (2023) on dialogue and mediation',
      fr: 'Séminaire international en Jordanie (2023) sur le dialogue et la médiation',
      ar: 'ندوة دولية في الأردن (2023) حول الحوار والوساطة',
      es: 'Seminario internacional en Jordania (2023) sobre diálogo y mediación'
    },
    'community.ambassadorOfDialogue.highlight4': {
      en: 'Experience in dialogue facilitation, mediation, and consensus building',
      fr: 'Expérience en facilitation de dialogue, médiation et construction de consensus',
      ar: 'خبرة في تسهيل الحوار والوساطة وبناء الإجماع',
      es: 'Experiencia en facilitación de diálogo, mediación y construcción de consenso'
    },

    // Languages Section
    'languages.title': {
      en: 'Languages',
      fr: 'Langues',
      ar: 'اللغات',
      es: 'Idiomas'
    },
    'languages.subtitle': {
      en: 'Language proficiency and communication skills',
      fr: 'Maîtrise des langues et compétences en communication',
      ar: 'الكفاءة اللغوية ومهارات التواصل',
      es: 'Competencia lingüística y habilidades de comunicación'
    },
    'languages.proficiency.native': {
      en: 'Native',
      fr: 'Natif',
      ar: 'اللغة الأم',
      es: 'Nativo'
    },
    'languages.proficiency.fluent': {
      en: 'Fluent',
      fr: 'Courant',
      ar: 'طلاقة',
      es: 'Fluido'
    },
    'languages.proficiency.intermediate': {
      en: 'Intermediate',
      fr: 'Intermédiaire',
      ar: 'متوسط',
      es: 'Intermedio'
    },
    'languages.proficiency.beginner': {
      en: 'Beginner',
      fr: 'Débutant',
      ar: 'مبتدئ',
      es: 'Principiante'
    },
    'languages.name.tunisian': {
      en: 'Tunisian',
      fr: 'Tunisien',
      ar: 'تونسي',
      es: 'Tunecino'
    },
    'languages.name.arabic': {
      en: 'Arabic',
      fr: 'Arabe',
      ar: 'العربية',
      es: 'Árabe'
    },
    'languages.name.english': {
      en: 'English',
      fr: 'Anglais',
      ar: 'الإنجليزية',
      es: 'Inglés'
    },
    'languages.name.french': {
      en: 'French',
      fr: 'Français',
      ar: 'الفرنسية',
      es: 'Francés'
    },
    'languages.name.spanish': {
      en: 'Spanish',
      fr: 'Espagnol',
      ar: 'الإسبانية',
      es: 'Español'
    }
  };

  // ============================================================================
  // Constructor
  // ============================================================================
  constructor() {
    // Set default language based on browser preference
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'fr' || browserLang === 'ar' || browserLang === 'es') {
      this.setLanguage(browserLang as Language);
    }
  }

  // ============================================================================
  // Public Methods
  // ============================================================================
  setLanguage(language: Language): void {
    this.currentLanguageSubject.next(language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }

  getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translation[this.getCurrentLanguage()] || translation.en;
  }

  getTranslation(key: string): string {
    return this.translate(key);
  }
} 