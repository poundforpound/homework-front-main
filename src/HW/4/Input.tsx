type InputPropsType = {
  currentText: string;
  setCurrentText: (value: string) => void;
};

export const Input = (props: InputPropsType) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setCurrentText(event.currentTarget.value);
  };

  return (
    <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
  );
};
