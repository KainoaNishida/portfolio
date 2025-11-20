/**
 * Preloads images to improve perceived performance
 * Returns a promise that resolves when all images are loaded
 */
export function preloadImages(imageUrls) {
  const promises = imageUrls.map((url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => {
        console.warn(`Failed to preload image: ${url}`);
        resolve(url); // Resolve anyway to not block other images
      };
      img.src = url;
    });
  });
  
  return Promise.all(promises);
}

/**
 * Preloads critical homepage images
 */
export function preloadHomepageImages() {
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Critical images that appear above the fold on homepage
  const criticalImages = [
    `${baseUrl}profile.png`, // Profile picture (appears in Header)
  ];
  
  return preloadImages(criticalImages);
}

/**
 * Preloads all homepage images (including below the fold)
 */
export function preloadAllHomepageImages() {
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  const allImages = [
    `${baseUrl}profile.png`,
    // Add other frequently accessed images here if needed
  ];
  
  return preloadImages(allImages);
}

