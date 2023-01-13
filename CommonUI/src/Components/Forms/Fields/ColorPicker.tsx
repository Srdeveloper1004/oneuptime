import Color from 'Common/Types/Color';
import React, {
    FunctionComponent,
    ReactElement,
    useEffect,
    useState,
} from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import useComponentOutsideClick from '../../../Types/UseComponentOutsideClick';
import Input from '../../Input/Input';
import Icon, { IconProp } from '../../Icon/Icon';

export interface ComponentProps {
    onChange: (value: Color | null) => void;
    initialValue?: undefined | Color;
    placeholder: string;
    onFocus?: (() => void) | undefined;
    tabIndex?: number | undefined;
    onClick?: undefined | (() => void);
    className?: undefined | string;
    value?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
    onBlur?: (() => void) | undefined;
    dataTestId?: string;
    onEnterPress?: (() => void) | undefined;
    error?: string | undefined;
}

const ColorPicker: FunctionComponent<ComponentProps> = (
    props: ComponentProps
): ReactElement => {
    const [color, setColor] = useState<string>('');
    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentOutsideClick(false);

    useEffect(() => {
        if (props.initialValue) {
            setColor(props.initialValue.toString());
        }
    }, [props.initialValue]);

    const handleChange: Function = (color: string): void => {
        setColor(color);
        if (!color) {
            return props.onChange(null);
        }
        props.onChange(new Color(color));
    };

    return (
        <div className='flex block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm pl-10'>
            
            <div className='rounded h-5 w-5' style={{backgroundColor: color.toString()}}>

            </div>

            <Input
                disabled={props.disabled}
                onBlur={props.onBlur}
                onEnterPress={props.onEnterPress}
                className="border-none"
                placeholder={props.placeholder}
                value={color}
                readOnly={true}
                type="text"
                tabIndex={props.tabIndex}
                onClick={() => {
                    if (!props.readOnly) {
                        setIsComponentVisible(!isComponentVisible);
                    }
                }}
                onChange={(value: string) => {
                    if (!value) {
                        return handleChange('');
                    }
                }}
                onFocus={props.onFocus || undefined}
            />
            {color && !props.disabled && (
                <Icon
                    icon={IconProp.Close}
                    onClick={() => {
                        setColor('#000000');
                        if (props.onChange) {
                            props.onChange(null);
                        }
                    }}
                />
            )}
            {isComponentVisible ? (
                <div
                    ref={ref}
                    style={{
                        position: 'absolute',
                    }}
                >
                    <ChromePicker
                        color={color}
                        onChange={(color: ColorResult) => {
                            setColor(color.hex);
                        }}
                        onChangeComplete={(color: ColorResult) => {
                            return handleChange(color.hex);
                        }}
                    />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default ColorPicker;
