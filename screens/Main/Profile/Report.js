import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Platform,
  Image,
  Alert,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import Pdf from 'react-native-pdf';
import Realm from 'realm';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {ScrollView} from 'react-native-virtualized-view';
import {useNavigation} from '@react-navigation/native';
import {AppImages} from '../../../constants/images';

const {width, height} = Dimensions.get('window');

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

const logStoredPdfFiles = () => {
  const pdfFiles = realm.objects('PdfFile');
  pdfFiles.forEach(file => {
    console.log(
      `ID: ${file.id}, Name: ${file.name}, URI: ${file.uri}, Date: ${file.date}`,
      'File Stored in Realm',
    );
  });
};

const Report = () => {
  const navigation = useNavigation();
  const [fileResponse, setFileResponse] = useState([]);
  const [selectedFileUri, setSelectedFileUri] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [storedData, setStoredData] = useState([]);
  const [profileToDelete, setProfileToDelete] = useState('');
  useEffect(() => {
    const pdfFiles = realm.objects('PdfFile');
    setStoredData([...pdfFiles]);
  }, []);
  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        copyTo: 'cachesDirectory',
        allowMultiSelection: true,
      });
      setFileResponse(response);
      realm.write(() => {
        response.forEach(file => {
          realm.create('PdfFile', {
            id: uuidv4(),
            name: file.name,
            uri: file.fileCopyUri,
            date: new Date(),
          });
        });
        const newPdfFile = realm.objects('PdfFile');
        setStoredData([...newPdfFile]);
        logStoredPdfFiles();
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled document picker');
      } else {
        console.warn(err);
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.uploadBox}
        onPress={() => {
          handleDocumentSelection();
        }}>
        <Text style={styles.uploadText}>Upload PDF</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.uploadBox}
        onPress={() => {
          navigation.navigate('Data');
        }}>
        <Text style={styles.uploadText}>View PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // gap: 10,
  },
  uploadBox: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: width * 0.7,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 111, 15, 1)',
    margin: 3,
    elevation: 10,
    borderRadius: 5,
  },
  uploadText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    padding: 10,
  },
});
