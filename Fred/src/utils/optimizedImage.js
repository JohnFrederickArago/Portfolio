const CLOUDINARY_CLOUD_NAME = "dc6lbqlfl";

export function getOptimizedImageSrc(src, options = {}) {
  if (
    !src ||
    src.startsWith("data:") ||
    src.startsWith("blob:") ||
    src.includes("res.cloudinary.com")
  ) {
    return src;
  }

  const width = options.width ?? 1400;
  const quality = options.quality ?? "auto";
  const crop = options.crop ?? "limit";

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/fetch/f_auto,q_${quality},c_${crop},w_${width}/${encodeURIComponent(src)}`;
}
