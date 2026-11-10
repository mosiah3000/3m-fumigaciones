import React from 'react';

interface ResponsiveImageProps {
  basePath: string;
  alt: string;
  className?: string;
  pictureClassName?: string;
  width?: number;
  height?: number;
  priority?: 'high' | 'low' | 'auto';
  loading?: 'lazy' | 'eager';
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  basePath,
  alt,
  className = '',
  pictureClassName = '',
  width,
  height,
  priority = 'auto',
  loading = 'lazy',
}) => {
  const cleanBase = basePath.replace(/\.(png|webp|avif|jpg|jpeg)$/i, '');
  const isHighPriority = priority === 'high';
  const resolvedLoading = isHighPriority ? undefined : loading;

  const imgProps: Record<string, unknown> = {
    src: `${cleanBase}.png`,
    alt,
    className,
    width,
    height,
    decoding: isHighPriority ? 'sync' : 'async',
  };

  if (resolvedLoading) {
    imgProps.loading = resolvedLoading;
  }

  if (priority === 'high' || priority === 'low') {
    imgProps.fetchPriority = priority;
  }

  return (
    <picture className={pictureClassName}>
      <source srcSet={`${cleanBase}.avif`} type="image/avif" />
      <source srcSet={`${cleanBase}.webp`} type="image/webp" />
      <img {...(imgProps as React.ImgHTMLAttributes<HTMLImageElement>)} />
    </picture>
  );
};
