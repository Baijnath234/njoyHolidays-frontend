import jsPDF from "jspdf";

type Room = {
  roomType: string;
  meal: string;
  pax: number;
  date: string;
  rate: number;
};

type Trip = {
  destination: string;
  days: number;
  nights: number;
  rooms: Room[];
};

export const generateTripPDF = (trip: Trip) => {
  const doc = new jsPDF();

  doc.text(`Destination: ${trip.destination}`, 10, 10);
  doc.text(`Days: ${trip.days}`, 10, 20);
  doc.text(`Nights: ${trip.nights}`, 10, 30);

  trip.rooms.forEach((room: Room, i: number) => {
    doc.text(
      `Room ${i + 1}: ${room.roomType}, ₹${room.rate}`,
      10,
      40 + i * 10
    );
  });

  doc.save("trip.pdf");
};