import { FocusEventHandler, forwardRef, useState } from 'react';

import debounce from 'debounce';
import { FaAngleDown, FaAngleUp, FaXmark } from 'react-icons/fa6';
import ReactSelect, {
  ActionMeta,
  ClearIndicatorProps,
  CoercedMenuPlacement,
  components,
  DropdownIndicatorProps,
  MenuPlacement,
  MultiValueRemoveProps,
  OnChangeValue,
  SelectInstance,
} from 'react-select';

export type SingleOption = {
  label: string;
  value: string;
  isDisabled?: boolean;
};

export type GroupOption = {
  label: string;
  options: {
    label: string;
    value: string;
    isDisabled?: boolean;
  }[];
};

export type Option = SingleOption | GroupOption;

export type IsMulti = boolean;

function getValue(options?: Option[], value?: string | string[]): SingleOption | SingleOption[] | undefined {
  if (options && value) {
    if (Array.isArray(value)) {
      //multiple
      const result: SingleOption[] = [];
      options.forEach((option) => {
        if ('value' in option && value.includes(option.value)) {
          result.push(option);
        } else if ('options' in option) {
          const founds = option.options.filter((option) => value.includes(option.value));
          founds.forEach((found) => {
            result.push(found);
          });
        }
      });
      return result;
    } else {
      // single
      for (const option of options) {
        if ('value' in option && option.value === value) {
          return option;
        } else if ('options' in option) {
          return option.options.find((option) => option.value === value);
        }
      }
    }
  }
  return undefined;
}

function DropdownIndicator(props: DropdownIndicatorProps<Option>) {
  return (
    <components.DropdownIndicator {...props}>
      {props.selectProps.menuIsOpen ? <FaAngleUp size={16} /> : <FaAngleDown size={16} />}
    </components.DropdownIndicator>
  );
}

function ClearIndicator(props: ClearIndicatorProps<Option>) {
  return (
    <components.ClearIndicator {...props}>
      <FaXmark size={16} />
    </components.ClearIndicator>
  );
}

function MultiValueRemove(props: MultiValueRemoveProps<Option>) {
  return (
    <components.MultiValueRemove {...props}>
      <FaXmark size={16} />
    </components.MultiValueRemove>
  );
}

type SelectProps<Option, IsMulti extends boolean> = {
  id?: string;
  placeholder?: string;
  noOptionsMessage?: string;
  style?: {
    layoutType?: 'line' | 'rounded';
    color?: string;
    backgroundColor?: string;
    disabledBackgroundColor?: string;
    disabledColor?: string;
    selectedItemColor?: string;
    disabledItemColor?: string;
    width?: string;
  };
  value?: string | string[];
  defaultValue?: string | string[];
  onChange: (newValue: OnChangeValue<Option, IsMulti>, actionMeta: ActionMeta<Option>) => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  required?: boolean;
  disabled?: boolean;
  debounceWait?: number;
  options?: Option[];
  isSearchable?: boolean;
  isMulti?: boolean;
  menuPlacement?: MenuPlacement;
};

const defaultStyle = {
  layoutType: 'rounded',
  color: 'black',
  backgroundColor: 'white',
  disabledColor: 'gray',
  disabledBackgroundColor: 'rgba(128, 128, 128, 0.2)',
  selectedItemColor: 'blue',
  disabledItemColor: 'gray',
  width: 'inherit',
};

const Select = forwardRef<SelectInstance<Option>, SelectProps<Option, IsMulti>>(
  (
    {
      id,
      placeholder = 'Select',
      noOptionsMessage = 'No options',
      style,
      value,
      defaultValue,
      onChange,
      onBlur,
      required = false,
      disabled = false,
      debounceWait = undefined,
      options,
      isMulti = false,
      isSearchable = false,
      menuPlacement = 'bottom',
    },
    ref,
  ) => {
    const appliedStyle = { ...defaultStyle, ...style };
    const [menuPlacementInternal, setMenuPlacementInternal] = useState<CoercedMenuPlacement>(
      menuPlacement === 'auto' ? 'bottom' : menuPlacement,
    );
    return (
      <ReactSelect
        id={id}
        ref={ref}
        placeholder={placeholder}
        noOptionsMessage={() => noOptionsMessage}
        components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
        styles={{
          control: (styles, { menuIsOpen, isDisabled }) => {
            return {
              ...styles,
              backgroundColor: isDisabled ? appliedStyle.disabledBackgroundColor : appliedStyle.backgroundColor,
              border:
                appliedStyle.layoutType === 'line'
                  ? '0px'
                  : `1px solid ${isDisabled ? appliedStyle.disabledColor : appliedStyle.color}`,
              borderBottom: `1px solid ${isDisabled ? appliedStyle.disabledColor : appliedStyle.color}`,
              borderTopLeftRadius:
                (!menuIsOpen || menuPlacementInternal === 'bottom') && appliedStyle.layoutType === 'rounded'
                  ? '12px'
                  : '0',
              borderTopRightRadius:
                (!menuIsOpen || menuPlacementInternal === 'bottom') && appliedStyle.layoutType === 'rounded'
                  ? '12px'
                  : '0',
              borderBottomLeftRadius:
                (!menuIsOpen || menuPlacementInternal === 'top') && appliedStyle.layoutType === 'rounded'
                  ? '12px'
                  : '0',
              borderBottomRightRadius:
                (!menuIsOpen || menuPlacementInternal === 'top') && appliedStyle.layoutType === 'rounded'
                  ? '12px'
                  : '0',
              width: appliedStyle.width,
              boxShadow: 'none',
              cursor: 'pointer',
              ':hover': {
                ...styles[':hover'],
                borderColor: isDisabled ? appliedStyle.disabledColor : appliedStyle.color,
              },
              minHeight: '24px',
              height: '24px',
            };
          },
          valueContainer: (styles) => ({
            ...styles,
            height: '22px',
            padding: '0 4px 0 8px',
            paddingLeft: appliedStyle.layoutType === 'line' ? '0' : undefined,
          }),
          input: (styles, { isDisabled }) => ({
            ...styles,
            height: '22px',
            padding: '0',
            margin: '0',
            color: isDisabled ? appliedStyle.disabledColor : appliedStyle.color,
          }),
          placeholder: (styles, { isDisabled }) => ({
            ...styles,
            color: isDisabled ? appliedStyle.disabledColor : appliedStyle.color,
            fontSize: '16px',
            fontWeight: '700',
            margin: 0,
          }),
          singleValue: (styles, { isDisabled }) => ({
            ...styles,
            color: isDisabled ? appliedStyle.disabledColor : appliedStyle.color,
            fontSize: '16px',
            fontWeight: '700',
            margin: 0,
          }),
          menu: (styles, { placement }) => {
            setTimeout(() => setMenuPlacementInternal(placement), 0);
            return {
              ...styles,
              backgroundColor: appliedStyle.backgroundColor,
              border: `1px solid ${appliedStyle.color}`,
              borderTopLeftRadius: placement === 'top' ? '12px' : '0',
              borderTopRightRadius: placement === 'top' ? '12px' : '0',
              borderBottomLeftRadius: placement === 'top' ? '0' : '12px',
              borderBottomRightRadius: placement === 'top' ? '0' : '12px',
              maxWidth: appliedStyle.width,
              margin: 0,
              //padding: 0,
            };
          },
          menuList: (styles) => ({
            ...styles,
            //margin: 0,
            padding: 0,
          }),
          groupHeading: (styles) => ({
            ...styles,
            color: 'blue',
          }),
          group: (styles) => ({
            ...styles,
            borderBottom: `1px solid ${appliedStyle.color}`,
            ':last-of-type': {
              borderBottom: 0,
            },
          }),
          option: (styles, { isSelected, isDisabled }) => {
            return {
              ...styles,
              backgroundColor: 'transparent',
              color: isSelected
                ? appliedStyle.selectedItemColor
                : isDisabled
                  ? appliedStyle.disabledItemColor
                  : appliedStyle.color,
              cursor: isDisabled ? 'default' : 'pointer',
              ':active': {
                ...styles[':active'],
                backgroundColor: 'transparent',
              },
              fontSize: '16px',
              lineHeight: '20px',
              fontWeight: '700',
              margin: '0 6px',
              padding: '2px 6px',
              borderBottom: `1px solid ${appliedStyle.color}`,
              ':last-of-type': {
                borderBottom: 0,
              },
              width: 'calc(100% - 12px)',
            };
          },
          indicatorSeparator: (styles) => ({
            ...styles,
            display: 'none',
          }),
          indicatorsContainer: (styles) => ({
            ...styles,
            height: '22px',
          }),
          dropdownIndicator: (styles, { isDisabled }) => ({
            ...styles,
            color: isDisabled ? appliedStyle.disabledColor : appliedStyle.color,
            padding: '2px 8px 0 0',
            paddingRight: appliedStyle.layoutType === 'line' ? '0' : undefined,
            ':hover': {
              ...styles[':hover'],
              color: isDisabled ? appliedStyle.disabledColor : appliedStyle.color,
            },
          }),
          clearIndicator: (styles) => ({
            ...styles,
            color: appliedStyle.color,
            padding: '0 4px 0 0',
            ':hover': {
              ...styles[':hover'],
              color: appliedStyle.color,
            },
          }),
        }}
        value={getValue(options, value)}
        defaultValue={getValue(options, defaultValue)}
        onChange={debounceWait ? debounce(onChange, debounceWait) : onChange}
        onBlur={onBlur}
        required={required}
        isDisabled={disabled}
        options={options}
        isMulti={isMulti}
        isSearchable={isSearchable}
        controlShouldRenderValue={!isMulti}
        hideSelectedOptions={false}
        closeMenuOnSelect={!isMulti}
        menuPlacement={menuPlacement}
        isClearable={true}
      />
    );
  },
);
Select.displayName = 'select';

export { Select, SelectProps };
