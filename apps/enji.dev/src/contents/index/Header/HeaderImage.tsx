import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

import HeaderImageAnimation from './HeaderImageAnimation';

function HeaderImage() {
  const controlsHeaderImage = useAnimationControls();
  const controlsHeaderOutline = useAnimationControls();

  return (
    <div
      className={clsx('relative h-[590px] w-[603px]')}
      style={{
        maskImage: `url("data:image/svg+xml,%3Csvg width='603' height='590' fill='none' viewBox='0 0 603 590' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0v393h228v9.5c0 103.55 83.947 187.5 187.5 187.5s187.5-83.947 187.5-187.5v-402.5h-603z' fill='%23000'/%3E%3C/svg%3E%0A")`,
        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='603' height='590' fill='none' viewBox='0 0 603 590' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0v393h228v9.5c0 103.55 83.947 187.5 187.5 187.5s187.5-83.947 187.5-187.5v-402.5h-603z' fill='%23000'/%3E%3C/svg%3E%0A")`,
      }}
    >
      <div
        className={clsx(
          'from-accent-400/20 via-accent-400/0 absolute right-0 top-0 h-[590px] w-[375px] rounded-full bg-gradient-to-t',
          'dark:from-accent-600/10 dark:via-accent-600/0'
        )}
      >
        <div className={clsx('absolute bottom-0 right-0 overflow-hidden')}>
          <m.div
            className={clsx('absolute z-[10]')}
            initial={{ opacity: 1 }}
            animate={controlsHeaderOutline}
          >
            <HeaderImageAnimation
              onAnimationComplete={() => {
                controlsHeaderOutline.start({
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                    ease: 'easeInOut',
                    delay: 0.3,
                  },
                });

                controlsHeaderImage.start({
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                  transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                  },
                });
              }}
            />
          </m.div>
          <m.div
            className={clsx('transform-gpu')}
            initial={{ opacity: 0, scale: 1.05, filter: 'blur(5px)' }}
            animate={controlsHeaderImage}
          >
            <Image
              alt="Sharmake Hassan Said"
              src="https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/528230455_2425096847876974_924820121842747217_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ueZHzh-hQ6MQ7kNvwEVgUnx&_nc_oc=AdmDmLMthxzlfPdlAC77GMMjv8E7m1Cjl3tcd_BV7-GvvgBHkrMNpz6-64toH5XYmZY&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=i_teh3MfYSzrWFH6XgE51A&oh=00_AfVe6unYcxhjeZIrIzGb_XMFSb3dDx5ZXmhmw4jkzMba0Q&oe=68AA9A0A"
              width={375}
              height={526}
              className={clsx(
                'hidden max-w-none select-none',
                'lg:block',
                'dark:brightness-[.82]',
                'rounded-2xl transition-[filter] duration-300'
              )}
              quality={95}
              priority
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIBogHiAeIB0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </m.div>
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
