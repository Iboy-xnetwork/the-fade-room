const API_BASE_URL = "https://enderprojects.rf.gd/backend/api";

export async function getServices() {
  const response = await fetch(`${API_BASE_URL}/services.php`);
  if (!response.ok) {
    throw new Error("Failed to load services.");
  }
  return response.json();
}

export async function getBarbers() {
  const response = await fetch(`${API_BASE_URL}/barbers.php`);
  if (!response.ok) {
    throw new Error("Failed to load barbers.");
  }
  return response.json();
}

export async function getBarberServices() {
  const response = await fetch(`${API_BASE_URL}/barber-services.php`);
  if (!response.ok) {
    throw new Error("Failed to load barber services.");
  }
  return response.json();
}

// 🟢 NEW: Fetch existing bookings for a barber and date
export async function getBookings({ barber_id, date }) {
  const response = await fetch(
    `${API_BASE_URL}/bookings.php?barber_id=${barber_id}&date=${date}`
  );
  if (!response.ok) {
    throw new Error("Failed to load existing bookings.");
  }
  return response.json();
}

export async function createBooking(bookingData) {
  const response = await fetch(`${API_BASE_URL}/bookings.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  const text = await response.text();

  let data;
  try {
    data = JSON.parse(text);
  } catch (err) {
    throw new Error("Server error. Please try again.");
  }

  if (!response.ok) {
    throw new Error(data.message || "Failed to create booking.");
  }

  return data;
}

export async function sendContactMessage(messageData) {
  const response = await fetch(`${API_BASE_URL}/contact.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to send message.");
  }

  return data;
}