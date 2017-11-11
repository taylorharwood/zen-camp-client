export const formatCampgroundName = (facilityName) => {
  return facilityName
    .trim()
    .split(' ')
    .map(word => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
      }

      return '';
    })
    .join(' ');
}