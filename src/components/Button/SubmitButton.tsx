export default function SubmitButton({ text }: { text: string }) {
  return (
    <button
      className="bg-btn rounded-lg p-2 mt-10 text-primary font-bold text-xl"
      type="submit">
      {text}
    </button>
  );
}
