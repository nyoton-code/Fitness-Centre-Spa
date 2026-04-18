"use client";

export default function video() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <video
        src="/vedios/houaraFitness.mp4"
        // autoPlay
        muted
        loop
        playsInline
        controls
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
}
