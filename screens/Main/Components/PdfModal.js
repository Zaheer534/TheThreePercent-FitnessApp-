import React, {memo} from 'react';
import {Modal, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Pdf from 'react-native-pdf';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const PdfModal = memo(({visible, onClose, uri, zoomLevel, zoomIn, zoomOut}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {uri && (
            <Pdf
              source={{uri, cache: true}}
              scale={zoomLevel}
              onLoadComplete={(numberOfPages, filePath) => {
                console.log(`Number of pages: ${numberOfPages}`);
              }}
              onPageChanged={(page, numberOfPages) => {
                console.log(`Current page: ${page}`);
              }}
              onError={error => {
                console.log(error);
              }}
              onPressLink={uri => {
                console.log(`Link pressed: ${uri}`);
              }}
              style={styles.pdf}
            />
          )}
          <View style={styles.controls}>
            <View style={styles.zoomBox}>
              <TouchableOpacity style={styles.zoomButton} onPress={zoomOut}>
                <Text style={styles.zoomButtonText}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.zoomButton} onPress={zoomIn}>
                <Text style={styles.zoomButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
});

export default PdfModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: width * 0.99,
    height: height * 0.99,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  closeButton: {
    width: width * 0.3,
    height: width * 0.1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginVertical: 10,
    backgroundColor: 'rgba(255, 111, 15, 1)',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  zoomBox: {
    flexDirection: 'row',
    gap: 10,
  },
  zoomButton: {
    width: width * 0.09,
    height: width * 0.09,
    backgroundColor: 'rgba(100, 100, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  zoomButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
