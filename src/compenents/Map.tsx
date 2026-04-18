"use client";

export default function Map() {
  return (
    <div className="h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.7215114899413!2d-9.210545149215008!3d30.393765944777297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3d7afc1ecae49%3A0xb77f368b6c50a894!2sFitness%20Centre%20%26%20Spa!5e1!3m2!1sen!2sma!4v1757676427065!5m2!1sen!2sma"
        className="w-full h-full"
        loading="lazy"
        title="Gym Location"
      ></iframe>
    </div>
  );
}
