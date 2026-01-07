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
      en: 'Full Stack Developer',
      fr: 'Développeur Full Stack',
      ar: 'مطور ويب شامل',
      es: 'Desarrollador Full Stack'
    },
    'home.description': {
      en: 'Passionate about creating innovative web solutions and building scalable applications',
      fr: 'Passionné par la création de solutions web innovantes et la construction d\'applications évolutives',
      ar: 'شغوف بإنشاء حلول ويب مبتكرة وبناء تطبيقات قابلة للتطوير',
      es: 'Apasionado por crear soluciones web innovadoras y construir aplicaciones escalables'
    },
    'home.cta': {
      en: 'Get In Touch',
      fr: 'Me Contacter',
      ar: 'تواصل معي',
      es: 'Ponte en Contacto'
    },
    'home.downloadCV': {
      en: '📄 Download CV',
      fr: '📄 Télécharger CV',
      ar: '📄 تحميل السيرة الذاتية',
      es: '📄 Descargar CV'
    },
    'home.scrollToExplore': {
      en: 'Scroll to explore',
      fr: 'Faites défiler pour explorer',
      ar: 'انتقل للاستكشاف',
      es: 'Desplázate para explorar'
    },

    // Stats Section
    'stats.title': {
      en: 'Statistics',
      fr: 'Statistiques',
      ar: 'الإحصائيات',
      es: 'Estadísticas'
    },
    'stats.yearsExperience': {
      en: 'Years Experience',
      fr: 'Années d\'Expérience',
      ar: 'سنوات من الخبرة',
      es: 'Años de Experiencia'
    },
    'stats.projectsCompleted': {
      en: 'Projects Completed',
      fr: 'Projets Terminés',
      ar: 'المشاريع المكتملة',
      es: 'Proyectos Completados'
    },
    'stats.happyClients': {
      en: 'Happy Clients',
      fr: 'Clients Satisfaits',
      ar: 'عملاء سعداء',
      es: 'Clientes Satisfechos'
    },
    'stats.technologies': {
      en: 'Technologies',
      fr: 'Technologies',
      ar: 'التقنيات',
      es: 'Tecnologías'
    },

    // About Section
    'about.title': {
      en: 'About Me',
      fr: 'À Propos de Moi',
      ar: 'عني',
      es: 'Sobre Mí'
    },
    'about.subtitle': {
      en: '5 Years | Angular & Spring Boot | Leadership & Logic',
      fr: '5 Ans | Angular & Spring Boot | Leadership & Logique',
      ar: '5 سنوات | Angular & Spring Boot | القيادة والمنطق',
      es: '5 Años | Angular & Spring Boot | Liderazgo y Lógica'
    },
    'about.description': {
      en: 'I am a Full Stack Developer driven by order, impact, and the art of problem-solving. Beyond the code, I am a facilitator and a leader with a deep history in the Red Crescent and Tunisian Scouts. I specialize in translating complex requirements into clean code and facilitating global collaboration through my fluency in 5 languages.',
      fr: 'Je suis un développeur Full Stack motivé par l\'ordre, l\'impact et l\'art de la résolution de problèmes. Au-delà du code, je suis un facilitateur et un leader avec une histoire profonde dans le Croissant-Rouge et les Scouts Tunisiens. Je me spécialise dans la traduction de besoins complexes en code propre et facilite la collaboration mondiale grâce à ma maîtrise de 5 langues.',
      ar: 'أنا مطور ويب شامل مدفوع بالنظام والتأثير وفن حل المشاكل. إلى جانب الكود، أنا ميسر وقائد مع تاريخ عميق في الهلال الأحمر والكشافة التونسية. أتخصص في ترجمة المتطلبات المعقدة إلى كود نظيف وتسهيل التعاون العالمي من خلال إتقاني لـ 5 لغات.',
      es: 'Soy un desarrollador Full Stack impulsado por el orden, el impacto y el arte de resolver problemas. Más allá del código, soy un facilitador y líder con una historia profunda en la Media Luna Roja y los Scouts Tunecinos. Me especializo en traducir requisitos complejos en código limpio y facilitar la colaboración global a través de mi fluidez en 5 idiomas.'
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
      en: 'Hard Skills & Expertise',
      fr: 'Compétences Techniques & Expertise',
      ar: 'المهارات الصعبة والخبرة',
      es: 'Habilidades Técnicas y Experiencia'
    },
    'skills.subtitle': {
      en: 'Core technical competencies and professional expertise',
      fr: 'Compétences techniques fondamentales et expertise professionnelle',
      ar: 'الكفاءات التقنية الأساسية والخبرة المهنية',
      es: 'Competencias técnicas fundamentales y experiencia profesional'
    },
    'skills.frontend': {
      en: 'Angular / Frontend',
      fr: 'Angular / Frontend',
      ar: 'Angular / الواجهة الأمامية',
      es: 'Angular / Frontend'
    },
    'skills.backend': {
      en: 'Backend / Spring Boot',
      fr: 'Backend / Spring Boot',
      ar: 'الخلفية / Spring Boot',
      es: 'Backend / Spring Boot'
    },
    'skills.databases': {
      en: 'Databases',
      fr: 'Bases de Données',
      ar: 'قواعد البيانات',
      es: 'Bases de Datos'
    },
    'skills.architecture': {
      en: 'System & Architecture',
      fr: 'Système & Architecture',
      ar: 'النظام والهندسة المعمارية',
      es: 'Sistema y Arquitectura'
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
      en: 'Product & UX',
      fr: 'Produit & UX',
      ar: 'المنتج وتجربة المستخدم',
      es: 'Producto y UX'
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
      en: 'Angular Standalone Components',
      fr: 'Composants Angular Autonomes',
      ar: 'مكونات Angular المستقلة',
      es: 'Componentes Angular Independientes'
    },
    'skills.frontend.guards': {
      en: 'Angular Guards & Interceptors',
      fr: 'Guards et Intercepteurs Angular',
      ar: 'Guards و Interceptors في Angular',
      es: 'Guards e Interceptores Angular'
    },
    'skills.frontend.forms': {
      en: 'Reactive Forms',
      fr: 'Formulaires Réactifs',
      ar: 'النماذج التفاعلية',
      es: 'Formularios Reactivos'
    },
    'skills.frontend.rxjs': {
      en: 'RxJS (Observables, Operators basics)',
      fr: 'RxJS (Observables, Opérateurs de base)',
      ar: 'RxJS (Observables، أساسيات المشغلين)',
      es: 'RxJS (Observables, Operadores básicos)'
    },
    'skills.frontend.detection': {
      en: 'Change Detection (OnPush)',
      fr: 'Détection de Changement (OnPush)',
      ar: 'اكتشاف التغيير (OnPush)',
      es: 'Detección de Cambios (OnPush)'
    },
    'skills.frontend.lazy': {
      en: 'Lazy Loading Modules',
      fr: 'Modules de Chargement Différé',
      ar: 'وحدات التحميل المؤجل',
      es: 'Módulos de Carga Diferida'
    },
    'skills.frontend.i18n': {
      en: 'Internationalization (i18n)',
      fr: 'Internationalisation (i18n)',
      ar: 'التدويل (i18n)',
      es: 'Internacionalización (i18n)'
    },
    'skills.frontend.accessibility': {
      en: 'Accessibility (ARIA basics)',
      fr: 'Accessibilité (Bases ARIA)',
      ar: 'إمكانية الوصول (أساسيات ARIA)',
      es: 'Accesibilidad (Básicos ARIA)'
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
      en: 'Basic Security Concepts (JWT, roles)',
      fr: 'Concepts de Sécurité de Base (JWT, rôles)',
      ar: 'مفاهيم الأمان الأساسية (JWT، الأدوار)',
      es: 'Conceptos Básicos de Seguridad (JWT, roles)'
    },
    'skills.backend.config': {
      en: 'Application Configuration (profiles)',
      fr: 'Configuration d\'Application (profils)',
      ar: 'تكوين التطبيق (الملفات الشخصية)',
      es: 'Configuración de Aplicación (perfiles)'
    },
    // Database Skills
    'skills.databases.mysql': {
      en: 'MySQL / PostgreSQL',
      fr: 'MySQL / PostgreSQL',
      ar: 'MySQL / PostgreSQL',
      es: 'MySQL / PostgreSQL'
    },
    'skills.databases.indexing': {
      en: 'Indexing basics',
      fr: 'Bases de l\'Indexation',
      ar: 'أساسيات الفهرسة',
      es: 'Básicos de Indexación'
    },
    'skills.databases.optimization': {
      en: 'Query Optimization (basic)',
      fr: 'Optimisation de Requêtes (de base)',
      ar: 'تحسين الاستعلامات (أساسي)',
      es: 'Optimización de Consultas (básico)'
    },
    'skills.databases.migrations': {
      en: 'Database Migrations (Flyway / Liquibase – exposure)',
      fr: 'Migrations de Base de Données (Flyway / Liquibase – exposition)',
      ar: 'هجرات قاعدة البيانات (Flyway / Liquibase – تعرض)',
      es: 'Migraciones de Base de Datos (Flyway / Liquibase – exposición)'
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
      en: 'Build & deployment pipelines (basic CI/CD exposure)',
      fr: 'Pipelines de Build et Déploiement (exposition CI/CD de base)',
      ar: 'خطوط أنابيب البناء والنشر (تعرض CI/CD أساسي)',
      es: 'Pipelines de Build y Despliegue (exposición CI/CD básica)'
    },
    'skills.devops.debugging': {
      en: 'Production debugging & log analysis',
      fr: 'Débogage en Production et Analyse de Logs',
      ar: 'تصحيح الأخطاء في الإنتاج وتحليل السجلات',
      es: 'Depuración en Producción y Análisis de Logs'
    },
    // Security Skills
    'skills.security.cors': {
      en: 'CORS concepts',
      fr: 'Concepts CORS',
      ar: 'مفاهيم CORS',
      es: 'Conceptos CORS'
    },
    'skills.security.csrf': {
      en: 'CSRF awareness',
      fr: 'Conscience CSRF',
      ar: 'الوعي بـ CSRF',
      es: 'Conciencia CSRF'
    },
    'skills.security.auth': {
      en: 'Secure authentication flows',
      fr: 'Flux d\'Authentification Sécurisés',
      ar: 'تدفقات المصادقة الآمنة',
      es: 'Flujos de Autenticación Seguros'
    },
    'skills.security.hashing': {
      en: 'Password hashing concepts',
      fr: 'Concepts de Hachage de Mots de Passe',
      ar: 'مفاهيم تجزئة كلمات المرور',
      es: 'Conceptos de Hash de Contraseñas'
    },
    'skills.security.owasp': {
      en: 'OWASP Top 10 awareness',
      fr: 'Conscience OWASP Top 10',
      ar: 'الوعي بـ OWASP Top 10',
      es: 'Conciencia OWASP Top 10'
    },
    // Testing Skills
    'skills.testing.unit': {
      en: 'Unit Testing basics',
      fr: 'Bases des Tests Unitaires',
      ar: 'أساسيات اختبار الوحدة',
      es: 'Básicos de Pruebas Unitarias'
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
      fr: 'Animateur de Dessins Animés / Graphismes Animés',
      ar: 'محرك الرسوم المتحركة / الرسوم المتحركة',
      es: 'Animador de Caricaturas / Gráficos en Movimiento'
    },

    // Projects Section
    // Soft Skills Section
    'softSkills.title': {
      en: 'Soft Skills & Leadership',
      fr: 'Compétences Douces & Leadership',
      ar: 'المهارات الناعمة والقيادة',
      es: 'Habilidades Blandas y Liderazgo'
    },
    'softSkills.subtitle': {
      en: 'Interpersonal skills, leadership abilities, and professional competencies',
      fr: 'Compétences interpersonnelles, capacités de leadership et compétences professionnelles',
      ar: 'المهارات الشخصية وقدرات القيادة والكفاءات المهنية',
      es: 'Habilidades interpersonales, capacidades de liderazgo y competencias profesionales'
    },
    'softSkills.leadership': {
      en: 'Leadership & Responsibility',
      fr: 'Leadership & Responsabilité',
      ar: 'القيادة والمسؤولية',
      es: 'Liderazgo y Responsabilidad'
    },
    'softSkills.leadership.teamLeadership': {
      en: 'Team leadership and coordination in technical and volunteer environments',
      fr: 'Leadership d\'équipe et coordination dans des environnements techniques et bénévoles',
      ar: 'قيادة الفريق والتنسيق في البيئات التقنية والتطوعية',
      es: 'Liderazgo de equipo y coordinación en entornos técnicos y voluntarios'
    },
    'softSkills.leadership.decisionMaking': {
      en: 'Decision-making under pressure and accountability for outcomes',
      fr: 'Prise de décision sous pression et responsabilité des résultats',
      ar: 'اتخاذ القرارات تحت الضغط والمساءلة عن النتائج',
      es: 'Toma de decisiones bajo presión y responsabilidad por los resultados'
    },
    'softSkills.leadership.diverseTeams': {
      en: 'Experience leading diverse teams with varying skill levels',
      fr: 'Expérience dans la direction d\'équipes diversifiées avec des niveaux de compétences variés',
      ar: 'خبرة في قيادة فرق متنوعة بمستويات مهارات مختلفة',
      es: 'Experiencia liderando equipos diversos con diferentes niveles de habilidades'
    },
    'softSkills.communication': {
      en: 'Communication & Collaboration',
      fr: 'Communication & Collaboration',
      ar: 'التواصل والتعاون',
      es: 'Comunicación y Colaboración'
    },
    'softSkills.communication.clearCommunication': {
      en: 'Clear communication with technical and non-technical stakeholders',
      fr: 'Communication claire avec les parties prenantes techniques et non techniques',
      ar: 'تواصل واضح مع أصحاب المصلحة التقنيين وغير التقنيين',
      es: 'Comunicación clara con partes interesadas técnicas y no técnicas'
    },
    'softSkills.communication.technicalTranslation': {
      en: 'Translating complex technical concepts into understandable language',
      fr: 'Traduction de concepts techniques complexes en langage compréhensible',
      ar: 'ترجمة المفاهيم التقنية المعقدة إلى لغة مفهومة',
      es: 'Traducir conceptos técnicos complejos a un lenguaje comprensible'
    },
    'softSkills.communication.crossCultural': {
      en: 'Cross-cultural and multilingual collaboration',
      fr: 'Collaboration interculturelle et multilingue',
      ar: 'التعاون بين الثقافات ومتعدد اللغات',
      es: 'Colaboración intercultural y multilingüe'
    },
    'softSkills.dialogue': {
      en: 'Dialogue & Conflict Resolution',
      fr: 'Dialogue & Résolution de Conflits',
      ar: 'الحوار وحل النزاعات',
      es: 'Diálogo y Resolución de Conflictos'
    },
    'softSkills.dialogue.facilitation': {
      en: 'Dialogue facilitation and mediation',
      fr: 'Facilitation du dialogue et médiation',
      ar: 'تسهيل الحوار والوساطة',
      es: 'Facilitación del diálogo y mediación'
    },
    'softSkills.dialogue.conflictResolution': {
      en: 'Conflict resolution and consensus building',
      fr: 'Résolution de conflits et construction de consensus',
      ar: 'حل النزاعات وبناء الإجماع',
      es: 'Resolución de conflictos y construcción de consenso'
    },
    'softSkills.dialogue.activeListening': {
      en: 'Active listening and structured discussion moderation',
      fr: 'Écoute active et modération de discussions structurées',
      ar: 'الاستماع النشط وتنظيم المناقشات المنظمة',
      es: 'Escucha activa y moderación de discusiones estructuradas'
    },
    'softSkills.crisis': {
      en: 'Crisis & Operational Skills',
      fr: 'Compétences de Crise & Opérationnelles',
      ar: 'مهارات الأزمات والتشغيلية',
      es: 'Habilidades de Crisis y Operacionales'
    },
    'softSkills.crisis.management': {
      en: 'Crisis management and rapid prioritization',
      fr: 'Gestion de crise et priorisation rapide',
      ar: 'إدارة الأزمات والأولوية السريعة',
      es: 'Gestión de crisis y priorización rápida'
    },
    'softSkills.crisis.firstAid': {
      en: 'Certified first aid and emergency response',
      fr: 'Premiers secours certifiés et intervention d\'urgence',
      ar: 'الإسعافات الأولية المعتمدة والاستجابة للطوارئ',
      es: 'Primeros auxilios certificados y respuesta de emergencia'
    },
    'softSkills.crisis.stressManagement': {
      en: 'Stress management in high-pressure situations',
      fr: 'Gestion du stress dans des situations de forte pression',
      ar: 'إدارة الإجهاد في المواقف عالية الضغط',
      es: 'Gestión del estrés en situaciones de alta presión'
    },
    'softSkills.execution': {
      en: 'Execution & Professional Discipline',
      fr: 'Exécution & Discipline Professionnelle',
      ar: 'التنفيذ والانضباط المهني',
      es: 'Ejecución y Disciplina Profesional'
    },
    'softSkills.execution.timeManagement': {
      en: 'Time management and task prioritization',
      fr: 'Gestion du temps et priorisation des tâches',
      ar: 'إدارة الوقت وأولوية المهام',
      es: 'Gestión del tiempo y priorización de tareas'
    },
    'softSkills.execution.adaptability': {
      en: 'Adaptability in fast-paced and changing environments',
      fr: 'Adaptabilité dans des environnements rapides et changeants',
      ar: 'القدرة على التكيف في البيئات سريعة الخطى والمتغيرة',
      es: 'Adaptabilidad en entornos rápidos y cambiantes'
    },
    'softSkills.execution.productionConstraints': {
      en: 'Working under real production and operational constraints',
      fr: 'Travail sous contraintes de production et opérationnelles réelles',
      ar: 'العمل تحت قيود الإنتاج والتشغيل الحقيقية',
      es: 'Trabajar bajo restricciones reales de producción y operacionales'
    },
    'softSkills.ethics': {
      en: 'Ethics & Community Leadership',
      fr: 'Éthique & Leadership Communautaire',
      ar: 'الأخلاق والقيادة المجتمعية',
      es: 'Ética y Liderazgo Comunitario'
    },
    'softSkills.ethics.professionalEthics': {
      en: 'Strong sense of professional ethics and responsibility',
      fr: 'Fort sens de l\'éthique professionnelle et de la responsabilité',
      ar: 'إحساس قوي بالأخلاق المهنية والمسؤولية',
      es: 'Fuerte sentido de ética profesional y responsabilidad'
    },
    'softSkills.ethics.humanitarian': {
      en: 'Humanitarian leadership experience (Tunisian Red Crescent)',
      fr: 'Expérience de leadership humanitaire (Croissant-Rouge Tunisien)',
      ar: 'خبرة في القيادة الإنسانية (الهلال الأحمر التونسي)',
      es: 'Experiencia en liderazgo humanitario (Media Luna Roja Tunecina)'
    },
    'softSkills.ethics.youthLeadership': {
      en: 'Youth leadership and mentoring (Scout leadership roles)',
      fr: 'Leadership des jeunes et mentorat (rôles de leadership scout)',
      ar: 'قيادة الشباب والإرشاد (أدوار القيادة الكشفية)',
      es: 'Liderazgo juvenil y mentoría (roles de liderazgo scout)'
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
      en: 'Flagship Personal Finance Platform',
      fr: 'Plateforme de Finance Personnelle Phare',
      ar: 'منصة التمويل الشخصي الرائدة',
      es: 'Plataforma de Finanzas Personales Principal'
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
      en: 'Developed and integrated the E-Kanban module at ADDIXO Group: defined requirements, wireframes and RESTful Spring Boot services; built Angular standalone components with reactive forms, data tables, modals and real-time charts.',
      fr: 'Développé et intégré le module E-Kanban chez ADDIXO Group : défini les exigences, les maquettes et les services RESTful Spring Boot ; construit des composants Angular autonomes avec des formulaires réactifs, des tableaux de données, des modales et des graphiques en temps réel.',
      ar: 'طورت ودمجت وحدة إي-كانبان في مجموعة أديكسو: حددت المتطلبات والرسوم البيانية وخدمات سبرينج بوت RESTful؛ بنيت مكونات أنجولار مستقلة مع نماذج تفاعلية وجداول بيانات ونوافذ منبثقة ورسوم بيانية في الوقت الفعلي.',
      es: 'Desarrollé e integré el módulo E-Kanban en ADDIXO Group: definí requisitos, wireframes y servicios RESTful Spring Boot; construí componentes Angular independientes con formularios reactivos, tablas de datos, modales y gráficos en tiempo real.'
    },
    'projects.alphavault.title': {
      en: 'Alpha Vault',
      fr: 'Alpha Vault',
      ar: 'ألفا فولت',
      es: 'Alpha Vault'
    },
    'projects.alphavault.description': {
      en: 'Lead full-stack developer of a personal finance platform: implemented core Spring Boot modules (Income, Expense, Savings, Debt, Investments) with JWT security and PostgreSQL; crafting Angular standalone components for dashboards, charts and responsive UX.',
      fr: 'Développeur full-stack principal d\'une plateforme de finance personnelle : implémenté les modules Spring Boot principaux (Revenus, Dépenses, Épargne, Dette, Investissements) avec sécurité JWT et PostgreSQL ; créé des composants Angular autonomes pour les tableaux de bord, graphiques et UX responsive.',
      ar: 'مطور ويب شامل رئيسي لمنصة التمويل الشخصي: نفذت وحدات سبرينج بوت الأساسية (الدخل، المصروفات، الادخار، الديون، الاستثمارات) مع أمان JWT وبوستجري إس كيو إل؛ صممت مكونات أنجولار مستقلة للوحات التحكم والرسوم البيانية وتجربة المستخدم المتجاوبة.',
      es: 'Desarrollador full-stack principal de una plataforma de finanzas personales: implementé módulos Spring Boot principales (Ingresos, Gastos, Ahorros, Deudas, Inversiones) con seguridad JWT y PostgreSQL; creé componentes Angular independientes para dashboards, gráficos y UX responsive.'
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
      en: 'A modern, high-performance weather intelligence platform built with Angular 20, designed to provide real-time meteorological data, interactive maps, and advanced atmospheric analytics with a sleek, responsive UI.',
      fr: 'Une plateforme d\'intelligence météorologique moderne et performante construite avec Angular 20, conçue pour fournir des données météorologiques en temps réel, des cartes interactives et des analyses atmosphériques avancées avec une interface utilisateur élégante et responsive.',
      ar: 'منصة ذكاء الطقس عالية الأداء الحديثة المبنية على Angular 20، مصممة لتوفير بيانات الأرصاد الجوية في الوقت الفعلي، والخرائط التفاعلية، والتحليلات الجوية المتقدمة مع واجهة مستخدم أنيقة ومتجاوبة.',
      es: 'Una plataforma de inteligencia meteorológica moderna y de alto rendimiento construida con Angular 20, diseñada para proporcionar datos meteorológicos en tiempo real, mapas interactivos y análisis atmosféricos avanzados con una interfaz de usuario elegante y responsive.'
    },
    'projects.aurafx.title': {
      en: 'AuraFX',
      fr: 'AuraFX',
      ar: 'أورا إف إكس',
      es: 'AuraFX'
    },
    'projects.aurafx.description': {
      en: 'A high-performance forex analytics platform built with Angular, designed to provide real-time currency exchange rates, multi-currency conversion, historical data charts, and advanced market insights with a sleek, responsive UI.',
      fr: 'Une plateforme d\'analyse forex haute performance construite avec Angular, conçue pour fournir des taux de change en temps réel, la conversion multi-devises, des graphiques de données historiques et des informations de marché avancées avec une interface utilisateur élégante et responsive.',
      ar: 'منصة تحليل فوركس عالية الأداء المبنية على Angular، مصممة لتوفير أسعار صرف العملات في الوقت الفعلي، وتحويل العملات المتعددة، ورسوم بيانية للبيانات التاريخية، ورؤى السوق المتقدمة مع واجهة مستخدم أنيقة ومتجاوبة.',
      es: 'Una plataforma de análisis de forex de alto rendimiento construida con Angular, diseñada para proporcionar tasas de cambio de divisas en tiempo real, conversión multi-moneda, gráficos de datos históricos e información avanzada del mercado con una interfaz de usuario elegante y responsive.'
    },
    'projects.introMaster': {
      en: 'At the heart of my portfolio is Alpha Vault—my flagship accomplishment that brings together vision, precision, and user-focused design. It embodies my dedication to building robust, scalable solutions that empower users to take control of their financial journey.',
      fr: 'Au cœur de mon portfolio se trouve Alpha Vault—mon accomplissement phare qui réunit vision, précision et design centré sur l\'utilisateur. Il incarne mon dévouement à construire des solutions robustes et évolutives qui permettent aux utilisateurs de prendre le contrôle de leur parcours financier.',
      ar: 'في قلب محفظتي يوجد Alpha Vault—إنجازي الرائد الذي يجمع بين الرؤية والدقة والتصميم المرتكز على المستخدم. إنه يجسد تفاني في بناء حلول قوية وقابلة للتوسع تمكن المستخدمين من السيطرة على رحلتهم المالية.',
      es: 'En el corazón de mi portafolio está Alpha Vault—mi logro insignia que reúne visión, precisión y diseño centrado en el usuario. Encarna mi dedicación a construir soluciones robustas y escalables que empoderan a los usuarios para tomar el control de su viaje financiero.'
    },
    'projects.introSecondary': {
      en: 'Complementing Alpha Vault are three dynamic side ventures—AuraCast, AuraFX, and E-Kanban Integration—each crafted to showcase my versatility and creativity. From delivering real-time insights and engaging experiences to streamlining complex workflows, these projects reflect my ability to innovate quickly and make an impact across diverse domains.',
      fr: 'Complétant Alpha Vault, trois entreprises dynamiques—AuraCast, AuraFX et l\'intégration E-Kanban—chacune conçue pour mettre en valeur ma polyvalence et ma créativité. De la fourniture d\'informations en temps réel et d\'expériences engageantes à la rationalisation de flux de travail complexes, ces projets reflètent ma capacité à innover rapidement et à avoir un impact dans divers domaines.',
      ar: 'تكمل Alpha Vault ثلاث مشاريع جانبية ديناميكية—AuraCast وAuraFX وتكامل E-Kanban—كل منها مصمم لعرض تنوعي وإبداعي. من تقديم الرؤى في الوقت الفعلي والتجارب الجذابة إلى تبسيط سير العمل المعقدة، تعكس هذه المشاريع قدرتي على الابتكار بسرعة وإحداث تأثير عبر مجالات متنوعة.',
      es: 'Complementando Alpha Vault hay tres proyectos dinámicos—AuraCast, AuraFX e Integración E-Kanban—cada uno diseñado para mostrar mi versatilidad y creatividad. Desde entregar información en tiempo real y experiencias atractivas hasta optimizar flujos de trabajo complejos, estos proyectos reflejan mi capacidad para innovar rápidamente y generar impacto en diversos dominios.'
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
      en: 'Get In Touch',
      fr: 'Me Contacter',
      ar: 'تواصل معي',
      es: 'Ponte en Contacto'
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