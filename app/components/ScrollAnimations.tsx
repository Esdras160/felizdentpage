'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');

    revealElements.forEach((el) => {
      // Reset visibility on route transition so newly mounted sections can animate in.
      el.classList.remove('visible');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
