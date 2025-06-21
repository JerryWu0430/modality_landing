// component.tsx
'use client';

import { MoveUpRight } from 'lucide-react';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MediaData {
  id: number;
  src: string;
  alt: string;
  type: 'image' | 'video';
  comingSoon?: boolean;
  description?: string;
}

const mediaItems: MediaData[] = [
  {
    id: 1,
    src: '/tryon.mp4',
    alt: 'Virtual Try-On',
    type: 'video' as const,
    description: 'Modality knows how to turn your product into stunning visuals — multiple angles, perfect poses, exactly how you imagined.',
  },
  {
    id: 2,
    src: '/production_video.mp4',
    alt: 'Production Video',
    type: 'video' as const,
    description: 'Modality allows you to generate high-end product videos instantly, without the need for shoots or studios.',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1679640034489-a6db1f096b70?q=80&w=1274&auto=format&fit=crop',
    alt: 'Batch Try-On',
    type: 'image',
    comingSoon: true,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1679482451632-b2e126da7142?q=80&w=1274&auto=format&fit=crop',
    alt: 'Web Extension',
    type: 'image',
    comingSoon: true,
  },
];

// Inlined useMediaQuery hook to resolve import issue
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(query);
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };
      setMatches(mediaQueryList.matches);
      mediaQueryList.addEventListener('change', listener);
      return () => mediaQueryList.removeEventListener('change', listener);
    }
  }, [query]);

  return matches;
};

export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'blue-theme' | 'green-theme';
  size?: 'default' | 'compact' | 'expanded';
  asChild?: boolean;
  items?: MediaData[];
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ variant = 'default', size = 'default', asChild, className, children, items = mediaItems, ...props }, ref) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const [activeMedia, setActiveMedia] = useState<MediaData | null>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(0.5);
    const [selectedMedia, setSelectedMedia] = useState<MediaData | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const requestRef = useRef<number | null>(null);
    const prevCursorPosition = useRef({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
      const { clientX, clientY } = e;
      const dx = clientX - prevCursorPosition.current.x;
      const dy = clientY - prevCursorPosition.current.y;

      const easeAmount = 0.2;
      const newX = prevCursorPosition.current.x + dx * easeAmount;
      const newY = prevCursorPosition.current.y + dy * easeAmount;

      setCursorPosition({ x: newX, y: newY });
      prevCursorPosition.current = { x: newX, y: newY };
    }, []);

    useEffect(() => {
      const updateCursorPosition = (e: MouseEvent) => {
        if (requestRef.current) return;
        requestRef.current = requestAnimationFrame(() => {
          handleMouseMove(e);
          requestRef.current = null;
        });
      };

      window.addEventListener('mousemove', updateCursorPosition);
      return () => {
        window.removeEventListener('mousemove', updateCursorPosition);
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
      };
    }, [handleMouseMove]);

    const handleMediaHover = useCallback(
      (media: MediaData) => {
        if (activeMedia !== media) {
          setActiveMedia(media);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setOpacity(1);
            setScale(1);
          }, 50);
        } else {
          setOpacity(1);
          setScale(1);
        }
      },
      [activeMedia]
    );

    const handleMouseLeave = useCallback(() => {
      setOpacity(0);
      setScale(0.5);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActiveMedia(null);
      }, 300);
    }, []);

    const handleMediaClick = useCallback((media: MediaData) => {
      if (!media.comingSoon) {
        setSelectedMedia(media);
      }
    }, []);

    const closeModal = useCallback(() => {
      setSelectedMedia(null);
    }, []);

    // Close modal on escape key
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeModal();
        }
      };

      if (selectedMedia) {
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
      }
    }, [selectedMedia, closeModal]);

    const variantClasses = {
      default: 'bg-transparent',
      'blue-theme': 'dark:bg-gradient-to-b from-blue-900 from-10% to-blue-950 to-100% bg-blue-100',
      'green-theme': 'dark:bg-gradient-to-b from-green-900 from-10% to-green-950 to-100% bg-green-100',
    };

    const sizeClasses = {
      default: 'p-4 text-xl sm:text-2xl md:text-5xl',
      compact: 'p-2 text-lg sm:text-xl md:text-4xl',
      expanded: 'p-6 text-2xl sm:text-3xl md:text-6xl',
    };

    const h2SizeClasses = {
        default: 'text-xl sm:text-2xl md:text-5xl',
        compact: 'text-lg sm:text-xl md:text-4xl',
        expanded: 'text-2xl sm:text-3xl md:text-6xl',
    };

    const commonClasses = cn(
      'relative w-full min-h-fit',
      variantClasses[variant],
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        ref,
        className: cn((children as React.ReactElement<any>).props.className, commonClasses),
        ...props,
      });
    }

    const renderMedia = (media: MediaData, className: string) => {
      if (media.comingSoon) {
        return (
          <div className={`${className} bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center rounded-md border-2 border-dashed border-gray-300 dark:border-gray-600`}>
            <div className="text-center">
              <div className="text-2xl mb-2">🚀</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Coming Soon</div>
            </div>
          </div>
        );
      }
      
      if (media.type === 'video') {
        return (
          <video
            src={media.src}
            className={className}
            autoPlay
            muted
            loop
            playsInline
          />
        );
      }
      return (
        <img
          src={media.src}
          alt={media.alt}
          className={className}
        />
      );
    };

    return (
      <div
        ref={ref}
        className={commonClasses}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {items.map((media) => (
          <div
            key={media.id}
            className={cn(`cursor-pointer relative sm:flex items-center justify-between`, sizeClasses[size])}
            onMouseEnter={() => handleMediaHover(media)}
            onClick={() => handleMediaClick(media)}
          >
            {!isDesktop && renderMedia(
              media,
              'sm:w-32 sm:h-20 w-full h-52 object-cover rounded-md'
            )}
            <h2
              className={cn(
                `newFont uppercase font-semibold sm:py-6 py-2 leading-[100%] relative`,
                h2SizeClasses[size],
                activeMedia?.id === media.id
                  ? 'mix-blend-difference z-20 text-gray-300'
                  : 'text-gray-700 dark:text-gray-300'
              )}
            >
              {media.alt}
              {media.comingSoon && (
                <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">
                  (Coming Soon)
                </span>
              )}
            </h2>
            <button
              className={cn(
                `sm:block hidden p-4 rounded-full transition-all duration-300 ease-out`,
                activeMedia?.id === media.id
                  ? 'mix-blend-difference z-20 bg-white text-black'
                  : ''
              )}
            >
              <MoveUpRight className='w-8 h-8' />
            </button>
            <div
              className={`h-[2px] dark:bg-white bg-black absolute bottom-0 left-0 transition-all duration-300 ease-linear ${
                activeMedia?.id === media.id ? 'w-full' : 'w-0'
              }`}
            />
          </div>
        ))}
        {isDesktop && activeMedia && !activeMedia.comingSoon && (
          <div
            className={`fixed dark:bg-gray-950 bg-white object-cover pointer-events-none z-10 rounded-lg overflow-hidden`}
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: opacity,
              width: activeMedia.type === 'video' ? '260px' : '100px',
              height: '400px',
            }}
          >
            {renderMedia(
              activeMedia,
              'w-full h-full object-cover'
            )}
          </div>
        )}

        {/* Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden max-w-6xl w-full max-h-[90vh]">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex h-full">
                {/* Video/Image on the left */}
                <div className="flex-[2] p-6">
                  <div className="relative h-full">
                    {renderMedia(
                      selectedMedia,
                      'w-full h-full object-cover rounded-lg'
                    )}
                  </div>
                </div>
                
                {/* Text content on the right */}
                <div className="flex-1 p-6 flex flex-col justify-end">
                  <div className="space-y-4 max-w-xs">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {selectedMedia.alt}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedMedia.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

Component.displayName = 'Component';

export default Component;