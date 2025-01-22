import React from "react";

export const RadioGroup = ({
  children,
  className,
  onValueChange,
  defaultValue,
}) => {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue);

  const handleChange = (value) => {
    setSelectedValue(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          selectedValue,
          onChange: handleChange,
        })
      )}
    </div>
  );
};

export const RadioGroupItem = ({
  value,
  id,
  selectedValue,
  onChange,
  className,
}) => (
  <div className={className}>
    <input
      type="radio"
      id={id}
      name="radio-group"
      value={value}
      checked={selectedValue === value}
      onChange={() => onChange(value)}
      className="hidden"
    />
    <label htmlFor={id} className="cursor-pointer">
      {value}
    </label>
  </div>
);
