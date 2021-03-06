import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, RefreshControl, FlatList } from 'react-native';
import { connect } from 'react-redux';
import actions from '../common/actions/index';
import ReadyOrderItem from '../components/ReadyOrderItem';
import NavigationUtil from '../navigation/NavigationUtil';

const URL = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/getOrders';

const THEME_COLOR = 'red';

class ReadyOrderTab extends React.Component {
    constructor(props) {
        super(props);
        const { tabLabel } = this.props;
        const { tabTitle } = this.props;
        this.storeName = tabLabel;
        this.tabTitle = tabTitle;

        console.disableYellowBox = true;
    }

    componentDidMount() {
        this.loadData();

        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this.loadData();
        });
    }

    componentWillUnmount() {
        // Remove the event listener before removing the screen from the stack
        this.focusListener.remove();
    }
    
    loadData() {
        const { onRefreshReadyOrder } = this.props;
        const url = this.genFetchUrl(this.storeName);

        onRefreshReadyOrder(this.storeName, url);
    }

    _store() {
        const { readyorder } = this.props;
        let store = readyorder;    //动态获取state
        if (!store) {
            store = {
                items: [],
                isLoading: false,
            }
        }
        return store;
    }

    genFetchUrl(key) {
        //return URL + key + QUERY_STR;
        return URL;
    }

    renderItem(data) {
        const item = data.item;
        NavigationUtil.navigation = this.props.navigation;

        return <ReadyOrderItem
            item={item}
            onSelect={(callback) => {
                NavigationUtil.goPage({
                    tabLabel: 'readyorder',
                    item: item,
                    callback,
                }, 'ReadyOrderDetailsPage')
            }}
        />
    }

    render() {
        const { readyorder } = this.props;
        let store = this._store();

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>{this.tabTitle}</Text>
                </View>
                <FlatList
                    data={store.items}
                    renderItem={data => this.renderItem(data)}
                    keyExtractor={item => "" + item.order_id}
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            titleColor={THEME_COLOR}
                            colors={[THEME_COLOR]}
                            refreshing={store.isLoading}
                            onRefresh={() => this.loadData()}
                            tintColor={THEME_COLOR}
                        />
                    }
                />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    readyorder: state.readyorder
});

const mapDispatchToProps = dispatch => ({
    onRefreshReadyOrder: (storeName, url) => dispatch(actions.onRefreshReadyOrder(storeName, url)),
});

export default ReadyOrderListPage = connect(mapStateToProps, mapDispatchToProps)(ReadyOrderTab);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    title: {
        fontSize: 14,
    },
    heading: {
        paddingBottom: 15,
        marginTop: 10,
        marginLeft: 80,
    },
    headingText: {
        fontSize: 20,
        fontWeight: '200',
        color: 'white',
    },
});