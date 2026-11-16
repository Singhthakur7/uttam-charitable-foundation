import React from 'react';

/**
 * Resilient, zero-dependency QR Code generator
 * Generates high-resolution scannable QR images via secure QR Server API.
 * Eliminates third-party library object/forwardRef mismatches and canvas taints.
 */
export default function SafeQRCode({
  value,
  size = 120,
  className = '',
  fgColor = '#000000',
  bgColor = '#ffffff',
}) {
  const safeData = encodeURIComponent(value || 'https://www.ucwf.online');
  const cleanFg = (fgColor || '#000000').replace('#', '');
  const cleanBg = (bgColor || '#ffffff').replace('#', '');
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${safeData}&color=${cleanFg}&bgcolor=${cleanBg}&margin=0`;

  return (
    <img
      src={qrUrl}
      alt="Verification QR Code"
      width={size}
      height={size}
      className={`object-contain block ${className}`}
      loading="eager"
      crossOrigin="anonymous"
    />
  );
}

export { SafeQRCode };
