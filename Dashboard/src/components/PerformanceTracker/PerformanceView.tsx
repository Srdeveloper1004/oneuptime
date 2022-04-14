import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getMonitorLogs } from '../../actions/monitor';
//import MonitorLogsList from '../monitor/MonitorLogsList';
import Select from '../../components/basic/Select';
interface PerformanceViewProps { }
//import ShouldRender from '../../components/basic/ShouldRender';
//import DateTimeRangePicker from '../basic/DateTimeRangePicker';
//import moment from 'moment';

//const endDate: $TSFixMe = moment();
//const startDate: $TSFixMe = moment().subtract(30, 'd');
export class PerformanceView extends Component<PerformanceViewProps>{
    public static displayName = '';
    public static propTypes = {};
    handleKeyBoard: $TSFixMe;
    /*  constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            probeValue: { value: '', label: 'All Probes' },
            startDate: startDate,
            endDate: endDate,
            page: 1,
        };
    }

    prevClicked = (monitorId, skip, limit) => {
        const { currentProject, getMonitorLogs }: $TSFixMe = this.props;
        const incidentId: $TSFixMe = this.props.incidentId ? this.props.incidentId : null;
        const start: $TSFixMe = incidentId ? '' : this.state.startDate.clone().utc();
        const end: $TSFixMe = incidentId ? '' : this.state.endDate.clone().utc();
        getMonitorLogs(
            currentProject._id,
            monitorId,
            skip ? parseInt(skip, 10) - 10 : 10,
            limit,
            start,
            end,
            this.state.probeValue.value,
            incidentId,
            this.props.monitorType
        );
        this.setState({ page: this.state.page - 1 });
    };

    nextClicked = (monitorId, skip, limit) => {
        const { currentProject, getMonitorLogs }: $TSFixMe = this.props;
        const incidentId: $TSFixMe = this.props.incidentId ? this.props.incidentId : null;
        const start: $TSFixMe = incidentId ? '' : this.state.startDate.clone().utc();
        const end: $TSFixMe = incidentId ? '' : this.state.endDate.clone().utc();
        getMonitorLogs(
            currentProject._id,
            monitorId,
            skip ? parseInt(skip, 10) + 10 : 10,
            limit,
            start,
            end,
            this.state.probeValue.value,
            incidentId,
            this.props.monitorType
        );
        this.setState({ page: this.state.page + 1 });
    };
    handleStartDateTimeChange = val => {
        const startDate: $TSFixMe = moment(val);
        this.handleDateChange(startDate, this.state.endDate);
    };
    handleEndDateTimeChange = val => {
        const endDate: $TSFixMe = moment(val);
        this.handleDateChange(this.state.startDate, endDate);
    };

    handleDateChange = (startDate, endDate) => {
        const { currentProject, getMonitorLogs, monitorId }: $TSFixMe = this.props;
        this.setState({
            startDate,
            endDate,
        });
        getMonitorLogs(
            currentProject._id,
            monitorId,
            0,
            10,
            startDate.clone().utc(),
            endDate.clone().utc(),
            this.state.probeValue.value,
            null,
            this.props.monitorType
        );
    };

    handleTimeChange = (startDate, endDate) => {
        const { currentProject, getMonitorLogs, monitorId }: $TSFixMe = this.props;
        getMonitorLogs(
            currentProject._id,
            monitorId,
            0,
            10,
            startDate.clone().utc(),
            endDate.clone().utc(),
            this.state.probeValue.value,
            null,
            this.props.monitorType
        );
    };

    handleProbeChange = data => {
        this.setState({ probeValue: data });
        const { currentProject, getMonitorLogs, monitorId }: $TSFixMe = this.props;
        getMonitorLogs(
            currentProject._id,
            monitorId,
            0,
            10,
            this.state.startDate.clone().utc(),
            this.state.endDate.clone().utc(),
            data.value,
            null,
            this.props.monitorType
        );
    };*/

    override render() {
        /* const probeOptions: $TSFixMe =
            this.props.probes && this.props.probes.length > 0
                ? this.props.probes.map(p => {
                      return { value: p._id, label: p.probeName };
                  })
                : [];
        probeOptions.unshift({ value: '', label: 'All Probes' });*/
        return (
            <div
                className="Box-root Card-shadow--medium"

                tabIndex="0"
                onKeyDown={this.handleKeyBoard}
            >
                <div className="db-Trends-header Box-background--white Box-divider--surface-bottom-1">
                    <div
                        className="db-Trends-controls"
                        style={{ justifyContent: 'space-evenly' }}
                    >
                        <div
                            className="bs-Fieldset-row"
                            style={{ padding: '1px' }}
                        >
                            <label
                                className="bs-Fieldset-label"
                                style={{ flex: '1' }}
                            >
                                Transaction Type
                            </label>
                            <div className="bs-Fieldset-fields">
                                <Select

                                    name="transaction_type"
                                    value={{ value: '', label: 'All' }}
                                    placeholder="Web"
                                    className="db-select-in"
                                    id="transaction_type"
                                    isDisabled={false}
                                    style={{ height: '28px' }}
                                    options={[
                                        {
                                            value: 'a',
                                            label: 'hello',
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                        <div
                            className="bs-Fieldset-row"
                            style={{ padding: '1px' }}
                        >
                            <label
                                className="bs-Fieldset-label"
                                style={{ flex: '1' }}
                            >
                                Compare With
                            </label>
                            <div className="bs-Fieldset-fields">
                                <Select

                                    name="compare_with"
                                    value={{ value: '', label: 'All' }}
                                    placeholder="All"
                                    className="db-select-in"
                                    id="compare_with"
                                    isDisabled={false}
                                    style={{ height: '28px' }}
                                    options={[
                                        {
                                            value: 'a',
                                            label: 'hello',
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                        <div
                            className="bs-Fieldset-row"
                            style={{ padding: '1px' }}
                        >
                            <label
                                className="bs-Fieldset-label"
                                style={{ flex: '1' }}
                            >
                                Instances
                            </label>
                            <div className="bs-Fieldset-fields">
                                <Select

                                    name="instances"
                                    value={{ value: '', label: 'All' }}
                                    placeholder="All"
                                    className="db-select-in"
                                    id="instances"
                                    isDisabled={false}
                                    style={{ height: '28px' }}
                                    options={[
                                        {
                                            value: 'a',
                                            label: 'hello',
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


PerformanceView.displayName = 'PerformanceView';


const mapDispatchToProps: Function = (dispatch: Dispatch) => bindActionCreators({ getMonitorLogs }, dispatch);

function mapStateToProps(state: RootState, props: $TSFixMe) {
    const monitorId: $TSFixMe = props.monitorId ? props.monitorId : null;
    return {
        monitorLogs: monitorId ? state.monitor.monitorLogs[monitorId] : {},
        probes: state.probe.probes.data,
        currentProject: state.project.currentProject,
    };
}


PerformanceView.contextTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceView);
