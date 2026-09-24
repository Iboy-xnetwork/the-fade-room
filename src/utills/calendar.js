function formatGoogleLocalDate(dateStr, timeStr) {
  // dateStr format: YYYY-MM-DD, timeStr format: HH:mm
  const [year, month, day] = dateStr.split("-");
  const [hours, minutes] = timeStr.split(":");

  return `${year}${month}${day}T${hours}${minutes}00`;
}

function formatDateForGoogle(date, time, durationMinutes) {
  const [year, month, day] = date.split("-").map(Number);
  const [hours, minutes] = time.split(":").map(Number);

  // Create local date object
  const start = new Date(year, month - 1, day, hours, minutes, 0);
  const end = new Date(start.getTime() + durationMinutes * 60 * 1000);

  // Helper to format a Date object strictly into local YYYYMMDDTHHMMSS format for Google
  const format = (d) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const dayVal = String(d.getDate()).padStart(2, "0");
    const h = String(d.getHours()).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    return `${y}${m}${dayVal}T${h}${min}${s}`;
  };

  return {
    start: format(start),
    end: format(end),
  };
}

function escapeCalendarText(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export function createGoogleCalendarUrl({
  serviceName,
  barberName,
  bookingDate,
  bookingTime,
  durationMinutes,
}) {
  const { start, end } = formatDateForGoogle(
    bookingDate,
    bookingTime,
    durationMinutes
  );

  const title = `The Fade Room - ${serviceName}`;

  const details = [
    `Service: ${serviceName}`,
    `Barber: ${barberName}`,
    "The Fade Room",
    "Pretoria, South Africa",
  ].join("\n");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${start}/${end}`,
    details,
    location: "The Fade Room, Pretoria, South Africa",
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadCalendarEvent({
  serviceName,
  barberName,
  customerName,
  bookingDate,
  bookingTime,
  durationMinutes,
}) {
  const [year, month, day] = bookingDate.split("-").map(Number);
  const [hours, minutes] = bookingTime.split(":").map(Number);

  const start = new Date(year, month - 1, day, hours, minutes, 0);
  const end = new Date(start.getTime() + durationMinutes * 60 * 1000);

  const formatICSDate = (d) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const dayVal = String(d.getDate()).padStart(2, "0");
    const h = String(d.getHours()).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    return `${y}${m}${dayVal}T${h}${min}${s}`;
  };

  const startDate = formatICSDate(start);
  const endDate = formatICSDate(end);
  const now = formatICSDate(new Date());

  const event = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//The Fade Room//Booking//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:fade-room-${Date.now()}@thefadroom.co.za`,
    `DTSTAMP:${now}`,
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    `SUMMARY:${escapeCalendarText(`The Fade Room - ${serviceName}`)}`,
    `DESCRIPTION:${escapeCalendarText(
      `Customer: ${customerName}\nService: ${serviceName}\nBarber:${barberName}`
    )}`,
    `LOCATION:${escapeCalendarText(
      "The Fade Room, Pretoria, South Africa"
    )}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([event], {
    type: "text/calendar;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "the-fade-room-booking.ics";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}