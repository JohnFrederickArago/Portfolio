const CLOUDINARY_CLOUD_NAME = "dc6lbqlfl";

export function getOptimizedVideoSrc(src, options = {}) {
  if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
    return src;
  }

  if (src.includes("/video/upload/f_") || src.includes("/video/upload/q_") || src.includes("/video/upload/vc_")) {
    return src;
  }

  const cloudinaryPattern =
    /^https:\/\/res\.cloudinary\.com\/([^/]+)\/video\/upload\/(?:v\d+\/)?(.+)$/;
  const match = src.match(cloudinaryPattern);

  if (!match) {
    return src;
  }

  const quality = options.quality ?? "auto";
  const publicId = match[2];
  const bitrate = options.bitrate ? `,br_${options.bitrate}` : "";

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/f_auto,q_${quality},vc_auto${bitrate}/${publicId}`;
}
