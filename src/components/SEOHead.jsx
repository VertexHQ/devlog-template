export default function SEOHead() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Full Stack Developer Portfolio - Night Mode & Aesthetic Design" />
      <meta name="keywords" content="developer, portfolio, react, javascript, coding" />
      <meta name="author" content="[Your Name]" />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Night Mode | Developer Portfolio" />
      <meta property="og:description" content="Full Stack Developer Portfolio - Night Mode & Aesthetic Design" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:url" content="https://yourportfolio.com" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Night Mode | Developer Portfolio" />
      <meta name="twitter:description" content="Full Stack Developer Portfolio - Night Mode & Aesthetic Design" />
      <meta name="twitter:image" content="/og-image.png" />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;500;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
    </>
  );
}
