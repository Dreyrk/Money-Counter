"use client";

export default function Loader({ size = 16 }: { size?: number }) {
  return (
    <div
      className={`w-${size || 16} h-${
        size || 16
      } border-8 border-t-8 rounded-full place-self-center border-light-black border-t-blue-600 animate-spin`}
    />
  );
}
