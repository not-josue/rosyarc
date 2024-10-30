interface Props {
  buttonText: string;
  styles: string; // colors, and active styles
  aria: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function GalleryButton({
  buttonText,
  styles,
  aria,
  isSelected,
  onClick,
}: Props) {
  return (
    <button
      aria-label={aria}
      className={`rounded-lg border-4 px-3 py-2 font-bold capitalize ${styles}`}
      onClick={onClick}
      data-filter={buttonText}
      aria-pressed={isSelected}
    >
      {buttonText}
    </button>
  );
}
