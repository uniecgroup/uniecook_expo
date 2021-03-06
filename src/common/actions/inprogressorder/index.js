import Types from '../types'
import DataStoreNoCache from '../../expand/dao/DataStoreNoCache'

export function onRefreshInProgressOrder(storeName, url) {
    return dispatch => {
        dispatch({ type: Types.INPROGRESSORDER_REFRESH, storeName: storeName });
        let dataStore = new DataStoreNoCache();

        let requestData = {
            delivery_date_start: '',
            cooking_status: '1'
        };

        dataStore.fetchDataPost(url, requestData)    //异步action与数据流
            .then(data => {
                handleInProgressOrderData(dispatch, storeName, data)
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: Types.INPROGRESSORDER_REFRESH_FAIL,
                    storeName,
                    error
                });
            })
    }
}

function handleInProgressOrderData(dispatch, storeName, data) {
    let fixItems = [];
    if (data && data.orders) {
        fixItems = data.orders;
    }

    dispatch({
        type: Types.INPROGRESSORDER_REFRESH_SUCCESS,
        items: fixItems,
        storeName,
    })
}