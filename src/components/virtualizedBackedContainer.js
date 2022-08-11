import React from "react";
import { FlatList, RefreshControl } from "react-native";

export default function VirtualizedView(props) {
    const { style, contentContainerStyle } = props;
    return (
        <FlatList
            data={[]}
            refreshControl={
                props.refresh && (
                    <RefreshControl
                        refreshing={props.refreshing}
                        onRefresh={props.onRefresh}
                    />
                )
            }
            key={"VirtualizedView" + Math.random()}
            ListEmptyComponent={null}
            horizontal={props.horizontal}
            keyExtractor={() => "dummy"}
            renderItem={null}
            contentContainerStyle={[{ flexGrow: 1 }, contentContainerStyle]}
            ListHeaderComponent={() =>
                // <React.Fragment>{
                props.children
                // }</React.Fragment>
            }
            ListHeaderComponentStyle={style}
        />
    );
}
