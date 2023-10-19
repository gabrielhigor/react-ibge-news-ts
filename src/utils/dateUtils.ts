export function calculateDaysAgo(publicationDate: string): string {
  const currentDate = new Date();
  const dateParts = publicationDate.split(' ');

  if (dateParts.length !== 2) {
    return 'Data inválida';
  }

  const [date, time] = dateParts;
  const [day, month, year] = date.split('/').map(Number);
  const [hour, minute, second] = time.split(':').map(Number);

  if (
    isNaN(day) || isNaN(month) || isNaN(year) ||
    isNaN(hour) || isNaN(minute) || isNaN(second)
  ) {
    return 'Data inválida';
  }

  const publishedDate = new Date(year, month - 1, day, hour, minute, second);
  const timeDifference = currentDate.getTime() - publishedDate.getTime();
  const daysAgo = Math.floor(timeDifference / (1000 * 3600 * 24));

  if (daysAgo === 0) {
    return 'Hoje';
  } else if (daysAgo === 1) {
    return '1 dia atrás';
  } else {
    return `${daysAgo} dias atrás`;
  }
}
