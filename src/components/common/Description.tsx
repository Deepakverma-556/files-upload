interface Descriptionprops {
  myClass?: string;
  text: string;
}
function Description({ myClass, text }: Descriptionprops) {
  return (
    <p className={`${myClass} text-sm text-black leading-[150%]`}>{text}</p>
  );
}

export default Description;
