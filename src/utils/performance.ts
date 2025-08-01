// Performance optimization utilities for SEO and user experience

// Lazy loading images observer
export const createImageObserver = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy-loading');
            img.classList.add('lazy-loaded');
            observer.unobserve(img);
          }
        }
      });
    });

    return imageObserver;
  }
  return null;
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical CSS
  const criticalCSS = document.createElement('link');
  criticalCSS.rel = 'preload';
  criticalCSS.href = '/src/index.css';
  criticalCSS.as = 'style';
  document.head.appendChild(criticalCSS);

  // Preload hero image
  const heroImage = new Image();
  heroImage.src = '/assets/ProfilePic3.jpeg';

  // Preload fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preconnect';
  fontLink.href = 'https://fonts.googleapis.com';
  document.head.appendChild(fontLink);
};

// Add structured data for better SEO
export const addStructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Portfolio',
    name: 'Prabavathi M Portfolio',
    description: 'Full Stack Developer Portfolio showcasing projects and skills',
    url: 'https://prabavathimagesh.github.io/',
    author: {
      '@type': 'Person',
      name: 'Prabavathi M',
      jobTitle: 'Full Stack Developer',
      email: 'prabavathi3898@gmail.com',
      sameAs: [
        'https://www.linkedin.com/in/prabavathi-m-5b176227b',
        'https://github.com/prabavathimagesh'
      ]
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Projects',
      itemListElement: [
        {
          '@type': 'CreativeWork',
          name: 'CX Future',
          description: 'Employee management system with comprehensive HR features',
          url: 'https://prabavathimagesh.github.io/#projects'
        },
        {
          '@type': 'CreativeWork',
          name: 'Teemie',
          description: 'Restaurant staff shift management and communication app',
          url: 'https://test.teemieapp.com'
        },
        {
          '@type': 'CreativeWork',
          name: 'Humm',
          description: 'Loan tracking and approval system',
          url: 'https://login.shophumm.co.uk'
        },
        {
          '@type': 'CreativeWork',
          name: 'Cookie',
          description: 'Family task and calendar management app',
          url: 'https://app.mycookiefam.com'
        }
      ]
    }
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

// Optimize Core Web Vitals
export const optimizeCoreWebVitals = () => {
  // Preload critical resources
  preloadCriticalResources();

  // Initialize lazy loading
  const observer = createImageObserver();
  if (observer) {
    document.querySelectorAll('img[data-src]').forEach(img => {
      observer.observe(img);
    });
  }

  // Add structured data
  addStructuredData();

  // Monitor performance
  if ('PerformanceObserver' in window) {
    // Monitor LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Monitor CLS (Cumulative Layout Shift)
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      list.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', optimizeCoreWebVitals);
  } else {
    optimizeCoreWebVitals();
  }
};
