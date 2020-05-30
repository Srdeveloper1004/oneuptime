import * as types from '../constants/security';
import { postApi, getApi, deleteApi } from '../api';

// Add Container Security
export const addContainerSecurityRequest = () => ({
    type: types.ADD_CONTAINER_SECURITY_REQUEST,
});

export const addContainerSecuritySuccess = payload => ({
    type: types.ADD_CONTAINER_SECURITY_SUCCESS,
    payload,
});

export const addContainerSecurityFailure = error => ({
    type: types.ADD_CONTAINER_SECURITY_FAILURE,
    payload: error,
});

export const addContainerSecurity = ({
    projectId,
    componentId,
    data,
}) => async dispatch => {
    dispatch(addContainerSecurityRequest());

    try {
        const response = await postApi(
            `security/${projectId}/${componentId}/container`,
            data
        );
        dispatch(addContainerSecuritySuccess(response.data));
    } catch (error) {
        const errorMsg =
            error.response && error.response.data
                ? error.response.data
                : error.data
                ? error.data
                : error.message
                ? error.message
                : 'Network Error';
        dispatch(addContainerSecurityFailure(errorMsg));
    }
};

// Get a Container Security
export const getContainerSecurityRequest = () => ({
    type: types.GET_CONTAINER_SECURITY_REQUEST,
});

export const getContainerSecuritySuccess = payload => ({
    type: types.GET_CONTAINER_SECURITY_SUCCESS,
    payload,
});

export const getContainerSecurityFailure = error => ({
    type: types.GET_CONTAINER_SECURITY_FAILURE,
    payload: error,
});

export const getContainerSecurity = ({
    projectId,
    componentId,
    containerSecurityId,
}) => async dispatch => {
    dispatch(getContainerSecurityRequest());

    try {
        const response = await getApi(
            `security/${projectId}/${componentId}/container/${containerSecurityId}`
        );
        dispatch(getContainerSecuritySuccess(response.data));
    } catch (error) {
        const errorMsg =
            error.response && error.response.data
                ? error.response.data
                : error.data
                ? error.data
                : error.message
                ? error.message
                : 'Network Error';
        dispatch(getContainerSecurityFailure(errorMsg));
    }
};

// Get all Container Security
export const getContainerSecuritiesRequest = () => ({
    type: types.GET_CONTAINER_SECURITIES_REQUEST,
});

export const getContainerSecuritiesSuccess = payload => ({
    type: types.GET_CONTAINER_SECURITIES_SUCCESS,
    payload,
});

export const getContainerSecuritiesFailure = error => ({
    type: types.GET_CONTAINER_SECURITIES_FAILURE,
    payload: error,
});

export const getContainerSecurities = ({
    projectId,
    componentId,
}) => async dispatch => {
    dispatch(getContainerSecuritiesRequest());

    try {
        const response = await getApi(
            `security/${projectId}/${componentId}/container`
        );
        dispatch(getContainerSecuritiesSuccess(response.data));
    } catch (error) {
        const errorMsg =
            error.response && error.response.data
                ? error.response.data
                : error.data
                ? error.data
                : error.message
                ? error.message
                : 'Network Error';
        dispatch(getContainerSecuritiesFailure(errorMsg));
    }
};

// Delete Container Security
export const deleteContainerSecurityRequest = () => ({
    type: types.DELETE_CONTAINER_SECURITY_REQUEST,
});

export const deleteContainerSecuritySuccess = payload => ({
    type: types.DELETE_CONTAINER_SECURITY_SUCCESS,
    payload,
});

export const deleteContainerSecurityFailure = error => ({
    type: types.DELETE_CONTAINER_SECURITY_FAILURE,
    payload: error,
});

export const deleteContainerSecurity = ({
    projectId,
    componentId,
    containerSecurityId,
}) => async dispatch => {
    dispatch(deleteContainerSecurityRequest());

    try {
        const response = await deleteApi(
            `security/${projectId}/${componentId}/container/${containerSecurityId}`
        );
        dispatch(deleteContainerSecuritySuccess(response.data));

        // update the list of container securities
        dispatch(getContainerSecurities({ projectId, componentId }));
    } catch (error) {
        const errorMsg =
            error.response && error.response.data
                ? error.response.data
                : error.data
                ? error.data
                : error.message
                ? error.message
                : 'Network Error';
        dispatch(deleteContainerSecurityFailure(errorMsg));
    }
};

// Add Application Security
export const addApplicationSecurityRequest = () => ({
    type: types.ADD_APPLICATION_SECURITY_REQUEST,
});

export const addApplicationSecuritySuccess = payload => ({
    type: types.ADD_APPLICATION_SECURITY_SUCCESS,
    payload,
});

export const addApplicationSecurityFailure = error => ({
    type: types.ADD_APPLICATION_SECURITY_FAILURE,
    payload: error,
});

export const addApplicationSecurity = ({
    projectId,
    componentId,
    data,
}) => async dispatch => {
    dispatch(addApplicationSecurityRequest());

    try {
        const response = await postApi(
            `security/${projectId}/${componentId}/application`,
            data
        );
        dispatch(addApplicationSecuritySuccess(response.data));
    } catch (error) {
        const errorMsg =
            error.response && error.response.data
                ? error.response.data
                : error.data
                ? error.data
                : error.message
                ? error.message
                : 'Network Error';
        dispatch(addApplicationSecurityFailure(errorMsg));
    }
};

// Get an Application Security
export const getApplicationSecurityRequest = () => ({
    type: types.GET_APPLICATION_SECURITY_REQUEST,
});

export const getApplicationSecuritySuccess = payload => ({
    type: types.GET_APPLICATION_SECURITY_SUCCESS,
    payload,
});

export const getApplicationSecurityFailure = error => ({
    type: types.GET_APPLICATION_SECURITY_FAILURE,
    payload: error,
});

export const getApplicationSecurity = ({
    projectId,
    componentId,
    applicationSecurityId,
}) => async dispatch => {
    dispatch(getApplicationSecurityRequest());

    try {
        const response = await getApi(
            `security/${projectId}/${componentId}/application/${applicationSecurityId}`
        );
        dispatch(getApplicationSecuritySuccess(response.data));
    } catch (error) {
        const errorMsg =
            error.response && error.response.data
                ? error.response.data
                : error.data
                ? error.data
                : error.message
                ? error.message
                : 'Network Error';
        dispatch(getApplicationSecurityFailure(errorMsg));
    }
};

// Get all Application Security
export const getApplicationSecuritiesRequest = () => ({
    type: types.GET_APPLICATION_SECURITIES_REQUEST,
});

export const getApplicationSecuritiesSuccess = payload => ({
    type: types.GET_APPLICATION_SECURITIES_SUCCESS,
    payload,
});

export const getApplicationSecuritiesFailure = error => ({
    type: types.GET_APPLICATION_SECURITIES_FAILURE,
    payload: error,
});

export const getApplicationSecurities = ({
    projectId,
    componentId,
}) => async dispatch => {
    dispatch(getApplicationSecuritiesRequest());

    try {
        const response = await getApi(
            `security/${projectId}/${componentId}/application`
        );
        dispatch(getApplicationSecuritiesSuccess(response.data));
    } catch (error) {
        const errorMsg =
            error.response && error.response.data
                ? error.response.data
                : error.data
                ? error.data
                : error.message
                ? error.message
                : 'Network Error';
        dispatch(getApplicationSecuritiesFailure(errorMsg));
    }
};

// Delete Application Security
export const deleteApplicationSecurityRequest = () => ({
    type: types.DELETE_APPLICATION_SECURITY_REQUEST,
});

export const deleteApplicationSecuritySuccess = payload => ({
    type: types.DELETE_APPLICATION_SECURITY_SUCCESS,
    payload,
});

export const deleteApplicationSecurityFailure = error => ({
    type: types.DELETE_APPLICATION_SECURITY_FAILURE,
    payload: error,
});

export const deleteApplicationSecurity = ({
    projectId,
    componentId,
    applicationSecurityId,
}) => async dispatch => {
    dispatch(deleteApplicationSecurityRequest());

    try {
        const response = await deleteApi(
            `security/${projectId}/${componentId}/application/${applicationSecurityId}`
        );
        dispatch(deleteApplicationSecuritySuccess(response.data));

        // update the list of application securities
        dispatch(getApplicationSecurities({ projectId, componentId }));
    } catch (error) {
        const errorMsg =
            error.response && error.response.data
                ? error.response.data
                : error.data
                ? error.data
                : error.message
                ? error.message
                : 'Network Error';
        dispatch(deleteApplicationSecurityFailure(errorMsg));
    }
};
