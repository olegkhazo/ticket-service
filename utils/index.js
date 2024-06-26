export function extractMoviesReleaseYear(str) {
  const yearMatch = str.match(/<p class="key">Рік:<\/p>\s*<p class="val">(\d{4})<\/p>/);
  return yearMatch ? yearMatch[1] : null;
}

export function extractMoviesAgeRestriction(str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    
    const ageKeyElement = doc.querySelector('p.key');
    if (ageKeyElement && ageKeyElement.textContent.trim() === 'Вік:') {
        const ageValElement = ageKeyElement.nextElementSibling;
        if (ageValElement && ageValElement.classList.contains('val')) {
            const ageText = ageValElement.childNodes[0].nodeValue.trim();
            return ageText;
        }
    }
    return null;
}

export function truncateString(str) {
    if (str.length > 20) {
      return str.slice(0, 20) + '...';
    }
    return str;
  }