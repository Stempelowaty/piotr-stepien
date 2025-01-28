export default function BgGradient() {
  return (
    <div
      className="w-full h-full fixed z-0"
      style={{
        background: `
            linear-gradient(to right, rgba(255, 0, 0, 0.03), transparent 100%), 
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05), transparent 100%), 
            repeating-linear-gradient(0deg, transparent, transparent 63px, rgba(255, 255, 255, 0.03) 64px),
            repeating-linear-gradient(90deg, transparent, transparent 63px, rgba(255, 255, 255, 0.03) 64px), #0f172a 
          `,
      }}
    ></div>
  );
}
