import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
const {width, height} = Dimensions.get('window');
import Realm from 'realm';
import {useNavigation} from '@react-navigation/native';
import Pdf from 'react-native-pdf';
import {AppImages} from '../../../constants/images';
import {ScrollView} from 'react-native-virtualized-view';
import RNPrint from 'react-native-print';
import Share from 'react-native-share';
const PdfFileSchema = {
  name: 'PdfFile',
  properties: {
    id: 'string',
    name: 'string',
    uri: 'string',
    date: 'date',
  },
  primaryKey: 'id',
};

const realm = new Realm({schema: [PdfFileSchema]});
const PdfData = () => {
  const navigation = useNavigation();
  const [storedData, setStoredData] = useState([]);
  const [selectedFileUri, setSelectedFileUri] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [zoomLevel, setZoomLevel] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  //   const zoom = useRef(1);

  const pageRef = useRef(currentPage);

  useEffect(() => {
    const pdfFiles = realm.objects('PdfFile');
    console.log('pdfFiles', pdfFiles);
    setStoredData([...pdfFiles]);
  }, []);

  const handleFilePress = uri => {
    setSelectedFileUri(uri);
    setIsModalVisible(true);
  };
  console.log(currentPage);
  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedFileUri(null);
    setZoomLevel(1);
    // zoom.current = 1;
  };

  const deleteData = id => {
    realm.write(() => {
      const toDelete = realm.objects('PdfFile').filtered('id==$0', id);
      realm.delete(toDelete);
    });
    setStoredData([...realm.objects('PdfFile')]);
  };

  const zoomIn = useCallback(() => {
    setZoomLevel(prevZoomLevel => Math.min(prevZoomLevel + 0.5, 3));
  }, []);

  const zoomOut = useCallback(() => {
    setZoomLevel(prevZoomLevel => Math.max(prevZoomLevel - 0.5, 1));
  }, []);

  const handlePage = useCallback((page, numberOfPages) => {
    setCurrentPage(prevPage => {
      if (prevPage !== page) {
        console.log(page);
        return page;
      }
      return prevPage;
    });
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {storedData.length > 0 ? (
          storedData.map((file, index) => (
            <View
              key={index.toString()}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.fileBox}
                onPress={() =>
                  navigation.navigate('Component', {
                    file: file.uri,
                    closeModal: closeModal,
                  })
                }>
                <Text style={{color: 'black'}}>
                  {file.name ? file.name : 'Untitled PDF'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteBox}
                onPress={() => deleteData(file.id)}>
                <Image
                  style={{width: width * 0.1}}
                  resizeMode="center"
                  source={AppImages.del}
                />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View
            style={{
              marginTop: 300,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: '600', color: 'black'}}>
              List empty
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default PdfData;

const styles = StyleSheet.create({
  fileBox: {
    flexDirection: 'row',
    width: width * 0.8,
    height: width * 0.13,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 15,
    marginBottom: 10,
  },
  deleteBox: {
    flexDirection: 'row',
    width: width * 0.15,
    height: width * 0.13,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    elevation: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 10,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
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
    backgroundColor: 'black',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: 10,
    // backgroundColor: 'green',
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
    // padding: 5,
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
});
