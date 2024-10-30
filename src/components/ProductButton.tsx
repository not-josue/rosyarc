interface Props {
  buttonText: string;
  styles?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function ProductButton({
  buttonText,
  styles = "",
  isSelected = false,
  onClick,
}: Props) {
  return (
    <button
      aria-pressed={isSelected}
      className={`p-2 hover:bg-green-200 font-bold dark:hover:bg-green-800 ${styles}`}
      onClick={onClick} // Attach the onClick event for the button
    >
      {buttonText}
    </button>
  );
}
