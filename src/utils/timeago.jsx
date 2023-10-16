export const timeAgo = (updatedDate) => {
  const currentDate = new Date();
  const postDate = new Date(updatedDate);

  if (isNaN(postDate.getTime())) {
    // Handle the case where updatedDate is not a valid date
    return "Invalid date";
  }

  const timeDifference = Math.floor((currentDate - postDate) / 1000); // in seconds
  
  const days = Math.floor(timeDifference / 86400); // 1 day = 86400 seconds
  const hours = Math.floor((timeDifference % 86400) / 3600); // 1 hour = 3600 seconds
  const minutes = Math.floor(((timeDifference % 86400) % 3600) / 60); // 1 minute = 60 seconds

  if (days > 1) {
    return `${days} days ${minutes} min ago `;
  } else if (days === 1) {
    return `1 day ${minutes} min ago`;
  } else if (hours > 0) {
    return `${hours} hr ${minutes} min ago`;
  } else if (minutes > 0) {
    return `${minutes} min ago`;
  } else {
    return "Just now";
  }
};
