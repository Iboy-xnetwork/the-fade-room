import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getServices,
  getBarbers,
  getBarberServices,
  createBooking,
} from "../services/api";

const times = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

function Booking() {
  const [services, setServices] = useState([]);
  const [barbers, setBarbers] = useState([]);
  const [barberServices, setBarberServices] = useState([]);

  const [selectedService, setSelectedService] = useState("");
  const [selectedBarber, setSelectedBarber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load booking data
  useEffect(() => {
    const loadBookingData = async () => {
      try {
        setLoading(true);
        setError("");

        const [servicesData, barbersData, relationshipsData] =
          await Promise.all([
            getServices(),
            getBarbers(),
            getBarberServices(),
          ]);

        if (!servicesData.success) {
          throw new Error(
            servicesData.message || "Failed to load services."
          );
        }

        if (!barbersData.success) {
          throw new Error(
            barbersData.message || "Failed to load barbers."
          );
        }

        if (!relationshipsData.success) {
          throw new Error(
            relationshipsData.message ||
              "Failed to load barber services."
          );
        }

        setServices(servicesData.services || []);
        setBarbers(barbersData.barbers || []);
        setBarberServices(relationshipsData.barber_services || []);
      } catch (err) {
        setError(
          err.message || "Failed to load booking information."
        );
      } finally {
        setLoading(false);
      }
    };

    loadBookingData();
  }, []);

  // Find selected service
  const selectedServiceData = services.find(
    (service) => String(service.id) === String(selectedService)
  );

  // Only show barbers who provide the selected service
  const availableBarbers = selectedService
    ? barbers.filter((barber) =>
        barberServices.some(
          (relationship) =>
            String(relationship.barber_id) === String(barber.id) &&
            String(relationship.service_id) === String(selectedService)
        )
      )
    : [];

  // Reset barber if service changes
  useEffect(() => {
    if (
      selectedBarber &&
      !availableBarbers.some(
        (barber) => String(barber.id) === String(selectedBarber)
      )
    ) {
      setSelectedBarber("");
    }
  }, [selectedService]);

  // Minimum date = today
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!selectedService) {
      setError("Please select a service.");
      return;
    }

    if (!selectedBarber) {
      setError("Please select a barber.");
      return;
    }

    if (!selectedDate) {
      setError("Please select a date.");
      return;
    }

    if (!selectedTime) {
      setError("Please select a time.");
      return;
    }

    if (!acceptedTerms) {
      setError("Please agree to the Terms & Conditions before booking.");
      return;
    }

    try {
      setSubmitting(true);

      const bookingData = {
        customer_name: customerName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        service_id: Number(selectedService),
        barber_id: Number(selectedBarber),
        booking_date: selectedDate,
        booking_time: selectedTime,
        notes: notes.trim(),
      };

      const data = await createBooking(bookingData);

      if (!data.success) {
        throw new Error(data.message || "Failed to create booking.");
      }

      setSuccess(
        `Your booking has been submitted successfully. Booking #${data.booking_id}.`
      );

      // Clear form after successful booking
      setSelectedService("");
      setSelectedBarber("");
      setSelectedDate("");
      setSelectedTime("");

      setCustomerName("");
      setPhone("");
      setEmail("");
      setNotes("");
      setAcceptedTerms(false);
    } catch (err) {
      setError(
        err.message || "Something went wrong while creating your booking."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="booking-page">
      {/* HERO */}
      <section className="booking-hero">
        <div className="booking-hero-overlay"></div>

        <div className="booking-hero-content">
          <p className="eyebrow">THE FADE ROOM</p>

          <h1>
            BOOK YOUR
            <br />
            <span>APPOINTMENT.</span>
          </h1>

          <p>
            Choose your service, barber, date and time. We'll take care of the
            rest.
          </p>
        </div>
      </section>

      {/* BOOKING */}
      <section className="booking-section section">
        <div className="section-container booking-grid">
          <div className="booking-form-wrapper">
            <div className="booking-heading">
              <p className="eyebrow">RESERVE YOUR CHAIR</p>

              <h2>
                MAKE YOUR
                <br />
                <span>BOOKING.</span>
              </h2>
            </div>

            {loading ? (
              <p>Loading booking information...</p>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                {/* SERVICE */}
                <div className="form-group">
                  <label htmlFor="service">01. SELECT SERVICE</label>

                  <select
                    id="service"
                    value={selectedService}
                    onChange={(event) => {
                      setSelectedService(event.target.value);
                      setError("");
                      setSuccess("");
                    }}
                    required
                  >
                    <option value="">Choose a service</option>

                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name} — R{Number(service.price).toFixed(0)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* BARBER */}
                <div className="form-group">
                  <label htmlFor="barber">02. SELECT BARBER</label>

                  <select
                    id="barber"
                    value={selectedBarber}
                    onChange={(event) => {
                      setSelectedBarber(event.target.value);
                      setError("");
                      setSuccess("");
                    }}
                    disabled={!selectedService}
                    required
                  >
                    <option value="">
                      {selectedService
                        ? "Choose a barber"
                        : "Select a service first"}
                    </option>

                    {availableBarbers.map((barber) => (
                      <option key={barber.id} value={barber.id}>
                        {barber.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* DATE */}
                <div className="form-group">
                  <label htmlFor="date">03. SELECT DATE</label>

                  <input
                    id="date"
                    type="date"
                    min={today}
                    value={selectedDate}
                    onChange={(event) => {
                      setSelectedDate(event.target.value);
                      setError("");
                      setSuccess("");
                    }}
                    required
                  />
                </div>

                {/* TIME */}
                <div className="form-group">
                  <label>04. SELECT TIME</label>

                  <div className="time-grid">
                    {times.map((time) => (
                      <button
                        type="button"
                        key={time}
                        className={`time-button ${
                          selectedTime === time ? "selected" : ""
                        }`}
                        onClick={() => {
                          setSelectedTime(time);
                          setError("");
                          setSuccess("");
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    value={selectedTime}
                    required
                    readOnly
                    hidden
                  />
                </div>

                {/* CUSTOMER DETAILS */}
                <div className="customer-details">
                  <div className="form-section-title">
                    <span>05.</span>

                    <h3>YOUR DETAILS</h3>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">FULL NAME</label>

                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={customerName}
                        onChange={(event) =>
                          setCustomerName(event.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">PHONE NUMBER</label>

                      <input
                        id="phone"
                        type="tel"
                        placeholder="Your phone number"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">EMAIL ADDRESS</label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">SPECIAL REQUEST</label>

                    <textarea
                      id="notes"
                      rows="4"
                      placeholder="Anything we should know?"
                      value={notes}
                      onChange={(event) => setNotes(event.target.value)}
                    ></textarea>
                  </div>
                </div>

                {/* TERMS */}
                <label className="terms-checkbox">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(event) =>
                      setAcceptedTerms(event.target.checked)
                    }
                    required
                  />

                  <span>I agree to The Fade Room's Terms & Conditions.</span>
                </label>

                {/* ERROR */}
                {error && (
                  <div className="booking-message booking-error">{error}</div>
                )}

                {/* SUCCESS */}
                {success && (
                  <div className="booking-message booking-success">
                    {success}
                  </div>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="primary-button booking-submit"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Confirm Booking"}
                </button>
              </form>
            )}
          </div>

          {/* SUMMARY */}
          <aside className="booking-summary">
            <div className="summary-card">
              <p className="eyebrow">YOUR APPOINTMENT</p>

              <h3>BOOKING SUMMARY</h3>

              <div className="summary-line">
                <span>Service</span>

                <strong>
                  {selectedServiceData
                    ? selectedServiceData.name
                    : "Not selected"}
                </strong>
              </div>

              <div className="summary-line">
                <span>Barber</span>

                <strong>
                  {selectedBarber
                    ? barbers.find(
                        (barber) =>
                          String(barber.id) === String(selectedBarber)
                      )?.name || "Not selected"
                    : "Not selected"}
                </strong>
              </div>

              <div className="summary-line">
                <span>Date</span>

                <strong>{selectedDate || "Not selected"}</strong>
              </div>

              <div className="summary-line">
                <span>Time</span>

                <strong>{selectedTime || "Not selected"}</strong>
              </div>

              <div className="summary-total">
                <span>Total</span>

                <strong>
                  {selectedServiceData
                    ? `R${Number(selectedServiceData.price).toFixed(0)}`
                    : "R0"}
                </strong>
              </div>

              <p className="summary-note">
                Your appointment will be confirmed after availability is
                checked.
              </p>
            </div>

            <div className="booking-info">
              <p className="eyebrow">NEED HELP?</p>

              <h3>CONTACT THE SHOP</h3>

              <p>
                If you have questions about your booking, contact The Fade Room
                before submitting your appointment.
              </p>

              <a href="tel:+27123456789">012 345 6789</a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Booking;