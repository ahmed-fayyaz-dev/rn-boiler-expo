import React from "react";
import {
    Modal,
    View,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
} from "react-native";
import { bRs } from "src/styles";

export const ModalView = ({ visible, onDismiss, ...props }) => {
    return (
        <>
            {/* <View> */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={onDismiss}
            >
                <TouchableOpacity
                    style={styles.container}
                    activeOpacity={1}
                    onPressOut={onDismiss}
                >
                    <ScrollView
                        directionalLockEnabled={true}
                        contentContainerStyle={styles.scrollModal}
                    >
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContainer}>
                                {props.children}
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                </TouchableOpacity>
            </Modal>
            {/* </View> */}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContainer: {
        // height: Dimensions.get("window").height * 0.7,
        // width: Dimensions.get("window").width * 0.85,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: bRs,
    },
    scrollModal: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center",
    },
});
