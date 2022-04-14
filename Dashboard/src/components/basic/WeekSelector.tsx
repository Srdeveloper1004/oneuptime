import clsx from 'clsx';
import format from 'date-fns/format';
import PropTypes from 'prop-types';
import isValid from 'date-fns/isValid';
import isSameDay from 'date-fns/isSameDay';
import endOfWeek from 'date-fns/endOfWeek';
import DateFnsUtils from '@date-io/date-fns';
import React, { useState } from 'react';
import startOfWeek from 'date-fns/startOfWeek';
import isWithinInterval from 'date-fns/isWithinInterval';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createStyles } from '@material-ui/styles';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { IconButton, withStyles } from '@material-ui/core';

const theme: $TSFixMe = createTheme({
    palette: {
        primary: {
            main: '#0080a8',
        },
        secondary: {
            main: '#0066ff',
        },
    },
});

interface WeekSelectorProps {
    input: object;
    style?: object;
    classes: object;
}

let WeekSelector = ({
    classes,
    input,
    style
}: WeekSelectorProps) => {
    const [selectedDate, selectDate]: $TSFixMe = useState(new Date());

    const handleChange: Function = (option: $TSFixMe) => {
        selectDate(option);
        if (input.onChange) {
            input.onChange(new Date(option).toUTCString());
        }
    };

    const formatWeekSelectLabel: Function = (date: $TSFixMe, invalidLabel: $TSFixMe) => {
        return date && isValid(date)
            ? `${format(date, 'EEEE, hh:mm aaa')}`
            : invalidLabel;
    };


    const renderWrappedWeekDay: Function = (date: $TSFixMe, selectedDate: $TSFixMe, dayInCurrentMonth: $TSFixMe) => {
        const start: $TSFixMe = startOfWeek(selectedDate);
        const end: $TSFixMe = endOfWeek(selectedDate);

        const dayIsBetween: $TSFixMe = isWithinInterval(date, { start, end });
        const isFirstDay: $TSFixMe = isSameDay(date, start);
        const isLastDay: $TSFixMe = isSameDay(date, end);

        const wrapperClassName: $TSFixMe = clsx({
            [classes.highlight]: dayIsBetween,
            [classes.firstHighlight]: isFirstDay,
            [classes.endHighlight]: isLastDay,
        });

        const dayClassName: $TSFixMe = clsx(classes.day, {
            [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
            [classes.highlightNonCurrentMonthDay]:
                !dayInCurrentMonth && dayIsBetween,
        });

        return (
            <div className={wrapperClassName}>
                <IconButton className={dayClassName}>
                    <span> {format(date, 'd')} </span>
                </IconButton>
            </div>
        );
    };

    return (
        <span>
            <div style={{ ...style, height: '28px' }}>
                <MuiThemeProvider theme={theme}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DateTimePicker
                            value={selectedDate}
                            onChange={date => handleChange(date)}
                            renderDay={renderWrappedWeekDay}
                            labelFunc={formatWeekSelectLabel}
                        />
                    </MuiPickersUtilsProvider>
                </MuiThemeProvider>
            </div>
        </span>
    );
};

const styles = createStyles((theme: $TSFixMe) => ({
    dayWrapper: {
        position: 'relative',
    },

    day: {
        width: 36,
        height: 36,
        fontSize: theme.typography.caption.fontSize,
        margin: '0 2px',
        color: 'inherit',
    },

    customDayHighlight: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '2px',
        right: '2px',
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: '50%',
    },

    nonCurrentMonthDay: {
        color: theme.palette.text.disabled,
    },

    highlightNonCurrentMonthDay: {
        color: '#676767',
    },

    highlight: {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
    },

    firstHighlight: {
        extend: 'highlight',
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
    },

    endHighlight: {
        extend: 'highlight',
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
    }
}));


WeekSelector = withStyles(styles)(WeekSelector);


WeekSelector.displayName = 'WeekSelector';


WeekSelector.propTypes = {
    input: PropTypes.object.isRequired,
    style: PropTypes.object,
    classes: PropTypes.object.isRequired,
};

export { WeekSelector };
