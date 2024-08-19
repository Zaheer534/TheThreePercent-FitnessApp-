import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Pdf from 'react-native-pdf';
import Share from 'react-native-share';
import {useRoute} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const PdfComponent = () => {
  const routes = useRoute();
  const selectedFileUri = routes.params.file;
  const closeModal = routes.params.closeModal;
  console.log(selectedFileUri);

  const [zoomLevel, setZoomLevel] = useState(1); // Initialize to 1
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const zoomIn = useCallback(() => {
    setZoomLevel(prevZoomLevel => Math.min(prevZoomLevel + 0.5, 3));
  }, []);

  const zoomOut = useCallback(() => {
    setZoomLevel(prevZoomLevel => Math.max(prevZoomLevel - 0.5, 1));
  }, []);

  const handlePage = useCallback((page, numberOfPages) => {
    setCurrentPage(page);
    console.log(page);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Pdf
        source={{uri: selectedFileUri, cache: true}}
        scale={
          typeof zoomLevel === 'number' && !isNaN(zoomLevel) ? zoomLevel : 1
        }
        enablePaging={true}
        spacing={10}
        enableRTL={true}
        trustAllCerts={false}
        enableAntialiasing={true}
        onLoadComplete={numberOfPages => {
          console.log(numberOfPages);
          setTotalPages(numberOfPages);
        }}
        onPageChanged={handlePage}
        onError={error => {
          console.error('Error loading PDF:', error);
        }}
        style={styles.pdf}
      />

      <View style={styles.controls}>
        <View style={styles.zoomBox}>
          <TouchableOpacity style={styles.zoomButton} onPress={zoomOut}>
            <Text style={styles.zoomButtonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.zoomButton} onPress={zoomIn}>
            <Text style={styles.zoomButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: 'black'}}>
          Page: {currentPage}/{totalPages}
        </Text>
        <TouchableOpacity
          style={styles.printButton}
          onPress={() => {
            const options = {
              url: selectedFileUri,
            };
            Share.open(options);
          }}>
          <Text style={styles.printButtonText}>Share</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.closeButton}
          onPress={() => closeModal()}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default PdfComponent;

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
  printButton: {
    width: width * 0.2,
    height: width * 0.1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginVertical: 10,
    backgroundColor: 'grey',
    borderRadius: 5,
  },
  printButtonText: {
    color: 'white',
    fontWeight: 'bold',
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
});
